// List.countdown.tsx
//--|🠋 Styles 🠋|--//
import './List.countdown.scss';
//--|🠉 Styles 🠉|--//
//--|🠋 Dependencies 🠋|--//
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react';
//--|🠉 Dependencies 🠉|--//
//--|🠋 Context 🠋|--//
import { useEmail } from '../../../../modules/scripts/context/EmailContext';
import { usePassword } from '../../../../modules/scripts/context/PasswordContext';
//--|🠉 Context 🠉|--//
//--|🠋 Components 🠋|--//
//--|🠉 Components 🠉|--//
//--|🠋 Functions 🠋|--//
import { viewBlock, viewText, axiosError } from '../../../../landing';
//--|🠉 Functions 🠉|--//
interface InfoProps {
  info: {
    resolution: string;
    orientation: 'desktop-landscape' | 'mobile-portrait' | 'tablet-square' | string;
    identification: 'index' | 'resume' | 'ticket' | 'university' | 'fitness' | 'landing' | string;
  };
}
type Counters = {
  //--|🠋 Define a type alias for the countdown state 🠋|--//
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const ListCountdown: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'footer';
  const pageName = info.identification;

  //--|🠋 Local Input States 🠋|--//
  let [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let refreshClock = scaleText();
    let refreshSquare = createSquare(); // Runs `createSquare()` and gets cleanup function
    let refreshTimer = loadTimer(setTime); // Runs `loadTimer()`

    return () => {
      refreshClock();
      refreshSquare(); // Cleans up the resize event listener
      refreshTimer?.(); // If `loadTimer` returns a cleanup function, call it
    };
  }, [pageName, blockName]);

  return (
    <ol className="list-countdown">
      <li className="clock-days">
        <span>{time.days}</span>
      </li>
      <li className="clock-hours">
        <span>{String(time.hours).padStart(2, '0')}</span>
      </li>
      <li className="clock-minutes">
        <span>{String(time.minutes).padStart(2, '0')}</span>
      </li>
      <li className="clock-seconds">
        <span>{String(time.seconds).padStart(2, '0')}</span>
      </li>
    </ol>
  );
};
export default ListCountdown;

const loadTimer = (setTime: React.Dispatch<React.SetStateAction<Counters>>) => {
  //--|🠋 Select the footer element with an ID containing "footer" 🠋|--//
  let footer = document.querySelector('footer[id*="footer"]');
  let interval: NodeJS.Timeout | null = null; //--|🠈 Store reference to setInterval, so we can clear it later 🠈|--//

  let updateCountdown = (targetDate: Date) => {
    /**
     * Function to calculate the remaining time and update state
     * @param targetDate - The future date when restriction expires
     **/
    var present = new Date(); //--|🠈 Get the current time 🠈|--//
    var interval = targetDate.getTime() - present.getTime(); //--|🠈 Difference between target and current time in milliseconds 🠈|--//

    if (interval <= 0) {
      //--|🠋 If the countdown has expired, set everything to 0 🠋|--//
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    //--|🠋 Calculate time left in days, hours, minutes, and seconds 🠋|--//
    setTime({
      days: Math.floor(interval / (1000 * 60 * 60 * 24)), //--|🠈 Convert milliseconds to days 🠈|--//
      hours: Math.floor((interval / (1000 * 60 * 60)) % 24), //--|🠈 Convert to hours, keeping remainder within 24h 🠈|--//
      minutes: Math.floor((interval / (1000 * 60)) % 60), //--|🠈 Convert to minutes, keeping remainder within 60min 🠈|--//
      seconds: Math.floor((interval / 1000) % 60), //--|🠈 Convert to seconds, keeping remainder within 60sec 🠈|--//
    });
  };

  let observeFooter = new MutationObserver((mutationsList) => {
    /**
     * MutationObserver listens for attribute changes on the footer (e.g., class changes)
     **/
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'class') {
        const currentClass = (mutation.target as HTMLElement).className; //--|🠈 Get the new class name 🠈|--//

        if (currentClass.includes('expanded')) {
          //--|🠉 Footer has been expanded, so fetch the countdown from the server 🠉|--//

          //--|🠋 Select the email input field inside a div that contains "inputs" in its class 🠋|--//
          const emailInput = document.querySelector<HTMLInputElement>('div[class*="inputs"] #email');

          if (!emailInput) {
            console.error('Email input not found.');
            return; //--|🠈 Stop execution if the email input field is missing 🠈|--//
          }

          //--|🠋 Make an API request to fetch the countdown expiration date 🠋|--//
          let route = 'blocked';
          let link = 'http://localhost:3000';
          axios
            .post(`${link}/users/${route}`, { email: emailInput.value })
            .then((response) => {
              const { data } = response.data; //--|🠈 Extract the relevant data 🠈|--//
              const targetDate = new Date(data.restrictionExpiresAt); //--|🠈 Convert to a Date object 🠈|--//

              //--|🠋 Immediately update countdown when data is received 🠋|--//
              updateCountdown(targetDate);

              //--|🠋 Clear any existing interval before setting a new one 🠋|--//
              if (interval) clearInterval(interval);

              //--|🠋 Start a new interval to update countdown every second 🠋|--//
              interval = setInterval(() => updateCountdown(targetDate), 1000);
            })
            .catch((error) => console.error('Error fetching countdown:', error));
        }
      }
    }
  });
  if (!footer) return; //--|🠈 Exit early if the footer is not found 🠈|--//
  observeFooter.observe(footer, { attributes: true }); //--|🠈 Start observing the footer for attribute changes (such as class changes) 🠈|--//

  /**
   * Cleanup function - Runs when component unmounts or dependencies change
   **/
  return () => {
    observeFooter.disconnect(); //--|🠈 Stop observing the footer 🠈|--//
    if (interval) clearInterval(interval); //--|🠈 Clear the countdown interval if it exists 🠈|--//
  };
};
const scaleText = () => {
  let updateText = () => {
    //--|🠋 Define an array containing the time units we need to scale text for 🠋|--//
    var timeUnits = ['days', 'hours', 'minutes', 'seconds'];

    //--|🠋 Loop through each time unit in the array 🠋|--//
    timeUnits.forEach((unit) => {
      //--|🠋 Select the corresponding list item (li) based on its class name (e.g., "days", "hours", etc.) 🠋|--//
      var wrapper = document.querySelector(`li[class*="${unit}"]`) as HTMLElement;

      //--|🠋 Select the <span> element inside the wrapper, which contains the numerical countdown value 🠋|--//
      var counter = wrapper?.querySelector('span') as HTMLSpanElement;

      //--|🠋 Ensure that both the wrapper and counter elements exist before proceeding 🠋|--//
      if (wrapper && counter) {
        /**
         * Set a scale factor:
         * - "days" will take the full width of its container.
         * - Other units (hours, minutes, seconds) will take only a portion (1.75 times smaller).
         *   This ensures they remain proportionate in the layout.
         */
        var scaleFactor = unit === 'days' ? 1 : 1.75;

        //--|🠋 Set the font size of the counter dynamically based on the wrapper's width 🠋|--//
        counter.style.fontSize = `${wrapper.offsetWidth / scaleFactor}px`;
      }
    });
  };

  //--|🠋 Run initially 🠋|--//
  updateText();

  //--|🠋 Add resize event listener 🠋|--//
  window.addEventListener('resize', updateText);

  //--|🠋 Cleanup function to remove event listener when unmounted 🠋|--//
  return () => {
    window.removeEventListener('resize', updateText);
  };
};
const createSquare = () => {
  let updateSquare = () => {
    let listItem = document.querySelectorAll('.list-countdown li')[0] as HTMLElement;
    if (listItem) {
      listItem.style.height = `${listItem.offsetWidth}px`;
    }
  };

  //--|🠋 Run initially 🠋|--//
  updateSquare();

  //--|🠋 Add resize event listener 🠋|--//
  window.addEventListener('resize', updateSquare);

  //--|🠋 Cleanup function to remove event listener when unmounted 🠋|--//
  return () => {
    window.removeEventListener('resize', updateSquare);
  };
};

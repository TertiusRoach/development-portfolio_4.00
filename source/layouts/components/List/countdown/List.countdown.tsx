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
const ListCountdown: React.FC<InfoProps> = ({ info }) => {
  const blockName = 'footer';
  const pageName = info.identification;

  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleCountdown = async (event: any) => {
    console.log(event);
  };

  useEffect(() => {
    // Select the footer element with an ID containing "footer"
    const footer = document.querySelector('footer[id*="footer"]');
    if (!footer) return; // Exit early if the footer is not found

    let interval: NodeJS.Timeout | null = null; // Store reference to setInterval, so we can clear it later

    /**
     * Function to calculate the remaining time and update state
     * @param targetDate - The future date when restriction expires
     */
    const updateCountdown = (targetDate: Date) => {
      const now = new Date(); // Get the current time
      const diff = targetDate.getTime() - now.getTime(); // Difference between target and current time in milliseconds

      if (diff <= 0) {
        // If the countdown has expired, set everything to 0
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time left in days, hours, minutes, and seconds
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)), // Convert milliseconds to days
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24), // Convert to hours, keeping remainder within 24h
        minutes: Math.floor((diff / (1000 * 60)) % 60), // Convert to minutes, keeping remainder within 60min
        seconds: Math.floor((diff / 1000) % 60), // Convert to seconds, keeping remainder within 60sec
      });
    };

    /**
     * MutationObserver listens for attribute changes on the footer (e.g., class changes)
     */
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          const currentClass = (mutation.target as HTMLElement).className; // Get the new class name

          if (currentClass.includes('expanded')) {
            // Footer has been expanded, so fetch the countdown from the server

            // Select the email input field inside a div that contains "inputs" in its class
            const emailInput = document.querySelector<HTMLInputElement>('div[class*="inputs"] #email');

            if (!emailInput) {
              console.error('Email input not found.');
              return; // Stop execution if the email input field is missing
            }

            // Make an API request to fetch the countdown expiration date
            axios
              .post('http://localhost:3000/users/countdown', { email: emailInput.value })
              .then((response) => {
                const { data } = response.data; // Extract the relevant data
                const targetDate = new Date(data.restrictionExpiresAt); // Convert to a Date object

                // Immediately update countdown when data is received
                updateCountdown(targetDate);

                // Clear any existing interval before setting a new one
                if (interval) clearInterval(interval);

                // Start a new interval to update countdown every second
                interval = setInterval(() => updateCountdown(targetDate), 1000);
              })
              .catch((error) => console.error('Error fetching countdown:', error));
          }
        }
      }
    });

    // Start observing the footer for attribute changes (such as class changes)
    observer.observe(footer, { attributes: true });

    /**
     * Cleanup function - Runs when component unmounts or dependencies change
     */
    return () => {
      observer.disconnect(); // Stop observing the footer
      if (interval) clearInterval(interval); // Clear the countdown interval if it exists
    };
  }, [pageName, blockName]);

  return (
    <ol className="list-countdown">
      <li className="calendar-days">
        {/* <span>7</span> */}
        <span>{time.days}</span>
        <span>Days</span>
      </li>
      <li className="clock-hours">
        {/* <span>23</span> */}
        <span>{String(time.hours).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-minutes">
        {/* <span>59</span> */}
        <span>{String(time.minutes).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-seconds">
        {/* <span>59</span> */}
        <span>{String(time.seconds).padStart(2, '0')}</span>
      </li>
    </ol>
  );
};
export default ListCountdown;

const loadTimer = () => {
  let footer = document.querySelector('footer[id*="footer"]');
  if (!footer) return;

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.attributeName === 'class') {
        const currentClass = (mutation.target as HTMLElement).className;
        if (currentClass.includes('expanded')) {
          let emailInput = document.querySelectorAll('div[class*="inputs"] #email')[0] as HTMLInputElement;

          console.log(emailInput.value);
          axios
            .post('http://localhost:3000/users/countdown', { email: emailInput.value })
            .then((response) => {
              const { view, data } = response.data;
              // const targetDate = response.data.restrictionExpiresAt;
              // startCountdown(targetDate);
              // return response.data;
              console.log(currentClass);
              console.log(data.restrictionExpiresAt);
            })
            .catch((error) => console.error('Error fetching countdown:', error));
        }
      }
    }
  });
  console.log(footer);
  observer.observe(footer, { attributes: true });
  /*
  useEffect(() => {
    // Function to observe footer changes
    const observeFooter = () => {
      const footer = document.querySelector('footer[id*="footer"]');

      if (!footer) return;

      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.attributeName === 'class') {
            const currentClass = (mutation.target as HTMLElement).className;
            if (currentClass.includes('expanded')) {
              // Fetch restrictionExpiresAt from the server
              axios
                .post(http://localhost:3000/users/countdown, { email: localStorage.getItem("email") })
                .then((response) => {
                  const targetDate = response.data.data.restrictionExpiresAt;
                  startCountdown(targetDate);
                })
                .catch((error) => console.error('Error fetching countdown:', error));
            }
          }
        }
      });

      observer.observe(footer, { attributes: true });
    };

    observeFooter();
  }, []);
  */
};

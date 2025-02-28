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

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const handleCountdown = async (event: any) => {
    console.log(event);
  };

  useEffect(() => {
    const footer = document.querySelector('footer[id*="footer"]');
    if (!footer) return;

    let targetDate: Date;
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
                targetDate = new Date(data.restrictionExpiresAt);

                const updateCountdown = () => {
                  const now = new Date();
                  // console.log('Current Time (ISO):', now.toISOString());
                  const diff = targetDate.getTime() - now.getTime();

                  if (diff <= 0) {
                    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    return;
                  }

                  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                  const minutes = Math.floor((diff / (1000 * 60)) % 60);
                  const seconds = Math.floor((diff / 1000) % 60);

                  setTimeLeft({ days, hours, minutes, seconds });
                };
                updateCountdown();

                const interval = setInterval(updateCountdown, 1000);
                return () => clearInterval(interval);
              })
              .catch((error) => console.error('Error fetching countdown:', error));
          }
        }
      }
    });
    console.log(footer);
    observer.observe(footer, { attributes: true });
  }, [pageName, blockName]);

  return (
    <ol className="list-countdown">
      <li className="calendar-days">
        {/* <span>7</span> */}
        <span>{timeLeft.days}</span>
        <span>Days</span>
      </li>
      <li className="clock-hours">
        {/* <span>23</span> */}
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-minutes">
        {/* <span>59</span> */}
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span>:</span>
      </li>
      <li className="clock-seconds">
        {/* <span>59</span> */}
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
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

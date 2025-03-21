export const scaleText = () => {
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

export const createSquare = () => {
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

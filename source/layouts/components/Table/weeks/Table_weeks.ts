//--|🠊 Table_weeks.ts 🠈|--//

export function loadWeekdays(pageName: string, blockName: string) {
  const thisDate: Date = new Date(); //--|🠈 Get the current date 🠈|--//
  const thisDay: string = thisDate.toISOString().split('T')[0]; //--|🠈 Get the current day in ISO format 🠈|--//
  const table = document.querySelector(
    `#${pageName}-${blockName} table[class*="weeks"]`
  ) as HTMLElement;

  //--|🠊 01. createWeeks 🠈|--//
  const createWeeks = (pageName: string, blockName: string, thisDay: string) => {
    table.innerHTML = ''; //--|🠈 Clear the HTML for the weekTable element 🠈|--//

    let year: number = Number(thisDay.split('-')[0]); //--|🠈 const year: number = 2000; 🠈|--//
    let countWeeks = (year: number): number => {
      /**
       * Returns the number of ISO-8601 weeks in a given year.
       * According to ISO-8601:
       * - Weeks start on Monday.
       * - Week 1 is the week containing the first Thursday of the year.
       * - A year can have either 52 or 53 weeks.
       *
       * @param year - The full year (e.g., 2025)
       * @returns The number of ISO weeks in the year (52 or 53)
       */
      //--|🠊 ISO week number (week starts on Monday) 🠈|--//
      //--|🠊 ISO week 1 is the week with the first Thursday of the year. 🠈|--//
      //--|🠊 So we check if Dec 28 is in week 53—if yes, the year has 53 weeks. 🠈|--//
      var dec28 = new Date(Date.UTC(year, 11, 28)); //--|🠈 Dec 28 is always in the last ISO week of the year 🠈|--//
      var startOfYear = new Date(Date.UTC(year, 0, 1));
      var startDay = startOfYear.getUTCDay();
      var startISO = startDay === 0 ? 7 : startDay;
      var daysBetween = Math.floor((dec28.getTime() - startOfYear.getTime()) / 86400000); //--|🠈 Calculate number of days between Jan 1 and Dec 28 🠈|--//
      var week = Math.floor((daysBetween + startISO - 1) / 7) + 2; //--|🠈 Calculate week number and add 2 for the overlapping days. 🠈|--//

      return week; //--|🠊 53 or 54 🠈|--//
    };

    for (let i = 1; i <= countWeeks(year); i++) {
      let tableBody = document.createElement('tbody'); //--|🠈 Create tbody element 🠈|--//
      let weekData = i.toString().padStart(2, '0');

      tableBody.className = 'table-body hidden';
      tableBody.dataset.week = weekData; //--|🠈 Assign a dataString for each week as data-week-"01" 🠈|--//
      table.appendChild(tableBody);

      for (let i = 1; i <= 7; i++) {
        let tableRow = document.createElement('tr');
        let tableData = document.createElement('td');
        tableData.className = 'weekday h1';

        let clockIn = document.createElement('td');
        clockIn.className = 'clock-in display-6';
        clockIn.textContent = '--:--';

        let clockOut = document.createElement('td');
        clockOut.className = 'clock-out display-6';
        clockOut.textContent = '~~:~~';

        //--|🠊 Determine day label and row class 🠈|--//
        switch (i) {
          case 1:
            tableData.textContent = 'Mon';
            tableRow.className = 'mon-row';
            //--| console.log('Monday'); |--//
            break;
          case 2:
            tableData.textContent = 'Tue';
            tableRow.className = 'tue-row';
            //--| console.log('Tuesday'); |--//
            break;
          case 3:
            tableData.textContent = 'Wed';
            tableRow.className = 'wed-row';
            //--| console.log('Wednesday'); |--//
            break;
          case 4:
            tableData.textContent = 'Thu';
            tableRow.className = 'thu-row';
            //--| console.log('Thursday'); |--//
            break;
          case 5:
            tableData.textContent = 'Fri';
            tableRow.className = 'fri-row';
            //--| console.log('Friday'); |--//
            break;
          case 6:
            tableData.textContent = 'Sat';
            tableRow.className = 'sat-row';
            //--| console.log('Saturday'); |--//
            break;
          case 7:
            tableData.textContent = 'Sun';
            tableRow.className = 'sun-row';
            //--| console.log('Sunday'); |--//
            break;
        }

        //--|🠊 Assemble and append row 🠈|--//
        tableRow.appendChild(tableData);
        tableRow.appendChild(clockIn);
        tableRow.appendChild(clockOut);
        tableBody.appendChild(tableRow);
      }
    }

    labelWeeks(pageName, blockName, thisDay);
  };

  //--|🠊 02. labelWeeks 🠈|--//
  const labelWeeks = (pageName: string, blockName: string, thisDay: string) => {
    let year: number = Number(thisDay.split('-')[0]); //--|🠈 const year: number = 2000; 🠈|--//
    let tableRows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(
      `#${pageName}-${blockName} tr`
    );

    let formatDate = (date: Date): string => {
      let YYYY = date.getFullYear();
      let MM = String(date.getMonth() + 1).padStart(2, '0');
      let DD = String(date.getDate()).padStart(2, '0');
      return `${YYYY}-${MM}-${DD}`;
    };
    let findStart = (year: number): Date => {
      let jan1 = new Date(year, 0, 1);
      let dayOfWeek = jan1.getDay(); // 0 (Sunday) - 6 (Saturday)
      let daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Calculate days to the first Monday
      let firstMonday: Date = new Date(year, 0, 1 - daysToMonday);

      return firstMonday;
    };
    let findEnd = (year: number): Date => {
      let dec31 = new Date(year, 11, 31);
      let dayOfWeek = dec31.getDay(); // 0 (Sunday) - 6 (Saturday)
      let daysToEndOfWeek = dayOfWeek === 0 ? 0 : 7 - dayOfWeek; // Calculate days to the end of the week (Sunday)
      let lastSunday: Date = new Date(year, 11, 31 + daysToEndOfWeek);

      return lastSunday;
    };

    for (let i = 0; i < tableRows.length; i++) {
      switch (i) {
        case 0:
          tableRows[i].id = formatDate(findStart(year));
          break;
        case tableRows.length - 1:
          tableRows[i].id = formatDate(findEnd(year));

          let presentDay = document.getElementById(`${thisDay}`) as HTMLTableRowElement;
          let container = document.querySelector(
            `#${pageName}-${blockName} .weekdays-container`
          ) as HTMLElement;

          let currentWeek = presentDay.parentElement as HTMLElement;
          let futureWeek = currentWeek.nextElementSibling as HTMLElement;
          let previousWeek = currentWeek.previousElementSibling as HTMLElement;

          container.dataset.view = currentWeek.dataset.week;
          futureWeek.id = 'future-week';
          currentWeek.id = 'current-week';
          previousWeek.id = 'previous-week';
          currentWeek.classList.add('visible');
          currentWeek.classList.remove('hidden');

          scaleWeeks(pageName, blockName);
          break;
        default:
          var start: Date = findStart(year);
          start.setDate(start.getDate() + i);
          tableRows[i].id = formatDate(start);
          break;
      }
    }
  };

  //--|🠊 03. scaleWeeks 🠈|--//
  const scaleWeeks = (pageName: string, blockName: string) => {
    let carousel = document.querySelector(
      `#${pageName}-${blockName} aside[class*="carousel"]`
    ) as HTMLElement;
    if (carousel) {
      let weekDays = carousel.querySelectorAll(
        `.weeks-table tbody tr td:nth-child(1)`
      ) as NodeListOf<HTMLElement>;
      let clockIn = carousel.querySelectorAll(
        `.weeks-table tbody tr td:nth-child(2)`
      ) as NodeListOf<HTMLElement>;
      let clockOut = carousel.querySelectorAll(
        `.weeks-table tbody tr td:nth-child(3)`
      ) as NodeListOf<HTMLElement>;
      let dataRows = carousel.querySelectorAll(
        `.weeks-table tbody tr td`
      ) as NodeListOf<HTMLElement>;
      let heightRows = carousel.offsetHeight / 7; //--|🠈 1 Week is equal to 7 Days 🠈|--//
      let heightColumns = (carousel.offsetWidth - 128) / 2; //--|🠈 3 Divided is equal to 3 Columns etc. 🠈|--//

      dataRows.forEach((row) => {
        row.style.height = `${heightRows}px`;
      });
      clockIn.forEach((column) => {
        column.style.width = `${heightColumns}px`;
      });
      clockOut.forEach((column) => {
        column.style.width = `${heightColumns}px`;
      });
      weekDays.forEach((column) => {
        column.style.width = `8rem`;
      });
    } else {
      console.warn(`//--|🠊 #${pageName}-${blockName} doesn't contain a Carousel 🠈|--//`);
      return;
    }
    adjustWeeks(pageName, blockName, '<y>');
  };

  //--|🠊 04. adjustWeeks 🠈|--//
  const adjustWeeks = (pageName: string, blockName: string, viewAxis: '<y>' | '<x>') => {
    let container = document.querySelector(
      `#${pageName}-${blockName} div[class*="container"]`
    ) as HTMLElement; //--|🠈 Select the container inside the carousel — assumed to have a class containing "container". 🠈|--//
    let firstWeek = container.querySelector(`tbody:nth-child(1)`) as HTMLElement;
    switch (viewAxis) {
      case '<y>':
        var adjust: number = Number(container.dataset.view) - 1;
        var scroll: number = firstWeek.offsetHeight * adjust;
        container.style.transform = `translateY(-${scroll}px)`; //--|🠈 Get the updated value by subtracting 16px for the <y> axis 🠈|--//
        break;
      case '<x>':
        /*
        console.log(pageName);
        console.log(blockName);
        console.log(viewAxis);
        */
        break;
    }
  };

  if (table) {
    createWeeks(pageName, blockName, thisDay);
  }
}

export default loadWeekdays;

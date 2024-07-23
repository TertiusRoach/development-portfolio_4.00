//--|🠋 utilities/getScroll.ts 🠋|--//
export default function getScroll(button: HTMLButtonElement, container: HTMLElement) {
  const setPixels = function (container: HTMLElement): { className: string; scrollAmount: number }[] {
    let children = Array.from(container.children) as HTMLElement[]; //--|🠈 Convert the container's children to an array of HTMLElement 🠈|--//
    let scrollAmounts: { className: string; scrollAmount: number }[] = []; //--|🠈 Initialize an array to store the class names and scroll amounts 🠈|--//
    let cumulativeHeight = 0; //--|🠈 Initialize cumulative height to 0 🠈|--//
    //--|🠋 Iterate over each child element 🠈|--//
    children.forEach((child) => {
      //--|🠋 Add the class name and cumulative height to the scrollAmounts array 🠈|--//
      scrollAmounts.push({
        className: child.className.split('-')[1], //--|🠈 Assuming className format includes the section name 🠈|--//
        scrollAmount: cumulativeHeight,
      });
      cumulativeHeight += child.offsetHeight; //--|🠈 Add the child's height to the cumulative height 🠈|--//
    });
    //--|🠋 Return the array of class names and scroll amounts 🠈|--//
    return scrollAmounts;
  };
  const scrollTag = container.tagName.toLowerCase() as String; //--|🠈 Get the tag name of the container in lowercase 🠈|--//
  const scrollLabel = button.className.split(' ')[0].split('-')[1] as String; //--|🠈 Extract the label name from the button's class name 🠈|--//
  const scrollPixels = setPixels(container).find((item) => item.className === scrollLabel); //--|🠈 Find the scroll amount for the section corresponding to the label name 🠈|--//

  //--|🠋 If scrollPixels is found, animate the scroll to the calculated amount 🠋|--//
  if (scrollPixels) {
    return {
      scrollTag: scrollTag as String,
      scrollTop: scrollPixels.scrollAmount as Number,
    };
  }
}

// console.log('Note Here');
// console.log(`${window.location.search}`);

const getPageId = () => {
  //   const pathArray = window.location.pathname.split('/');
  //   const HTMLpage = pathArray[pathArray.length - 1];
  //   console.log(HTMLpage);
  const queryString = window.location.href;
  const urlParams = new URLSearchParams(queryString);

  console.log(`${queryString}`);
  /*

  */

  // Get Window url via JavaScript with window

  // Split the string .split('.html');

  // pageId: string = 'index'

  return '';
};
getPageId();

// blockTag: string = '<header>' | '<main>' | '<footer>' | '<leftbar>' | '<rightbar>' | '<overlay>'
const getBlockTag = () => {
  return '';
};

// deviceType: string = 'desktop-landscape' | 'mobile-portrait'
const getDeviceType = () => {
  return '';
};

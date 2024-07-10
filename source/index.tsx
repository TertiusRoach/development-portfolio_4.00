import React from 'react';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';

// Import container components
import IndexMain from './layouts/containers/Main/IndexMain/IndexMain';
import IndexHeader from './layouts/containers/Header/IndexHeader/IndexHeader';
import IndexFooter from './layouts/containers/Footer/IndexFooter/IndexFooter';
import IndexOverlay from './layouts/containers/Overlay/IndexOverlay/IndexOverlay';
import IndexLeftbar from './layouts/containers/Leftbar/IndexLeftbar/IndexLeftbar';
import IndexRightbar from './layouts/containers/Rightbar/IndexRightbar/IndexRightbar';

// Import functions (assuming they return strings)
import { getResolution, getOrientation, getIdentification } from './scripts/index';

// Optional utility function for media query handling (consider using a library like react-responsive)

const DefaultBody = document.getElementById('index-body') as HTMLElement;

function Body() {
  // var getIdentification = 'index';
  return (
    <>
      <IndexHeader
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexMain
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexFooter
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexLeftbar
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexRightbar
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexOverlay
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
    </>
  );
}

if (DefaultBody) {
  const root = ReactDOM.createRoot(DefaultBody);
  root.render(<Body />);
} else {
  console.error("Element with id 'index-body' not found.");
}
// const useMediaQuery = (query: string): boolean => {
//   const [isMatch, setIsMatch] = React.useState(false);

//   React.useEffect(() => {
//     const handleResize = () => setIsMatch(window.matchMedia(query).matches);
//     window.addEventListener('resize', handleResize);

//     handleResize(); // Call on initial render

//     return () => window.removeEventListener('resize', handleResize);
//   }, [query]);

//   return isMatch;
// };

// const landscape: boolean = useMediaQuery('@media screen and (orientation: landscape)'); // Adjust breakpoint as needed
// const portrait: boolean = useMediaQuery('@media screen and (orientation: portrait)');

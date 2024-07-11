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
export const iconsHREF: Object = {
  close:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/times.svg',
  download:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/c90755c6fcf73d52bfd7e974d1f9946dbbddb8f4/source/assets/svg-files/font-awesome/testing-icons/solid/download.svg',
  home: 'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/home.svg',
  skills:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/lightbulb.svg',
  contact:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/phone.svg',
  projects:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/code.svg',
  career:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/font-awesome/testing-icons/solid/briefcase.svg',
  viewOverlay:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/star.svg',
  viewLeftbar:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-right.svg',
  viewRightbar:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/d91af6bec60526e66cfb2dccee7248cce0ad035b/source/assets/svg-files/font-awesome/testing-icons/solid/angle-left.svg',
  signatureStacked:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-stacked/primary-light.svg',
  signatureAdjacent:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/93c8ef9a857febca63debebfd68121c07755901a/source/assets/svg-files/tertius-roach/signature-adjacent/primary-light.svg',
  gitHub:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/github.svg',
  youTube:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/youtube.svg',
  linkedIn:
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/3346d7ae2ab29eceb730aff406290a41ac34f8ad/source/assets/svg-files/font-awesome/testing-icons/brands/linkedin.svg',
};

function Body() {
  return (
    <>
      <IndexHeader
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexMain
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexFooter
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexLeftbar
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />
      <IndexRightbar
        icons={iconsHREF}
        resolution={`${getResolution()}`}
        orientation={`${getOrientation()}`}
        identification={`${getIdentification()}`}
      />

      <IndexOverlay
        icons={iconsHREF}
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

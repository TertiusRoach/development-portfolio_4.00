// resume.tsx
import './styles/landing.scss';
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
// import LandingHeader from './layouts/containers/Header/LandingHeader/LandingHeader';
// import LandingFooter from './layouts/containers/Footer/LandingFooter/LandingFooter';
import LandingOverlay from './layouts/containers/Overlay/LandingOverlay/LandingOverlay';
// import LandingLeftbar from './layouts/containers/Leftbar/LandingLeftbar/LandingLeftbar';
// import LandingRightbar from './layouts/containers/Rightbar/LandingRightbar/LandingRightbar';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';

const pageName = 'landing';
const DefaultBody = document.getElementById(`${pageName}-body`) as HTMLElement;
function Body() {
  let information = {
    resolution: `${getResolution()}`,
    orientation: `${getOrientation()}`,
    identification: pageName,
  };

  return (
    <>
      {/* <ResumeHeader info={infoPROP} /> */}
      <LandingMain info={information} />
      {/* <ResumeFooter info={infoPROP} /> */}

      {/* <LandingOverlay info={information} /> */}
      {/* <ResumeLeftbar info={infoPROP} /> */}
      {/* <ResumeRightbar info={infoPROP} /> */}
    </>
  );
}

if (DefaultBody) {
  ReactDOM.createRoot(DefaultBody).render(<Body />);
} else {
  console.error(`Can't find with #${pageName}-body`);
}

/*
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('DB Connected!'))
  .catch((err) => console.error('DB Connection Error:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/

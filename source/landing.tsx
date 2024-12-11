// landing.tsx
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import './styles/LandingBody.scss';

import { getSVG } from './modules/utilities/getFile';
import getResolution from './modules/utilities/getResolution';
import getOrientation from './modules/utilities/getOrientation';

//--|🠋 Containers 🠋|--//
import VerifyMain from './layouts/containers/Main/VerifyMain/VerifyMain';
import LandingMain from './layouts/containers/Main/LandingMain/LandingMain';
//--|🠉 Containers 🠉|--//

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
      <LandingMain info={information} />
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

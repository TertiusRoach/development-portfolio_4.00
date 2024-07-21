import getIdentification from './getIdentification';
//--|🠋 getResolution.ts 🠋|--//
export default function getResolution(): String {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resolution = `${width}x${height}`;

  return resolution as String;
}

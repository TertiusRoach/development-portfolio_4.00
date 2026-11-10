//--|🠊 Division_placeholder.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Division.placeholder';
import { abbrShade, abbrColor } from '../../components'; //--|🠊 AI Code: Review Please 2026-11-09 13:41 🠈|--\\

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  return `${classShade}_${classColor}`;
}

export default createClass;

//--|🠊 Division_placeholder.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { TheseProps } from './Division.placeholder';
import { abbrShade, abbrColor, abbrView, abbrClarity } from '../../components';

//--|🠋 Generate Classes 🠋|--\\
function createClass(style: TheseProps['style']): string {
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  const classView = abbrView(style.view);
  const classClarity = abbrClarity(style.clarity);
  return `${classView}_${classShade}_${classColor}_${classClarity}`;
}

export default createClass;

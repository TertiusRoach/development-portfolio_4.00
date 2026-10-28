//--|🠊 TestingDivision.tsx 🠈|--\\
import React, { useEffect } from 'react';

//--|🠋 Styles 🠋|--\\
import './PlaceholderDivision.scss';

//--|🠋 Functions 🠋|--\\
import { stripBrackets } from '../../../../../../../scripts';

//--|🠋 Components 🠋|--\\
import DivisionFullscreen from '../../../../../../components/Division/fullscreen/Division.fullscreen';
import DivisionPlaceholder from '../../../../../../components/Division/placeholder/Division.placeholder';

interface InfoProps {
  info: {
    blockName: string;
    labelName: string;
    pageName: string;
  };
}

function PlaceholderDivision({ info }: InfoProps) {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'default';
  const pageName = info.pageName as 'components';

  return (
    <aside className="placeholder-division">
      <section className={`${blockName}-foreground`}>
        <DivisionFullscreen
          //--|🠊 <div class="placeholders-main_fullscreen-default"/> 🠈|--\\
          cases={{
            axis: '[y]',
            show: 1 as number,
            call: DivisionPreview as React.ComponentType<InfoProps>,
          }}
          info={{
            labelName: 'preview',
            blockName: info.blockName as '<main>',
            pageName: info.pageName as '[components]',
          }}
          onWheel={(event: React.WheelEvent<HTMLDivElement>): void => {
            /*
            if (event.deltaY < 0) {
              scrollSide(event.currentTarget as HTMLDivElement, 'view-prev');
            } else if (event.deltaY > 0) {
              scrollSide(event.currentTarget as HTMLDivElement, 'view-next');
            }
            */
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
}

const DivisionPreview: React.FC<InfoProps> = ({ info }) => {
  return (
    <>
      <DivisionPlaceholder
        info={{
          labelName: 'top-view',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
        style={{
          view: '-top-',
          shade: '~dark~',
          color: '(mono)',
        }}
      />
      <DivisionPlaceholder
        info={{
          labelName: 'bot-view',
          pageName: info.pageName,
          blockName: info.blockName,
        }}
        style={{
          view: '-bottom-',
          shade: '~dark~',
          color: '(mono)',
        }}
      />
    </>
  );
};
export default PlaceholderDivision;

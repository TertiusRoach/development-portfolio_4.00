//--|🠊 OtpFieldset.tsx 🠈|--\\
import React from 'react';

//--|🠋 Components 🠋|--\\
import FieldsetOtp from '../../../../../../components/Fieldset/otp/Fieldset.otp';
import ButtonDefault from '../../../../../../components/Button/default/Button.default';

//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../../../../scripts';
import startLength from './OtpFunctions';

interface InfoProps {
  info: {
    pageName: string;
    blockName: string;
    labelName: string;
  };
}
const OtpFieldset: React.FC<InfoProps> = ({ info }) => {
  const blockName = info.blockName as 'main';
  const labelName = info.labelName as 'otp';
  const pageName = info.pageName as 'components';

  let digitLength: number = startLength(); //--|🠈 AI Code: Review Please 2026-10-29 17:22 · Same length on both sides 🠈|--\\
  let copyImage: string = loadAsset('-svg-', '/archive-images/font-awesome/6.5.1/solid/copy');
  return (
    <aside className="otp-fieldset">
      <section className={`${blockName}-foreground`}>
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(mono)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(red)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(green)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(blue)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(purple)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(orange)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(pink)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(yellow)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(brown)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~dark~',
            color: '(turquoise)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(mono)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(red)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(green)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(blue)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(purple)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(orange)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(pink)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(yellow)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(brown)',
          }}
          cases={{
            length: digitLength,
          }}
        />
        <FieldsetOtp
          info={{
            pageName: pageName,
            blockName: blockName,
            labelName: labelName,
          }}
          style={{
            shade: '~light~',
            color: '(turquoise)',
          }}
          cases={{
            length: digitLength,
          }}
        />

        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-mon_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-red_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-gre_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-blu_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pur_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-ora_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-pin_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-yel_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-bro_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'dar-tur_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~dark~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        {/*--|🠊 AI Code: Review Please 2026-10-29 17:22 🠈|--*/}
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-mon_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-red_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-gre_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-blu_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pur_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-ora_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-pin_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-yel_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-bro_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
        <ButtonDefault
          info={{
            pageName: pageName as 'components',
            blockName: blockName as 'main',
            labelName: 'lig-tur_otp',
          }}
          style={{
            size: '<h5>',
            view: '-icon-',
            shade: '~light~',
            color: '(mono)',
            image: copyImage,
          }}
        />
      </section>
      <figure className={`${blockName}-midground`}></figure>
      <div className={`${blockName}-background`}></div>
    </aside>
  );
};
export default OtpFieldset;

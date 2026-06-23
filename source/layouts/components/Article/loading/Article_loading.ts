//--|🠊 Article_loading.ts 🠈|--\\

function loadImage(shade: '~dark~' | '~light~', apps: '{signature}' | '{tralogfin}'): string {
  const gifLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/4.4/source/assets/gif-files';

  const gifPath: Record<'{signature}' | '{tralogfin}', [string, string]> = {
    '{signature}': [
      `${gifLink}/signature/1280x720%2C%2015fps/signature-dark.gif`,
      `${gifLink}/signature/1280x720%2C%2015fps/signature-light.gif`,
    ],
    '{tralogfin}': [
      `${gifLink}/trinity-apps/3840x2160%2C 25fps/3840x2160%2C 25fps_black.gif`,
      `${gifLink}/trinity-apps/3840x2160%2C 25fps/3840x2160%2C 25fps_white.gif`,
    ],
  };

  const shadeImage: Record<'~dark~' | '~light~', 0 | 1> = {
    '~dark~': 0,
    '~light~': 1,
  };

  return gifPath[apps][shadeImage[shade]] as string;
}
export default loadImage;

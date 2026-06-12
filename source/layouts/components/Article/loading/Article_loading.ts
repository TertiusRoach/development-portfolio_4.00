//--|🠊 Article_loading.ts 🠈|--\\

function loadImage(shade: '~dark~' | '~light~', apps: '{signature}' | '{tralogfin}'): string {
  const gifLink: string =
    'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/gif-files';

  const gifPath: Record<'{signature}' | '{tralogfin}', [string, string]> = {
    '{signature}': [
      `${gifLink}/signature/1280x720%2C%2015fps/signature-dark.gif`,
      `${gifLink}/signature/1280x720%2C%2015fps/signature-light.gif`,
    ],
    '{tralogfin}': [
      `${gifLink}/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_black.gif`,
      `${gifLink}/trinity-apps/1280x720%2C%2015fps/1280x720%2C%2015fps_white.gif`,
    ],
  };

  const shadeImage: Record<'~dark~' | '~light~', 0 | 1> = {
    '~dark~': 0,
    '~light~': 1,
  };

  return gifPath[apps][shadeImage[shade]] as string;
}
export default loadImage;

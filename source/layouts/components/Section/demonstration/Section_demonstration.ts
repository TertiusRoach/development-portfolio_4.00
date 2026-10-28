//--|🠊 Section_demonstration.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../scripts';
//--|🠋 Demonstration Information 🠋|--\\
export interface DemonstrationSelection {
  appName: 'track-a-day' | 'log-a-ticket' | 'find-a-link' | 'tralogfin';
  branding: string;
  description: string;
}
//--|🠋 Configure Container 🠋|--\\
type StyleProps = {
  shade: '~dark~' | '~light~';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
};
function returnInfo(selectInfo: 'track-a-day' | 'log-a-ticket' | 'find-a-link' | 'tralogfin' | string): {
  appName: string;
  branding: string;
  description: string;
} {
  switch (selectInfo) {
    default:
    case 'tralogfin':
      return {
        appName: 'TraLogFin',
        branding: loadAsset('-svg-', '/archive-images/trinity-apps/tralogfin/trinity-apps'),
        description: `Three applications working in tandem to solve specific roadblocks. Track a Day logs overtime to keep records transparent and stress-free. Log a Ticket cuts through the noise with clear statuses for every request. Find a Link is your ultimate launchpad the moment you sit down to work.`,
      };
    case 'track-a-day':
      return {
        appName: 'Track a Day',
        branding: loadAsset('-svg-', '/archive-images/trinity-apps/track-a-day/primary-medium'),
        description: `Tracking your time shouldn't be a complex process. It shouldn't be as convoluted as a traditional clocking system. Especially when you have actual work to attend to. This tool cuts out the friction to make logging effortless.`,
      };
    case 'log-a-ticket':
      return {
        appName: 'Log a Ticket',
        branding: loadAsset('-svg-', '/archive-images/trinity-apps/log-a-ticket/primary-medium'),
        description: `A ticketing system built to keep the user experience frictionless. Problems differ, but the steps to solve them shouldn't be bogged down by red tape. Start with pending, claim your task, finish the job, and watch your numbers go up.`,
      };
    case 'find-a-link':
      return {
        appName: 'Find a Link',
        branding: loadAsset('-svg-', '/archive-images/trinity-apps/find-a-link/primary-medium'),
        description: `Instantly access all essential resources on a single page. It brings professional and personal links together into one seamless hub disguised as a single document. Designed to tame information overload, whether it’s spreadsheets, policies, reports, approvals, or bookmarks.`,
      };
  }
}
export const createClass = (style: StyleProps): string => {
  //--|🠊 Class Build for <SectionDemonstration> 🠈|--\\
  const colorMap: Record<string, string> = {
    //--|🠊 Color Abbr 🠈|--\\
    '(mono)': 'mon',
    '(red)': 'red',
    '(green)': 'gre',
    '(blue)': 'blu',
    '(yellow)': 'yel',
    '(purple)': 'pur',
    '(orange)': 'ora',
    '(pink)': 'pin',
    '(brown)': 'bro',
    '(turquoise)': 'tur',
  };
  const shadeMap: Record<string, string> = {
    //--|🠊 Shade Abbr 🠈|--\\
    '~dark~': 'dar',
    '~medium~': 'med',
    '~light~': 'lig',
  };
  return `${shadeMap[style.shade]}_${colorMap[style.color]}`;
};
export const randomApps = (selectApps: string | Array<string>): string => {
  if (typeof selectApps === 'string') {
    return selectApps as 'track-a-day' | 'log-a-ticket' | 'find-a-link';
  } else if (typeof selectApps === 'object') {
    return selectApps[Math.floor(Math.random() * selectApps.length)] as 'track-a-day' | 'log-a-ticket' | 'find-a-link';
  } else {
    return 'tralogfin';
  }
};

export default returnInfo;

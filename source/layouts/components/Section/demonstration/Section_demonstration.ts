//--|🠊 Section_demonstration.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { abbrShade, abbrColor } from '../../components'; //--|🠈 AI Code: Review Please 2026-11-08 🠈|--\\
import { loadAsset } from '../../../tools/utilities';
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
        branding: loadAsset('-svg-', '/tralogfin-application/pick-a-page/trinity-apps'),
        description: `Three applications working in tandem to solve specific roadblocks. Track a Day logs overtime to keep records transparent and stress-free. Log a Ticket cuts through the noise with clear statuses for every request. Find a Link is your ultimate launchpad the moment you sit down to work.`,
      };
    case 'track-a-day':
      return {
        appName: 'Track a Day',
        branding: loadAsset('-svg-', '/tralogfin-application/track-a-day/primary-medium'),
        description: `Tracking your time shouldn't be a complex process. It shouldn't be as convoluted as a traditional clocking system. Especially when you have actual work to attend to. This tool cuts out the friction to make logging effortless.`,
      };
    case 'log-a-ticket':
      return {
        appName: 'Log a Ticket',
        branding: loadAsset('-svg-', '/tralogfin-application/log-a-ticket/primary-medium'),
        description: `A ticketing system built to keep the user experience frictionless. Problems differ, but the steps to solve them shouldn't be bogged down by red tape. Start with pending, claim your task, finish the job, and watch your numbers go up.`,
      };
    case 'find-a-link':
      return {
        appName: 'Find a Link',
        branding: loadAsset('-svg-', '/tralogfin-application/find-a-link/primary-medium'),
        description: `Instantly access all essential resources on a single page. It brings professional and personal links together into one seamless hub disguised as a single document. Designed to tame information overload, whether it’s spreadsheets, policies, reports, approvals, or bookmarks.`,
      };
  }
}
export const createClass = (style: StyleProps): string => {
  //--|🠊 Class Build for <SectionDemonstration> 🠈|--\\
  //--|🠊 AI Code: Review Please 2026-11-08 · The maps live in components.ts, shared by every component 🠈|--\\
  const classShade = abbrShade(style.shade);
  const classColor = abbrColor(style.color);
  return `${classShade}_${classColor}`;
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

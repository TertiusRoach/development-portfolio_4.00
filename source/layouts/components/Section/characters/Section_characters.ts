//--|🠊 Section_characters.ts 🠈|--\\
//--|🠋 Functions 🠋|--\\
import { loadAsset } from '../../../../scripts';
function returnProfile(
  selectProfile:
    | string
    | 'jane'
    | 'malik'
    | 'dimitri'
    | 'dale'
    | 'alaric'
    | 'conrad'
    | 'daniel'
    | 'kady'
    | 'seamus'
    | 'hammad'
    | 'tasneem'
    | 'elliot'
    | 'sipho'
    | 'zuberi'
    | 'nyra'
    | 'victor'
    | 'danish'
    | 'aelin',
): CharacterSelection {
  //--|🠋 HTML Element (always last) 🠋|--\\
  switch (selectProfile) {
    case 'jane':
      return cardInfo[0];
    case 'malik':
      return cardInfo[1];
    case 'dimitri':
      return cardInfo[2];
    case 'dale':
      return cardInfo[3];
    case 'alaric':
      return cardInfo[4];
    case 'conrad':
      return cardInfo[5];
    case 'daniel':
      return cardInfo[6];
    case 'kady':
      return cardInfo[7];
    case 'seamus':
      return cardInfo[8];
    case 'hammad':
      return cardInfo[9];
    case 'tasneem':
      return cardInfo[10];
    case 'elliot':
      return cardInfo[11];
    case 'sipho':
      return cardInfo[12];
    case 'zuberi':
      return cardInfo[13];
    case 'nyra':
      return cardInfo[14];
    case 'victor':
      return cardInfo[15];
    case 'danish':
      return cardInfo[16];
    case 'aelin':
      return cardInfo[17];
    default:
      return cardInfo[18];
  }
}
//--|🠋 Character Information 🠋|--\\
export interface CharacterSelection {
  fullName:
    | 'Randomize Character'
    | 'Jane Lester'
    | 'Malik Tremaine Carter'
    | 'Dimitri Lewis'
    | 'Dale Sutton'
    | 'Dr. Alaric Voss'
    | 'Conrad Guy'
    | 'Daniel Meyers'
    | 'Ms. Kady Deacon'
    | "Seamus O'Donnell"
    | 'Hammad Dean'
    | 'Tasneem Kemp'
    | 'Sipho Dlamini'
    | 'Elliot Crane'
    | 'Zuberi Thorne'
    | 'Nyra Solari'
    | 'Victor Langston'
    | 'Danish Copeland'
    | 'Aelin Darrow'
    | [string, string, string];
  country: string;
  organization: 'Voidspire Systems' | 'Silverveil Logistics' | 'Both' | string;
  department: { HoD: boolean; bureau: string };
  description: string;
  profile: string;
  permissions: {
    vocation: 'Established' | 'Freelancing' | string;
    position: 'Employee' | 'Manager' | string;
    occupation: 'Specialist' | 'Technician' | string;
  };
}
const permissionRandomize = (authorization: 'vocation' | 'position' | 'occupation'): string => {
  switch (authorization) {
    case 'vocation':
      return Math.random() < 0.5 ? 'Established' : 'Freelancing';
    case 'position':
      return Math.random() < 0.5 ? 'Manager' : 'Employee';
    case 'occupation':
      return Math.random() < 0.5 ? 'Specialist' : 'Technician';
  }
};
let cardInfo: Array<CharacterSelection> = [
  {
    fullName: 'Jane Lester',
    country: 'United States',
    organization: 'Voidspire Systems',
    department: { HoD: true, bureau: 'Executive Governance' },
    description: `Jane can raise ten million in a single video call and forget your name before it ends. She's the visionary chaos kind of CEO: brilliant, magnetic, and completely detached from what her ideas cost the people who have to build them. Profit isn't the point. Expansion is. She creates crises on purpose because calm feels like falling behind, and her perfectionism only ever points outward, at other people's work. She knows Hammad keeps his people and she doesn't. She'll never say it, but it eats at her.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/jane-lester'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Specialist' },
  },
  {
    fullName: 'Malik Tremaine Carter',
    country: 'Canada',
    organization: 'Voidspire Systems',
    department: { HoD: true, bureau: 'Service Coordination & Technical Delivery' },
    description: `Malik started as the analyst who built Jane's dashboards and ended up as the HoD who reads them. He knows more about Voidspire's real inefficiencies than anyone, and he's ruthlessly objective about all of it. People are variables to him, and variables get optimised. He's polite, soft-spoken and genuinely helpful in a meeting. He also worked out early that rejecting overtime puts ghost hours on his own record, while letting a request quietly expire puts them on Jane's. He has never rejected a single request. Make of that what you will.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/malik-tremaine-carter'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Specialist' },
  },
  {
    fullName: 'Dimitri Lewis',
    country: 'Greece',
    organization: 'Both',
    department: { HoD: false, bureau: 'Applied Research & Prototyping' },
    description: `Dimitri is the pragmatic outlier, the "you" character. He prototypes for both companies, delivers exactly what was agreed, and spends the rest of his day on his own software, the one that's going to set him free. His work is so good that nobody questions how little of it they see. Being paid per solution instead of per hour suits him perfectly: the price is agreed upfront, the work is done, and nobody gets to measure his worth by how long his status light stays green. Simplicity isn't his style. It's his boundary.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/dimitri-lewis'),
    permissions: { vocation: 'Freelancing', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: 'Dale Sutton',
    country: 'Germany',
    organization: 'Voidspire Systems',
    department: { HoD: false, bureau: 'Network Infrastructure' },
    description: `Dale is a company man who secretly loves routine. He isn't brilliant and he knows it, but he's utterly dependable: every update, every patch, every boring maintenance window that keeps Voidspire's network alive. He believes Output Integrity comes from following the process, not from heroics, and he's usually right. He's the institutional memory nobody thanks until he's on leave. Voidspire doesn't deserve him, and the worst part is that he'd never think to say so.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/dale-sutton'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Dr. Alaric Voss',
    country: 'South Africa',
    organization: 'Voidspire Systems',
    department: { HoD: false, bureau: 'Cybersecurity & Compliance' },
    description: `Dr. Voss was hired for prestige, not people. A data scientist turned security specialist, he answers only the tickets complex enough to interest him and reports only to Jane, which makes him her favourite tool for going around Malik. Jane promised him the HoD toggle when he joined. It never came. He tells everyone it's a formality anyway. He's obsessed with Output Integrity to the point where nothing else exists, and he's genuinely brilliant, which is exactly what makes him so hard to work with.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/alaric-voss'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: 'Conrad Guy',
    country: 'United Kingdom',
    organization: 'Voidspire Systems',
    department: { HoD: false, bureau: 'Systems Operations Management' },
    description: `Conrad is the one trying to bring order to Jane's chaos, and he'll tell you so. He believes Voidspire could run like a machine if people would just use the forms he spent months building. It's a noble fight, until you notice that every form puts one more decision through Conrad. He's a Manager without HoD status, so his link changes need the owner's approval. He submits them anyway, dozens a week, each one a perfectly formatted reminder that he's still waiting for the title. Bureaucratic excellence is a moral good to him. So is being needed.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/conrad-guy'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Specialist' },
  },
  {
    fullName: 'Daniel Meyers',
    country: 'Ireland',
    organization: 'Both',
    department: { HoD: false, bureau: 'Technical Documentation & Knowledge Services' },
    description: `Daniel writes documentation for both companies and design work for himself. He's a master of the minimum effort that keeps the contracts coming. Under hourly billing he was untouchable: a page that took twenty minutes went on the invoice as two hours, and nobody could prove otherwise. Per-solution pricing changed that overnight, and he's been quietly irritated ever since. He's charming, fast and genuinely good with words. He just uses them to look busier than he is.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/daniel-meyers'),
    permissions: { vocation: 'Freelancing', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Ms. Kady Deacon',
    country: 'Australia',
    organization: 'Voidspire Systems',
    department: { HoD: false, bureau: 'Software Quality Assurance' },
    description: `Kady is Voidspire's memory and its quiet conscience. She tests the software, and she tests the people too, predicting problems long before they ship. She practises what she calls "ethical gossip": using what she knows about the company's politics to steer her colleagues away from obvious management traps. She protects other people's Effort Economy before her own. She also holds grudges like a vault and doesn't always pick the right fights, especially with Conrad, whom she can't bring herself to challenge directly.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/kady-deacon'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: "Seamus O'Donnell",
    country: 'Japan',
    organization: 'Voidspire Systems',
    department: { HoD: false, bureau: 'Platform Reliability & Maintenance' },
    description: `Seamus keeps the servers running, and that's all he wants anyone to know about him. He's grizzled, blunt, and believes every problem can be solved with patience and a clear head. He has deliberately built an "out of sight, out of mind" reputation, which is exactly why Jane's chaos barely touches his platform. He has no title and doesn't want one, but anyone working nights on his systems gets his protection whether they asked for it or not. He won't fake an emergency, and he won't let anyone fake one on his watch.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/seamus-odonnell'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Hammad Dean',
    country: 'United Arab Emirates',
    organization: 'Silverveil Logistics',
    department: { HoD: true, bureau: 'Logistics Executive Office' },
    description: `Hammad used to be Jane's firefighter-in-chief, the human shield between her ideas and everyone who had to build them. He burnt out, walked away, and built Silverveil to be the company he wished he'd worked for. He's loyal and fiercely protective, and he's also Machiavellian when he needs to be. He plays the long game, knows exactly which of Jane's people are unhappy, and never forgets a favour or a slight. His people trust him completely. His competitors are right not to.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/hammad-dean'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Technician' },
  },
  {
    fullName: 'Tasneem Kemp',
    country: 'India',
    organization: 'Silverveil Logistics',
    department: { HoD: true, bureau: 'Fleet Technology & Maintenance' },
    description: `Tasneem is the ambitious one. She arrived with an engineering degree and a list of everything reactive about Silverveil's fleet systems, and Hammad, instead of feeling threatened, made her an HoD. Now she schedules maintenance before things break and approves overtime like she's reading evidence: carefully, and on time. She can come across as idealistic or arrogant, because she trusts data over gut feeling, and sometimes the gut was right. But no request on her desk has ever expired.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/tasneem-kemp'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Technician' },
  },
  {
    fullName: 'Elliot Crane',
    country: 'Singapore',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Operational Systems Management' },
    description: `Elliot sees work as a battle, and he wants everyone to see him fighting it. He measures success by noise: the most calls, the longest hours, the most tickets assigned before lunch. He's a gifted motivator, and his speeches genuinely move people. He's also the reason they're tired. He can assign tickets but can't approve anything, so he assigns relentlessly, as if being busy were the same as being in charge. Every interaction is a negotiation for resources, and every quiet colleague is a suspect.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/elliot-crane'),
    permissions: { vocation: 'Established', position: 'Manager', occupation: 'Specialist' },
  },
  {
    fullName: 'Sipho Dlamini',
    country: 'Kenya',
    organization: 'Both',
    department: { HoD: false, bureau: 'Cross-Company Infrastructure Support' },
    description: `Sipho keeps both companies' infrastructure alive and his own repair business growing on the side. He's the master of the quick, invisible fix: the outage that never happened, the part he sourced from somewhere nobody else would think to look. He gives exactly what was agreed and not a minute more, and he's honest about it, which is more than most can say. Per-solution pricing finally pays him for the fixes nobody saw. He doesn't do teams, and he doesn't trust new initiatives. Somehow, everyone still calls him first.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/sipho-dlamini'),
    permissions: { vocation: 'Freelancing', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Zuberi Thorne',
    country: 'Brazil',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Data Integration & API Services' },
    description: `Zuberi spent his career as a contractor: in fast, out faster, no strings. He kept every company at arm's length because every company had given him a reason to. Hammad offered him Established status, with the double warning and the typed confirmation, and for the first time in his life Zuberi typed it. He still works like a contractor: clear scope, clean handover, no free work "for the experience". But he stays now. He hasn't fully worked out why.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/zuberi-thorne'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Nyra Solari',
    country: 'China',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Application Architecture' },
    description: `Nyra designs the structure everything else is built on, and she does it before anyone else has started, which is exactly why nobody notices. Her guides, templates and architecture diagrams are the reason Silverveil's systems survive Elliot's last-minute changes. She protects Output Integrity before the work begins, not after it breaks. She often feels invisible, because her best work is the disaster that never happens. You only notice her when she stops.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/nyra-solari'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: 'Victor Langston',
    country: 'Netherlands',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Endpoint Services' },
    description: `Victor has been around longer than anyone, and he has the stories to prove it. He's warm, funny, and the first to welcome a new hire. He's also mastered disengaged fulfilment: exactly what's asked, no more, no less, with just enough institutional knowledge to stay impossible to replace. He knows every unwritten rule, and he uses them like a toll booth. Need something done fast? He'll remember an old procedure that makes it slow. The young ones adore him for about three months.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/victor-langston'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Technician' },
  },
  {
    fullName: 'Danish Copeland',
    country: 'Sweden',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Human Resources Systems' },
    description: `Danish builds the HR systems: the policies, the onboarding flows, the wellness surveys. Every one of them is beautifully worded and quietly airtight. He came from a company like Voidspire, where his job was to keep the lawsuits away and the smiles on, and he never quite stopped. He lives in the gap of Ethical Geometry, between what's fair and what's merely defensible, and he's very good at making the second sound like the first. People love his workshops. Read his policies twice.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/danish-copeland'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: 'Aelin Darrow',
    country: 'New Zealand',
    organization: 'Silverveil Logistics',
    department: { HoD: false, bureau: 'Workflow Automation' },
    description: `Aelin automates workflows, and she's brilliant at it. She's also brilliant at making the numbers look right. She understands that her job is less about efficiency and more about managing how efficiency looks to the people above her. Her reports are flawless, her dashboards are green, and her automations quietly smooth away anything that would make a metric look bad. She resolves conflict by blurring it until nobody remembers what it was about. Everyone thinks she's on their side. That's the job.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/aelin-darrow'),
    permissions: { vocation: 'Established', position: 'Employee', occupation: 'Specialist' },
  },
  {
    fullName: 'Randomize Character',
    country: 'IP Protocol',
    organization: 'Both',
    department: { HoD: true, bureau: 'Randomize' },
    description: `Eighteen randomized characters designed to stress-test the application under peak human chaos. Each represents a distinct workplace survival strategy: When pressure builds, they retreat, rebel, or succumb to apathy against rigid order.
                  Jane and Hammad head rival operations, proving that while corporate philosophies differ, procedural friction remains universal. Here, stability is temporary, efficiency is accidental, and loyalty exists only among the naive.
                  As executives double-cross and departments clash, only one force prevents total collapse: TraLogFin. By tracking overtime, filtering ticket noise, and organizing vital links, it keeps a fragile balance across opposing agendas.
                  Mix and match personalities to drive your own chaotic ludonarrative.`,
    profile: loadAsset('-png-', '/archive-images/character-testing/original/randomize-character'),
    permissions: {
      vocation: permissionRandomize('vocation'),
      position: permissionRandomize('position'),
      occupation: permissionRandomize('occupation'),
    },
  },
];
//--|🠋 Configure Container 🠋|--\\
type StyleProps = {
  shade: '~dark~' | '~light~';
  color: '(mono)' | '(red)' | '(green)' | '(blue)' | '(yellow)' | '(purple)' | '(orange)' | '(pink)' | '(brown)' | '(turquoise)';
};

export function createClass(style: StyleProps): string {
  //--|🠊 Class Build for <SectionCharacters> 🠈|--\\
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
}

export default returnProfile;

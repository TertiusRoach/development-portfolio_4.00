//--|🠊 Section_characters.ts 🠈|--\\
//--|🠋 Styles 🠋|--\\

//--|🠋 Types 🠋|--\\
export type CharacterReferences = {
  key: [
    number,
    (
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
      | 'aelin'
    ),
  ];
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
  department: [boolean, string];
  description: string;
  profile: string;
  permissions: [
    { vocation: 'Established' | 'Freelancing' | boolean | string },
    { position: 'Employee' | 'Manager' | boolean | string },
    { occupation: 'Specialist' | 'Technician' | boolean | string },
  ];
};

export const returnProfiles = (pageName: 'components', blockName: 'main'): Array<CharacterReferences | HTMLElement> => {
  //--|🠋 HTML Element (always last) 🠋|--\\
  let element: HTMLElement = document.querySelector(`#${pageName}-${blockName}`) as HTMLElement;
  return [...demonstration, element];
};
//--|🠋 Characters 🠋|--\\
const demonstration: Array<CharacterReferences> = [
  {
    fullName: 'Jane Lester',
    department: [true, 'Owner/CEO'],
    country: 'United States',
    description:
      'Jane is the quintessential "visionary chaos" CEO. She can raise $10 million in a single meeting but sees her employees as resources rather than people. Her purpose is not profit, but the ego-driven thrill of expansion, which she pursues by constantly breaking boundaries. Disruptive technology, the sound of her own voice in an all-hands meeting, the myth of the 80-hour work week. Processes, quarterly reports, anyone who asks for a vacation or a raise. Charisma, uncanny ability to secure funding, strategic ruthlessness. Detached from reality, short attention span, addicted to crisis (she creates them to feel productive). To make the company so big that its success retroactively justifies all the collateral damage.',
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/jane-lester.png',
    permissions: [{ vocation: 'Established' }, { position: 'Manager' }, { occupation: 'Specialist' }],
    key: [1, 'jane'],
  },
  {
    fullName: 'Malik Tremaine Carter',
    department: [false, 'Coordination'],
    country: 'Canada',
    description: `Malik is a contract data analyst whose job is to track KPIs across departments and generate the reports Aelin uses. He is the invisible hand behind the metrics, possessing a level of insight into the company's real inefficiencies that no one else has. He is a freelancing technician who provides Effort Economy by automating his own reporting process, allowing him to spend his on-site time focusing on personal skill development. Clean data sets, elegant pivot tables, the feeling of being the only one who knows the truth. Inaccurate data from Operations, being asked to "spin" the numbers, attending meetings he is not required to speak in. Expert in data visualization, highly efficient automation skills, ruthlessly objective. Poor at presenting bad news, can be overly critical of others' data integrity, sees people as variables. To accumulate a portfolio of high-level strategic data projects to secure a future role as a top-tier independent consultant.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/malik-tremaine-carter.png',
    permissions: [
      {
        vocation: 'Freelancing',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [2, 'malik'],
  },
  {
    fullName: 'Dimitri Lewis',
    department: [false, 'Technical'],
    country: 'Greece',
    description: `Dimitri is the classic Pragmatic Outlier (the "you" character). He uses the office as a high-security bunker for his true work—developing his own independent software product. His technical skills are peerless, allowing him to deliver essential tasks with minimal visible effort, justifying his "freelancing" time. He practices Simplicity as a boundary condition. Elegant solutions, silent concentration, his dual-monitor setup. Unnecessary office chatter, Hammad's inability to say "no" to Jane, any request that requires leaving his desk. Highly efficient, masters new tech instantly, maintains perfect separation between his two vocations. Emotionally disengaged, struggles to pretend he cares about company projects, visible apathy in meetings. To extract maximum value (salary, security, development time) while expending minimum energy, funding his eventual escape.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/dimitri-lewis.png',
    permissions: [
      {
        vocation: 'Freelancing',
      },
      { position: 'Employee' },
      { occupation: 'Specialist' },
    ],
    key: [3, 'dimitri'],
  },
  {
    fullName: 'Dale Sutton',
    department: [false, 'Technical'],
    country: 'Canada',
    description: `Dale is a 'company man' who secretly thrives on routine. He's not brilliant, but he is utterly dependable for all repetitive maintenance and system updates. His value lies in his low-maintenance nature. He's convinced that Output Integrity is achieved through process adherence, not heroic fixes. Detailed checklists, clean wiring closets, the feeling of a successfully closed ticket. Vague problem reports, people who skip training, Hammad’s frequent anxiety attacks. Methodical, patient, acts as the institutional memory for technical procedures. Terrified of non-standard problems, resistant to adopting new software, easily manipulated by peer pressure. To reach retirement without ever having to manage a crisis or be responsible for a major decision.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/dale-sutton.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [4, 'dale'],
  },
  {
    fullName: 'Dr. Alaric Voss',
    department: [true, 'Technical'],
    country: 'Germany',
    description: `Dr. Voss is a highly specialized data scientist who was hired less for management and more for prestige. He operates in a silo, only answering tickets related to complex data modeling and security vulnerabilities. His official HoD title is a formality; he reports only to Jane, making him a strategic tool to bypass Hammad. He is obsessed with Output Integrity at the expense of all else. Pure mathematics, impenetrable encryption, classical music in his soundproof office. Simplification, being asked to explain his work in lay terms, the low quality of data from the Ops department. Exceptional intelligence, absolute discretion, strategic insight into long-term risks. Socially inept, arrogant, ignores all communication not flagged as "Level 1 Priority.". To prove that his academic theories can solve real-world problems, viewing the company as his private, high-stakes laboratory.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/alaric-voss.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Specialist' },
    ],
    key: [5, 'alaric'],
  },
  {
    fullName: 'Conrad Guy',
    department: [true, 'Admin'],
    country: 'South Africa',
    description: `Conrad is the quintessential Admin Manager who tries to impose order on Jane's chaos. He believes the company could be a well-oiled machine if only people would use the forms and procedures he spent months developing. He constantly fights a losing battle against the cultural preference for ad-hoc solutions. Color-coded binders, perfectly aligned documents, the satisfying click of a closed folder. People who submit expenses late, Jane's insistence on handwritten notes, the Operations department's mess. Meticulous planner, highly organized, excellent budgeting skills. Easily flustered by emotional outbursts, suffers from chronic procedural anxiety, unable to adapt to sudden changes. To make the company run correctly, viewing bureaucratic excellence as a moral good.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/conrad-guy.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Manager' },
      { occupation: 'Specialist' },
    ],
    key: [6, 'conrad'],
  },
  {
    fullName: 'Daniel Meyers',
    department: [false, 'Admin'],
    country: 'United Kingdom',
    description: `Daniel is a part-time Admin Assistant who supplements his income by doing freelance graphic design. He is a master of the minimum effort needed to keep his job, viewing the Admin tasks as simple, low-stakes data entry. He only clocks in to maintain his access to the office's high-spec computers and fast internet. Clean typography, the Admin team's coffee machine, the anonymity of his cubicle. Being asked to file old paperwork, excessive noise, any task that requires creativity. Fast typist, highly adept at basic software, excellent self-management of his dual workload. Zero emotional investment in the company, will push back aggressively if his autonomy is threatened, prone to minor technical shortcuts. To use the stability of the Admin job as a financial launchpad for his independent creative career.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/daniel-meyers.png',
    permissions: [
      {
        vocation: 'Freelancing',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [7, 'daniel'],
  },
  {
    fullName: 'Ms. Kady Deacon',
    department: [false, 'Admin'],
    country: 'United Kingdom',
    description: `Kady is the organizational memory and social lynchpin of the office. She's highly skilled at logistics, often predicting problems before they arise. She practices "ethical gossiping," using her knowledge of the company's internal politics to protect her own team from falling into obvious managerial traps. Her purpose is to ensure the Effort Economy of her colleagues. Anticipating needs, a quiet chat by the water cooler, perfectly executed event logistics. Unnecessary drama, Conrad’s over-reliance on old filing systems, people who waste her time. Exceptional emotional intelligence, reliable forecaster of conflicts, master of soft power. Holds deep grudges against management, occasionally uses her knowledge for minor personal gain, has difficulty challenging Conrad directly. To maintain order and protection for the staff she considers worthy, viewing herself as the true operational backbone of the company.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/kady-deacon.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Specialist' },
    ],
    key: [8, 'kady'],
  },
  {
    fullName: "Seamus O'Donnell",
    department: [true, 'Maintenance'],
    country: 'Ireland',
    description: `Seamus is a grizzled, no-nonsense manager who believes every problem can be solved with a wrench and a clear head. His department is the least affected by Jane's chaos because he has deliberately cultivated an "out-of-sight, out-of-mind" reputation. He maintains strict boundaries, which often puts him at odds with the Operational team. Quiet dignity, tools that last, a perfectly tuned Heating, Ventilation, and Air Conditioning system. Last-minute "emergencies" that are clearly a result of poor planning, cheap equipment, suits who try to tell him how to fix things. Expert practical knowledge, unshakeable calm, fiercely protective of his team's time. Resistant to technology (prefers manual logs), communicates poorly with the Admin department, suffers no fools. To ensure the physical plant remains functional and safe, seeing his work as a silent, essential service that justifies his autonomy.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/seamus-odonnell.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Manager' },
      { occupation: 'Specialist' },
    ],
    key: [9, 'seamus'],
  },
  {
    fullName: 'Hammad Dean',
    department: [true, 'Technical'],
    country: 'United Arab Emirates',
    description: `Hammad is the "Firefighter-in-Chief."He's a brilliant but burnt-out HoD who has accepted his role as the human shield for the entire department. He personally handles every critical failure because delegating would take too long to explain. He embodies the failure of Effort Economy.
    \nCoffee, a 1-hour window of uninterrupted work, elegant code written by others. Meetings that could have been emails, Jane's "urgent" weekend requests, the word "innovation." Unflappable under pressure, phenomenal diagnostic skills, loyalty (to his team, not the company). Terrible delegation, chronic exhaustion, struggles to enforce his team's boundaries. To prevent the entire infrastructure from collapsing long enough to secure his next, better job.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/hammad-dean.png',
    permissions: [{ vocation: 'Established' }, { position: 'Manager' }, { occupation: 'Technician' }],
    key: [10, 'hammad'],
  },
  {
    fullName: 'Tasneem Kemp',
    department: [false, 'Maintenance'],
    country: 'India',
    description: `Tasneem is a new, ambitious technician with a degree in facilities engineering. She is frustrated by the old-school, reactive nature of the department and constantly proposes modern, proactive maintenance schedules. She struggles with survivor's guilt about her potential, seeing the untapped efficiency in the department and resenting that her skills are wasted on patch-jobs. Predictive modeling, detailed asset tracking, clear communication with the Technical department. Seamus's resistance to digital logging, wastefulness, the general culture of "fix it when it breaks". Highly educated, excellent technical documentation skills, high energy and drive. Lacks experience with practical, on-the-fly fixes, overly reliant on data and not on intuition, can be perceived as idealistic or arrogant. To modernize a dysfunctional system, believing that order and efficiency are key to true success.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/tasneem-kemp.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [11, 'tasneem'],
  },
  {
    fullName: 'Sipho Dlamini',
    department: [false, 'Maintenance'],
    country: 'South Africa',
    description: `Sipho is the skilled, low-key technician who keeps his head down and his side projects flourishing. He uses the Maintenance shop as a base for his weekend appliance repair side business. Like the "you" character in our earlier discussion, he's a master of the quick, invisible fix. His Effort Economy is absolute; he never gives the company more than the bare minimum required to keep his full-time job. Simple, elegant mechanical solutions, the predictability of machinery, working alone. Any task requiring a uniform or paperwork, unnecessary small talk with management. Exceptional mechanical and electrical aptitude, highly efficient time management, an uncanny ability to source rare parts. Not a team player, highly suspicious of new initiatives, will never go "above and beyond" for the company. To build his independent financial future using the company's salary and resources as his primary tool.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/sipho-dlamini.png',
    permissions: [
      {
        vocation: 'Freelancing',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [12, 'sipho'],
  },
  {
    fullName: 'Elliot Crane',
    department: [true, 'Operational'],
    country: 'United States',
    description: `Elliot is a high-octane Operations Manager who sees work as a battle. He believes success is measured by noise and visible effort, not by true efficiency. He constantly creates managed chaos to justify his own stress and long hours, which he enforces on his team. He is constantly fighting for resources, seeing every interaction as a zero-sum game. Loud phone calls, visible spreadsheets, the phrase "All hands on deck". Quiet departments (like Technical), anything he perceives as laziness, asking for help. Highly motivated, excellent motivational speaker, relentless pusher of deadlines. Prone to burnout and emotional outbursts, terrible long-term planner, often overrides his team's processes. To be recognized as the company's most essential, hardest-working martyr.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/elliot-crane.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Manager' },
      { occupation: 'Specialist' },
    ],
    key: [13, 'elliot'],
  },
  {
    fullName: 'Zuberi Thorne',
    department: [false, 'Operational'],
    country: 'South Africa',
    description: `Zuberi is a highly valuable, short-term contract worker brought in for specific, high-pressure projects. He maintains an arms-length relationship with the company, using his freelancing status as a shield against the internal politics and overwork. He is an expert in rapid deployment and setup, prioritizing Effort Economy to ensure he's available for his next, better contract. Clearly defined contracts, quick project turnover, the feeling of a job being truly finished. Scope creep, vague requirements from Elliot, any request to work for free "for the experience". Highly specialized technical skills, zero emotional baggage, excellent negotiation skills. No long-term loyalty to the company, will abandon a project if the terms are violated, lacks general managerial experience. To optimize his professional life as a series of high-value, short-term transactions.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/zuberi-thorne.png',
    permissions: [
      {
        vocation: 'Freelancing',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [14, 'zuberi'],
  },
  {
    fullName: 'Nyra Solari',
    department: [false, 'Operational'],
    country: 'China',
    description: `Nyra is a process specialist who tries to inject structural sanity into the Operations department. She creates meticulous internal guides and templates, constantly battling Elliot's preference for chaos. She is the opposite of a Technician, viewing her role as establishing the Output Integrity before the work begins. She often feels invisible, as her preparatory work is only noticed when she stops doing it. Clean flowcharts, highly specific data metrics, the quiet satisfaction of a flawless workflow. Elliot's last-minute changes, vague requests from Technical, any deviation from established protocol. Unrivaled attention to detail, clear communication, the ability to document complex processes. Struggles with high-pressure, unstructured situations, can be overly rigid, easily frustrated by irrationality. To prove that systems and process, not heroic effort, are the true drivers of sustainable success.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/nyra-solari.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Specialist' },
    ],
    key: [15, 'nyra'],
  },
  {
    fullName: 'Victor Langston',
    department: [false, 'Operational'],
    country: 'United States',
    description: `Victor is the company's longest-tenured employee in Operations, having seen countless managers and CEOs come and go. He is now a master of Disengaged Fulfillment, doing exactly what is asked—no more, no less—and using his deep institutional knowledge to justify his slow pace. His primary goal is to minimize his Effort Economy while remaining essential enough to avoid being fired. Long, quiet lunches, leaving exactly on time, reminiscing about the "old days". Learning new software, ambitious young hires, any project that involves more than one department. Institutional memory, an expert at navigating internal politics, knows all the company's unwritten rules. Highly resistant to change, slow to adopt technology, prone to passive-aggressive resistance. To make it to retirement with the least possible expenditure of personal energy.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/victor-langston.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Employee' },
      { occupation: 'Technician' },
    ],
    key: [16, 'victor'],
  },
  {
    fullName: 'Danish Copeland',
    department: [true, 'Human Resources'],
    country: 'Australia',
    description: `Danish is the company's primary legal shield and the face of its forced positivity. He is a cynical, high-stakes mediator who spends most of his time managing the fallout from Jane's impulsive decisions. He is legally bound to uphold the company's exploitation while maintaining the illusion of fairness and empathy. He personifies the conflict between Ethical Geometry and legal reality. Bulletproof legal contracts, confidential settlements, training workshops with high energy. Legal cases, emotional employees, anyone who uses the word "wellness" seriously. Masterful manipulator of policy language, charismatic public speaker, excellent negotiator. Deeply cynical, completely divorced from the reality of employee stress, prone to offering vague "growth opportunities" instead of raises. To protect the company's assets (including its human capital) from lawsuits and internal revolt, ensuring the core machine keeps turning.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/danish-copeland.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Manager' },
      { occupation: 'Specialist' },
    ],
    key: [17, 'danish'],
  },
  {
    fullName: 'Aelin Darrow',
    department: [true, 'Coordination'],
    country: 'United Kingdom',
    description: `Aelin is the company's Strategic Coordinator, tasked with making sure the departments' chaotic efforts align with Jane's ever-changing "vision." She is a political operator who understands that her job is less about efficiency and more about managing optics and expectations. She translates Jane's grand, incoherent plans into measurable, manageable (if cynical) objectives. Perfectly formatted reports, strategic alliances, the feeling of successfully manipulating a deadline. Emotional managers, non-compliance from Technical or Operations, surprise meetings. Exceptional political acumen, fantastic verbal communicator, skilled at conflict resolution (often by obfuscation). Highly stressed, often sacrifices Output Integrity for a clean metric, struggles with true emotional honesty. To achieve perfect equilibrium between the CEO's fantasy and the company's functional reality.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/aelin-darrow.png',
    permissions: [
      {
        vocation: 'Established',
      },
      { position: 'Manager' },
      { occupation: 'Specialist' },
    ],
    key: [18, 'aelin'],
  },
  {
    fullName: 'Randomize Character',
    department: [true, 'Coordination'],
    country: 'IP Protocol',
    description: `There's 18 characters. A workforce simulation where each character represents a distinct survival strategy under pressure-exploitation, rebellion, retreat, apathy, or rigid order.
    \nThe company runs not on alignment but on friction: visionaries break systems, technicians patch them, administrators document the fallout, and coordinators reframe it as intent. Stability is temporary, efficiency accidental, loyalty conditional.
    \nThe system persists only through the fragile balance of these opposing approaches. Mix and match their personalities to create a fun ludo narrative.`,
    profile:
      'https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/radomize-character.png',
    permissions: [
      {
        vocation: `Established\nFreelancer`,
      },
      { position: 'Manager\nEmployee' },
      { occupation: 'Specialist\nTechnician' },
    ],
    key: [0, 'randomize'],
  },
];

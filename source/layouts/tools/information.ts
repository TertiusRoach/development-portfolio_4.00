//--|🠊 layouts/tools/information.ts 🠈|--\\
/*--|🠋
  AI Code: Review Please 2026-11-11
  What: Everything the browser can honestly tell about the visitor's device, in one flat report.
  The first six fields are named exactly like PickPage in tralogfin-database.md, the rest are a
  proposal (not in the schema yet), so nothing here changes the confirmed shape on its own.
  Why: The rules need it.
  - GUIDELINES Section 12: the offline switch belongs to one device, so the device needs an ID.
  - R29: the server's clock wins, so the gap between the device's clock and the server's is measured.
    A clock wound back for offline entries (Daniel's trick) shows up here as a big offset or a jump.
  - Main_Over.ts: waitingTime (30s) was picked for Regular 3G, so the connection is named like DevTools.
  How to read it: collectInformation() builds the report, logInformation() prints it.
  Each reading is its own const below, and the names they need are worked out by the lets under them.
  Server only: userIP, country, lastLogin and offlineSince stay null here on purpose.
  The browser can't see its public IP. The server reads it from the request (getIP() in
  modules/server/MongoDB/REVIEW/landing.js), looks up its country, and compares that country with
  timeZone and languageRegion: a mismatch is the "is this IP trustworthy?" signal (VPN or proxy).
  Never collected: canvas, audio or font fingerprints, location, battery or hardware details.
  They identify a person without asking, and offlineDeviceId already tells devices apart openly.
🠉|--*/

//--|🠋 Type Definitions 🠋|--\\
type ScreenName = 'mobile-portrait' | 'tablet-squaring' | 'desktop-landscape';
type ProfileName =
  | 'DSL'
  | 'GPRS'
  | 'Wi-Fi'
  | 'Cached'
  | 'Unknown'
  | 'Good 2G'
  | 'Good 3G'
  | 'Regular 2G'
  | 'Regular 3G'
  | 'Regular 4G / LTE';
type ConnectionDetails = {
  effectiveType?: string; //--|🠈 Chrome & Edge only: 'slow-2g', '2g', '3g' or '4g' 🠈|--\\
  saveData?: boolean; //--|🠈 Chrome & Edge only: the visitor asked for less data 🠈|--\\
};
export interface InformationReport {
  //--|🠋 PickPage (tralogfin-database.md) 🠋|--\\
  userIP: string | null; //--|🠈 Server only: read from the request 🠈|--\\
  country: string | null; //--|🠈 Server only: looked up from userIP 🠈|--\\
  timeZone: string; //--|🠈 IANA name, like Africa/Johannesburg 🠈|--\\
  lastLogin: string | null; //--|🠈 Server only: set by the login system 🠈|--\\
  offlineSince: string | null; //--|🠈 Server only: set when the offline switch goes on 🠈|--\\
  offlineDeviceId: string | null; //--|🠈 A random ID this browser keeps, never a fingerprint 🠈|--\\

  //--|🠋 Proposed: Lookup (api.ipify.org) 🠋|--\\
  lookupIP: string | null; //--|🠈 AI Code: Review Please 2026-11-11 · What ipify saw; for display, never trusted like userIP 🠈|--\\
  countryIP: string | null; //--|🠈 AI Code: Review Please 2026-11-11 · The IP's country from api.country.is, like ZA; never trusted like country 🠈|--\\

  //--|🠋 Proposed: Clock (R29) 🠋|--\\
  deviceTime: string; //--|🠈 The device's own clock, UTC, never trusted on its own 🠈|--\\
  clockOffsetSeconds: number | null; //--|🠈 Device minus server; null when the server didn't answer 🠈|--\\
  clockJumpSeconds: number; //--|🠈 How far the device's clock was changed since the page opened 🠈|--\\
  timeZoneOffsetMinutes: number; //--|🠈 Minutes ahead of UTC: South Africa is 120 🠈|--\\

  //--|🠋 Proposed: Region 🠋|--\\
  language: string; //--|🠈 The browser's first language, like en-ZA 🠈|--\\
  languageRegion: string | null; //--|🠈 The region inside it, like ZA, to compare with country 🠈|--\\

  //--|🠋 Proposed: Software 🠋|--\\
  browserName: string;
  browserVersion: string | null;
  systemName: string;
  automated: boolean; //--|🠈 True when a script drives the browser (Selenium, Puppeteer) 🠈|--\\
  cookiesEnabled: boolean;

  //--|🠋 Proposed: Screen 🠋|--\\
  screenName: ScreenName; //--|🠈 The same three as the SCSS mixins 🠈|--\\
  viewportWidth: number;
  viewportHeight: number;
  screenWidth: number;
  screenHeight: number;
  pixelRatioPercent: number; //--|🠈 DevTools' DPR × 100, so it stays a whole number (Rule 6) 🠈|--\\

  //--|🠋 Proposed: Input & Preferences 🠋|--\\
  pointerType: 'none' | 'fine' | 'coarse'; //--|🠈 coarse = a finger, fine = a mouse or pen 🠈|--\\
  touchPoints: number;
  colourScheme: 'dark' | 'light';
  reducedMotion: boolean;

  //--|🠋 Proposed: Network 🠋|--\\
  online: boolean; //--|🠈 Only what the device believes: the server's last contact decides (Section 12) 🠈|--\\
  networkProfile: ProfileName; //--|🠈 The closest DevTools throttling profile 🠈|--\\
  downloadKbps: number | null;
  latencyMilliseconds: number | null;
  reportedType: string | null; //--|🠈 What Chrome & Edge say themselves; null in Firefox & Safari 🠈|--\\
  saveData: boolean | null;

  //--|🠋 Proposed: Loading 🠋|--\\
  loadMilliseconds: number | null; //--|🠈 From the first request to the page's load event 🠈|--\\
  downloadedKilobytes: number; //--|🠈 What actually came over the network; 0 when it all came from the cache 🠈|--\\

  //--|🠋 Proposed: Storage (TABLE.md Section 7) 🠋|--\\
  storagePersisted: boolean | null; //--|🠈 True when the browser promised to keep offline data 🠈|--\\
  storageQuotaMegabytes: number | null;
}

//--|🠋 DevTools Throttling Profiles 🠋|--\\
//--|🠊 Firefox's list, slowest download first. Kbps down, Kbps up, milliseconds of latency 🠈|--\\
const networkProfiles = [
  { profileName: 'GPRS', downloadKbps: 50, uploadKbps: 20, latencyMilliseconds: 500 },
  { profileName: 'Regular 2G', downloadKbps: 250, uploadKbps: 50, latencyMilliseconds: 300 },
  { profileName: 'Good 2G', downloadKbps: 450, uploadKbps: 150, latencyMilliseconds: 150 },
  { profileName: 'Regular 3G', downloadKbps: 750, uploadKbps: 250, latencyMilliseconds: 100 },
  { profileName: 'Good 3G', downloadKbps: 1536, uploadKbps: 750, latencyMilliseconds: 40 },
  { profileName: 'DSL', downloadKbps: 2000, uploadKbps: 1000, latencyMilliseconds: 5 },
  { profileName: 'Regular 4G / LTE', downloadKbps: 4000, uploadKbps: 3000, latencyMilliseconds: 20 },
  { profileName: 'Wi-Fi', downloadKbps: 30000, uploadKbps: 15000, latencyMilliseconds: 2 },
] as const;

//--|🠋 Collecting 🠋|--\\
export async function collectInformation(
  //--|🠋 Information 🠈|--\\
  pageName: string,
  //--|🠊 blockName: string, 🠈|--\\
  //--|🠊 labelName: string, 🠈|--\\
): Promise<InformationReport> {
  //--|🠋 The four readings that wait on something: the server's clock, the browser's storage, ipify and country.is 🠋|--\\
  const [clockReading, storageReading, lookupIP, countryIP] = await Promise.all([
    readClock(pageName),
    readStorage(pageName),
    readLookup(pageName), //--|🠈 AI Code: Review Please 2026-11-11 🠈|--\\
    readCountry(pageName), //--|🠈 AI Code: Review Please 2026-11-11 🠈|--\\
  ]);
  const networkReading = readNetwork(pageName);
  const screenReading = readScreen(pageName);
  const softwareReading = readSoftware(pageName);
  const regionReading = readRegion(pageName);
  const inputReading = readInput(pageName);

  return {
    //--|🠋 PickPage 🠋|--\\
    userIP: null,
    country: null,
    timeZone: regionReading.timeZone,
    lastLogin: null,
    offlineSince: null,
    offlineDeviceId: readDeviceId(pageName),

    //--|🠋 Lookup 🠋|--\\
    lookupIP: lookupIP, //--|🠈 AI Code: Review Please 2026-11-11 🠈|--\\
    countryIP: countryIP, //--|🠈 AI Code: Review Please 2026-11-11 🠈|--\\

    //--|🠋 Clock 🠋|--\\
    deviceTime: clockReading.deviceTime,
    clockOffsetSeconds: clockReading.clockOffsetSeconds,
    clockJumpSeconds: clockReading.clockJumpSeconds,
    timeZoneOffsetMinutes: regionReading.timeZoneOffsetMinutes,

    //--|🠋 Region 🠋|--\\
    language: regionReading.language,
    languageRegion: regionReading.languageRegion,

    //--|🠋 Software 🠋|--\\
    browserName: softwareReading.browserName,
    browserVersion: softwareReading.browserVersion,
    systemName: softwareReading.systemName,
    automated: softwareReading.automated,
    cookiesEnabled: softwareReading.cookiesEnabled,

    //--|🠋 Screen 🠋|--\\
    screenName: screenReading.screenName,
    viewportWidth: screenReading.viewportWidth,
    viewportHeight: screenReading.viewportHeight,
    screenWidth: screenReading.screenWidth,
    screenHeight: screenReading.screenHeight,
    pixelRatioPercent: screenReading.pixelRatioPercent,

    //--|🠋 Input & Preferences 🠋|--\\
    pointerType: inputReading.pointerType,
    touchPoints: inputReading.touchPoints,
    colourScheme: inputReading.colourScheme,
    reducedMotion: inputReading.reducedMotion,

    //--|🠋 Network 🠋|--\\
    online: networkReading.online,
    networkProfile: networkReading.networkProfile,
    downloadKbps: networkReading.downloadKbps,
    latencyMilliseconds: networkReading.latencyMilliseconds,
    reportedType: networkReading.reportedType,
    saveData: networkReading.saveData,

    //--|🠋 Loading 🠋|--\\
    loadMilliseconds: networkReading.loadMilliseconds,
    downloadedKilobytes: networkReading.downloadedKilobytes,

    //--|🠋 Storage 🠋|--\\
    storagePersisted: storageReading.storagePersisted,
    storageQuotaMegabytes: storageReading.storageQuotaMegabytes,
  };
}
export async function logInformation(
  //--|🠋 Information 🠈|--\\
  pageName: string,
  //--|🠊 blockName: string, 🠈|--\\
  //--|🠊 labelName: string, 🠈|--\\
): Promise<void> {
  const informationReport = await collectInformation(pageName);
  console.log(`|🠊 Information: <div id="${pageName}-body"> 🠈|`);
  console.table(informationReport); //--|🠈 One row per field: easy to read, easy to copy 🠈|--\\
}

//--|🠋 Readings 🠋|--\\
//--|🠊 offlineDeviceId: made once, kept in this browser until its site data is cleared 🠈|--\\
const readDeviceId = (_pageName: string): string | null => {
  let deviceId = null as string | null;
  try {
    deviceId = localStorage.getItem('offlineDeviceId');
    if (deviceId === null) {
      deviceId = createDeviceId();
      localStorage.setItem('offlineDeviceId', deviceId);
    }
  } catch (error) {
    deviceId = null; //--|🠈 Private windows can refuse storage: no ID rather than a new one every visit 🠈|--\\
  }
  return deviceId;
};
//--|🠊 AI Code: Review Please 2026-11-11 · lookupIP: the browser asks api.ipify.org which address it came from 🠈|--\\
/*--|🠋
  Why: GitHub Pages has no server of ours, so nothing else can see the visitor's IP yet.
  Safe enough: HTTPS only, no key, no cookies, open source, and ipify says it keeps no logs.
  Limits: an ad blocker can block it (then it's null), and anyone can fake what the browser
  reports, so it never replaces userIP. When Express is hosted, the server fills userIP itself.
  api.ipify.org answers with IPv4; api64.ipify.org would answer with IPv6 when the visitor has it.
🠉|--*/
const readLookup = async (_pageName: string): Promise<string | null> => {
  const abortController = new AbortController();
  /*--|🠋
    5 minutes: on Regular 3G the answer queues behind the page's own downloads.
    The dev server (npm run app) sends several MB unminified, which keeps a 750 Kbps line
    busy for over a minute; the deployed build is a fraction of that.
  🠉|--*/
  const abortTimer = setTimeout(() => abortController.abort(), 300000);
  let lookupIP = null as string | null;
  try {
    const lookupResponse = await fetch('https://api.ipify.org?format=json', { signal: abortController.signal });
    const lookupAnswer = (await lookupResponse.json()) as { ip?: string }; //--|🠈 The answer looks like { "ip": "102.0.0.1" } 🠈|--\\
    lookupIP = lookupAnswer.ip ?? null;
  } catch (error) {
    lookupIP = null;
    //--|🠊 Says why: AbortError = too slow, TypeError = blocked (tracking protection, ad blocker) or offline 🠈|--\\
    const errorName = (error as Error).name as string;
    switch (errorName) {
      case 'AbortError':
        console.log(`|--🠊 Warning: api.ipify.org took longer than 5 minutes, lookupIP stays null, tools/information.ts 🠈--|`);
        break;
      default:
        console.log(`|--🠊 Warning: api.ipify.org was blocked or unreachable (${errorName}), lookupIP stays null, tools/information.ts 🠈--|`);
        break;
    }
  } finally {
    clearTimeout(abortTimer);
  }
  return lookupIP;
};
//--|🠊 AI Code: Review Please 2026-11-11 · countryIP: the browser asks api.country.is which country its IP belongs to 🠈|--\\
/*--|🠋
  Why: ipify only answers with the IP, its country lookup needs a paid key.
  Safe enough: HTTPS only, no key, no cookies, open source (github.com/hakanensari/country).
  Limits: the same as lookupIP. An ad blocker can block it, and anyone can fake it, so it never
  replaces country. When Express is hosted, the server looks up country from userIP itself.
  Trustworthy IP: countryIP that disagrees with timeZone and languageRegion hints at a VPN or proxy.
🠉|--*/
const readCountry = async (_pageName: string): Promise<string | null> => {
  const abortController = new AbortController();
  const abortTimer = setTimeout(() => abortController.abort(), 300000); //--|🠈 5 minutes, the same as readLookup() 🠈|--\\
  let countryIP = null as string | null;
  try {
    const countryResponse = await fetch('https://api.country.is/', { signal: abortController.signal });
    const countryAnswer = (await countryResponse.json()) as { ip?: string; country?: string }; //--|🠈 The answer looks like { "ip": "102.0.0.1", "country": "ZA" } 🠈|--\\
    countryIP = countryAnswer.country ?? null;
  } catch (error) {
    countryIP = null;
    //--|🠊 Says why: AbortError = too slow, TypeError = blocked (tracking protection, ad blocker) or offline 🠈|--\\
    const errorName = (error as Error).name as string;
    switch (errorName) {
      case 'AbortError':
        console.log(`|--🠊 Warning: api.country.is took longer than 5 minutes, countryIP stays null, tools/information.ts 🠈--|`);
        break;
      default:
        console.log(`|--🠊 Warning: api.country.is was blocked or unreachable (${errorName}), countryIP stays null, tools/information.ts 🠈--|`);
        break;
    }
  } finally {
    clearTimeout(abortTimer);
  }
  return countryIP;
};
//--|🠊 R29: the server's Date header is the true time, the device's clock is only compared to it 🠈|--\\
const readClock = async (_pageName: string) => {
  const deviceNow = Date.now() as number;
  /*--|🠋
    clockJumpSeconds: performance.timeOrigin is the device's clock when the page opened,
    and performance.now() counts real time since then, even when the clock is changed.
    Added together they are what the clock should say; any gap is a change made by hand.
  🠉|--*/
  const expectedNow = (performance.timeOrigin + performance.now()) as number;
  let clockOffsetSeconds = null as number | null;
  try {
    const askedAt = Date.now() as number;
    const serverResponse = await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
    const answeredAt = Date.now() as number;
    const serverDate = serverResponse.headers.get('Date');
    if (serverDate !== null) {
      const halfTrip = ((answeredAt - askedAt) / 2) as number; //--|🠈 The answer left the server halfway through the trip 🠈|--\\
      const serverNow = (new Date(serverDate).getTime() + halfTrip) as number;
      clockOffsetSeconds = Math.round((answeredAt - serverNow) / 1000) as number; //--|🠈 The Date header counts whole seconds 🠈|--\\
    }
  } catch (error) {
    clockOffsetSeconds = null; //--|🠈 Offline, or the server didn't answer 🠈|--\\
  }
  return {
    deviceTime: new Date(deviceNow).toISOString(),
    clockOffsetSeconds: clockOffsetSeconds,
    clockJumpSeconds: Math.round((deviceNow - expectedNow) / 1000) as number,
  };
};
//--|🠊 TABLE.md Section 7: offline data only lasts if the browser promised to keep it 🠈|--\\
const readStorage = async (_pageName: string) => {
  let storagePersisted = null as boolean | null;
  let storageQuotaMegabytes = null as number | null;
  try {
    if (navigator.storage) {
      storagePersisted = await navigator.storage.persisted();
      const storageEstimate = await navigator.storage.estimate();
      if (storageEstimate.quota !== undefined) {
        storageQuotaMegabytes = Math.round(storageEstimate.quota / 1024 / 1024) as number;
      }
    }
  } catch (error) {
    storagePersisted = null;
  }
  return {
    storagePersisted: storagePersisted,
    storageQuotaMegabytes: storageQuotaMegabytes,
  };
};
//--|🠊 Speed is measured from the files this page already downloaded, so it costs no extra data 🠈|--\\
const readNetwork = (_pageName: string) => {
  const connectionDetails = (navigator as Navigator & { connection?: ConnectionDetails }).connection;
  const pageEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  const fileEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

  //--|🠋 Loading: the page itself 🠋|--\\
  let loadMilliseconds = null as number | null;
  let latencyMilliseconds = null as number | null;
  if (pageEntry !== undefined) {
    if (pageEntry.loadEventEnd > 0) {
      loadMilliseconds = Math.round(pageEntry.loadEventEnd - pageEntry.startTime) as number;
    }
    latencyMilliseconds = Math.round(pageEntry.responseStart - pageEntry.requestStart) as number; //--|🠈 Asked to first byte: one round trip 🠈|--\\
  }

  //--|🠋 Download speed: the biggest file that really came over the network 🠋|--\\
  let downloadedBytes = 0 as number;
  let biggestFile = null as PerformanceResourceTiming | null;
  for (let i = 0; i < fileEntries.length; i++) {
    const fileEntry = fileEntries[i];
    downloadedBytes = downloadedBytes + fileEntry.transferSize; //--|🠈 0 for cached files & other sites' files 🠈|--\\
    if (biggestFile === null || fileEntry.transferSize > biggestFile.transferSize) {
      biggestFile = fileEntry;
    }
  }
  let downloadKbps = null as number | null;
  if (biggestFile !== null && biggestFile.transferSize > 0) {
    const downloadMilliseconds = (biggestFile.responseEnd - biggestFile.responseStart) as number;
    if (downloadMilliseconds > 0) {
      downloadKbps = Math.round((biggestFile.transferSize * 8) / downloadMilliseconds) as number; //--|🠈 Bits per millisecond = kilobits per second 🠈|--\\
    }
  }

  return {
    online: navigator.onLine,
    networkProfile: nameProfile(downloadKbps, downloadedBytes),
    downloadKbps: downloadKbps,
    latencyMilliseconds: latencyMilliseconds,
    reportedType: connectionDetails?.effectiveType ?? null,
    saveData: connectionDetails?.saveData ?? null,
    loadMilliseconds: loadMilliseconds,
    downloadedKilobytes: Math.round(downloadedBytes / 1024) as number,
  };
};
//--|🠊 The same three queries as the SCSS, tablet first (see showingBootstrap() in frameworks.ts) 🠈|--\\
const readScreen = (_pageName: string) => {
  return {
    screenName: nameScreen(),
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    pixelRatioPercent: Math.round(window.devicePixelRatio * 100) as number,
  };
};
const readSoftware = (_pageName: string) => {
  const agentText = navigator.userAgent as string;
  return {
    browserName: nameBrowser(agentText),
    browserVersion: nameVersion(agentText),
    systemName: nameSystem(agentText),
    automated: navigator.webdriver === true,
    cookiesEnabled: navigator.cookieEnabled,
  };
};
const readRegion = (_pageName: string) => {
  const language = (navigator.language || 'en') as string;
  let languageRegion = null as string | null;
  try {
    languageRegion = new Intl.Locale(language).region ?? null; //--|🠈 'en-ZA' → 'ZA', 'en' → null 🠈|--\\
  } catch (error) {
    languageRegion = null;
  }
  return {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timeZoneOffsetMinutes: -new Date().getTimezoneOffset() as number, //--|🠈 getTimezoneOffset() counts behind UTC, so it's flipped 🠈|--\\
    language: language,
    languageRegion: languageRegion,
  };
};
const readInput = (_pageName: string) => {
  let pointerType = 'none' as 'none' | 'fine' | 'coarse';
  if (window.matchMedia('(pointer: coarse)').matches) {
    pointerType = 'coarse';
  } else if (window.matchMedia('(pointer: fine)').matches) {
    pointerType = 'fine';
  }
  let colourScheme = 'light' as 'dark' | 'light';
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    colourScheme = 'dark';
  }
  return {
    pointerType: pointerType,
    touchPoints: navigator.maxTouchPoints,
    colourScheme: colourScheme,
    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
};

//--|🠋 Names 🠋|--\\
let createDeviceId = (): string => {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID(); //--|🠈 Only on https:// and localhost 🠈|--\\
  }
  //--|🠊 Plain http:// on a phone over the network: 32 random hex characters instead 🠈|--\\
  const randomBytes = crypto.getRandomValues(new Uint8Array(16));
  let deviceId = '' as string;
  for (let i = 0; i < randomBytes.length; i++) {
    deviceId = deviceId + randomBytes[i].toString(16).padStart(2, '0');
  }
  return deviceId;
};
let nameScreen = (): ScreenName => {
  /*--|🠋
    Examples (DevTools' responsive sizes):
    854 × 480 → desktop-landscape (wider than 15.99/9)
    480 × 854 → mobile-portrait (narrower than 9/15.99)
    480 × 771 → tablet-squaring (in between)
  🠉|--*/
  switch (true) {
    case window.matchMedia('(max-aspect-ratio: 15.99/9) and (min-aspect-ratio: 9/15.99)').matches:
      return 'tablet-squaring';
    case window.matchMedia('(orientation: landscape)').matches:
      return 'desktop-landscape';
    default:
      return 'mobile-portrait';
  }
};
let nameProfile = (downloadKbps: number | null, downloadedBytes: number): ProfileName => {
  if (downloadedBytes === 0) {
    return 'Cached'; //--|🠈 Nothing came over the network, so there's nothing to measure 🠈|--\\
  }
  if (downloadKbps === null) {
    return 'Unknown';
  }
  //--|🠊 The fastest profile the measured speed still reaches 🠈|--\\
  let profileName = 'GPRS' as ProfileName;
  for (let i = 0; i < networkProfiles.length; i++) {
    if (downloadKbps >= networkProfiles[i].downloadKbps) {
      profileName = networkProfiles[i].profileName;
    }
  }
  return profileName;
};
let nameBrowser = (agentText: string): string => {
  //--|🠊 Order matters: Edge and Opera also say "Chrome", Chrome also says "Safari" 🠈|--\\
  switch (true) {
    case agentText.includes('Firefox/'):
      return 'Firefox';
    case agentText.includes('Edg/'):
      return 'Edge';
    case agentText.includes('OPR/'):
      return 'Opera';
    case agentText.includes('SamsungBrowser/'):
      return 'Samsung Internet';
    case agentText.includes('Chrome/'):
      return 'Chrome';
    case agentText.includes('Safari/'):
      return 'Safari';
    default:
      return 'Unknown';
  }
};
let nameVersion = (agentText: string): string | null => {
  const versionMatch = agentText.match(/(Firefox|Edg|OPR|SamsungBrowser|Chrome|Version)\/(\d+)/);
  if (versionMatch === null) {
    return null;
  }
  return versionMatch[2]; //--|🠈 Only the main number: 132, not 132.0.1 🠈|--\\
};
let nameSystem = (agentText: string): string => {
  //--|🠊 Order matters: Android also says "Linux", iPhones also say "Mac OS X" 🠈|--\\
  switch (true) {
    case agentText.includes('Android'):
      return 'Android';
    case agentText.includes('iPhone'):
      return 'iOS';
    case agentText.includes('iPad'):
      return 'iPadOS';
    case agentText.includes('Macintosh') && navigator.maxTouchPoints > 1:
      return 'iPadOS'; //--|🠈 iPads ask for the desktop site and say "Macintosh", but Macs have no touch screen 🠈|--\\
    case agentText.includes('Macintosh'):
      return 'macOS';
    case agentText.includes('Windows'):
      return 'Windows';
    case agentText.includes('CrOS'):
      return 'ChromeOS';
    case agentText.includes('Linux'):
      return 'Linux';
    default:
      return 'Unknown';
  }
};

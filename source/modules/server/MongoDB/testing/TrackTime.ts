//--|🠋 Track a Day 🠋|--\\
//--|🠊 MongoDB/testing/TrackTime.js 🠈|--\\
import baseline from './TraLogFin.json';

type Character = (typeof baseline.PickPage)[number];

interface Overtime {
  date: string; // 'YYYY-MM-DD'
  synced: boolean; // false until the server has it
  clientId: string; // UUID made in the browser
  employeeId: string; // matches PickPage _id
  start: string; // 'HH:MM'
  end: string; // 'HH:MM'
}

interface Database {
  PickPage: Array<Character>;
  TrackTime: Array<Overtime>;
}

let workingData: Database = structuredClone(baseline) as Database;

export default function TrackTime(): Database {
  return workingData;
}
//--|===|--\\

export const createEntry = (entry: Omit<Overtime, 'clientId' | 'synced'>): Overtime => {
  const newEntry: Overtime = { ...entry, clientId: crypto.randomUUID(), synced: false };
  workingData.TrackTime.push(newEntry);
  return newEntry;
};
export const readEntry = (entry: Omit<Overtime, 'clientId' | 'synced'>): Database => {
  return workingData;
};
export const updateEntry = (clientId: string, changes: Partial<Overtime>): void => {
  const found = workingData.TrackTime.find((entry) => entry.clientId === clientId);
  if (found) Object.assign(found, changes, { synced: false });
};
export const deleteEntry = (clientId: string): void => {
  workingData.TrackTime = workingData.TrackTime.filter((entry) => entry.clientId !== clientId);
};

export const resetEntries = (): Database => {
  workingData = structuredClone(baseline) as Database;
  return workingData;
};

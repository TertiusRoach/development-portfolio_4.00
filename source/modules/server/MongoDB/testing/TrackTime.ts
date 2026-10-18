//--|🠋 Track a Day 🠋|--\\
//--|🠊 MongoDB/testing/TrackTime.js 🠈|--\\
import baseline from './TraLogFin.json';

type Character = (typeof baseline.PickPage)[number];

interface TimeEntry {
  clientId: string; // UUID made in the browser
  employeeId: string; // matches PickPage _id
  date: string; // 'YYYY-MM-DD'
  start: string; // 'HH:MM'
  end: string; // 'HH:MM'
  synced: boolean; // false until the server has it
}

interface Database {
  PickPage: Array<Character>;
  TrackTime: Array<TimeEntry>;
}

let workingData: Database = structuredClone(baseline) as Database;

export default function TrackTime(): Database {
  return workingData;
}
//--|===|--\\
export function resetDatabase(): Database {
  workingData = structuredClone(baseline) as Database;
  return workingData;
}
export function addEntry(entry: Omit<TimeEntry, 'clientId' | 'synced'>): TimeEntry {
  const newEntry: TimeEntry = { ...entry, clientId: crypto.randomUUID(), synced: false };
  workingData.TrackTime.push(newEntry);
  return newEntry;
}
export function removeEntry(clientId: string): void {
  workingData.TrackTime = workingData.TrackTime.filter((entry) => entry.clientId !== clientId);
}
export function updateEntry(clientId: string, changes: Partial<TimeEntry>): void {
  const found = workingData.TrackTime.find((entry) => entry.clientId === clientId);
  if (found) Object.assign(found, changes, { synced: false });
}

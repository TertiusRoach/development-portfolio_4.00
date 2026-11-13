//--|▼| Tools (Import) |▼|--//
import { DataCreate } from 'code/tools/DataCreate';
import { DataErase } from 'code/tools/DataErase';
import { DataRead } from 'code/tools/DataRead';
import { DataUpdate } from 'code/tools/DataUpdate';

import { GetArray } from 'code/tools/GetArray';
import { GetColor } from 'code/tools/GetColor';
import { GetElement } from 'code/tools/GetElement';
import { GetEvent } from 'code/tools/GetEvent';
import { GetPath } from 'code/tools/GetPath';

//--|►| Default Data |◄|--//
export namespace DefaultData {
  export class initiateEvents {
    constructor() {
      new DataCreate.forBlock('departments');
      new DataCreate.forBlock('employees');
      new DataCreate.forBlock('tickets');

      /*--► console.log('--DefaultData.js Loaded'); ◄--*/
    }
  }
}

import { Environment, ApiTestHistoryFrame } from '../storage/index.model';
export interface TestServer {
  init: (receiveMessage: (message: any) => void) => void;
  send: (action: string, message: any) => void;
  formatRequestData: (apiData, opts: { env: Environment; beforeScript: string; afterScript: string }) => any;
  formatResponseData: (res) => { report: any; history: ApiTestHistoryFrame };
  close: () => void;
}

export class ServerMessage {
    method : string;
    params : any;
  
    constructor(method: string, paramType: string, paramValues?:any) {
      this.method = method;
      this.params = {type: paramType, values: paramValues};
    }
  
  }
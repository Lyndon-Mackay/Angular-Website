export enum dateRequest {
    add,
    getbyID,
    delete,
    addbyID
  
  }

export class dateRequestC {
    private parameter :string[]
    private dateR:dateRequest
  
    constructor(parameter:string[],dateR:dateRequest)
    {
      this.parameter = parameter;
      this.dateR = dateR;
    }
  }
export enum requestid
{
 getSpecificID
}
export class request{
  requestid:requestid;
  general:string;
  constructor (requestid,general)
  {
    this.requestid = requestid;
    this.general = general;
  }
}
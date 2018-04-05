export enum requestid
{
 getSpecificID,
 getCountry
}
export class request{
  requestid:requestid;
  attributeValue:string;
  constructor (requestid,attributeValue)
  {
    this.requestid = requestid;
    this.attributeValue = attributeValue;
  }
}
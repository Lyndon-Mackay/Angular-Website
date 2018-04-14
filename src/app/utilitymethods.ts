export function reversableComparitor(a,b,property:string,reverse:boolean):number{
    if (a[property] == b[property]) {
        return 0;
      }
      let rValue = 0;
      if (a[property] > b[property]) {
        rValue = 1;
      }
      else {
        rValue = -1;
      }
      if (this.reverse) {
        rValue *= -1;
      }
      return rValue;
}
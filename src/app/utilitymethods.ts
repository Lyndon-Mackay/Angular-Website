
export function reversableComparitor(a,b,property:string,reverse:boolean):number{

  //prefer numbered sorting so checking for a potential number
    if( isNumber(a[property]) && isNumber(b[property]))
    {
      a[property] = +a[property];
      b[property] = +b[property];
    }
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
      if (reverse) {
        rValue *= -1;
      }
      return rValue;
}
/**
 * opposite of isNaN used for semantic reasons.
 * Utils is number method not working
*/
function isNumber(a:any)
{
  return !isNaN(a);
}
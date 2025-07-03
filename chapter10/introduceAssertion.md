use Assertion for two purposes
  
  1. catch possible programming errors
  2. make the assumptions explicit
   
   User input should be validated and return exception if it is not a valid input.

```ts
function divideBy(a,b){
  assert(b > 0);
  return a / b;
}
```

A data looks like this
```ts
{
  name: "Acme Boston",
  location: "Boston, MA",
  customer:{
    name: "Acme Industries",
    billingPlan: "plan-451",
    paymentHistory:{
      weeksDelinquentInLastYear: 7
    }
  }
}
```

however, in some cases, the customer isnt known.
```ts
{
  name: "Acme Boston",
  location: "Boston, MA",
  customer: null
}
```

in the logic, there are multple places to check the unknown customer
```ts
const site = acquireSiteData();
const aCustomer = site.customer;
let customerName;
if (aCustomer === "unknown") customerName = "occupant";
else customerName = aCustomer.name;
```


```ts
const plan = (aCustomer === "unknown") ? registry.billingPlans.basic : aCustomer.billingPlan
```

```ts
const weekDelinquent = (aCustomer=== "unknown") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
```

an improvement would be run the site data with a transform function
```ts
const site = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
let customerName;
if (isUnknown(aCustomer)) customerName = "occupant";
else customerName = aCustomer.name;

function enrichSite(inputSite){
  const result = _.cloneDeep(inputSite)
  const unknownCustomer = {
    isUnknown: true,
    name: "occupant",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0
    }
  }

  if(isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer){
  if (aCustoemr == "unknown") return true;
  else return aCustomer.isUnknown;
}
```

The client code would be cleaner now as the logic to handle special/ null case is now provided by the default value in customer object
```ts
const site = acquireSiteData();
const aCustomer = site.customer;
let customerName;
customerName = aCustomer.name;
```


```ts
const plan = aCustomer.billingPlan
```

```ts
const weekDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
```
let result;
if (availableResources.length === 0) {
  result = createResource();
  allocateResources.push(result);
} else {
  result = availableResources.pop();
  allocateResources.push(result);
}
return result;
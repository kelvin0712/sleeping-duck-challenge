# Questions Part 
## Part 1 
When setting the state within the toggleItem function, I used this code to modify the array:
`this.setState(({ items }) => ({   items: items.map((item, i) => (index === i ? { ...item, complete: !item.complete } : item)), }));`
#### Questions 
1. Why would I have passed a function to the `setState` call, rather then modifying this.state?
- Because acutally `this.props` and `this.state` could be updated asynchronously, so that the value will not be reliable for calculating the next state. By passing the function as the first argument of `setState`, the result will be more accurate and reliable.

2. What could be the reason for me mapping over the entire array rather than modifying the array directly (IE. `{items[index].complete = !item[index].complete}`)? And is there any possible reasons for using the object spread syntax within the loop?
- React relies on the reference to the state object for detecting changes if we just directly mutate the state object and not create a new value, react would not know that the state is updated.
- If using the `map` function then we will not directly mutate the orignial array, but the cloned array created by `map` will be modified instead.  
- Each item is actually only a reference to the object in memory, if we change the property of the object in the callback function, we will actually change the property via the reference and it will mutate the original object. The spread operator helps create a new empty object for each to-do item in the array and assign the properties from old objects to them, respectively. Thus, we will get an object with a new reference, so we are not going to modify the old one.

## Part 2 
Currently, we use the array index as the way to know what to-do item we are toggling, as well as using them for the `key` prop when rendering the list.
#### Questions
1. Generally, what drawbacks—if any—does this have and how would you solve them?
- For example, if we `unshift` a to-do item or remove something in the middle of the array. The `key` of each element will no longer be the same as before anymore. The solution could be adding a unique property to each item such as an `id`, it will not change like `index` when the array is modified. 

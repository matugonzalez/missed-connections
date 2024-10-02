# What I Learned

## Comparing Objects
When comparing objects, you can't do the same as comparing primitive data types.

```
    let a = { name: 'Joan', age: 25};
    let b = {name: 'Joan', age:25};

    console.log(a === b || a == b); // false
```

In JavaScript you could find various solutions to this subject:

1. You can compare objects using `JSON.stringify()` Function.

    ```
        let a = { name: 'Joan', age: 25};
        let b = { name: 'Joan', age: 25};

        console.log(JSON.stringify(a) === JSON.stringify(b)); // true
    ```
    The `JSON.stringify()` function converted both objects into JSON strings, and since both `a` and `b` have the same properties and values, the result is true.

    But using it, is not always the right choice:
    
    - When using `JSON.Stringify()`, the order of the keys matters:

        ```
            let a = { name: 'Joan', age: 25};
            let b = { age: 25, name: 'Joan'};

            console.log(JSON.stringify(a) === JSON.stringify(b)); // false
        ```
    - JSON doesn't represent all types, what happens when the value of one key is undefined:
        
        ```
            let a = { name: 'Joan',};
            let b = { name: 'Joan', age: undefined};

            console.log(JSON.stringify(a) === JSON.stringify(b)); // false
        ```
        The result is unexpected. It should have been `false` but returned as `true` because JSON  ignores keys whose values are undefined.

2. You can compare objects using the Lowdash library `_.isEqual()` Method
    With this method you will get the 'right' results on the test done before.

## Array.flatMap()
The `flatMap()` method of arrays returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.

For each element, it produces an array of new elements, and concatenates the resulting arrays together to form a new array.

 It is identical to a `map()` followed by a `flat()` of depth 1 `(arr.map(...args).flat())`, but slightly more efficient than calling those two methods separately.
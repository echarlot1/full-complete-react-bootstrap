# Full react, bootstrap, tailwindcss, typescript & javascript documentation

### render random letter on the screen
1. create a fuction that generate random number, which takes an argument (number  of element that is in the array)
```const generateRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };```
  ```Math.floor()``` static method that rounds down and return the largest integer less or equal to the given number. For example: ``` console.log(Math.floor(5.95));
// Expected output: 5
console.log(Math.floor(-5.05));
// Expected output: -6 ```

Here's the link to all the Math methods: [title](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
2. ``` {titles[generateRandomInt(titles.length - 1)]} ``` where tiles is the array list.
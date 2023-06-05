# Make It Real - MiPrimeraAPIExpress

solution to my first api

## Table of contents

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview :

-the first api is created where we can make different requests through espress() and prisma.

### The challenge

-It was a good challenge, where we handle http requests, with the help of express and connect to the page we need with cors(),and prisma

The challenge is to have a table with the help of

### Screenshot

![]()

## My process

### Built with

-prisma
-express
-javascript
-cors()
-express.json()

### What I learned

create api, where a server communicates with our program,
we leave an example:

```js
async function getAllData() {
  const contacts = await prisma.contact.findMany();
  return contacts;
}

async function getDataById(id) {
  const record = await prisma.contact.findUnique({
    where: {
      id,
    },
  });
  return record;
}
```

### Continued development

- I will continue practicing to have a better handling of DOM, studying and consulting my mentors so that every day I improve my knowledge.

### Useful resources

- https://www.prisma.io/

## Author

- email - [guialexander1@gmail.com]
- Twitter - [@guialexander1](https://www.twitter.com/guialexander1)

## Acknowledgments

-I want to thank the make it real family since it has given me a new vision of my working life to improve and get out of the comfort zone and know that we can give more than what we already know

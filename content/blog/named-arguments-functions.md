---
title: 'Named arguments — Functions that get and return Objects'
description: Brought to you by Object destructuring and shorthand property names!
date: '2018-08-08T14:06:07.866Z'
categories: ''
tags: ['JavaScript']
slug: named-arguments-functions
---

Imagine this piece of code:

```js
// some code...

apiRequest(
  'products',
  'GET',
  { category: 3 },
  ['Content-Type: text/plain'],
  function(response) { ... },
  null,
  true
)

// some more code...
```

If I were to ask you: “Can you explain me every parameter?” you’d have two options:

1.  Wild guessing. It might be easy sometimes, because of context: the first parameter is probably the endpoint we are requesting, we are doing a GET request, we only want parameters of the category with ID=3… and so on. But what about the three last parameters?
2.  Go to `apiRequest()` definition, and read its parameter definition and, in case you still have doubts, dive into the implementation to see how they work together.

Both are suboptimal solutions that require brain power.

I wish we had a way to provide [named parameters](https://en.wikipedia.org/wiki/Named_parameter), similar as what we do in Python or Kotlin, for instance.

Oh wait.

We _do_ have a similar way!

## Enter object destructuring and shorthand property names!

_(Sounds harder than it is)_

We know that this:

```js
var someObject = { a: 1, b: 2, c: 3 }
var { a: a, b: c, c: c } = someObject
```

will create three variables (`a`, `b`, and `c`) with the values of the object (1, 2, and 3, respectively).

We also know that, given an object key/value pair with the same name, we can remove one of them and achieve a terser syntax:

```js
var someObject = { a: 1, b: 2, c: 3 }
var { a, b, c } = someObject
```

This would yield exactly the same result as before.

Finally, we know we can pass Objects as function parameters, obviously.

Why not merging this three things we know?

```js
// notice the curly braces! we are passing an object now
apiRequest({
  endpoint: 'products',
  method: 'GET',
  getParams: { category: 3 },
  headers: ['Content-Type: text/plain'],
  callback: function(response) {},
  timeout: 0,
  authRequest: true,
})

// somewhere else:

// notice the curly braces! we are receiving an object now
function apiRequest({
  endpoint,
  method,
  getParams,
  headers,
  callback,
  timeout,
  authRequest,
}) {
  //...
}
```

What happened here? Instead of N parameters, now `apiRequest` is just expecting a single object. We are immediately _destructuring_ it into some variables, that happen to have the same name as the parameters.

And notice our function call. Now it “explains” what is every parameter. Context all over the place!

Isn’t it great?

## But wait, there’s more!

Did you know that you can provide default values when destructuring an object?

```js
var someObj = { a: 1, b: 2 }

var { a, b, c = 123456 } = someObj

// a = 1
// b = 2
// c = 123456
```

now we can improve our `apiRequest` function by providing some default values to prevent nasty edge cases and also avoid repetition:

```js
function apiRequest({
  endpoint,
  method = 'GET',
  getParams = {},
  headers = ['Content-Type: text-plain'],
  callback = () => {},
  timeout = 0,
  authRequest = true,
} = {}) {
  //...
}
```

We set some default sensible values. This way we avoid passing some usual values (such as the `method` or if the request has to be authenticated).

Imagine a `authApiRequest` that extends `apiRequest` were we set the token for each request using the default value for the `headers` attribute:

Notice that we also provide some default value (an empty object) **for the whole object** (line 9) and **also for the getParams parameter** (line 4). You should always do this to avoid nasty bugs when trying to access nested properties on undefined objects.

Our function call would look like this now:

```js
apiRequest({
  endpoint: 'products',
  getParams: { category: 3 },
})
```

Way cleaner, right?

This pattern is called **named parameters** (or named arguments), and we can emulate it in Javascript using a plain-old Javascript object plus some ES6 magic and syntax sugar. Neat!

Apart from default values, we can then create specialized versions of our `apiRequest` function. Some naive examples:

```js
function authApiRequest (params) {
 const token = 'Bearer whatever'

  return apiRequest(
    ...params,
    { headers: ...params.headers, Authentication: token }
  )
}
```

or even:

```js
function postRequest (params) {
  const token = 'Bearer whatever'

  return  apiRequest(
   ...params,
   method: 'POST',
   { headers: ...params.headers, Authentication: token }
  )
}
```

## Recap: benefits of passing and receiving objects as parameters

1.  We provide **context** to our parameters. It’s easy to understand what are our parameters if we tag them with a key.
2.  Goodbye order! We didn’t mention that in the post, but Objects are unordered structures, so **we are no longer tied to positional arguments**.
3.  This non-ordered thing has a nice side-effect: we no longer need to pass lists of nulls or whatever to match the position of the sixth argument: `someFunction(arg1, arg2, null, null, arg5)`. Provide `null` as default value for arg3 and arg4, and use an object. You’ll just need 3 pairs of key values.
4.  Default values! We can define **sensible default values** and reduce boilerplate for common use cases.
5.  We can use the same pattern for returning values. Store them into an Object, and return the whole object.
6.  If you use TypeScript, create an **interface** for the object parameter which, IMHO, will look nice that several inline typing annotations. But’s that just stylistic, so you might disagree :)

## Warning #1: This is not an excuse to create monstruous function signatures

Ok, we have great tools and we use them to overcome some language shortcomings.

But we should still create **small,** [**SRP-compliant**](https://en.wikipedia.org/wiki/Single_responsibility_principle) **functions** that receive as few parameters as possible.

[Partial application](https://hackernoon.com/partial-application-of-functions-dbe7d9b80760) could help you achieve a more readable set of functions.

_Rule of thumb_: We don’t like Boolean parameters. Usually, a Boolean parameter means two functions inside of one. Robert C. Martin ([and Martin Fowler](https://www.martinfowler.com/bliki/FlagArgument.html)) call this “Flag arguments”.

Contrived example:

```js
function getUsersList ({ includeInactiveUsers = false }) {...}

getUsersList() // what
getUsersList(true) // the fuck
```

We should aim for something like the following:

```js
function getActiveUsersList () { ... }

function getInactiveUsersList () { ... }

function getUsersList () {
  return [...getActiveUsersList(), ...getInactiveUsersList()]
}
```

…you might want to create a single function to query the database/whatever to get the filtered user list, instead of doing so in both helper functions. You get the idea.

## Warning #2: This is just a pattern

If you create a function called `getUserAddressById`_(?)_ that only takes a parameter, well, we all know that the parameter is gonna be the ID. Or at least, it should. If it doesn’t, please refer to warning #1.

I mean, don’t rush into your codebase and start dropping objects all over the place. As usual, patterns and models are sometimes useful, but not always.

Use them to **clarify intent**. To provide some meaning to the values passed on a function declaration. To provide some default values. In short: make your code easier to understand, read, and maintain.

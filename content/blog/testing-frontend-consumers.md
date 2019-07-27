---
title: Code consumers on the front-end
description: ''
date: '2019-05-19T07:36:01.570Z'
categories: ''
tags: []
slug: frontend-code-consumers
---

If I gave you a stupid funcion such as `const sum = (a, b) => a + b`, you'd know how to test it right away, right? 

You'd do something like the following:

```js
test('sums two numbers', () => {
  expect(sum(1,2)).toBe(3)
})
```

Pretty straight forward. It was simple because the function itself was simple, but also because we had the right mental model waiting for us:

`input -> Function -> output`

Given a specific input, we only had to expect the appropiate output. That's it.

Things start to get more interesting when we are not talking about a sum function, but a more complex piece of code. How would it look if we were to test a Vue component, for instance?

`input -> Component -> output`

Okay, that was easier than expected. If we replace the _function_ part with a _component_ (which is actually just a function, but that's another story), our mental model still holds true.

But... what about `inputs` and `outputs`? In our previous example they were just numbers. That's easy.


## Enter code consumers

When talking about UI components, first we need to make sure we understand who's gonna consume (use) our code. We need to handle a couple of them:

1) The end user. The person who's gonna interact with your components.

2) The developer. The person who's gonna import your components and use them to developer their app. _(Note: you are your own code's consumer. Let it sink.)_

Our components need to fill everybody's requirements, so we have to bear that in mind when developing them.

Yeah, whatever. That was interesting, but we were talking about inputs and outputs. 


## Back to inputs and outputs

So, what inputs and outputs could be expect from a Vue component that's being used by either an end user or a developer?

Let me use a table:

| Consumer | Input        | Output        |
| -------- | ------------ | ------------- |
| User     | Interactions | Side Effects  |
| Dev      | Props        | DOM and Emits |


By "interactions" I mean clicking, typing, scrolling,... any kind of "human" interaction you could expect. That's what end users do, right?

By "Side Effects" I mean sending HTTP requests, creating a Cookie, updating the LocalStorage...

By "Props" I mean... well, props.

By "DOM" and "Emits" I mean both HTML elements rendered on the screen (a.k.a. the DOM) and emitted events (you know, with `this.$emit('whatever')`).


That's mostly it! 99% of times, that's what you'd need to bear in mind when testing a front-end component (YMMV depending on the framework you use - React components won't emit, for instance).

When testing a Vue component, 

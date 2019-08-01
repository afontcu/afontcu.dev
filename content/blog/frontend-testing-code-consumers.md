---
title: 'Front-end Testing: Who am I testing for?'
description: ''
date: '2019-08-02T07:46:01.570Z'
categories: ''
tags: ['Testing']
slug: frontend-testing-code-consumers
---

If I gave you a really compelx function such as

```ts
function sum (a, b) {
  return a + b
}
```

You'd know how to test it right away. You'd do something like the following:

```js
test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})

test('JavaScript being JavaScript', () => {
  expect(sum(null, undefined)).toBe(NaN)
  expect(sum(null, null)).toBe(0)
})
```

Right? Pretty straight forward. Why was it simple, though? Well, yes, because a `sum()` function is "easily tested", right? But also because **we had the right mental model** in our head:

```
input ➡ Function ➡ output
```

Given a specific input (`1` and `2`), we only had to expect the appropiate output (`3`). That's it. We might have not expressed it this way, but that's how our brain thought about the problem in front of us.

Things start to get more interesting when we talking about more complex piece of code. How would it look if we were to test a Vue/React/Svelte component, for instance?

Well, what if we try to build knowledge from well-established truths?

```
input ➡ Component ➡ output
```

Okay, looks good. If we replace _function_ with _component_ (which is actually just a function, but that's another story), **our mental model still holds true**.

But... what about `inputs` and `outputs`? In our previous example they were just numbers. And now?

How can we define inputs and outputs in the front end?


## Enter code consumers

When talking about UI components, first thing we need to define is who's gonna consume (use) our code:

1) **The end user**. The person who's using your app/web/whatever.

2) **The developer**. The person who's gonna import your components and use them to developer their app. _(Note: you are your own code's consumer. Let it sink.)_

Our components need to fulfill everybody's requirements, so we have to bear that in mind when developing them.


## Back to inputs and outputs

So, what inputs and outputs could be expect from a Vue component that's being used by either an end user or a developer?

An **end user** is gonna _interact_ with the component.

A **developer** is gonna pass down _props_ to it.

And they both are gonna expect the same outputs: _DOM elements_ and _Side Effects_.


Let me drop a beautiful table!

| Inputs        | Examples                                    |
|---------------|---------------------------------------------|
| Interactions  | clicking, typing... any "human" interaction |
| Props         | The arguments a component receives          |

| Outputs       | Examples                                                   |
|---------------|------------------------------------------------------------|
| Side Effects* | HTTP requests, Cookies, `console.log()`, `this.$emit()`... |
| DOM elements  | `<input>`, `<div>`, whatever. Elements on the screen       |

That's mostly it! 99% of times, that's what you'd need to bear in mind when testing a front-end component.

_*: Testing side effects such as [API calls](https://afontcu.dev/testing-api-calls/) is where test doubles shine._

## Be aware of the dreaded third user

<abbr title="Too Long; Didn't Read">tl;dr</abbr>: If a test relies on implementation details, then this tests has become a third user. And, as we already discussed, you need to fulfill your users' requirements.

Let's see an example (taken from [Vue Testing Library](https://github.com/testing-library/vue-testing-library) docs. Disclaimer, I wrote this) using a dumb Counter component:

```html
<template>
  <div>
    <p class="paragraph">Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}
</script>
```

### Don't do this

If our test does something like:

```js
import { mount } from '@vue/test-utils'

test('text updates on clicking', () => {
  const wrapper = mount(Counter)
  const paragraph = wrapper.find('.counter')

  expect(paragraph.text()).toBe('Times clicked: 0')

  wrapper.vm.increment()
  wrapper.vm.increment()

  expect(paragraph.text()).toBe('Times clicked: 2')
})
```

Then your test is doing something different from the user and the developer. It is querying the component using CSS classes, and calling `increment()` directly.

Is the end user doing that? No.

Is the developer consuming the component doing that? No.

Then the test has become a third consumer. And now your component has to adapt to its needs.

This is what we call **relying on implementation details**.

### Instead, do this

```js
import { render, fireEvent } from '@testing-library/vue'

test('text updates on clicking', async () => {
  const { getByText } = render(Counter)

  // getByText returns the first matching node for the provided
  // text, and throws an error if no elements match or if more
  // than one match is found.
  getByText(/you clicked 0 times/i)      // query as a user would

  const button = getByText(/increment/i) // query as a user would
  
  // Dispatch a native click event to our button element.
  await fireEvent.click(button)          // act as a user would
  await fireEvent.click(button)          // act as a user would

  getByText(/you clicked 2 times/i)      // query as a user would
})
```

We are now querying and acting upon our component as other consumers would. We are "reading" text, and we are interacting (as close as possible) as an end user.

Thus, we are still dealing with just two consumers. That's good. The test is only going to fail if either the `inputs` or the `outputs` of our component change. And that's the expected behavior.

Notice how [Vue Testing Library](https://github.com/testing-library/vue-testing-library) is providing the right tools to avoid creating a third user.

You should pick tools you don't have to fight against. Use tools that [resemble the way your software is used](http://testing-library.com/).


## Recap

1. **UI components have two consumers**: your end users, and the developers using them. You are one of them.
2. You should think of components as black boxes, so you'd poke them from the outside (via props or interactions) and assert that the appropiate DOM elements and side effects have ocurred.
3. There's a **hidden third user** for your component: a test. If your test is doing something different from end users and developers, then you need to take it into account.
4. Your testing tools should help you stay on track. [Vue Testing Library](https://github.com/testing-library/vue-testing-library) (and all the [Testing Library](https://testing-library.com) toolset) does a pretty good job achieving that.

Phew, that was long!
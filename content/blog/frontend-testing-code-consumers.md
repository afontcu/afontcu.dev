---
title: 'Front-end Testing and a tale of three users'
description: "How should we think about UI components when testing them?"
date: 2019-08-02
categories: ''
tags: ['Testing', 'Javascript']
slug: frontend-testing-code-consumers
---

If I gave you a really complex function such as

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

Felt easy. Why was it so simple, though?

You might say that `sum()` is "easily tested". Numbers in, number out.

Okay, that's interesting. So this is the mental model you used:

`input ➡ Function ➡ output`

So: Given a specific input, we only had to expect the appropiate output. This is one of the strengths of [Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0), but that's beyond the scope right now.

Let's focus now on more complex pieces of code. How would that mental model look if we were to test a Vue/React/Svelte component, for instance?

What if we try to build knowledge from well-established truths?

`input ➡ Component ➡ output`

Okay, looks good. If we replace _function_ with _component_ (which is actually just a function, but that's another story), now we have **a formula to test our components**.

What are the *inputs* and *outputs*, though? In our previous example they were just numbers. And now?

How can we define *inputs* and *outputs* in the front end?

## Enter our code users

We can't answer those questions (yet), but we can explore the problem from another perspective. First of all, let's define who's gonna use our component:

1) **The end user**. The person who's using your app/web/whatever.

2) **The developer**. The person who's gonna import your components and use them to developer their app. _(Note: you are your own code's consumer. Let it sink.)_

Each kind of user has its own requirements, and we need to make sure our component fulfills them.


## Back to inputs and outputs

Now that we defined our users, what inputs and outputs could we expect from them? (Notice how we keep building knowledge from previous truths):

An end user is gonna **interact** with the component.

A developer is gonna pass down **props** to it.

And they both are gonna expect some outputs: **DOM elements** and **side effects**.


Let me drop a beautiful table with examples!

| Inputs       | Examples                                    |
| ------------ | ------------------------------------------- |
| Interactions | clicking, typing... any "human" interaction |
| Props        | The arguments a component receives          |

| Outputs       | Examples                                                |
| ------------- | ------------------------------------------------------- |
| Side Effects* | HTTP requests, Cookies, `console.log()`, `this.$emit()` |
| DOM elements  | `<input>`, `<div>`, whatever. Elements on the screen    |

That's mostly it! 99% of times, that's **everything you need to focus on when testing a front-end component**.

_*: Testing side effects such as [API calls](https://afontcu.dev/testing-api-calls/) is where test doubles shine._

## Be careful of the dreaded third user

<abbr title="Too Long; Didn't Read">tl;dr</abbr>: If a test relies on implementation details, then the test becomes a third user. And you're gonna need to please it.

Let's see an example taken from [Vue Testing Library](https://github.com/testing-library/vue-testing-library) docs (*disclaimer, I wrote it*) using a dumb Counter component:

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

Let's see a couple of ways of testing this totally useful component.

### Don't do this

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

Because then your test is doing something different from the user and the developer. It is querying the component using CSS classes, and calling `increment()` directly.

Is the end user doing that? No.

Is the developer consuming the component doing that? Nope.

Then the test has become a third consumer. This is what we call **relying on implementation details**.

### Instead, do this

```js
import { render, fireEvent } from '@testing-library/vue'

test('text updates on clicking', async () => {
  const { getByText } = render(Counter)

  // getByText returns the first matching DOM node for the
  // provided text, and throws an error if there's no match
  // or if more than one element is found.
  getByText('Times clicked: 0')

  const button = getByText('increment')
  
  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})
```

**Notice how we query and act upon our component as our consumers would**. We are "reading" text, and we are interacting (as close as possible) as an end user.

Thus, we are still dealing with just two consumers. That's good. The test is only going to fail if either the `inputs` or the `outputs` of our component change. And that's the expected behavior.

Libraries such as [Vue Testing Library](https://github.com/testing-library/vue-testing-library) provide the right tools to avoid creating a third user. Pick tools you don't have to fight against. Use tools that [resemble the way your software is used](http://testing-library.com/).


## Recap

1. **UI components have two consumers**: your end users, and the developers using them.
2. Think of components as you think of functions: black boxes that receive inputs and yield outputs.
3. There's a **hidden third user** for your component: a test. If your test is doing something different from end users and developers, then you need to take that into account.
4. Your testing tools should help you stay on track. [Vue Testing Library](https://github.com/testing-library/vue-testing-library) (and all the [Testing Library](https://testing-library.com) toolset) does a pretty good job achieving that goal.

A quick footnote: Everything exposed above is **also valid for plain functions** (or any other kind of code encapsulation mechanism FWIW). Avoid testing implementation details, and treat units as black boxes. You'll sleep better at night.

---

Phew, that was long!

[Ping me on Twitter](https://twitter.com/afontcu_) if you have any doubts or additional insight :)
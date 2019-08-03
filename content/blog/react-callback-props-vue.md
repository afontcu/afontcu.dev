---
title: 'Using React-Style Callback Props With Vue: Pros and Cons'
description: >-
  A prop can take any form, from a simple string or number to a complex object.
  And even a Function.
date: '2018-07-30T00:00:00.000Z'
categories: ''
tags: ['Javascript']
slug: react-callback-props-vue
---

A prop can take any form, from a simple string or number to a complex object. And even a Function.

This is exactly the idea behind **Callback Props**: a Function that gets passed as prop to a child component, so the child component can execute it whenever it wants (after a button is clicked, a form is submitted, an API request failed…).

Callback Props are the “_React way_” of passing **actions from parent to children**. They are functions defined by the parent that execute when _something_ happens to the child component. They can also be used with Vue.js as a replacement for **events**.

There are several pros and cons to this approach. In this article, I will compare the two approaches and help you decide which is best for your projects.

> Note: this article was originally posted [on the Vue.js Developers blog](https://vuejsdevelopers.com/2018/07/30/callback-props-vs-emitting-events/?utm_source=medium-vjd&utm_medium=article&utm_campaign=cbp) on 2018/07/30

## Getting your head around Callback Props and event emitting

The first time you read the amazing Vue docs you are [presented with a simple communication pattern](https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props) between components:

![](https://cdn-images-1.medium.com/max/800/0*gZYY-uOWR24Nm1Dd.png)

- A child component **receives props** from a parent component.
- That same child component **emits events** so the parent can listen to them.

Here’s an example of using both a prop and an event in Vue to play with an input value:

<iframe src="https://codesandbox.io/embed/yv7w6qz96j?fontsize=14" title="Vue with event emitting" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

That’s the Vue approach. So, how would React solve this? “events” doesn’t exist in React. You would instead pass a callback prop to your child component.

So, this is how the same UI would look in React:

<iframe src="https://codesandbox.io/embed/m45wnv5j6p?fontsize=14" title="React with callback props" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

As you can see, here we are providing a callback function to our component (a native input) to react (heh) when the native [onInput](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/oninput) event gets fired.

So, the main difference here:

1.  Our Vue component is listening to events being emitted.
2.  On the other hand, our React component is handling a function to its child component and telling him: “When you emit an input event, just call this function I’m passing”.

## You can use callback Props in Vue

Okay, React uses callback Props and Vue uses events. But Vue is Javascript, after all, so you can easily pass callback Props too:

<iframe src="https://codesandbox.io/embed/32lpmzm2lq?fontsize=14" title="Vue with callback props" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

_(I’m using the _[_.prop modifier_](https://vuejs.org/v2/api/#v-bind) _because we’re working with a native HTML input. This wouldn’t be the case with a custom component)_.

## Implications

Both approaches are valid and solid (of course they are). And everything looks pretty much the same when writing simple examples like the one above.

But what happens **when a project grows and everything starts to get complicated?**

Here are some learnings that I wanted to share with you.

### In React, you just have props. In Vue, you have to learn about props and also events

In React world you always pass props, and **you don’t care whether if this prop is a simple string to render or a whole callback function** that’s supposed to run after an API request has succeeded. It’s just information you give to your child component. There’s even a pattern called “[render props](https://reactjs.org/docs/render-props.html)”, where a prop is responsible for rendering the whole component UI. So yeah, _everything_ can be provided as prop.

In Vue, there’s this two-way communication between parents and children, so you are supposed to know when to use props and when to use events. It’s fairly simple to understand when you have a little experience, but it just adds something else to be aware of when you are starting. Not a big deal, but it’s still there. The API surface is also bigger in consequence.

### Vue events can’t be required

When passing down props, you can use both React [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes) or Vue [built-in prop validation system](https://vuejs.org/v2/guide/components-props.html#Prop-Validation) to make sure a required prop is actually provided.

You cannot do that with events.

So, is this a benefit or not? With callbacks you need to check the prop contains a function before calling it, even with the optional ones. Events give you the freedom to just emit something and just letting the parent do the work of listening and declaring its own function.

### From a “component API” point of view, events are somewhat cleaner

_Here, take this huge amount of opinion right there._

When creating a reusable component, emitting events on key interactions is cleaner than just setting entry points for callback functions. Again, this is simply an opinion of mine.

Since I’m not supposed to check that the prop contains a function, my code looks _cleaner_. However, I have to make sure I document every event being emitted so my consumer can make use of them.

### Vue events are not DOM events

There goes a warning. We are talking about Vue events, the ones that you `this.$emit('myEvent')` and that you listen using `@myEvent="handleEvent"`.

They have nothing to do with good [DOM events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events), which “bubble up” the whole application and everyone is able to listen to them.

Vue events are only emitted to their parent components, not all their ancestors. So they are two kinds of beasts with pretty much nothing in common.

## So, which one is better?

I wouldn’t say there’s a winner. The differences are mostly semantic so you can achieve virtually the same results using both approaches.

Given this, I would just **stick with the conventions**: callback Props in React and events in Vue.

But now we know the similarities and differences between both systems and we can reason about them. _Hooray!_
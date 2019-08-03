---
title: Vue state management from the ground up
description: "Let’s get some state managed \U0001F483"
date: '2018-09-03T13:31:02.259Z'
categories: ''
tags: ['Javascript', 'Vue']
slug: vue-state-management
---

> There are only two hard things in Computer Science: cache invalidation and naming things.  —_ Phil Karlton_

Well, I guess Phil Karlton never had to deal with managing state on the front end..!

State management is one of “_those things_”. Backends roll their eyes, frontends hide under the desk. After all, managing state is the hardest part of being a frontend developer: you need to think in terms of the UI as something that changes over time. And we are not particularly good at it.

In this post, we will discover how to **handle state in a Vue application** from the ground up. We will end up creating our own state manager generator!

Let’s dive in:

## Step 1: Our first app. Election Day!

First of all, we need an application. We cannot manage an application state without an application, right?

Let’s create a voting app, to let you folks vote for the next President(?):

```vue
<template>
  <div>
    <h1>Election day!</h1>
    <button @click="voteForRed">Vote for 🔴</button>
    <button @click="voteForBlue">Vote for 🔵</button>

    <h2>Results</h2>
    <results :red="red" :blue="blue" />
    <total-votes :total="red + blue" />
  </div>
</template>

<script>
const TotalVotes = {
  props: ['total'],
  render(h) {
    return h('div', `Total votes: ${this.total}`)
  },
}

const Results = {
  props: ['red', 'blue'],
  render(h) {
    return h('div', `Red: ${this.red} - Blue: ${this.blue}`)
  },
}

export default {
  components: { TotalVotes, Results },
  data: () => ({ red: 0, blue: 0 }),
  methods: {
    voteForRed() {
      this.red++
    },
    voteForBlue() {
      this.blue++
    },
  },
}
</script>
```

Yes, I merged Single File Components and inline components.

The code above renders something as pretty as this:

![](https://cdn-images-1.medium.com/max/800/1*iwyBQkT2vuOIg3XaeBuh9Q.png)

Yeah: It looks like the browser failed to load the CSS

I can hear your brain screaming:

“_Man, you are not managing state. You are just passing props down to each component. You promised state management. You better deliver_”.

Well, isn’t passing props the simplest form of “state management”? Isn’t our main component holding both `red` and `blue`, our pieces of state?

_(The answers are YES and YES)_

But yeah, I hear you. Passing down props is not pretty nor comfortable nor scalable, so let’s try something else.

## Step 2: Isolating state

Let’s create a “state holder” object and manage our whole state from there.

```js
const state = {
  red: 0,
  blue: 0,
}
```

There it is! Our application state, properly held and encapsulated. It wasn’t that hard!

Now we can update our to child components and also our methods:

```js
const TotalVotes = {
 render: h => h('div', `Total votes: ${state.red + state.blue}`)
}

const Results = {
 render: h => h('div', `Red: ${state.red} - Blue: ${state.blue}`),
}

// ...and, inside our main component,...
methods: {
 voteForRed () { state.red++ },
 voteForBlue () { state.blue++ },
},
```

Spoiler: **this is not going to work**. Why?

Because Vue uses `data` method to trigger its “magic reactivity”. Without passing our data to `data` (heh), Vue won’t be able to track down value changes and update our components in response.

Easily said, _easily(?)_ fixed:

```vue
<!-- highlight-range{8-9,14,21,24,27,33} -->
<template>
  <div>
    <h1>Election day!</h1>
    <button @click="voteForRed">Vote for 🔴</button>
    <button @click="voteForBlue">Vote for 🔵</button>

    <h2>Results</h2>
    <results />
    <total-votes />
  </div>
</template>

<script>
const state = {
  red: 0,
  blue: 0,
}

const TotalVotes = {
  data() {
    return state
  },
  render(h) {
    return h('div', `Total votes: ${this.red + this.blue}`)
  },
}

const Results = {
  data() {
    return state
  },
  render(h) {
    return h('div', `Red: ${this.red} - Blue: ${this.blue}`)
  },
}

export default {
  components: { TotalVotes, Results },
  data() {
    return state
  },
  methods: {
    voteForRed() {
      this.red++
    },
    voteForBlue() {
      this.blue++
    },
  },
}
</script>
```

A few things happened there:

1.  Look ma’, no props! _(lines 8, 9)_
2.  Every component registers our state in their `data` method. Now Vue is able to track down state changes, so when we vote for 🔴 all our components _rerender_ with the proper value. _(lines 20, 27, 35)_
3.  We had to remove our pretty arrow function from the render functions because now we are using `this`. _(lines 21, 28)_
4.  Now our state it “isolated” from components. _Free as in beer_. _(line 14)_

Ok, so now we have our state separated from our “UI implementation”, but that came with some caveats: **we need to register our state to each component** in `data()`, we cannot use the beautiful arrow functions in our render functions…

But.

Wait.

Did I just say “_Vue needs to register data in_ `_data()_` _to make it reactive?_”.

Yes, I did.

But in my solution I’m using every component instance to make the very same data reactive, right?

Yes.

And could I create a shared Vue instance to hold that reactivity, so my components don’t have to?

Well, yes. Let me write a big heading:

## Step 3: Create a shared Vue instance to hold that reactivity

So, information stored in `data()` becomes “reactive by default”. And what is the piece of information we want to make reactive?

Our state!

So what if we did this?

```js
const state = new Vue({
  data() {
    return { red: 0, blue: 0 }
  },
})
```

Neat! Now our state is reactive. We’ll be sharing a Vue instance for all the data, but that’ll be waaaay cleaner than my previous solution, right?

But, wait. Wait. Wait. We have a Vue instance, now. And do you know what a Vue instance can hold, besides reactive data?

Exactly: **methods**.

Now our `voteforRed()` and `voteForBlue()` methods can be **collocated** with our state!

Let’s check it out:

```vue
<script>
import Vue from 'vue'

const state = new Vue({
  data() {
    return { red: 0, blue: 0 }
  },
  methods: {
    voteForRed() {
      this.red++
    },
    voteForBlue() {
      this.blue++
    },
  },
})

const TotalVotes = {
  render: h => h('div', `Total votes: ${state.red + state.blue}`),
}

const Results = {
  render: h => h('div', `Red: ${state.red} - Blue: ${state.blue}`),
}

export default {
  components: { TotalVotes, Results },
  methods: {
    voteForRed() {
      state.voteForRed()
    },
    voteForBlue() {
      state.voteForBlue()
    },
  },
}
</script>
```

Vuetiful! Let me highlight the improvements we achieved:

1.  State and methods that mutate our state are now **placed together**. No more leaking implementation details! Notice that our voteFor methods are quite simple, but that they could be as complicated as needed. _(lines 9, 10)_
2.  We still need to call these methods from our component. _(lines 25, 26)_
3.  Back to our render functions with arrows. _(lines 15, 19)_

And we removed a lot of boilerplate code (all the `data()` declarations).

Okay, so far so good! Our current solution is terse, simple, and idiomatic.

But we need to import Vue, and then create a new instance. While this is not inherently “bad”, I feel we could do better, couldn’t we?

For instance, our solution cannot be shared among projects right now. I need to teach people to create a Vue instance, populate its `data` method, then register some methods to modify the state… way too much.

It’s time to…

## Step 4: Encapsulate our state in a function

Fortunately, Javascript provides us with a cool feature that allows us to hide all those details and keep things simple: functions. We are gonna create our [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1).

Let’s define our `createStore` function. What’s the API? I would expect:

1.  A _data_ parameter to set our initial state. We could call the parameter “state”, for the sake of clarity.
2.  A list of mutations functions to change my state when needed. We could call the parameter “mutations”, for the sake of clarity.

Finally, I would expect our `createStore` to expose a generic method that would allow my components to “run” the mutations. We could call the parameter “commit”, for the sake of clarity (you usually _commit mutations_, right?).

You see where I’m going, don’t ya.

We want to end up writing this:

```js
const store = createStore({
  state: { red: 0, blue: 0 },
  mutations: {
    voteForRed(state) {
      state.red++
    },
    voteForBlue(state) {
      state.blue++
    },
  },
})
```

Quite nice, right? And pretty straightforward.

Now, how would we implement this `createStore` helper? Remember that we should use a Vue instance to leverage its reactivity:

```js
const createStore = ({ state, mutations }) =>
  new Vue({
    data() {
      return { state }
    },
    methods: {
      commit(mutationName) {
        mutations[mutationName](this.state)
      },
    },
  })
```

Some things happened there:

1.  First of all, we return a new Vue instance. So far so good.
2.  Then, we register our state parameter to the `data()` method of the instance. Bam! Our state is now reactive.
3.  Finally, we create our public `commit()` method. This method takes a name of a mutation as the parameter, and then runs the very same mutation (and passes our state). If we call `commit('someMutation')`, our method will call `mutations.someMutation(this.state)`.  
    Notice that in a real implementation we should handle non-existent mutations!

So, how do our component look like, now?

```js
const TotalVotes = {
  render: h => h('div', `Total votes: ${store.state.red + store.state.blue}`),
}

const Results = {
  render: h => h('div', `Red: ${store.state.red} - Blue: ${store.state.blue}`),
}

export default {
  components: { TotalVotes, Results },
  methods: {
    voteForRed() {
      store.commit('voteForRed')
    },
    voteForBlue() {
      store.commit('voteForBlue')
    },
  },
}
```

Now we access `store.state` to get our state, and `store.commit` to modify it (notice that we pass the desired mutation name as parameter).

All together now!:

```vue
<template>
  <div>
    <h1>Election day!</h1>
    <button @click="voteForRed">Vote for 🔴</button>
    <button @click="voteForBlue">Vote for 🔵</button>

    <h2>Results</h2>
    <results />
    <total-votes />
  </div>
</template>

<script>
import Vue from 'vue'

const createStore = ({ state, mutations }) => {
  return new Vue({
    data() {
      return { state }
    },
    methods: {
      commit(mutationName) {
        mutations[mutationName](this.state)
      },
    },
  })
}

const store = createStore({
  state: { red: 0, blue: 0 },
  mutations: {
    voteForRed(state) {
      state.red++
    },
    voteForBlue(state) {
      state.blue++
    },
  },
})

const TotalVotes = {
  render: h => h('div', `Total votes: ${store.state.red + store.state.blue}`),
}

const Results = {
  render: h => h('div', `Red: ${store.state.red} - Blue: ${store.state.blue}`),
}

export default {
  components: { TotalVotes, Results },
  methods: {
    voteForRed() {
      store.commit('voteForRed')
    },
    voteForBlue() {
      store.commit('voteForBlue')
    },
  },
}
</script>
```

Isn’t that cool?

Now we can generate hundreds of thousands of stores by providing a simple `createStore` method. You’d want to place your `createStore` in a file and export it, so you can import it in your applications and create a whole new store. Bonus points if you call this file `Vuex.js` 😁.

## ✅ That’s a wrap!

`state`, `mutations`… does it sound familiar to you? Well, if you have ever used [Vuex](https://vuex.vuejs.org/), it definitely should. We effectively mapped the Vuex API in our example.

We are missing getters and actions, but I hope you get the idea that Vuex is **an abstraction of things we already knew**. It’s a great abstraction, well-polished, useful, scalable. But an abstraction, after all. We just keep adding layers to the heart of the framework: **reactivity**. That’s the core feature that triggers everything.

> Vuex is **an abstraction of things we already knew**.

A quick recap:

1.  State management on the front end is something **scalable**. My personal recommendation: start as small as possible, and think about it twice before adding new things. Vuex is amazing (it truly is!), but do you really need it yet?
2.  **Reactivity** is the king of Vue. Everything, and I mean everything, depends on data being reactive. And this is great because we can leverage that reactivity and create nice, useful abstractions.
3.  Now we _kinda_ understand what Vuex is doing under the hood, which is cool.
4.  Sometimes, **verbosity trumps succinctness** if it provides context, intent, and repeatability to our code (for instance, step 4 required way more code that step 2).

Wanna dig in? [I created a Github repo](https://github.com/afontcu/vue-state-management/commits/master) with 4 commits: one commit per step of the post. Feel free to play with it and inspect every change.

Do you want to practice a bit with our solution? Here’s a challenge: How would you implement `getters`? And `actions`? and… [modules](https://vuex.vuejs.org/guide/modules.html)? 😏

Hope it helps!

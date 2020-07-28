---
title: Testing API calls in Vue applications
description: '...or how to test async behavior using Vue Testing Library.'
date: '2019-05-28T18:36:01.570Z'
categories: ''
tags: ['Testing', 'Vue', 'Javascript']
slug: testing-api-calls
---

More often than not, your app is gonna need to send an API request to an external server. In this article, we'll see how to test asynchronous calls in our Vue apps, and how to do that reliably.

Note: this article might help you with any kind of asynchronous operation, but they tend to be external API calls.

Note2: this post assumes that you are already familiar with the [Testing Library](https://testing-library.com) tooling family, especially with [Vue Testing Library](https://github.com/testing-library/vue-testing-library). I've worked on the docs, so make sure you check them out!


## Our amazing component

Here it is, in all its glory:

```html
<template>
  <p v-if="error">{{ error }}</p>
  <p v-else-if="loading">Loading...</p>

  <ul v-else-if="items && items.length">
    <li v-for="item of items" :key="item.title">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { fetchItems } from './api/items'

export default {
  data: () => ({
    items: [],
    error: null,
    loading: false,
  }),

  async created() {
    this.loading = true

    try {
      this.items = await fetchItems()
    } catch (err) {
      this.error = err
    }

    this.loading = false
  },
}
</script>
```

Nothing fancy: Our component triggers an async request on the Created hook, and handles loading and errored states.

Rule of thumb here: **API calls should be mocked** because we want our tests to be resilient and fast. Thus, hitting an external server is not an option.


## What to test, then?

This is probably the most crucial step. The best approach I've found when deciding what to test is to always think in terms of inputs and outputs.

**What are the expected inputs for our component?** The API service response. Or, well, the response we are providing through its mock.

**What are the expected outputs for our component?** That the DOM got updated accordingly. The DOM could either contain a loading message, an items list, or a fantastic error message.


## Mock all the things!

Just kidding. Let's mock the API call, so we don't hit the server when running our tests.

```js
jest.mock('./api/items')
```

This line ([Docs](https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options)) is gonna tell Jest to replace the whole directory with a Mock object we can interact with.

Okay! Let's write our test, shall we?

```js
import { render } from '@testing-library/vue'
import ItemsList from './ItemsList.vue'

jest.mock('./api/items')

test('It displays a list of items', () => {
  const { getByText } = render(ItemsList)
  getByText(/loading/i)
})
```

So far, so good. We imported our stuff, created a mock for the `/api/items` folder, so we don't hit the server, and asserted the initial state of our component. Not that bad, huh?

Now, as we were saying, we need to make sure the API call has been made.

To do so, we're gonna need to import the mocked function, and add assertions on it:

```js{3,11,12}
import { render } from '@testing-library/vue'
import ItemsList from './ItemsList.vue'
import { fetchItems } from './api/items'

jest.mock('./api/items')

test('It displays a list of items', () => {
  const { getByText } = render(ItemsList)
  getByText(/loading/i)

  expect(fetchItems).toHaveBeenCalledTimes(1)
  expect(fetchItems).toHaveBeenCalledWith()
})
```

Now we are sure our `fetchItems` method has been called once (and only once), and that it has been called with no arguments.

1/2 assertions made. Halfway there!

As a side note: you can learn a lot about mocks if you inspect them. Try to throw a `console.log(fetchItems)` somewhere, so you'll see how Jest stores the info.


## Gimme data

So, how can we test that the DOM gets updated when the API call has succeeded? Right now nothing's gonna get rendered, mostly because our mocked function... well, is entirely dumb.

We need to make it a bit smarter by setting some return values.

```js{8,9,17-24}
import { render, waitFor } from '@testing-library/vue'
import ItemsList from './ItemsList.vue'
import { fetchItems } from './api/items'

jest.mock('./api/items')

test('displays a list of items', async () => {
  const items = [{ title: 'An amazing item' }]
  fetchItems.mockResolvedValueOnce(items)

  const { getByText, queryByText } = render(ItemsList)
  getByText(/loading/i)

  expect(fetchItems).toHaveBeenCalledTimes(1)
  expect(fetchItems).toHaveBeenCalledWith()

  // waitFor() will retry until the callback function stops failing
  // (or a times out).
  // So, line reads as follows: "Wait for 'An amazing item' to exist"
  await waitFor(() => getByText('An amazing item'))

  expect(queryByText(/loading/i)).toBeNull()

  items.forEach(item => getByText(item.title))
})
```

With `mockResolvedValueOnce` ([source](https://jestjs.io/docs/en/mock-function-api.html#mockfnmockrejectedvalueoncevalue)), we instruct our mocked method to return some fake values once. Then we need to wait for two things: the API call to finish, and our component to rerender.

After making sure that happened, we can iterate over all our items and make sure their content is on the DOM. We're also checking if the "Loading..." message is removed correctly.


### Let it fail

Now, let's write a test to make sure we warn the user in case of an error.


```js{8,16}
import { render, waitFor } from '@testing-library/vue'
import ItemsList from './ItemsList.vue'
import { fetchItems } from './api/items'

jest.mock('./api/items')

test('It displays an error message if API call fails', async () => {
  fetchItems.mockRejectedValueOnce('Oops, something went wrong')

  const { getByText, queryByText } = render(ItemsList)
  getByText(/loading/i)

  expect(fetchItems).toHaveBeenCalledTimes(1)

  await waitFor(() => getByText('Oops, something went wrong'))
})
```

With `mockRejectedValueOnce` ([source](https://jestjs.io/docs/en/mock-function-api.html#mockfnmockrejectedvalueoncevalue) - notice the difference!), now our mock is gonna fail.

After that, the only missing part is making sure the error message is displayed on the screen.


## That's a wrap!

Isn't it cool? We've learned how to test asynchronous in our Vue components, and how to do so while avoiding hitting an external API.

As we defined our test in terms of inputs and outputs, we've avoided focusing on implementation details. Looks neat!
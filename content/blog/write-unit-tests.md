---
title: "\"But, wait. So you don't write unit tests?\""
description: "Recently I've been asked how I approach the unit vs. integration vs. e2e debate."
date: '2019-12-18T07:36:01.570Z'
categories: ''
tags: ['Testing']
slug: write-unit-tests
---

I've answered it twice below:

## Short answer

I don't really care about names.

Write tests that provide a **higher degree of confidence** in your application.

Write a test before writing the "production" code that should make it pass.

Make sure your test suite is fast and cheap to **run and maintain**.

## Longer answer

When I code a new feature, I like to start writing an application-level test using [Cypress](https://www.cypress.io/) and [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library). This test is gonna stay in red until the whole feature is developed. Or, at least, the happy path I was focused on.

But having a single application-level test feels too detached from the code I write. It's not enough, as I want faster and fine-grained feedback. 

This is why I use [Vue Testing Library](https://github.com/testing-library/vue-testing-library) and [Jest](https://jestjs.io/) to develop the internals of the app using a TDD approach.

TDD doesn't mean skipping design, though. I try to observe and understand the feature. Then I try to find the right spot to start coding it, making small changes driven by my tests. I keep on coding until Cypress tells me I'm done.

However, TDD is not always possible. Sometimes I need to step out of its cycle – mostly because I suck at it. In those cases, I make sure critical components and their edge cases are tested no matter what.

### Don't skip testing this

You might use TDD, you might not. However, I can think of three scenarios where testing should always happen:

1. What are the most critical parts of your app from a **business perspective**? Test them.

2. What files **change more often**? Use git to answer this question. And then test them.

3. What files **are introducing a higher number of bugs**? Test them (and write the test before fixing the bug!).

## It might not work for you
My approach might not work for you. However, some of its principles could be useful regardless:

1. Start with a failing test.
2. Do not refactor your code until the test is passing. As [a wiser man](https://www.kentbeck.com/) once said, *"Make it work, make it right, make it fast"*.
3. Alternate between bird's eye view and down-to-metal testing. App-level tests cover more lines of code at once, while component-level and function-level tests provide faster and more focused feedback. Combine them.
4. When not using TDD, focus on business value and bugs density to decide what to test.

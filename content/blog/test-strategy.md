---
title: In a perfect world
description: "hum"
date: '2019-12-13T07:36:01.570Z'
categories: ''
tags: ['Testing']
slug: test-strategy
---

Recently I've been asked how I approach the "unit vs. integration vs. e2e" debate.

## Short answer

I don't really care about naming.

Write tests that gives you a higher degree of confidence in your application.

Make sure they are fast and cheap to **run and maintain**.

## Longer answer

When I code a new feature, I like to start writing an application-level test using [Cypress](https://www.cypress.io/) and [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library). This test is gonna stay in red until the whole feature (the happy path or paths) are developed. They serve me as a "finish line".

But having a single application-level test feels too detached from the code I write.

This is why I use [Vue Testing Library](https://github.com/testing-library/vue-testing-library) (and plain unit testing using [Jest](https://jestjs.io/)) to develop smaller parts of my app using a TDD approach. I "observe" the feature, trying to find a good place to start in, or trying to spot where decoupling could happen.

However, TDD is not always possible (because I suck at it). In those cases, I use [Vue Testing Library](https://github.com/testing-library/vue-testing-library) to test out critical components and edge cases. I drop component-level tests when I see they could provide me some value and confidence. 

What are the most critical part of your app from a **business perspective**?

What are the files that **change more often**?

Those are the things I want to test no matter what.

## Write down my tips and then burn the notebook
This is not a recipe. My approach might not work for you. However, some of its principles could be useful regardless:

1. Start with a failing test.
2. Do not refactor your code until test is passing. As [a wiser man](https://www.kentbeck.com/) once said, "Make it work, make it right, make it fast".
3. Alternate between bird's eye view and down-to-metal testing. App-level tests cover more lines of code at once, while component-level tests provide faster and more granular feedback.
4. If not following a TDD aproach, focus on business value when deciding what to test.

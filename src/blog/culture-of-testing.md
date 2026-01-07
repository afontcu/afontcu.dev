---
title: 'Creating a culture of testing'
description: 'Let’s say you are sold on the idea of testing. You know it’s important, but you find it hard to sell it to your team, your managers, your colleagues. Why is that?'
date: '2019-06-03T07:56:01.115Z'
categories: ''
tags: ['Testing']
slug: culture-of-testing
---

## Why is it so hard?

You and I know that testing increase productivity - in the long run. And people _on the other side_ are not aware of that pleasant feeling when refactoring some code and seeing the "✅ 100% tests" message.

One of the main reasons is that **benefits are not immediate**. Especially from a business perspective.

Let's put ourselves in the shoes of a Boss™:

You are sitting on your comfortable bossy chair, enjoying a bossy latte macchiato with your feet on the table as any boss would do. Then your engineering team knocks the door, and you let them in (remember, you are a boss - they need to enter your office). This is what you hear:

_"...blah blah blah long run blah blah confidence blah blah. In short, we want to spend time writing code that **checks if the code we wrote is working**. And we are gonna do that instead of shipping new features"._

Well, why didn't you just write _working code_ in the first place? Isn't this supposed to be your job?

Do you see where I'm going? It's hard to sell. One might argue that I'm attacking a straw man, and one would be right. But still.

It might also be hard to sell among your peers. Why would you _waste_ time testing things when you could be adding new features? That's what you are getting paid for, aren't you?

### Testing is a cultural challenge

...not (only) a technical one. It's people you are dealing with, not (only) buggy code. So the challenge here is people.

Fuck, right? Had it been about code, the whole thing would've been more straightforward. Code is easier to deal with than people.

If you want to create a culture of testing, you need to focus on **communication** and **user experience**.

So...


![Testing meme: "You can't have failing tests if you don't write any tests"](/blog/culture-of-testing/tests-meme.jpg)

_(Nope, This is not a valid testing strategy)_


## Focus on quick wins

Any time you catch a bug thanks to your test suite, communicate it. Share it on Slack. Tweet it.

...and forget about Moonshots. Forget about code coverage. Forget about the total number of tests.

Instead, focus on the <abbr title="Return of Investment">ROI</abbr> of testing. Caution: unless you provide code quality metrics, business people won't be aware of how testing has helped you and your team along the way. 

You need to sell it.


## Create a pleasant onboarding process

Convincing your team could be hard enough without the configuration hassle.

Do you want your team to succeed at testing? Make it available to them. Handle the nasty parts. You are already sold on the idea. Use it. Don't make them configure a test runner, and assertion library, create a testing standard, find best practices, configure a CI pipeline, and so on.

Hide complexity. Provide a simple script, a simple Makefile, or any tool that makes running tests a breeze. Anything beyond `npm run test` is too much.

## Know what to test

It is crucial that you can actually answer this question. When asked, choose one:

1. Test **the most important part of your app**. And what is it, you might ask? Well, ask Product people. Product people know better. Involve them in the decision process, so they feel more connected to the whole testing thing.

2. Did someone find a **bug**? Great! I mean, well, not great. But try to get the best of the situation: First, write a failing test asserting that the bug is there. Then, fix the bug. See the test pass. You just made sure the bug stays dead while adding a small test.

So: test the most critical parts of your app, and also test the broken ones. Other answers may also apply, but this two work pretty well.

One step at a time.

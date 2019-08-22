---
title: I know testing is important, but
description: 'But but but.'
date: '2019-08-22T07:36:01.570Z'
categories: ''
tags: ['Testing']
slug: testing-is-hard
---

In a perfect world, the lack of testing is what should require justification.

Buuut we are far from there.

## "...but it is hard"

If your code is hard to test, it's because it's **doing too much**. There's a lot of mocking involved, a lot of possible assertions, a lot of edge cases...

If it's doing too much, it's **hard to understand**.

If it's hard to understand, it's **hard to maintain**.

And one could argue that **unmaintainable code is not _good_ code**.

If a test inflicts pain, we tend to blame the test - even when the root cause is somewhere else. And there's only one _other_ place: the code under testing.

In short: Testing highlights pieces of code that could use a redesign. Assume that something that feels "hard to test" is **poorly designed**.

## "...but we're late, and we need to deliver this feature"

If you don’t have time to do it right, **when will you have time to do it over?**

Skip testing, and you'll find yourself dealing with defects and poor quality (and thus a harder relationship with stakeholders). You will end up dying by reworks.

Testing plays a considerable role when it comes to code quality. And we already know that [high-quality software is actually cheaper to produce](https://martinfowler.com/articles/is-quality-worth-cost.html). It took me a while to grasp the meaning of that statement, but it all makes sense.

Writing tested code is actually faster than writing untested code (after the short initial slow down).
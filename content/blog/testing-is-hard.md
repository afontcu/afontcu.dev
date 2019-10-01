---
title: I know testing is important, but
description: 'But but but.'
date: '2019-09-30T17:36:01.570Z'
categories: ''
tags: ['Testing']
slug: testing-is-hard
---

In a perfect world, we'd face charges for writing untested code.

Buuut we are not there yet.

We all "know" testing is important.

But...

## "...but it is hard"

If your code is hard to test, it's probably because it's **doing too much** (and it's too coupled).

If it's doing too much, it's also **hard to understand**.

If it's hard to understand, it's also **hard to maintain**.

And one could argue that **unmaintainable code is not _good_ code**.

If testing hurts, we tend to blame the test. Usually, though, the root cause is the code being tested.

In short: Testing highlights pieces of code that could use a [redesign](https://practicingruby.com/articles/refactoring-is-not-redesign). If something feels "hard to test" then it is **poorly designed**. Kill it with fire.

## "...but we're late, we need to deliver this feature ASAP"

The G in ASAP stands for "Good idea".

Let me get this straight. If you don’t have time to do it right, **when will you have time to do it over?** It takes longer to find a bug, and fix it, that simply prevent it in the first place.

Skip testing, and you'll find yourself dealing with defects and poor quality. You will end up dying by reworks and having business people talking your ear off.

Testing plays a considerable role when it comes to code quality. And we already know that [high-quality software is actually cheaper to produce](https://martinfowler.com/articles/is-quality-worth-cost.html), don't we? If the answer is "nah I don't think so", go on and read the linked article. Pure gold.

In short: **Writing tested code makes you go faster than writing untested code**.

## "...but don't worry, we are adding them later"

Hahaha, liar. Been there, done that. You are not gonna add them (and you know it).

The feature is live, and you have moved on to the next one. Ain't nobody got time for testing anymore! After all, code's already in production. Most of its bugs are gone thanks to daily usage feedback. Bugs that tests might have avoided, but whatever.

Also, adding tests afterward is **way harder** than doing it while writing the feature. Way harder. You won't do that.

And remember that **testing is a great design tool**. Test _while_ developing a feature is a great way to come up with a maintainable, better-designed codebase.

---

So yeah, whatever. Testing is important. Carry on. Nothing to see here.
---
title: It's all about feedback loops
description: What if everything in software development was about creating feedback loops?
date: '2019-09-16T08:35:47.809Z'
categories: ''
tags: ['Software Crafting', 'Agile', 'Testing']
slug: feedback-loops
---

## Gimme examples

Okay, okay. Here's a non-exhaustive list of examples and some questions they might try to answer.

**Static analysis** (type analysis and linting tools): "Does the code I wrote have valid syntax and grammar?"

**Code build/compilation**: "Is my code compiling?"

**Unit test**: "Does that small unit of code do what I think it does?"

**Integration test** ([whatever that means](https://afontcu.dev/write-unit-tests/)): "Does that last piece of code works as expected when used in its environment?"

**Application-level tests**: "Does that last feature behave as expected, from a user standpoint?"

**Pair programming**: "Did we come up with the best possible design?"

**Code review**: "Are we writing readable, maintainable code? Does it match our standards?"

**Manual testing**: "Is the software working in conformance to the specified requirements we agreed upon?"

**CI pipeline**: "Can we deploy that last feature we wrote? Is our build ready to do so?"

**Monitoring**: "Did something go wrong in production? Are we able to know about it before our users do?"

**Daily standup**: "Are we set to work on the right thing for the next few hours?"

**Retrospective**: "Did we work well, at a sustainable pace, for the last days?"

**Stakeholders demo**: "Did we deliver a useful, valuable [software increment](https://ronjeffries.com/articles/017-08ff/new-framework-increment/)? Are we headed the right direction?"

**Iteration planning**: "Are we planning on working on feasible, valuable features for the next few days?"

**Usage analytics**: "Did the new feature get the expected usage and performance?"

**User research**: "Are we planning on building the right feature?"

Again, this is a non-exhaustive list. [Some even define a more fine-grained differentiation](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) between steps of writing a failing test &rarr; making it pass.

Can you come up with additional feedback loops?

## A pattern

As I see it, we can split items in the list into two groups:

1. Are we building the **right thing**?

2. Are we building the **thing right**?

## Here's the tradeoff

To create as many feedback loops as possible, you need to keep things simple. [Simplicity](http://www.extremeprogramming.org/rules/simple.html) means maximizing the amount of work not done. I'm afraid it is a requirement, not a suggestion.

Build simple things (and simple processes and team dynamics) so that they are simple to test, measure, and iterate on. Otherwise your feedback loops become slow and painful, and you'll skip them. Oh, by the way: if something hurts, [do it more often](https://martinfowler.com/bliki/FrequencyReducesDifficulty.html).

Don't get me wrong – **simplicity is hard**. You can always make things _simpler_, right? It is the only way, thou, to provide useful feedback loops.

And we want as many of them as possible – even though [they are not free](https://afontcu.dev/beware-feedback-loops/).

## Wait, wait a minute. Agile, DevOps, Software Crafting, Extreme Programming...

...what if the common ground between them is about creating feedback loops, and keeping them as short as possible?

What a surprise, huh?

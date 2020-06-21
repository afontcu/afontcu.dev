---
title: The only way to go fast is to go well
description: A lot have been said regarding software development teams going slow.
date: '2020-06-22T14:06:07.866Z'
categories: ''
tags: ['Software Crafting']
slug: slow
---


To be honest, I've been told I was going slow on every project I ever participated in.

You end up developing a hard skin on the subject. It is hard. It requires time and strong convictions.

"Slow" is a big word. There are a shitton of things hidden behind "Slow".

High WIP. Reworks. Context switching. Tech (or knowledge) debt. Poor tooling and infrastructure. Knowledge silos. Handoffs.

[All of these](https://twitter.com/johncutlefish/status/1139824204931485696/photo/1
) translate into slowness.

This is not new. What I wanted to do here is two share two additional ideas.

## We think in averages, but reality works on margins.

https://pbs.twimg.com/media/D9F4ESpU8AI6J0O?format=jpg&name=large

Economists like to talk about marginal changes. What that means is how much it takes to do one more. Why it matters is that the cost of doing something is rarely constant.

Marginal benefits tend to experience diminishing returns.
https://en.wikipedia.org/wiki/Diminishing_returns
Eating the twentieth piece of cake isn’t as good as the first. Marginal costs, in contrast, can often decline. Writing the twentieth essay takes less effort than the first, because it gets easier with practice.
https://policonomics.com/economies-of-learning/

The mistake is to think in averages.

We think in terms of "how much it was in the past", rather than asking how much the next one will likely be.


## Cost of Change

The time required to fix errors increases exponentially the later they are detected in the development lifecycle.

If you missed something while sketching the initial requirements of a feature, that's cheap to fix.

If you missed something while developing a feature, that's still cheap.

However, if you fuck up something in production, cost might grow exponentially. Opportunity cost + rollbacks + database migrations… a nightmare.

This is why shorter feedback loops are encouraged: they help you find errors as soon as possible.

It is also true that creating and maintaining feedback loops make things look slow.

In the short term.



## A team is a system

You can't explore a single variable, reach a conclusion, and call it a day.

## Do not try to be faster

Just try to be less slower.

---

Try to determine if the team is actually going slow or if you set unrealistic expectations.

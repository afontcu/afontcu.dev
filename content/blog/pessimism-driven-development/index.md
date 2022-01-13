---
title: Pessimism-driven development
description: 'A sad but realistic starting point for everything we do: Things can go wrong and will go wrong.'
date: '2022-01-13T16:56:01.115Z'
categories: ''
tags: ['Agile']
slug: pessimism-driven-development
---


Do you know that cool new feature? **It won't be used**.

Do you know that excellent new UI design you just crafted? **Users won't get it**.

Do you know that fantastic code function you just wrote? **It won't work as expected**.

It is not a positive point of view; I grant you that. Why being so negative? We could be optimists and hope that…

…that this six-month project is gonna be delivered on time.

…that users need that feature and that it is easy enough to get it done.

…that these nested `if` statements will work as expected and we won't miss any edge case.

Let me ask you: whenever you say those things, are you sure about them?


## What if we assume we're gonna be wrong?

Instead of hoping we're right, we could…

…admit that we don't know if that feature will be helpful.

…acknowledge that we don't know how to code that feature.

…assume that our ideas, projects, goals, and visions are built upon **assumptions**.

Heck, we're wrong even when we think we're right! [Here's a list of cognitive biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases) that prove we don't even notice when we're wrong.


## Take the red pill

Now, this seems trivial, but it **changes everything**.

If we see things as *possible* (instead of *certain*) then the starting point when building software products are **the assumptions we're making**.


## An assumption is not an assumption

A [calorie is not a calorie](https://www.trainingpeaks.com/blog/a-calorie-is-not-a-calorie/), and an assumption is not an assumption. Of course, there will always be assumptions, but they all are not the same.

Some assumptions are critical. If we're wrong, we're screwed. So we need to figure them out as soon as possible because they are the make-it-or-break-it type of assumption.

Others are small nuances that won't derail the initiative or the feature we're working on.

Some assumptions could be thoroughly explored and "figured out". But this is often not possible, and we need to **settle with a higher degree of confidence** on that assumption.

![We can map assumptions depending on their uncertainty and potential impact](./assumption-1.png)

That's good and what we aim for. We can't figure everything out at the beginning. I can't think of a worst approach to tackle [a complex problem](https://afontcu.dev/embrace-unknowns/).

Instead, the goal is to **increase the confidence in critical assumptions**.

If everything is uncertain, there's only one thing to do: look for **quick, cheap feedback that proves us wrong** (or right).


![Start with the biggest, most critical assumptions!](./assumption-2.png)



## "What can we do to get some quick feedback on this?"

That's the decisive question.

There's always risk associated with the assumptions. The smart move here is to embrace these assumptions and address their risk as early as possible.


## In a nutshell, be a pessimist

"*What could go wrong, here?*" is a great starting point when creating software products. It works at so many levels! From a tiny code function to a minor feature, to a significant initiative, to a whole quarter goal.

The mental model here is the idea that **all our decisions are based on assumptions**. They are the only way to move forward, but we need to be aware we're walking on thin ice.

The solution? **Find the cheapest, quickest way to reduce the uncertainty of critical assumptions until you feel confident**. Think in terms of risk-reduction instead of the final output.




<!--
## But but but.

Assumptions are not limited to features and quarter goals, though. When I code I make a ton of assumptions, and I strive for quick feedback on them.

For instance, I assume I got the requirements right, and that I wrote the code I intended to write. And what's the best way to increase the confidence on those assumptions? You know the answer: to write automated tests. -->

<!-- But the worst part is that we find out **too late**.

Keep the cost of change as low as possible. Also, learn what's hard to change and what's not.

As a front-end engineer, for instance, I know what things are easy to tweak on a UI and what things are not. There's no point in debating over a small detail for a long period of time if changing it is fast and simple. -->
---
title: In case of doubt, reduce the WIP
description: Have you ever lined up at the coffee shop? Chances are you have.
date: '2021-01-05T17:36:01.570Z'
categories: ''
tags: ['Agile']
slug: reduce-wip
---

Say the coffee shop, with its 4 employees, receive 50 customers every hour in average.

You could collect al 50 orders, brew every coffee, and then deliver them at once. The WIP of this strategy is 50 (you're working on 50 coffees at the same time).p

It doesn't sound very smart, does it?

On the other hand, you could collect a single order, have all the bartenders work on it, and deliver the coffee as soon as it's ready. That would yield a WIP of 1 (you're only working on a coffee at the same time).

That's… undesirable too, right? As a customer you'd be waiting too much, and there's also the fact that you would have a hard time trying to "guess" how long you'd need to wait.

Sigh, every alternative sucks. We're clearly missing a key factor, here.

Now, this is where maths help us.

Yes, really. Maths.

There's this smart theorem called Little's Law. It states that the average number of items on a queue (that is, in our coffee shop) is equal to the average time of arrival to that queue multiplied by the average waiting time of each order.

That, put nicely, looks as the following:

(imatge)

That has some interesting consequences:

Given the same number of employees, the average waiting time (Lead time) is determined by the WIP, not the amount of hours every employee works.

Working more hours does not mean a better lead time. It would only affect the total amount of served coffees. Working harder won't make things faster.
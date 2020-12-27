---
title: In case of doubt, reduce the WIP
description: Have you ever lined up at the coffee shop? Chances are you have.
date: '2020-12-27T17:36:01.570Z'
categories: ''
tags: ['Agile']
slug: reduce-wip
---

You know the drill. You wait there a bit, order your espresso, pay for it, and get out—no big deal.

What do we know about this *system* (that is, the coffee shop)?

Well, we know that more customers queueing up don't make the system go faster. Right? Quite the opposite! The bartender might get stressed if people start to pile up, its performance may suffer.

We could also serve more coffees by opening more hours or buying better coffee makers.

![A coffee shop (our system) with our friendly customers](./pic1.png)


## Customers, coffees, and queues

Let's examine the relationships between the speed that customers enter and exit the shop, shop's capacity, and the time they spend "waiting".

It is as follows:

<pre class="language-html" style="width:100%;margin-left:0">
Time spent by customers =
  (Number of customers waiting) / (Speed at which customers get out)
</pre>

(*disclaimer: I didn't discover that (lol of course I did not). It is called [Little's Law](https://en.wikipedia.org/wiki/Little%27s_law), and it is one of the essential pillars which [uphold Kanban](https://itsadeliverything.com/littles-law-the-basis-of-lean-and-kanban)*).

Now let's do some basic algebra!

First, take the average speed at which people get to the line. Then, multiply it by the time they spend in line. The result is the average number of people waiting for its coffee.

Also: number of items in the system is the product of the arrival rate and the time an item spends in the system.

Wait.

Wait.

Isn't it…

…well…

…obvious?


## Yes, this is obvious

*Thank you for the confirmation, Mr. heading.*

Yes, folks, this is obvious. Nobody would expect that adding more customers would make things faster, right?


![Increasing the input of the system won't make it faster!](./pic2.png)


We two ways to reduce the time spent by our customers:

1. Reduce the total amount of customers waiting, or
2. Increase the rate at which they get out.


## We've known this for ages

Yes, we have!

Then, **why do we keep managing software development teams by doing the exact opposite?**

"*But Adri, we don't*" – I can hear you saying.

"*Yes, we do*" – you should hear me saying.

We shove more features into a jam-packed backlog.

We make people switch context all the time – meetings, priorities, whatever–. It clearly increases the time a task (a feature) stays in the system (the team).

We tend to work in large chunks. Imagine a customer ordering 50 coffees. That surely takes a while, right?

*This turned into a software development metaphor. Who would've thought!*


## You can see where I'm going, here

A software development team (and a software-based company) has a limited capacity. Pushing more work into it won't make it faster – just like a coffee shop.

Instead, it will lead to lower quality.


## Enough with the coffee shop

The coffee shop is the team. The customers are the features.

The average number of features waiting in the system is our **work in progress**. It is measured in "*amounts of stuff*."

The average amount of features passing into and out of the system is the **throughput** of the system. It is measured in "*amounts of stuff per unit of time*."

Finally, the average amount of time a feature spends in the system is known as **lead time**. It is measured in "*unit of time*."

Soo, replacing concepts in the formula we discussed before…

<pre class="language-html" style="width:100%;margin-left:0">
Work In Progress = Throughput * Lead Time

Lead Time = WIP / Throughput

Throughput = WIP / Lead Time
</pre>

<p />


## So you want more coffees out. I mean, more features

I hear you. Who wouldn't?

We've learned that the Lead time of a system is a ratio between the tasks inside the system and its throughput.

Here's the answer: Do you want more features? Then reduce the WIP.

**Reducing WIP (work in progress) is way easier than improving throughput**. Yet, it is what people usually aim for. Ask to go faster(?), put in more hours, add more Jira tickets.

This only leads to a decrease in the overall quality, which will creep you out in the long run. You'll get more WIP, which means an increased Lead Time.

Instead, reduce the number of things handled at the same time.

**Bottom line**: Do not [try to go faster, just go less slow](https://afontcu.dev/slow/).


## A reinforcing loop

With less WIP, you get a shorter lead time…

…meaning the throughput increases without doing "more" stuff…

…meaning you get slack time…

…which you can use to improve tools, processes, skills. Morale gets up. And all these allow you to reduce the WIP.


## In short

Do you want to ship things quicker? Focus on the important ones and kill the others. This is way **simpler** (and cheaper) than increasing the rate at which your team completes stuff.
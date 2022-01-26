---
title: Software is never done. It's never perfect.
description: I just came here to kill all your hopes.
date: '2022-01-27T08:12:00.000Z'
categories: ''
tags: ['Software Crafting']
slug: software-never-done
---

I'm here to suggest that aiming for "finishing the feature" is the wrong mindset.

Aiming for the best combination of effort and value is way more powerful.

Nobody gives a crap about finishing features – not even the people they requested them. Because their ultimate goal is to achieve something else, not having a feature. They want to achieve a business goal, to improve a metric, to make someone else's life easier. That's their goal.

That's why "delivering a feature" is not an outcome. It is simply [an expensive step towards delivering value](https://afontcu.dev/goal-of-software-development/).

"Let's finish this project". What does that even mean?!

There's always something you can remove.


## The whole thing is an iteration

You're always iterating. Nothing is ever finished! And that's good!

We're in a complex world, so we don't know what's gonna work. In general<sup>1</sup>, testing 10 ideas in a quarter is better than testing 5.

You're finding the best combination of effort and provided value.

A shitton of effort is hard to match. No value is also meaningless.


## Vertically over horizontally

Cool designs in Figma are really cool. Nice rounded corners, bro.

Amazing database schemas are also stunning. Wow, such foreign key. Amazing triggers, sis.

The design might be perfect. So might the schema.

None of them are anything that resembles to **done**. None of them are… valuable by themselves.


## Ok, so designs and schemas wont get it done… but working software will?

I hate to do this, but here it goes: Well, **it depends**.

Depends on your definition of done.

If by "done" you mean "okay, we're good, onto the next thing", then probably you're wrong.

But working software is the best way. It is the primary (but not the only) measure of progress.





semblant a TDD

feedback loops curts

## But it ends up being done

Sure. I'll just quote Kent Beck here – the occasion has yet to come where I'm able to express something better than Mr. Beck:

"*Alternative to estimates: do the most important thing until either it ships or it is no longer the most important thing*". ([source](https://twitter.com/kentbeck/status/634741725047615489)).

I think the most important word of the tweet is "**ships**".

Now – **invest** time discovering what's the most important thing. But please, make sure you don't **waste** time building the wrong thing.


---

<sup>1</sup>: "'in general', Adri? Where is your confidence?" I can hear you asking. Well, it turns out there are some situations where running fast experiments is not what the business needs. [Explore/Expand/Extract](https://medium.com/@kentbeck_7670/the-product-development-triathlon-6464e2763c46) is a great mental model to assess what are the constrains.
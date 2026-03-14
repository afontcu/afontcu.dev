---
title: AI is a faster shovel, not a better map
description: AI can help you dig the wrong hole faster than ever.
date: '2026-03-14T10:00:00.000Z'
categories: ''
tags: ['Software Crafting', 'AI']
slug: ai-faster-shovel
---

AI can help you **dig the wrong hole faster** than ever.

## The illusion of speed
AI makes you **feel** productive. You type a prompt, code appears. Features materialize in minutes. You ship on Tuesday what would've taken two weeks.

I've noticed something in myself. When building is expensive, I push back on feature requests. I ask "why?" and "what problem does this solve?" But when building is cheap, when AI can generate code in minutes, I feel the urge to just say "sure, let's build it."

**The cost of building dropped, so I started questioning less.**

But **writing code was never the bottleneck**.

The bottleneck was always: what should we build? Why? For whom? What happens when they use it wrong?

AI shrunk the code-typing part so much that those questions are what's left.

That's the trap. Not that AI produces bad code. It doesn't. The code looks good. The PR is clean. The feature ships.

The trap is that **speed is seductive**. It feels like progress. It feels like getting things done. And then you discover you built something nobody needed.

## AI is a faster shovel, not a better map

AI helps you **dig faster**. Way faster. What used to take hours now takes minutes.

But it doesn't tell you where to dig. It doesn't question whether you should be digging at all. It doesn't point out that maybe you're in the wrong forest.

**That's still on you.**

Point the shovel wrong, you just **dig the wrong hole faster**.

But there's another side to this.

Some things I never did because they'd take too long. Refactor that module nobody touches but everyone fears. Add those integration tests. Document that tricky workflow. I wouldn't get the "go" from leadership to invest the time. **Important but not urgent** stayed forever in the backlog.

Now? I can parallelize. I can chip away at technical debt while shipping features. Some bottlenecks genuinely disappeared.

It's a two-edged sword. The same speed that makes it easy to build the wrong thing also makes it possible to build things you'd never justify before.

## I'm not slow, I'm deliberating

I [wrote a while back](https://afontcu.dev/slow/) about being told I was going slow in every project I ever participated in.

You can't go faster. You can only go **less slow**.

AI raised the stakes.

Now there's more pressure to skip the thinking phase. "Can't you just use AI?" becomes the new form of velocity pressure. It conflates output with outcome. Lines of code with value delivered.

(And no, AI-generated code doesn't get a free pass on review either. Someone still needs to read it, understand it, catch the bugs in it. The cost savings are illusory.)

The teams that ship fastest over the long term **still slow down at the right moments**. They clarify what problem they're solving. They run "what could go wrong" sessions before committing to a design.

The [feedback loops](https://afontcu.dev/feedback-loops/) still matter. Catching mistakes in requirements is still cheaper than catching them in production.

AI just made it **easier to forget that**.

## Use the shovel, but check the map

I use AI daily. It's genuinely useful.

If you're in **execution mode**, building the thing you already figured out, go fast. Let AI help. Ship it.

Still **[figuring out what to build](https://afontcu.dev/minefield-software-development/)**? Slow down. Write down the problem you're solving. What does "done" look like? What's out of scope? What could go wrong?

"Slowing down" doesn't mean paralysis or perfectionism. It means spending 10 minutes writing down the problem before spending 2 hours implementing it. It means 5 minutes of "what could go wrong" before 5 days of rework. It means **sketching the solution with a teammate** before committing to code.

Pick up the shovel when you know where to point it.

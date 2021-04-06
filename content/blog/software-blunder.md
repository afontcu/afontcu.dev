---
title: "Blundering your software"
description: 'Software development is like a chess game.'
date: '2021-03-31T12:56:01.115Z'
categories: ''
tags: ['Random Thoughts']
slug: software-blunder
---

I like chess. It is a game where principles are paramount and easy to understand. Still, their implications are hard to get for our brain ([not kidding](https://afontcu.dev/neural-networks-apocalypse/)).

Now, I tend to lose. I lose because I don't pay attention. I oversee threats and take dangerous paths, and I realize when it's too late.

Why did this happen? I think I was using the wrong mental model.

I thought I needed to play perfect games to win. Turns out, though, that winning a chess game is just a matter of not blundering and [waiting for your opponent to do so](https://youtu.be/TY41yF1gX1w?t=21).

It is not about playing great, groundbreaking moves all the time. I mostly play reasonably good moves and then blow everything up by making an awful one.

Now, this is a principle. Putting it in action is another story.

## Chess and software

What I came up to discover is that this applies to my daily job, too.

We are not supposed to find the hidden gem. You know, the ultimate feature that makes your product skyrocket or its performance to improve a thousand times.

We could do so if we had infinite time to think, analyze the position and act accordingly. But that's not the case.

What if, as in chess, we were supposed **not to blunder**?

That would mean we would need to make software just slightly better. Then, rinse and repeat.

Now, software allows you to take a move back. That's a huge benefit – you're not allowed to do so in chess. However, opportunity cost comes into play. That's something to bear in mind. Taking a small step back is way cheaper than a giant leap.

Some software decisions can be really bad for your product and business. In chess, making a terrible move spoils the whole game. Software nature is not so black and white, but still.

By the way, feel free to translate *"terrible move"* to *"a feature nobody is gonna use"* or *"a new framework we need to start using on production"*.

Truth hurts.

## How can we do so?

We already know the answer.

We need to avoid foot guns.

But yeah, just as if we were talking about chess again, knowing the answer is the easy part. The implications, though? They are huge.

## Some implications

You need to take small, improving steps. It means writing code that's deployable every few minutes. You can only do that if you work creating [small increments](https://afontcu.dev/small-increment/).

You should also write software that lets us know about its health (through metrics) as soon as it is available to our users (if not before!).

Also, the piece of code should do what it is supposed to do, and you should have proof of that (give me a T!, give me an E!, give me a S!, give me a T!, give me a S!).

That software should be easy to extend. This is hard because you need the experience to know where and how the software might need to grow.

All these implications are hard to implement. It takes time, because they require some discipline and knowledge.

## Try not to lose

Playing it safe doesn't mean avoiding risks. It means taking them knowingly and creating the required safety net around them.
---
title: 'Neural networks: The apocalypse is (almost) here'
description: >-
  AlphaZero has become the ultimate King of the gaming Artificial Intelligences.
  The algorithm, developed by DeepMind (a.k.a. Google), beat everyone at everything.
date: '2019-02-18T08:01:00.845Z'
categories: ''
tags: ['Random Thoughts']
slug: neural-networks-apocalypse
---

Last month, [**a detailed paper**](https://deepmind.com/documents/260/alphazero_preprint.pdf) was published with detailed information of the matches it played against [Stockfish](https://en.wikipedia.org/wiki/Stockfish_%28chess%29), the most popular and powerful chess engineer out there… until now.

## Mind = blown

Two things blow my mind with regard to AlphaGo.

Yes, it is several order of magnitudes better at chess than any other AI. We all assumed that humans are no longer rivals for machines in chess, but this machine is unique among them, too.

First of all, it uses the same algorithm to beat everyone at Chess, Shogi, and Go.

![](https://cdn-images-1.medium.com/max/1200/1*SrHu9Qw5wALchiYM5BS3XQ.png)

Beating. Everyone. At everything. No matter what.

Yeah, you read it right. It beats humans and machines in three ancestral games.

The most incredible part of it, though, is how the engineers achieved such a level of perfection and differentiation among different games. It really blows my mind.

## Noone taught chess to AlphaGo

Noone taught AlphaGo how to play chess. Engineers only taught him the basic rules: how pieces move, and what’s the ultimate goal (to checkmate the opposite King).

Chess is a really complex game. Movements are simple, but everything from there grows in complexity.

There’s some shared knowledge about a chess game. For instance: each piece has a theoretical value (pawn=1, bishop/knight=3, rook=5, queen=9). It is also known that some structures or strategies are _usually good ideas_: doubled pawns in a single file are bad, keeping the bishop pair is good, having rooks in open files (files without pawns) is an advantage, and so on. There is also a [shit-ton](https://www.urbandictionary.com/define.php?term=Shit-ton) of books of opening theory, that current AIs use in their favor to set the tone of the match right from the very first moves.

**This is refined human knowledge.** Knowledge that started thousands of years ago. Knowledge that Grandmasters use to beat each other in ~7 hours games, where small details and nuances decide the outcome after years of preparation.

But AlphaGo, as if it were the King in the North (_spoiler?_), **knew nothing**.

AlphaGo is a [deep neural network](https://skymind.ai/wiki/neural-network) that learned chess… **by playing against itself**. No human input. No opening theories. No relative value. No good or bad pawn structures.

## AlphaGo sucked. For, like, one or two games

Its first games were ridiculous. Random moves. But eventually, black or white won the game. And if one side wins, it must have performed better moves, right? AlphaGo learned something along the way, and played against the refined version of itself.

The goal of AlphaGo is also distinct among AIs. We are used to evaluating chess positions expressing the difference of “value” of white and black position. A +1.4 position means that white is up 1.4 pawns. A -12.0 in evaluation means that black is up the value of 12 pawns.

AlphaGo doesn’t give a damn about relative values. It just computes the likehood of victory (+1) or defeat (-1). Again, no theory, and no previous predefined knowledge. Let the machine do its thing.

So, they let it play against itself, and then again and again. After 300.000 iterations, AlphaGo was already beating Stockfish. 400.000 iterations later, **Alphago was crushing Stockfish in every single game**. Some [questions were raised](https://chess24.com/en/read/news/alphazero-really-is-that-good) about the methodology and the conditions of their games, but we are not here to discuss that.

A neural network, after several **hours** of training, was able to beat all the previous AIs that relied on human knowledge. Let me say that again. AlphaGo trained for **HOURS**. Humans have played chess for centuries.

I love chess and nerd stuff, so this is really my jam. Chess is far(?) from [being solved](https://en.wikipedia.org/wiki/Solving_chess), but it is frightening to think what neural networks can achieve in such a short period of time.

I mean, it’s chess, an innocent game. But what will happen when these tools are used to explore more controversial topics?

Who’s gonna be the one deciding whether an output is good or wrong? What will “good” or “wrong” mean in a context when no one — and I repeat, no one — can fully grasp the meaning of the decision, where a machine has learned its way to that decision?

Until now, engines were imitating humans. Now, computers are starting to learn, so **they are no longer limited by human intelligence**. They’ll overcome their creators.

We are still in control, though: we can set their boundaries, and decide where to apply their power. But that’s it.

That’s a pretty disturbing thought.

Extra ball: If you happen to have a Netflix account, check out [the documentary](https://www.netflix.com/es-en/title/80190844) of the match between AlphaGo and the reigning World champion of Go. It’s fascinating.

---
title: Beware the feedback loop
description: I know, I know. Feedback loops rock the stage. But.
date: '2019-11-07T09:17:04.326Z'
categories: ''
tags: ['Software Crafting', 'Agile']
slug: agile-open-spain-2018
---

Not long ago we agreed that [software development is just about feedback loops](https://afontcu.dev/feedback-loops/). Not sure if we actually agreed on that, though, but nevermind.

Turns out, feedback loops are harder than expected.

## Feedback loops come with an overhead

Let's say you want to develop a new feature.

You could access your production server by SSH. Cange a few lines here and there using `vim`. Press an undetermined number of random keys until you're able to save the file and quit. See your changes live.

Done.

Feels like a hacker.

On the other hand, you could develop the feature locally while pair programming. And do so while running a test suite to check that you didn't fuck up the whole thing, of course. Finally, you could set up a PR for your teammates to review your changes. After that, you'd solve merge conflicts, merge the PR and trigger the CI pipeline that would get your code into production safely after a moderate-to-large amount of time.

Which one of the scenarios outlined above **feels cheaper**?

However, which one of the scenarios outlined above **would you rather work with**?

Scenario #2 is **expensive**. It is, let's face it. Period. Learning how to pair program. Learning how to test. Running those tests. Defining a PR review strategy. Setting up the CI pipeline.

All of these tools provide useful feedback loops. Sure, they are useful, but let's face it: feedback loops **come with an overhead**.


## Feedback loops come with a challenge

We like feedback loops. They are cool. How would you know you are **building the right thing right** otherwise? 

They are the cool kid in ton because they give us "feedback".

And that's the challenge. Ahh, my friend, **feedback is hard**.

Well, getting feedback is quite easy, I'd say. I mean, you might have a failing test, a retrospective that felt wrong, a disappointed stakeholder after reviewing the sprint increment. That's "feedback".

The hard part, though, is to challenge the status quo once you get that feedback and act accordingly.

**Do you *really*** change your upcoming goals given an unexpected outcome from a user research report?

**Do you *really*** redesign that piece of code that is hard to test, or that broke due to an apparently unrelated test suite?

**Do you *really*** challenge your team structure and communication processes if you find a bottleneck during a team retrospective?

**Do you *really*** develop software to answer business questions, and then build a new software increment [based on the obtained answer](https://afontcu.dev/ways-telling-problem-oriented/)?


Having feedback loops without the "feedback" part is just **running in circles**. This sentence is so cool it couldn't come from me. [Props to Gojko Adzic](https://www.youtube.com/watch?v=OSHPk3X6EgE).

And running in circles is quite a pointless, expensive idea.

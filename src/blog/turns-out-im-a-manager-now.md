---
title: Well, it turns out I'm a manager now
description: Coding got fast. The planning, reviewing, and deciding didn't. So now I'm basically a manager.
date: '2026-05-26T10:00:00.000Z'
categories: ''
tags: ['Software Crafting', 'AI']
slug: turns-out-im-a-manager-now
---

Coding got fast. The planning, reviewing, and deciding didn't. 

That was not the plan, but now I'm basically a manager.

## The part that got fast

I wrote recently about how [AI is a faster shovel, not a better map](https://afontcu.dev/ai-faster-shovel/), and I stand by that. But something else has been bugging me since I started using AI agents daily for real work projects.

**Coding used to be 80% of my time.** Planning, reviewing, talking to people, making sure we're building the right thing. That was the other 20%.

Now coding is maybe...10%, or less. The rest is deciding what to build, how to build it. Meta stuff around coding. Aaand well, that's management, isn't it? We all knew these mattered most, but wow there's nowhere to hide.

Writing code was just a bottleneck because it took up a lot of time.

## How I actually manage my team

My team of _agents_, obviously.

I talk to one session that holds the project context. The orchestrator (I think I borrowed the term from somewhere). It helps me think about the bigger picture: what we're building, what's the architecture, how do we structure the project.

Then I spin up fresh agents for specific tasks. Each one starts clean. The flow is:

1. **Plan** a new feature/product/initiative in a fresh session.
2. **Review that plan** with a different agent. I then pass the revision to the planner, so it can incorporate feedback.
3. **Create a task list** in another session, to bridge the plan and the implementation details.
4. **Implement** it in another session.
5. **Review the code and verify changes** with yet another.

**Each agent gets a self-contained prompt.** Everything it needs to know, in one message. No "hey, remember that thing from yesterday?". The prompt is the context. When the agent finishes, I bring the output back to the orchestrator. The reviewer feeds back to the planner. The code reviewer feeds back to the implementer.

I have a team of specialists. I just help them hand off context.

Sometimes a step is too big, so I spin up another orchestrator just for that step. Break it down further, and feed the results back. It's recursive: in practice it's eating the elephant one bit at a time, something we have always done.

Why fresh sessions? **Each agent needs a specific job, not the whole picture.** The orchestrator holds the project context, but the implementer only needs to know its slice. When an agent sees too much, it connects dots that shouldn't be connected. **It gets creative in the wrong ways.** Same thing with the orchestrator: when its context fills up, I ask for a summary and paste it into a fresh session.

## And what do I do while my team works

I sit back and relax.

Just kidding, I'm basically there as the human in the loop. I'm constantly discussing the plan, the scope, the priorities, the public-facing APIs. But once everything is ready, I just let the agent code and test. Everytime I handoff context from one agent to another, it's a chance for me to step in.

I review the code, but I'm confident in the result if the previous steps were thorough and tested.

Oh, by the way, on testing: do you remember TDD and how we used to fight over it? Well, now you're just a skill away from having a TDD expert alongside you. Why wouldn't you give it a go?

## Inversion of control

Most of us braindump context at agents all at once. But it's so hard to remember everything from the get-go, so usually I have the orchestrator **interview me**. I open a session and tell it about the problem I'm trying to solve. It asks me questions, as many as needed, until we reach a shared understanding.

It's easier to answer questions than to face a blank canvas. The agent asks things I wouldn't have thought to consider. I use a skill for this, basically a prompt that says "interview me relentlessly about this plan/goal until we reach a shared understanding". I prefer this over the default plan mode, as it puts the agent in the driver's seat.

Planning got cheaper. The tools are right there. Use them.

## Where I still come in

It's so easy to just [skip the planning part and go straight to building](https://afontcu.dev/ai-faster-shovel/). The agents make it really, really easy.

Without the whole dance with different sessions, I found **agents would happily over-engineer when something simple would do.** After a while you just develop a nose for "nah, this doesn't need to be this complex." The agent doesn't have that nose, so that's still me.

When that happens, I treat it as [feedback loops](https://afontcu.dev/feedback-loops/). **When something fails repeatedly, there's a gap in the workflow.** I fix the gap, usually by updating the project instructions or the skills/prompts I use.

Garbage-in, garbage-out: instead of fixing the code, you fix the tool. It's always been like that, but now it's more obvious than ever.

## Ask me again in three months

This is what works for me today. An orchestrator session and specialist agents. Plan first, always. Avoid full contexts. Trust the model but verify the output.

Will I be working this way in three months? No idea. The tools are changing fast enough that half of what I described might be out of fashion by the time you read this.

The workflow may change, **but the fundamentals won't.**

They are more relevant than ever. [Simplicity and small increments](https://afontcu.dev/small-increment/). [Feedback loops](https://afontcu.dev/feedback-loops/). [Discovering the map](https://afontcu.dev/minefield-software-development/). Dealing with [complex problems](https://afontcu.dev/embrace-unknowns/). Knowing [what to build](https://afontcu.dev/goal-of-software-development/).

**AI made software engineering fundamentals more visible, not less important.**

Turns out I'm a manager now. Ask me again in three months if I'm any good at it.

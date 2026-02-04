---
title: 'We Will Forget the Code Exists'
description: "On vibe coding, invisible debt, and the people who built what we're standing on"
date: '2026-01-08T10:00:00.000Z'
tags: ['Random Thoughts']
---

There's a phrase I keep thinking about: *forget that the code even exists.*

It captures something about this moment in software. A shift that's happening faster than anyone expected.

## The vibes

There's a new way of building software. You describe what you want to an AI, it writes the code, you ship. Don't inspect every line. Move fast. Some call it "vibe coding."

I get the appeal. I use these tools every day. They're genuinely remarkable. The friction melts away. You think in product, not syntax.

And sometimes it falls apart. The AI hallucinates an API that doesn't exist. The code looks right but breaks in production. You spend an hour debugging something that would've taken ten minutes to write yourself. In those moments, you're suddenly very aware the code exists. You dig into docs, read source code, file issues.

But those moments are getting rarer. And the space between you and the foundations you're building on keeps growing.

## Someone made this

The old ecosystem had a trace. When you installed a library, you saw a list of dependencies—names of projects your code stood on. When you hit a bug, you found the GitHub repo. When you copied from Stack Overflow, you at least knew you were copying from somewhere.

There was a thread connecting you to the people who built what you were using. Thin, often ignored, but present.

Vibe coding erases the thread.

You prompt, you receive, you ship. No dependency tree in sight. No documentation page. No moment where you think: this stands on something. Someone made this.

The debt becomes invisible. Not because it's gone, but because you never see it.

## The framework won

Here's what this looks like in practice.

A few days ago, [someone opened a pull request](https://github.com/tailwindlabs/tailwindcss.com/pull/2388) on the Tailwind CSS documentation. The feature was simple: add an endpoint optimized for AI consumption. Make it easier for LLMs to read the docs.

The response from Adam Wathan, Tailwind's creator, was blunt. He'd laid off 75% of his engineering team the day before. Traffic to the documentation was down 40% from early 2023. Revenue down nearly 80%.

And here's the thing: Tailwind is more popular than ever.

More people are using it than at any point in its history. Ask an AI for a styled component and Tailwind is what you get. The framework won. And the team that built it is shrinking.

He closed the PR.

The business model that sustained Tailwind was simple: people visit the docs, they discover paid products, some of them buy. Documentation doubled as the top of a funnel.

That model doesn't work when the docs are consumed by machines that don't click "Buy."

Usage up. Revenue down. The correlation between "people depending on your work" and "being able to sustain that work" has broken.

## Cheap

Some say it's just the marketing that broke. Fewer doc visits, fewer conversions. But I think it's worse.

When anyone can build a plugin in fifteen minutes, the product itself loses value. The funnel dried up, sure. But the thing at the end of it got commoditized too.

Code is becoming cheap. And so is everything built from it.

If Tailwind—with a real business model, a real team, a sustainable path—can't survive this shift, it's not a story about one framework. It's a signal about where all of this is heading.

---

Something is disappearing. The thread that connected what we build to what it stands on. The awareness that someone made this.

We're moving fast. I just wonder what we're leaving behind.

---
title: "Introducing Cool UX Tools \U0001F680\U0001F680\U0001F680"
description: >-
  A curated list of 200+ cool resources and tools for developers, UX
  researchers, designers and project managers.
date: '2018-06-12T08:35:47.809Z'
categories: ''
tags: ['User Experience']
slug: cool-ux-tools
---

![](https://cdn-images-1.medium.com/max/1200/1*PyYW7nCxUVTX2fqkPaNPFw.png)

## The Why

I’m a front-end developer, and I love everything related to the web. The web is cool. It allows you to create things and people can then use them or hate them on Github issues.

I gathered a few UX tools and resources I used sparingly, and I wanted to share them, so this is why I created [**Cool UX Tools**](https://coolux.tools/). Now my cool UX tools are like my bases: they are belong to us ([_did I go too far with that one_](http://knowyourmeme.com/memes/all-your-base-are-belong-to-us)?).

> Wait a minute. You said you are a front-end developer. Why do you mess with UX people, mate? You are asking for trouble.

Life is too short to avoid pissing some UX experts off, isn’t it? Now seriously. I like how [this picture from Ben Melbourne](https://asinthecity.com/2011/11/10/the-difference-between-a-ux-designer-and-ui-developer/ 'Differences between UX designer and UI developer') (the second one) articulates the difference between UX, design, frontend and so on. And I like doing the right things right, so research and design are critical. And “UI Developer” sounds cool, so ¯\\\_(ツ)\_/¯

Bottom line: there are obvious differences between UXers, developers, and designers. But working on a small agency means that I often need to step into UX realm (_Developer of a small agency? You better call’em Jack of all trades_).

So, back to Cool UX Tools. I’ve always kept lists of cool resources that could help me through my adult life (mostly when I’m in front of a computer). If something was cool enough, I’d save it in a large Google Sheets file. Now I finally made up my mind and decided to share these lists with everyone.

Why **Cool UX Tools**, then? This project has three goals:

1.  **Discover the coolest UX resources out there.  
    **I want to be able to quickly select a tool to solve specific needs that might arise during a project. And I want to do it without having to navigate through hundreds of blog posts and lists.
2.  **Share them with everyone.**  
    If I find it useful, wouldn’t someone else found it too?
3.  **Learn** [**Nuxt.js**](https://nuxtjs.org/) **and make sure I stay up to date with Vue.**  
    I’m in love with Vue. Due to my job, I cannot focus on a single stack as much as I’d like to. So this is the perfect excuse. And Nuxt.js is a cool framework that remained a mystery to me — until this very project.

![](https://cdn-images-1.medium.com/max/1200/1*1HLnuyCJ3nWt1rnQUd6m5A.png)

## The What

The idea is pretty straightforward: a simple site featuring a curated list of tools, with a maximum of 8 tools per category. I wanted a curated repository of tools, not a _gotta-catch-them-all_ website with thousands of links. 8 tools per category felt right.

> Hahaha enough with the funny writing. You just copied Startup Stash!

**Cool UX Tools** was obviously inspired by [Startup Stash](http://startupstash.com/). I didn’t know about Bram Kanstein’s project, but when I [read about it](https://medium.com/startup-grind/how-i-launched-the-2-most-upvoted-product-of-all-time-on-product-hunt-f3772fb20ad8?ref=producthunt) a few months ago it surprised me. I was keeping similar lists of resources, only that I focused on UX! How cool is that? _(spoiler: not much, now people think I just stole his idea. Stop inventing things, people. Seriously)_.

What I did copy thou is the idea of setting a limit of items per category.

Anyway, the path was clear: I wanted to create some side project, and that post was the trigger I needed to start working on it.

By the way, Bram’s goal was to become famous and rich (I think he managed to achieve both..?), my goal is to have a pet project.

## The How

As I said, I followed no specific process to discover the tools featured in Cool UX Tools. I was familiar with some of them, and a bunch of them were recommended by family, friends and, fools.

Then I decided it was the right time to start building the site. So suddenly I needed waaay more information than a categorized link.

### First, we take logos, then we take descriptions

One by one, I gathered the URL of the logo of every resource. I couldn’t come up with an automated way. Now I think I could’ve scrapped every website, get their Twitter username, and then download the Twitter logo. It makes sense.

Anyway, no big deal. I had my JSON file with the name, logo URL, and category of every resource.

Next step? Downloading the images. And _ain’t nobody got time for that_. This time I went the smart way. I wrote a quick dirty script to download all the images from my `data.json` file, rename them and save them:

I actually logged the whole JSON object with added attributes such as the normalized name, but I’m too lazy to modify the gist again :)

It’s not pretty, it’s not optimized, but hey, it got the job done and it didn’t take long. Feel like an engineer.

Then I went one by one making sure every logo looked good _(spoiler: nope)_.

You may say all this logo stuff was unnecessary, but I think that it gives **Cool UX Tools** more credib- _it looks better_.

### Descriptions, huh?

“I really want to provide a custom, curated description for every and each resource. But it would require too much time. But I think it’s important for users, and if it’s important to my users it’s important to me. But starting from scratch? Crazy. I wish I had something to start with. But but but.”

I met myself halfway on this: wouldn’t it be cool to have some sort of self-description of every resource, and then just tweak it?

Where would a resource owner describe its product? Of course, in the _meta description_! Thanks, SEO guys!

So I could just scrap every website and pull their meta description. This would provide me with a cool starting point. I worked in an online marketing team for a while, and there I discovered some tools that could help me with this issue. I remembered [BuzzStream had a meta tag extractor](http://tools.buzzstream.com/meta-tag-extractor), and less than 10 seconds after I had my descriptions ready to copy&paste to my sheet, export a CSV and [create](https://www.csvjson.com/csv2json) an updated JSON. Neat! I should create CoolOnlineMarketingTools.

![](https://cdn-images-1.medium.com/max/1200/1*YbfpA-iRGWmTuVkyV3qL5A.png)

I had to rewrite several descriptions because they were _a little too much opinionated_ (“The best tool of the world!”)_._ Who are they to say that? Let **me** decide who is coolest one.

### Nuxt.js ❤

Once I had the content I could finally start to create the site. And I’m gonna say it: Nuxt is **A👏M👏A👏Z👏I👏N👏G**. I worked with several Vue boilerplates and implementations, and Nuxt is the one I liked the most. [Vuex](https://nuxtjs.org/guide/vuex-store/) is there, [vue-router](https://nuxtjs.org/guide/routing/) is there, [vue-meta](https://github.com/declandewet/vue-meta) is there… And it provides SSR and prerendering out of the box and useful conventions such as `pages/` and `plugins/` folders.

Seriously, if you are working with Vue and you want to set project standards, structure and conventions for your team, give Nuxt a go. _Convention over configuration._

Then I bought the domain, set up a Firebase hosting (this Firebase thing is so cool I wish I had a hosting platform category to add it there) and I was ready to go.

Oh, and by the way, I had a great time:

![](https://cdn-images-1.medium.com/max/800/1*pI_AHp40Dt2eUT7LF_3A8Q.png)

[Lighthouse-driven development](https://twitter.com/afontcu_/status/1006205059313668096).

## The Result

![](https://cdn-images-1.medium.com/max/1200/1*PyYW7nCxUVTX2fqkPaNPFw.png)

So this is [**Cool UX Tools**](https://coolux.tools/), a curated list of (obviously) **cool resources and tools** for developers, UX researchers, designers and project managers. Hope you like it!

## Next steps

I’m not sure how Cool UX Tools will evolve. Actually, I don’t know if it will evolve. I guess I’ll email every resource owner to tell him/her that his/her tool has been officially labeled as cool, and hopefully my project will get some visitors.

A wild idea crossed my mind: to extend its content and provide cool tools for UI developers. Then I would classify each category in… areas, or whatever. So you would be able to filter tool categories by role: UX Researcher, developer, UI designer… so I would cover all the frontend spectrum.

But this is a lot of work.

A detail resource page would be cool, too. There I could provide useful information such as pricing, links, and even try to gather feedback and rating from users…

But again, this is a lot of work.

From a technical point of view, I want to further explore Nuxt. I want to see how well works from an SEO perspective and try out more community plugins. I might end up evolving the project because of this (I want to play with an external API and Nuxt's`asyncData` hook, for instance).

## That’s a wrap

Feel free to give feedback in the comments section or on [Twitter](https://twitter.com/afontcu_), and check out the code in [Github](https://github.com/afontcu/uxstack)!

And, if you are a creator of some tool featured in UX Stack… well, you are cool! Drop me a word, I’d love to see what you think of this project.

_disclaimer: This might be the dumbest and most obvious disclaimer ever, but I’m not related to any of these amaaaazing tools, nor I’m a tool expert (does this even exist?) so feel free to disagree with me ❤ ._

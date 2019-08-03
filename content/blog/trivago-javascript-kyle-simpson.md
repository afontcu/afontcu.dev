---
title: Did I spend a whole week in Trivago learning JavaScript from Kyle Simpson?
description: I did spend a whole week in Trivago learning JavaScript from Kyle Simpson.
date: '2018-09-04T11:10:21.370Z'
categories: ''
tags: ['Javascript', 'Events']
slug: trivago-javascript-kyle-simpson
---

It [looked like a harmless Pull Request](https://github.com/webpack/webpack.js.org/pull/2389). I saw this [contest](https://tech.trivago.com/2018/07/23/win-a-spot-in-a-5-day-javascript-workshop-with-kyle-simpson/) by Trivago where 3 people would be fortunate enough to win a free spot in a 5-day JavaScript workshop with Kyle Simpson.

Well, I was fortunate enough.

Yeah, that’s about right. 5 days with Kyle Simpson. For free. In Düsseldorf, surrounded by other JavaScript engineers. How cool is that?

![](https://cdn-images-1.medium.com/max/1200/1*VYIrQTH68pviHiwuqhMfXA.png)

The menu for the week was the following:

- JavaScript foundations
- ES6: the good parts
- Rethinking Async
- Functional Light JavaScript
- Functional Light JavaScript II

One topic per day. 8 hours a day.

**Did I learn a ton?**

Heck yeah I did.

**Did my brain hurt every evening?**

Heck yeah it did.

I thought I knew JavaScript. It’s not only that I didn’t, is that **now I feel that I discovered a ton of things I didn’t know I don’t know**. (This sentence was as hard to write as it is to read).

## 5 days a week

Monday was great because we focused for 8 hours on **low-level JS stuff** such as scoping, hoisting, closures and so on.

We had time to go over _“classical JS interview questions”_, and we could spend the required amount of time on each question, to make sure we fully understood what was happening and **why**.

So, for instance, it’s clear to me now why this two loops don’t output the same result:

```js
for (var i = 0; i < 10; i++) {
  console.log('The number is ' + i)
}

for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log('The number is ' + i)
  }, 0)
}
```

Do you want the answer, and how to solve it? Ask for it 😜 Or, ehm, well, use Google.

On Tuesday we explored new ES6 functionalities, and instead of exploring the usual suspects (let/const, arrow functions)... we explored object/array destructuring, template literals and other “not-so-famous” **ES6 features**.

My mind was blown during Wednesday when we focused on **asynchronous** patterns and how to handle asynchronous data management in JavaScript. I mean, I thought I was well versed in Promises. Oh, how wrong I was.

Finally, we spent the last two days on **functional programming**. Kyle’s approach is great as we tried to get our heads around FP without dealing with all the convoluted stuff (monads, transducers, and other _hard-to-type-and-harder-to-understand_ words).

I tried to jot down every piece of knowledge I received and also trying to stay focused to understand the concepts and also the nuances behind the language. Besides that, I loved Kyle speeches on “_offtopic_” issues such as **learning mindset**, **code quality** and what it means to be a **“senior” developer**. He didn’t explicitly mention seniority, but from my point of view, he was describing what a “senior developer” looks like. I loved that speeches, as they provided real value besides JavaScript and any specific programming language.

Kyle asked us to try to go over our notes a week or so after the workshop. I did (even though I was on vacation), and a month later, I’m planning to put everything together and wrap it up nicely on a Github repository so I get to go over my notes again and to make sure I share what I learned with everyone. You know, _learn in public_.

It was also my first time traveling alone. I was excited about the idea of exploring a whole new city by myself, and it was worth it.

Let me also share [Debbie O'Brien](https://medium.com/u/2104dd167a50)’s [post](https://medium.com/bluekiri/i-won-a-place-on-the-javascript-workshop-with-kyle-simpson-getify-at-trivago-1b46bf9b990d) about her experience. She was another of the fortunate developers who earned a spot in the workshop. In her post, she goes into detail about the whole week and it really captures what being at Trivago for 5 days felt like. I’m glad I met her! I spent a lot of time with [Tomeu](https://medium.com/u/6cd01d3a9486) and [Rasmus](https://medium.com/u/df60937bd321) as well, who happen to be frontend developers for Trivago but they work in Palma, not in Düsseldorf. I learned tons of things about JS, but I also learned from the people I met during the week.

![](https://cdn-images-1.medium.com/max/800/1*qEA3CHBOFXwJfoivJfaF_A.png)

A meeting room at Trivago. True story.

Again, I’d like to thank [trivago_tech](https://medium.com/u/d91ecef33107) for such once in a lifetime opportunity. Trivago Headquarters is _ah-mah-zing_ and the people there are as cool as the offices. I just wish the workshop had taken us a month.

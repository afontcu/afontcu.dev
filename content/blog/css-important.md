---
title: "CSS: In defense of\_!important"
description: '!important isn’t bad and you shouldn’t feel bad — if you know how to use it'
date: '2018-11-07T07:56:01.115Z'
categories: ''
keywords: ''
slug: css-important
---

![](https://cdn-images-1.medium.com/max/1200/1*PVy5JNbDae-riozZ7upI8Q.png)

## What’s wrong with !important

Imagine a situation like this:

```css
div {
  background-color: blue;
  font-size: 2em;
}

div.some-item-whatever {
  background-color: red;
}

div#item {
  background-color: green;
  font-size: 3em;
}
```

This is quite easy to understand. All `<div>` have a font-size of 2 ems and are blue. Except for the ones with the class `some-item-whatever`, which are red. Except for the one with an ID of `item`, which is green and has a bigger text.

_Why?_

Because of [specificity](https://calidae.blog/button-button-button-button-db2538ee731f).

We can understand it, and we know how each selector trumps each other at a glance.

Now imagine this:

```css
div {
  background-color: blue !important;
  font-size: 2em;
}
```

Damn, now every `div` has a blue background.

What’s wrong with this?

First of all, that we are not sure of its reach: how many items are you trumping at once?

Secondly, that *!important* is **applied at a property level**. We cannot reason about specificity anymore by looking at selectors.

<div id="item">¯\\\_(ツ)\_/¯</div>

The `<div>` will have a font-size of 3em, but a blue background.

This is bad, because it is [unexpected](http://wiki.c2.com/?PrincipleOfLeastAstonishment).

It is bad because the only way to trump an *!important* style is by using another *!important*.

\[insert snowball gif here\]

## Weren’t you supposed to defend !important?

Ehrmm, you’re right.

Usually, when we use *!important* is because we don’t have enough time to refactor the mess we are in. So we drop an *!important* and call it a day.

This is **a reactive *!important***.

And we only [love reactivity](https://hackernoon.com/how-to-build-your-own-reactivity-system-fc48863a1b7c) in Javascript, not in CSS. (_easy that one, huh?_)

We should embrace proactive *!important* in situations where it makes sense. For instance, in our utility classes:

```css
.hidden {
  display: none !important;
}
```

The difference here is that I always want to hide an element with this class. No questions. *!important* there is useful and conveys purpose. It is also immutable.

This is the primary use I give *!important* on a daily basis. I can think of other use cases, way less frequent:

- Overriding 3rd party code.
- Different media (for instance, if you need to set unique attributes for the print version of your page).

Besides that, I’d argue that using *!important* is a **code smell**, and we should avoid it.

## TL;DR version

- `!important` is bad if you use it reactively — this means you should avoid breaking specificity rules and cascading because you want to trump yourself.
- If you use `!important` out of laziness, you are not taking into account the implications of your actions. It will grow, you (and your team) will end up abusing it, and you are going to end up with a messy, unmaintainable code and [ranting on Twitter](https://twitter.com/iamdevloper/status/753716544949981184?lang=ca).
- `!important` is OK when used proactively. It’s an outstanding way to achieve immutability in CSS.
- It comes in hand with an utility-first approach, where utility classes should do one thing and do it well ([SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle)).
- And, well, `!important` is the only way to trump inline styles. So if you are using some third-party code that provides inline styles (_why would you?_)… then this is the only way to go.

---
title: >-
  A Vue pattern for idiomatic, performant component registration you might not
  know about
description: …leveraging Vue and Webpack cool features!
date: '2018-07-28T17:08:30.507Z'
categories: ''
keywords: ''
slug: vue-dynamic-component-registration
---

If you played with Vue **Single File Components** a little bit, you probably know how to “call” a component from another one:

1.  `import` the child component.
2.  Register it on the `components` object of the parent component.
3.  Add the component to the template/render function.

```vue
<template>
  <some-random-thing />
</template>

<script>
import **SomeRandomThing** from './components/SomeRandomThing'

export default {
  components: {
    **SomeRandomThing**,
  },
}
</script>
```

It’s a common pattern, and it might end up becoming tedious. In this short post, we’ll learn a pattern (or two) to avoid some repetition. And we‘ll also improve our application performance for free.

Let’s dive in!

Imagine a `Header` component that holds the information and layout for our application’s header. Imagine now that this information could be user-related or company-related, depending on… I don’t know, a setting value. Whatever.

Now imagine that we have a `UserInfo` and `CompanyInfo` components. And we want to display one or another depending on that setting value we had already configured before.

## Version 1: Good ol’ way

This is the way we outlined above.

This is probably the “_default_” way everyone would think of (including me!):

Nothing fancy. We import two components, register them, and then display one or another depending on some prop value.

You might have used this “pattern” _aaaall_ over the place. And while there’s nothing inherently wrong with it, we can do better.

## Version 2: <component /> to the rescue

There’s a built-in component in Vue called [Component](https://vuejs.org/v2/guide/components.html#Dynamic-Components). Yeah, try to search that on Google.

This component `<component />` acts as a placeholder for another component and accepts a special `:is` prop with the name of the component it should render.

Notice how now we create a computed value with the name of the desired component, thus removing the `v-if/v-else` logic in the template in favor of the almighty `<component />`. We could even pass some props as usual.

Isn’t it cool?

Well, it is. But there’s still a **major pain point** there.

We had to import and register all the valid values for the `:is` prop. We had to import and register `UserInfo` and `CompanyInfo`.

Only if someone allowed us to dynamically import all these components on the fly so we wouldn’t have to import and register them…

…oh wait!

Did you say “_dynamically import_”?

We got you.

## Version 3: dynamic imports + `<component />` (and code splitting for free!)

Let’s see how [**dynamic imports**](https://webpack.js.org/guides/code-splitting/#dynamic-imports) and `<component />` can play together:

With the above solution, **import** turns into a function which returns a Promise. It will load the desired module at **runtime** if the Promise resolves (that is, nothing breaks and gets rejected).

So, what is happening here? We still use our new friend `<component/>`, but this time we are not providing a simple string but a whole component object. What?

As stated in the documentation, the `:is` prop can contain either:

- The name of a registered component, or
- **A component’s options object**

Bang! A “component’s options object”. This is exactly what we need!

Notice how we avoided importing and registering the components because our dynamic `import` is doing so at runtime ❤ .

There’s more information about Vue and Dynamic Imports [in the official documentation](https://vuejs.org/v2/guide/components-dynamic-async.html).

### A little gotcha

Notice that we access our prop `this.isCompany` **outside** of the dynamic import statement.

This is mandatory because otherwise Vue cannot do its reactivity magic and update our computed value when the prop changes. Try it out, you’ll see what I mean.

By accessing to our prop outside the dynamic import (by creating a simple `name` variable) Vue knows that our `componentInstance` computed property “depends on” `this.isCompany`, so it will effectively trigger a reevaluation when our prop changes.

### A word of caution _(updated, August 4th)_

When using dynamic imports, Webpack will create (on build time) **a chunk file for every file matching the expression inside the import function**.

The example above is a little contrived, but imagine that my `/components` folder contains 800 components. Then Webpack would create 800 chunks.

Since this is not what we were looking for (heh), make sure you [write stricter expressions and/or follow folder conventions](https://twitter.com/TheLarkInn/status/1025918613557981184). For instance, I tend to group the components I want to split in a folder called `/components/chunks` or `/components/bundles`, so I know which components is Webpack splitting.

Besides that _gotchas_, we achieved an **idiomatic**, **terser** pattern. It comes with a wonderful side effect that makes it really shine:

### Our “conditional” components are now code split!

If you `npm run build` a component like this, you’ll notice that Webpack will create a specific bundle file for `UserInfo.vue`, and another one for `CompanyInfo.vue`. Webpack [does that by default](https://webpack.js.org/guides/code-splitting/#dynamic-imports). Webpack is pure love ❤.

This is **great** because our users won’t load these bundles until the very moment our application request them, thus reducing our initial bundle size and improving our app’s performance.

[Code Splitting](https://webpack.js.org/guides/code-splitting/) is dope. Make sure you are familiar with it because if you are not using it yet, you can greatly improve your apps. Go for it!

Here, take this CodeSandbox and feel free to play with the three solutions:

By the way, you can even [customize the bundle name and the loading strategy](https://webpack.js.org/api/module-methods/#import-) for dynamic imports by using magic comments.

If you want to learn more about Code Splitting, Dynamic Imports and why you should care, please listen to sensei [Sean T. Larkin](https://medium.com/u/393110b0b9e4), from the Webpack core team:

Hope it helped!

_This post was featured in the_ [_#105 issue of the official Vue.js newsletter_](https://www.getrevue.co/profile/vuenewsletter/issues/105-vue-js-sprint-sneak-peek-get-the-vuevixens-scholarship-for-vue-js-london-125646) 💃

**I just started out my own newsletter! Feel free to** [**subscribe here**](https://buttondown.email/afontcu)**.**

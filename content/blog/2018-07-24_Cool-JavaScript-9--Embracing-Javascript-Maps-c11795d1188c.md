---
title: 'Embracing Javascript Maps'
description: >-
  Usually, Javascript means Arrays and Objects. Both are the default way to go
  when storing data in an application.
date: '2018-07-24T05:31:01.161Z'
categories: ''
keywords: ''
slug: embracing-javascript-maps
---

![](https://cdn-images-1.medium.com/max/800/0*xA5JE8PfTpmlghXf.png)

We all love JS ❤

Usually, Javascript means Arrays and Objects. Both are the _default way to go_ when storing data in an application.

But did you know that Javascript has also [**Maps**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)? In this post, we’ll explore the differences and similarities between Maps, Arrays, and Objects.

### First of all: What is a Map?

A [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a type of data structure that **holds key-value pairs**.

“_Dude, just like Objects_”, you might say.

Well, yes. Object and Map are based on the same concept. Actually, any Map shares its instance with Object.

But there are some key (_pun intended_) differences that make Map an interesting alternative to Plain-Old Javascript Objects:

#### 1\. Map keys can be \*anything\*

Object keys can only be a String or a Symbol (yup, I read that online. I would’ve said strings and numbers).

However, in a Map you can set whatever you want as a key, including Functions or a whole Object. Or, well, another Map. Probably. Try it out.

const **map** = new Map(\[  
  () => { doSomething() }, 'value associated',  
\])

#### 2\. Map elements are ordered

Well, that’s a huge difference between Maps and Objects. If you iterate over a Map, it will always return keys in order of insertion.

_Disclaimer: this is only true in ES6. But who writes < ES6 Javascript nowadays, right?_

### What are the benefits of Maps?

#### Map uses Iterables when…iterating

Maps make use of [Iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), so we can iterate them quite easily:

const **map** = new Map(\['key1', 'value1'\])  
**map**.set('key2', 'value2')

for (let \[key, value\] of **map**) {  
  console.log(\`${key} has value: ${value}\`)  
}

_(Notice the use of_ `_for..of_` _structure)._ You can also use a `map.forEach()` and provide a callback function.

Map prototype contains a series of methods (`entries` , `keys`) that return Iterables as well. So you would need to do something like this:

const **map** \= new Map()

**map**.set(0, 'foo')  
**map**.set(1, 'bar')

**map**.entries().next().value  // \[0, 'foo'\]  
**map**.entries().next().value  // \[1, 'bar'\]

#### Map prototype is quite powerful and declarative

For instance, `myMap.size` will return… well, the size (length) of the Map.

Why someone decided to call the property “size” instead of “length” (as in `Object.keys(myObj).length` remains a mystery to me).

You can do a lot of things with a Map:

const **map** = new Map()

**map**.set('myKey', 'myValue')  
**map**.has('myKey')   // True  
**map**.get('myKey')   // 'myValue'  
**map**.size           // 1  
**map**.clear()  
**map**.size           // 0

### Should I ditch Arrays and Objects and move to Maps?

Well, no. Each structure has its own perks. JSON has direct support for Objects, but not for Maps (AFAIK).

Of all three, only Maps maintain the order of its keys so there might be a real benefit there. On the other hand, you cannot do this with a Map:

const **obj** = {  
    id: 1,   
    title: 'some title',   
    print: function() {   
        return \`${this.id}: ${this.name}\`  
    },  
}

In the end, you should now of its existence and use Maps in your favor. If you find yourself doing things like iterating thousands of properties or keeping them in specific order, give [Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) a go.

You might’ve noticed I haven’t talk about performance. There are some differences, but we are talking about micro-optimizations (unless you work with hundreds of thousands of objects). Make sure you [split your code](https://webpack.js.org/guides/code-splitting/) and that you don’t serve 1.5MB hero images. Then focus on Object vs. Map performance.

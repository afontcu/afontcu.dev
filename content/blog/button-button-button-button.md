---
title: .button.button.button.button
description: I wanted to talk to you about CSS and couldn't come up with a better title.
date: '2019-04-11T11:10:21.370Z'
categories: ''
tags: ['Random Thoughts']
slug: company-family
---


![Old people making fun of vertically aligning in CSS](https://cdn-images-1.medium.com/max/2000/1*rUy_7Z13CBw_W9OhU8d6hA.png)

Nah, today we're not talking about vertically centering. Let's talk about this:

## .button.button.button.button is valid CSS, and it works

Yep. It works. Yep, totally valid:

```html
<style>
.button.button.button.button {
  color: red;
}
</style>

<div class="button">What color am I?</div>
```

This `div` will be red (shocking, right?).

And here comes the funny part:

## .button.button.button.button overrides .button.button.button

…which, in turn, overrides .button.button, which, in turn, overrides .button.

Yep, you read that right.

We love CSS, don't we.
So, this text is gonna be…


```html
<style>
.button.button.button.button {
  color: red;
}
.button.button.button {
  color: yellow;
}
.button.button {
  color: green;
}
.button {
  color: blue;
}
</style>

<div class="button">What color am I?</div>
```

[Comprova-ho](https://codepen.io/afontcu/pen/PmVzvd).

_"But, why?"_, you might be asking. Is it because the class is written "more times"? Because it appears first in the document? Let's check it out:

```html
<script>
div.button {
  color: blue;
}
.button.button {
  color: green;
}
</script>

<div class="button">What color am I?</div>
```

Who's winning now?

You got it. Green! As we would expect. More classes, right? But green appears after blue.

I aquí?

```html
<script>
.button {
  color: blue;
}
div {
  color: green;
}
</script>

<div class="button">Holi</div>
```

Now the text is blue.

Thing is, we can define the same property for an element in a thousand places. And CSS needs a way to understand which one to apply.

The winning selector won't be the longest, the one that came first, whatever.

Is the most **specific** one.

The what?

(╯°□°）╯︵ ┻━┻

CSS basically gathers all matching selectors for an element, and orders them by specificity. For each property, the one in the most specific selector trumps the others.

Okay, got it. So how would someone "compute" the specificity of a selector?

Wait, let me write a title.

## How is specificity computed?

We can group all CSS selectors in 4 categories. Each of these categories have an associated "weight" than we can use to compute the total specificity.


**Grup A**: Compta els estils inline (style=”color:blue”)

**Grup B:** Compta la quantitat de selectors de **ID** (#Button)

**Grup C:** Compta la quantitat de selectors de **classe**, **pseudoclasse** o **atributs** (.button, :hover, [type=”submit”])

**Grup D:** Compta la quantitat de selectors d’**elements** o **pseudoelements** (img, ::after)

Llavors, compara els números de cada grup, i el que sigui més alt, guanya. Tenint en compte que el grup A sempre pesa més que el grup B, que sempre pesa més que el C, que sempre pesa més que el D.

Aviam, un exemple que ho entendrem tots millor. Què és més específic, div.button:hover o bé #Form .button.selected ?

Podríem fer-ho de cap. No és gaire difícil, però algú més intel·ligent que tots nosaltres s’ha currat un [Specificity Calculator](https://specificity.keegan.st/):

![**0 1 2 0** és més gran que **0 0 2 1**](https://cdn-images-1.medium.com/max/2000/1*vTHfBVDrZwYyLgGOx-hwsA.png)***0 1 2 0** és més gran que **0 0 2 1***

Veient això, queda clar quin estil sobreescriuria l’altre en cas d’haver-hi conflictes (o sigui, *dos selectors que intenten modificar el mateix estil al mateix element*). 0 | 1 | 2 | 0 > 0 | 0 | 2 | 1. Un exemple més complicat però prou habitual:

    <div class="header">
      <h2 class="title">Holi</h2>
    </div>

![](https://cdn-images-1.medium.com/max/2000/1*ZQZv51TrB-9wOl3EU0UWPw.png)

**Ens hem passat el CSS!**

Oju que el grup A sempre sempre sempre tindrà més pes que el grup B, i el grup B més que el grup C, perquè concatenem les quantitats, no les sumem. O sigui:

    <div class="una classe i mes classes fins que arribem a deu" id="lolnope">Holi</div>

![**0 | 1 | 0 | 0 > 0 | 0 | 10 | 0**](https://cdn-images-1.medium.com/max/2000/1*uM9g5mfieiugTHmuu6lX8A.png)***0 | 1 | 0 | 0 > 0 | 0 | 10 | 0***

[He fet una demo extrema aquí](https://codepen.io/afontcu/pen/gWqwVO?editors=1100#0): 1000 classes no superen un sol ID:
 0 | 1 | 0 | 0 > 0 | 0 | 1000 | 0. Cap quantitat de classes superarà mai un ID.

## Vale, però .button.button.button.button…funciona?

Funciona! El CSS es menja que escrivim la mateixa classe dues, tres o les vegades. Ho diu l’*spec* de CSS:
> Repeated occurrances of the same simple selector **are allowed** and do **increase specificity**. *([W3C Recommendation, Selectors Level 3](https://www.w3.org/TR/css3-selectors/#specificity))*

    .button.button.button.button // 4 classes:** 0 0 4 0
    **.button.button.button        // 3 classes:** 0 0 3 0
    **.button.button               // 2 classes:** 0 0 2 0
    **.button                      // 1 classe:**  0 0 1 0**

## I l’ordre dels selectors no importa?

Clar que importa, animal. Però només quan hi ha dues regles que empaten a màxima especificitat. En aquest cas guanya l’última:

    .button.classe { color: red }  // 2 classes: **0 2 0
    **.button.classe { color: blue } // 2 classes:** 0 2 0
    **div { color: yellow }          // 1 element: **0 0 1**

    <div class="button classe">Holi</div>

El text es pintarà de color blau perquè guanya la regla que està declarada més avall de les que guanyen.

No és meravellós, el CSS?

(╯°□°）╯︵ ┻━┻

## Escolta… i el mític !important no es passa tot això pel forro?

Doncs… sí. Bàsicament. El que fa !important és agafar els estils que tenen aquest *flag* i duplica la taula:

    .classe { color: red !important } // 1 classe: **0 0 1 0**

    Com que té *important!*, el resultat és: **0 0 1 0 0 0 1 0**

Aquí, l’*!important* torna a concatenar els 4 grups, de manera que tooots els selectors que tinguin *!important* seran sempre, peti qui peti, més específics que els que no. Un img amb *!important* sobreescriurà un ID.

## .button.button.button.button és una ÑAPA

Espero que tothom qui llegeixi aquest article entengui que escriure quatre vegades una classe per augmentar-ne l’especificitat és una ñapa sideral. És tant evident que no volia ni escriure aquest paràgraf, però ja estic comptant les hores perquè algú em digui “*eh eh, que ho vas publicar al Medium eh! Això vol dir que ho puc fer servir*”.

**És un hack com una casa i no ens agrada**! Igual que és un hack atacar un ID fent-t’ho com a atribut perquè no sigui tan específic:

![Ñapa](https://cdn-images-1.medium.com/max/2000/1*_eOXwAuhagagbtB29SKcZA.png)*Ñapa*

És una ñapa… Però oi que mola?

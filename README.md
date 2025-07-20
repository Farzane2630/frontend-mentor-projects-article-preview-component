# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

<img width="1314" height="581" alt="Image" src="https://github.com/user-attachments/assets/78082fb2-f49c-4bba-b965-ba41e088f41a" />
<img width="500" height="654" alt="Image" src="https://github.com/user-attachments/assets/97731485-f4cd-4e76-bf30-4f61eae78997" />
<img width="500" height="654" alt="Image" src="https://github.com/user-attachments/assets/3fea6f1e-2efb-44cd-8f41-89bd542871d4" />

### Links

- Solution URL: [Add solution URL here](https://github.com/Farzane2630/frontend-mentor-projects-article-preview-component?tab=readme-ov-file)
- Live Site URL: [Add live site URL here](https://frontend-mentor-projects-article-pr.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Javascript

### What I learned

### 🔷 `transform: translateX(-50%);`

This is a CSS **transform function** that shifts an element horizontally by **50% of its own width, to the left**.

Why?
It’s very commonly used when you want to *center something horizontally* relative to its containing element.

#### Example:

```
.tooltip {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

Here:

* `left: 50%` moves the element’s **left edge** to 50% of the parent’s width.
* `transform: translateX(-50%)` moves the element left by **half its own width**, so it’s centered properly.

Without the `translateX(-50%)`, the tooltip would be shifted too far to the right.

So:
📐 `left:50%` + `translateX(-50%)` = center horizontally.

---

### 🔷 `aria-expanded`

This is an **ARIA (Accessible Rich Internet Applications)** attribute used for accessibility.

It indicates whether a toggle-able UI element (like a dropdown menu, accordion panel, or tooltip) is currently **expanded (`true`) or collapsed (`false`)**.

#### Example:

```
<button aria-expanded="false" aria-controls="tooltip">
  Share
</button>

<div id="tooltip" hidden>
  …
</div>
```

When the user clicks the button, your JavaScript should toggle the value:

```js
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
});
```

Screen readers will announce *"expanded"* or *"collapsed"* to visually impaired users.

So:
👩‍🦯 `aria-expanded` helps **communicate the state of interactive controls** for accessibility.

---

### 🔷 Summary:

✅ `translateX(-50%)` → shift element horizontally by -50% of its own width.
✅ `aria-expanded` → tells assistive tech if the element is expanded or collapsed.

If you want, I can also show you how to pair `aria-controls` and `hidden` to fully make your tooltip accessible — just ask! 🌱


### Continued development

### Useful resources

## Author

- Website - [Farzaneh Kazemi](https://verdant-bienenstitch-220a6d.netlify.app/)
- Frontend Mentor - [@Farzane2630](https://www.frontendmentor.io/profile/Farzane2630)
- StackOverflow - [@farzane-kazemi](https://stackoverflow.com/users/19888516/farzane-kazemi)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

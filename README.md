# Alfowa Saqi — Vue 3 + Vite

A clean Vue 3 marketing/information website for a custom fabric company.

## 1. Install

Open the project folder in VS Code or a terminal:

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Vite will give you a local address, usually:

```text
http://localhost:5173
```

## 3. Build for deployment

```bash
npm run build
```

The production files are created in:

```text
dist/
```

---

# Where to make changes

## Company name, WhatsApp and Instagram

Edit:

```text
src/data/site.js
```

At the top:

```js
export const site = {
  name: 'Alfowa Saqi',
  tagline: 'Custom fabrics made to order.',
  whatsapp: 'https://wa.me/YOUR_NUMBER',
  instagram: 'https://instagram.com/YOUR_HANDLE'
}
```

Change these values once. The header, footer, contact page and fabric CTAs use them automatically.

## Adding a fabric

Still in:

```text
src/data/site.js
```

Add another object to:

```js
export const fabrics = [
  ...
]
```

For example:

```js
{
  slug: 'my-new-fabric',
  name: 'My New Fabric',
  category: 'Cotton',
  shortDescription: 'Short description here.',
  overview: 'Longer description here.',
  price: 'From ₦12,000 / metre',

  image: '/images/fabrics/my-new-fabric.jpg',

  threads: [
    {
      name: 'Cotton thread',
      material: '100% cotton',
      description: 'Natural and breathable.'
    }
  ],

  process: [
    {
      number: '01',
      title: 'Specification',
      description: 'Discuss the requirements.'
    }
  ],

  gallery: [
    {
      title: 'Finished example',
      image: '/images/fabrics/my-new-fabric-1.jpg'
    }
  ]
}
```

The URL will automatically be:

```text
/fabrics/my-new-fabric
```

You do NOT need to create another Vue page.

Every fabric uses:

```text
src/views/FabricDetailView.vue
```

## Replacing images

Put your actual images here:

```text
public/images/fabrics/
```

Then reference them like:

```js
image: '/images/fabrics/royal-silk.jpg'
```

The project currently uses Unsplash stock-image URLs as placeholders.

Every image is a real `<img>` element, so replacing the images is straightforward.

## Changing the colours

Edit:

```text
src/assets/main.css
```

At the top you will find:

```css
:root {
  --navy: #01030f;
  --navy-2: #070b1c;
  --navy-3: #10162b;

  --gold: #ffcf7b;
  --gold-light: #ffe7b0;
  --gold-dark: #b77a27;
}
```

These are the main Alfowa brand colours taken from the logo you supplied.

The site defaults to dark mode.

Light mode is defined immediately below:

```css
[data-theme="light"] {
  ...
}
```

## Theme switcher

The actual switch is in:

```text
src/components/SiteHeader.vue
```

You should not normally need to change it.

It remembers the visitor's choice using `localStorage`.

---

# Project structure

```text
alfowa-saqi/
│
├── public/
│   └── images/
│       └── fabrics/
│
├── src/
│   ├── assets/
│   │   └── main.css
│   │
│   ├── components/
│   │   ├── FabricCard.vue
│   │   ├── SiteFooter.vue
│   │   └── SiteHeader.vue
│   │
│   ├── data/
│   │   └── site.js
│   │
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── FabricsView.vue
│   │   ├── FabricDetailView.vue
│   │   ├── OrderProcessView.vue
│   │   ├── AboutView.vue
│   │   └── ContactView.vue
│   │
│   ├── App.vue
│   └── main.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Important design decision

There is only ONE fabric detail template:

```text
src/views/FabricDetailView.vue
```

Fabric content lives in:

```text
src/data/site.js
```

This means adding 20 fabrics does not mean creating 20 Vue components.

The site reads the URL slug, finds the matching fabric in the data array and renders the same template with that fabric's information.

The supplied Alfowa logo is intentionally NOT displayed anywhere. It was used only to establish the navy/gold colour palette. The website uses the text brand "Alfowa Saqi".

# Paradise Nursery Shopping Application

A dynamic, responsive e-commerce shopping cart app for **Paradise Nursery**, built with React, React Router and Redux Toolkit.

## Project details

- **Project name:** Paradise Nursery Shopping Application
- **Repository:** https://github.com/ahmmikun/paradise-nursery-shopping-app
- **Landing page:** company name, tagline, background image and a **Get Started** button
- **Catalog:** 4 categories with 6 unique houseplants each (24 plants total)
- **Cart:** add, remove, increase/decrease quantities, live item count and live totals

## Features

- Landing page with Paradise Nursery branding and company information in `AboutUs.jsx`
- Responsive navigation bar on the landing, product-listing and cart pages
- Cart icon badge that updates dynamically as items are added
- "Add to Cart" buttons that disable once a plant is in the cart
- Redux slice with `addItem`, `incrementQuantity`, `decrementQuantity`, `removeItem` and `clearCart`
- Per-item line totals and an overall cart total
- Checkout button with a "Coming Soon" message and a Continue Shopping link
- Locally generated plant thumbnails, so there are no broken external image links

## Tech stack

React 18 · Vite · React Router v6 · Redux Toolkit · React Redux · Plain CSS

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
public/
  images/landing-bg.svg      # Landing page background image
  plants/*.svg               # 24 plant thumbnails
scripts/
  generate-plant-images.mjs  # Regenerates the plant thumbnails
src/
  components/
    AboutUs.jsx
    CartItem.jsx
    Navbar.jsx
    ProductList.jsx
  data/
    plants.js                # Categories and plant data
  App.css
  App.jsx
  CartSlice.jsx
  main.jsx
  store.js
  styles.css
```

## Submission file URLs

| Task | File | GitHub URL |
| --- | --- | --- |
| 1 | `README.md` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/README.md |
| 2 | `AboutUs.jsx` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/components/AboutUs.jsx |
| 3 | `App.css` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/App.css |
| 4 | `App.jsx` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/App.jsx |
| 5 | `CartSlice.jsx` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/CartSlice.jsx |
| 6 | `ProductList.jsx` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/components/ProductList.jsx |
| 7 | `CartItem.jsx` | https://github.com/ahmmikun/paradise-nursery-shopping-app/blob/main/src/components/CartItem.jsx |

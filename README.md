#  ShopNext

A full-stack e-commerce application built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Built as a learning project covering core Next.js concepts including the App Router, Server/Client Components, SSG, SSR, ISR, dynamic routing, layouts, and more.

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) — App Router, file-based routing, server actions
- [TypeScript](https://www.typescriptlang.org/) — Type safety across the entire project
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Fake Store API](https://fakestoreapi.com/) — Public API used for product data

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/shopnext.git
cd shopnext
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
shopnext/
├── app/
│   ├── layout.tsx              # Root layout — wraps all pages
│   ├── page.tsx                # Homepage /
│   ├── products/
│   │   ├── page.tsx            # Product listing /products
│   │   ├── loading.tsx         # Skeleton shown while fetching
│   │   ├── error.tsx           # Error boundary for /products
│   │   └── [id]/
│   │       └── page.tsx        # Dynamic product detail /products/:id
│   └── globals.css
├── components/
│   ├── Navbar.tsx              # Shared navigation bar (Server Component)
│   └── AddToCart.tsx           # Add to cart button (Client Component)
├── lib/
│   ├── types.ts                # Shared TypeScript interfaces
│   └── products.ts             # Local product data
└── public/
```

---

## Key Concepts Covered

### App Router & File-based Routing
Routes are defined by folder structure. Every route folder needs a `page.tsx` file.

```
app/products/page.tsx       →  /products
app/products/[id]/page.tsx  →  /products/:id  (dynamic)
```

### Server vs Client Components

- **Server Components** (default) — run on the server, can fetch data directly, cannot use `useState` or event handlers
- **Client Components** (`"use client"`) — run in the browser, handle interactivity, state, and events

```tsx
// Server Component — fetches data on the server
export default async function ProductsPage() {
  const products = await getProducts();
  return {...};
}

// Client Component — handles user interaction
"use client";
export default function AddToCart({ price }: { price: number }) {
  const [added, setAdded] = useState(false);
  return <button onClick={() => setAdded(true)}>Add to Cart;
}
```

### Data Fetching Strategies

| Strategy | How | When to use |
|---|---|---|
| **SSG** — Static | `cache: "force-cache"` | Content that never changes |
| **SSR** — Server-side | `cache: "no-store"` | Fresh data on every request |
| **ISR** — Incremental | `next: { revalidate: 60 }` | Content that changes occasionally |

### Dynamic Routes

The `[id]` folder creates a dynamic route. In Next.js 15, `params` is a Promise and must be awaited:

```tsx
interface Props {
  params: Promise;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  ...
}
```

### Layouts

`layout.tsx` wraps all child pages. The `Navbar` lives here so it appears on every page without re-rendering on navigation.

### Loading & Error States

Next.js automatically uses these files when present:
- `loading.tsx` — shown while the page is fetching data
- `error.tsx` — shown if the page throws an error (must be a Client Component)

---

## Scripts

```bash
npm run dev       # Start development server (Turbopack)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## Roadmap

- [ ] Cart state with React Context
- [ ] API Routes — custom backend endpoints
- [ ] Server Actions — form handling without API routes
- [ ] Authentication
- [ ] SEO — metadata and Open Graph tags
- [ ] Database integration

---

## License

MIT
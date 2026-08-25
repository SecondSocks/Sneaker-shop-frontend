# Sneaker Shop — Frontend

Next.js 16 frontend for the sneaker shop, built with React 19, Apollo Client (GraphQL), React Hook Form + Zod, Zustand, and Tailwind CSS 4. Package management uses [Bun](https://bun.sh).

## Prerequisites

- [Bun](https://bun.sh) 1.x
- Node.js 20+ (if running with `npm`/`yarn`/`pnpm` instead)

## Getting Started

Install dependencies:

```bash
bun install
```

Set the backend GraphQL URL via environment variables:

| Variable              | Description                              | Default                          |
| --------------------- | ---------------------------------------- | -------------------------------- |
| `BACKEND_GRAPHQL_URL` | Backend GraphQL endpoint (server side)   | `http://localhost:4200/graphql`  |

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `bun run dev`       | Start the development server                     |
| `bun run build`     | Create a production build                        |
| `bun run start`     | Start the production server                      |
| `bun run codegen`   | Generate GraphQL types from `codegen.ts`         |

## Docker

Build the image:

```bash
docker build -t sneaker-shop-frontend .
```

Run the container:

```bash
docker run -p 3000:3000 \
  -e BACKEND_GRAPHQL_URL=http://localhost:4200/graphql \
  sneaker-shop-frontend
```

Or use Docker Compose:

```bash
BACKEND_GRAPHQL_URL=http://localhost:4200/graphql docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

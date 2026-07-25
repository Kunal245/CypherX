# CypherX

CypherX is a production-oriented monorepo that bundles frontend applications, shared UI and hooks, and backend/database packages for a payments and merchant platform.

## Quick Overview

- **Frontend apps**: `apps/user-app` (customer-facing) and `apps/merchant-app` (merchant-facing), both built with Next.js (app directory).
- **Webhook handler**: `apps/bank-webhook` — lightweight handler for bank/webhook events.
- **Shared packages**: `packages/db` (Prisma client, migrations, seed), `store` (shared hooks/state), and `ui` (design system components).
- **Tooling**: Turborepo for task orchestration, shared ESLint/TypeScript configs, and Prisma for DB schema management.

## Technology Stack

| Layer | Technologies / Notes |
|---|---|
| Frontend | Next.js, React, TypeScript |
| UI | shadcn/ui, Tailwind CSS, PostCSS |
| Backend / API | Next.js API routes / Node.js |
| Database | Prisma ORM, PostgreSQL |
| Monorepo Tooling | Turborepo (turbo.json), npm workspaces |
| Dev & CI | ESLint, TypeScript, Prettier, GitHub Actions (CI) |


## Repository Layout

- `apps/`
   - `user-app/` — Next.js app for end users (auth, onboarding, dashboard)
   - `merchant-app/` — Next.js app for merchants (merchant dashboard, settings)
   - `bank-webhook/` — webhook endpoints and workers
- `packages/`
   - `db/` — Prisma schema, client wrapper, migration and seed scripts
   - `store/` — shared react hooks (e.g., `useBalance`) and atoms
   - `ui/` — shared UI components and styles used by both apps
- `docker/` — Dockerfile(s) and helpers (see Dockerfile.userApp)
- `eslint-config/`, `typescript-config/` — centralized linting and TS settings

### Project Tree

Below is a concise project tree to help new contributors find important code quickly:

```
.
├─ apps/
│  ├─ user-app/
│  │  ├─ app/
│  │  │  ├─ api/
│  │  │  ├─ (user)/
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ components/
│  │  ├─ lib/
│  │  └─ package.json
│  ├─ merchant-app/
│  │  ├─ app/
│  │  ├─ components/
│  │  ├─ lib/
│  │  └─ package.json
│  └─ bank-webhook/
│     └─ src/
├─ packages/
│  ├─ db/
│  │  ├─ prisma/
│  │  │  ├─ schema.prisma
│  │  │  └─ seed.ts
│  │  ├─ client.ts
│  │  └─ package.json
│  ├─ store/
│  │  └─ src/
│  └─ ui/
│     └─ src/
├─ docker/
│  └─ Dockerfile.userApp
├─ eslint-config/
├─ typescript-config/
└─ README_PROPOSAL.md
```

Add or update this tree if the repo structure changes.

### Dashboard

![Dashboard](packages/docs/dashboard.png)

Overview: displays current unlocked/locked balances and recent transactions.

### Quick Transfer / Add Money

![Quick Transfer](packages/docs/quick_transfer.png)

Overview: add money via linked bank, quick transfer UI.

### P2P Transaction

![P2P Transaction](packages/docs/p2p_transfer.png)

Overview: peer-to-peer transfer form and recent P2P transactions list.

### Account Details

![Account Details](packages/docs/account_details.png)

Overview: user profile details (email, number) and basic account metadata.

### Sign In

![Sign In](packages/docs/signin.png)

Overview: login form for existing users.

### Sign Up

![Sign Up](packages/docs/signup.png)

Overview: registration form for new users.


## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (recommended) or yarn
- PostgreSQL (or another DB configured in `packages/db/prisma/schema.prisma`)
- Docker (optional) for running a local DB or containerized services

## Getting Started — Local Development

1. Clone the repository and install dependencies at the root:

```bash
git clone <repo-url>
cd CypherX
npm install
# or: yarn install
```

2. Set up environment variables

- Create `.env` files in each app directory (e.g. `apps/user-app/.env`). Example minimal variables:

```
# apps/user-app/.env
DATABASE_URL=postgresql://user:pass@localhost:5432/cypherx_dev
NEXT_PUBLIC_API_BASE=http://localhost:3000
NEXTAUTH_SECRET=replace-with-a-random-secret
```

3. Database (Prisma)

- Prisma schema: `packages/db/prisma/schema.prisma`
- From the repo root or `packages/db` run:

```bash
cd packages/db
npm install
npx prisma generate
npx prisma migrate dev --name init
# seed if provided
npx ts-node prisma/seed.ts
```

If you prefer Docker for Postgres, start a Postgres container and point `DATABASE_URL` to it.

4. Start apps (examples)

- Start `user-app`:

```bash
cd apps/user-app
npm run dev
# or: yarn dev
```

- Start `merchant-app` similarly.

5. Running multiple packages from the monorepo root


If the repo has a root `dev` script or Turborepo scripts, prefer that to boot multiple services. Example with npm workspaces:

```bash
npm --workspace ./apps/user-app run dev
npm --workspace ./apps/merchant-app run dev
```

For parallel development you can open multiple terminals or adapt a root script to run both.

## Common Workarounds & Troubleshooting

 - Prisma: `prisma migrate dev` fails due to schema drift
   - Workaround: run `npx prisma db push` to sync schema for local development, then re-generate migrations when stable.

 - Prisma client missing/type errors after changing schema
   - Run `npx prisma generate` in `packages/db` and restart the TypeScript server or dev server.

 - Environment variables not picked up by Next.js
   - Remember Next.js caches env values at build time. Restart the dev server after changing `.env`.

 - Port conflicts (3000, 3001)
   - Change `PORT` env var or use `pnpm dev -- -p <port>` where supported.

 - `ts-node` / seed script errors
   - Ensure `ts-node` and `tsconfig-paths` are installed in `packages/db`; run `npm install` inside `packages/db` if needed.

 - Monorepo workspace resolution issues (cannot resolve package)
   - Delete `node_modules` and the lockfile at the root and run `npm install` again. Npm will install workspace packages when run at the repository root.

 - Next.js fast refresh or HMR not reflecting changes in linked packages
   - Ensure the workspace package is transpiled or symlinked correctly. For local `ui` package, add it to `transpilePackages` or use `next-transpile-modules` if necessary.

If you hit an issue not covered here, please open an issue with logs and exact commands used.

## Scripts

- Run app dev (package-level): `npm run dev`
- Build app: `npm run build`
- Lint: `npm run lint`
- Tests (if present): `npm test`

Check each package's `package.json` for exact scripts.

## Testing, Linting & Formatting

- The repo uses shared ESLint and TypeScript configs. Run lint and format from the package you're working on:

```bash
cd apps/merchant-app
npm run lint
npm run format
```

Add tests near the code they validate; each app/package may have its own test dependencies.

## Deployment Notes


- Build Next.js apps with `npm run build` and deploy to Vercel, Netlify, or your server.
- Ensure Prisma migrations are run in the deployment pipeline and `DATABASE_URL` is set in production.
- When deploying containerized, create a multi-stage Dockerfile and run migrations & seed as part of the release process if needed.

## Contributing

- Fork or branch from `main`/`develop` and open a PR with a clear description.
- Add tests for new features or bug fixes.
- Run lint and format before submitting.


# shadcn/ui monorepo template

This is a Next.js monorepo template with shadcn/ui.

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
# Steps: Bootstrapping
- ```npx shadcn@latest init --preset b3YRvgRFQI --template next --monorepo --pointer```
- ```npx shadcn@latest add --all -c packages/ui```

## Prisma
- /packages/db
- ```npm init -y```
- ```npx tsc --init``` (copy-paste the tsconfig.json from "packages/ui/" to "packages/db/")
- ```npx prisma@6 init```
- ```docker -e POSTGRES_PASSWORD=********* -d -p 5432:5432 postgres```
- delete prisma.config.ts (it's for P7 not usefull for P6)
- ```npx prisma@6 migrate dev --name init```
- ```npx prisma@6 generate```
- create index.ts "db/"
- add "exports" in package.json in "db/"
- ```npm i``` (root dir)

# Adding Jotai



# Adding Next-Auth
- apps/user-app/
- ```npm i next-auth```
- Configure user-app/lib/auth.ts (auth logic)
- Configure auth handler /apps/user-app/app/api/auth/[...nextauth] (same for merchant-app but different auth.ts logic)
- Changed /packages/db/package.json "type": "module"

# Initializing Bank Webhook
- apps/bank-webhook
- ```npm init -y```
- ````npx tsc --init```
- Create a dummy hdfc webhook to hit the bank server for transaction

# Seeding db with prisma
- /packages/db/
- ```npm install -D ts-node typescript @types/node```
- configure package.json
- ```npx prisma db seed```
- data added can be checked using ```npx prisma studio```

# Dummy HDFC Web-hook
- ```npm install -D tsx -w bank-webhook```
- scripts: "dev": "tsx watch src/index.ts"

# Containerizing user-app using Docker
```bash
docker build -t myuserapp .
```
```bash
docker run -p 3000:3000 myuserapp
```

# Adding NextAuth Custom Login Page

## Docs

[NextAuth Credentials Example](https://github.com/AhmedAlqurafi/next-auth-credentials)

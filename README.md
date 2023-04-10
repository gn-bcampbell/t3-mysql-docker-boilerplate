# Learning T3-App Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Project Technologies

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Documentation

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

## Setup
- Configured to use Docker for application & MySQL database

## How to use this?
- All packages and tools are already good to go
- You'll have to download and install MySQL Workbench and setup a database
- Once ready, change the connection strings and passwords inside `env.mjs` `docker-compose` and anywhere else they show up
- Then run the commands below to get started

## Commands
- **Run Application & Database**: `docker compose up`
- **Seed Database**: `pnpm db-seed`
- **Build Production**: `pnpm run build`

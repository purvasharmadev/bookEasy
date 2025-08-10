# Fleet Booking Monorepo (TypeScript Boilerplate)

This is a lightweight TypeScript monorepo starter for a solo freelancer:
- Yarn Workspaces ready
- apps/: admin (React), customer (Next.js), mobile (React Native)
- packages/: shared ui, utils, api-client (TypeScript src)
- backend/: Node.js/Express (TypeScript placeholder)
- Dockerfile placeholders and docker-compose for local dev

How to use:
1. Install Yarn or npm. Yarn recommended for workspaces: https://yarnpkg.com/
2. From the repo root: `yarn` (to install workspace dependencies)
3. Start an app: `yarn dev:admin` or `yarn dev:customer` etc.
4. Docker: `docker-compose up --build` (placeholders included)

This is a starter skeleton — replace placeholder files with real implementations.

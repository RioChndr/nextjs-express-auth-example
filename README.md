## Project Minimal setup

Stack technology

- [nextjs](https://nextjs.org/)
- [Expressjs](https://expressjs.com/)
- [Monorepo Nx.js](https://nx.dev/)
- [Prisma.io](https://www.prisma.io/)
- [Next-auth](https://next-auth.js.org/)
- [Chakra ui](https://chakra-ui.com/)


**Feature**
- Login (email & password)
- Register (email & password)
- With [Next-auth](https://next-auth.js.org/), possible to expand login method (e.g SSO)
- With [Chakra ui](https://chakra-ui.com/), can create custom design and fast
- Using [React Hook Form](https://react-hook-form.com/) to create form handler


## How to run

create `.env` with using `.env.template`

1. Install package
2. run backend using `yarn dev-be` or `npx nx serve backend`
3. run frontend using `yarn dev-fe` or `npx nx serve frontend`
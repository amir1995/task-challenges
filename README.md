# Tasks Challenges

This is my challenges repo based monorepo structure by turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `tasks`: my tasks challenges include task number one and two
- `ui`: a stub React component library shared by `tasks` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `hooks`: `hook`s used throughout the monorepo

Each package/tasks is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind](https://tailwindcss.com/) for code styling
- [React Query](https://react-query-v3.tanstack.com/) for fetch and cache and update data
- [i18next](https://www.i18next.com/) for multi-language feature
- [axios](https://axios-http.com/) for service call
- [react table](https://react-table-v7.tanstack.com/) for showing data on table
- [jestjs](https://jestjs.io/) for test cases

### Build

To build all apps and packages, run the following command:

```
cd task-challenges
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd task-challenges
yarn run dev
```

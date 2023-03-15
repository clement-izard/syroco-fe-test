# Syroco Front End Engineering Challenge

This is a solution to the Syroco Front End Engineering Challenge. It is built with Next.js and TypeScript. TailwindCSS is used for styling.

## Getting Started

First install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

You can also build the project and run it:

```bash
npm run build
npm run start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend

Only one route exists and serve  `GET /api/computation-options`  which returns the list of computation options.

It can be found in `pages/api/computation-options.ts`

### Frontend

The frontend show the options with selectable cards, only one option for each category can be selected at a time.

When the selection is done the "Launch computation" button can be clicked to show a modal with the selected options.

The modal can be closed by clicking on the "Close" button or by clicking outside of the modal.

### Tests

The tests can be run with the following command:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

These are very simple tests, as this is a challenge I didn't want to spend too much time on them.

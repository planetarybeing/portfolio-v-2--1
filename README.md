# Portfolio Version 2

## Get things running

This project is built on top of [NextJS](https://nextjs.org/), a full stack development framework built on top of React.

At the root of the project, you'll see a `package.json` file defining the dependencies.

Most of this is boilerplate, but I will call out the following three dependencies:

- `framer-motion` -> A react based animation library, used in a hand full of places, primarily the "Stars", "Moon" and "Waves" components to provide the parallax background

- `tailwindcss` -> All styling uses Tailwind CSS for this project

You can get the project running by first installing dependencies.

From the terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start the project on `localhost:3000`

## The file structure

Because this is a NextJS project, follow the standard NextJS pattern for organizing this project. If you're familiar with the latest in Next, you might know about the new `app` directory. This uses the older, more stable `pages` directory.

Inside of the `pages/` directly you'll find 3 files:

- `_app.tsx` -> A file which wraps around every page in our app.

- `_document.tsx` -> Essentially the NextJS version of the base "HTML document".

- `index.tsx` -> This represents the home route. Included a few components for rending the background, as well as the `Left` and `Right` components representing our content.

To add MORE routes to your project, see [this doc](https://nextjs.org/docs/basic-features/pages).

Inside of the `/src/components/` directory is where to find all of the good stuff.

## Styling

 Most styling is done using [Tailwind CSS](https://tailwindcss.com/).

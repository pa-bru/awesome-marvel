# Awesome Marvel 🙌

Demo [here](https://awesome-marvel-nyvpaacjkc.now.sh)

A React Project in the Marvel universe.

⚠️ **WIP** ⚠️ : Working on tests with Jest and Enzyme. For the moment global components and helpers are tested.
It remains root files, store (reducers/actions) and views to test.

To generate the current coverage use that command (don't forget to run `npm install` before):

```sh
$ npm run test:coverage
```

Then open the generated file with the command below

```sh
$ npm run test:coverage:open
```

## Setup

First, clone or download the repository.
Then, install the project with npm

```sh
$ npm i
```

## Run the App

```sh
$ npm start
```

## Features

- A `listing` of marvel heroes with infinite scroll
- A `detail` page to see specific data of an hero
- A user `history` management in the sidebar menu.
  - a list of the latest heroes the have seen
  - a button on each history element to delete it one by one
  - a button to clear all the history
- An `About` page to get some info about the project
- A page to handle non existing routes
- A page to handle unexpected errors (`ErrorBoundary`)

## Technologies

- Create React App - a useful React starter kit
- React 16.4 - use of new features like `componentDidCatch`, `getDerivedStateFromProps`...
- Redux - for the flux implementation
- Redux Thunk - for asynchronous calls
- Redux Dev Tools - a futuristic DX (developer experience) for redux
- Material UI - a react implementation of Google's Material Design
- React Router - for the routing
- React Helmet - to manage title and meta tag information
- React Swipeable Views - to add swipe interactions on mobile
- Jest & Enzyme for tests (Work In Progress)
- Babel for ES6 and ES7 magic, Webpack, ESLint, Prettier and other stuff which comes with CRA

## TODO

- Add tests with Jest and Enzyme (Work In Progress 🙀)
- Add a server to secure private keys
- Use the new React suspense API to load elements together
- Use the new Context API.
- Setup requests results cache
- use Redux Saga or something like redux-api-middleware to avoid redux thunk boilerplate
- Be more PWA compliant

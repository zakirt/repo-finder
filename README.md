# Repo Finder

UI tool designed to search for GitHub repos using [GitHub API](https://developer.github.com/v3/search/#search-repositories). The app is written in React and TypeScript. The script is built using [Webpack](https://webpack.js.org/) bundling tool.

## Requirements

* Node 12+
* NPM 6.13.4+

## Setup

* Git clone, or download the repo
* Run `npm i` to install the dependencies

## Building the app

### Development

This mode is useful for debugging. The Webpack will run with a `-w` flag in order to watch for changes. JS/CSS will not be minified in this mode.

To build the app in **development** mode use the following command:
```
npm run build:dev
```

### Production

In this mode the bundled code wil be optimized for production. All bundled JS/CSS will be minified.

To build the app in **production** mode use the following command:
```
npm run build:prod
```

## Running the app

Use the following command to launch the app on `localhost`'s port `9000`

```
npm start
```

## Unit tests

The app is using [Jest framework](https://jestjs.io/) for unit testing.

To test all files once run

```
npm test
```

To test all files in TDD mode (watch for file changes) run

```
npm run test:tdd
```

You can also target specific files.

Ex.

```
npm test RepoSearchAdapter
npm run test:tdd RepoSearchAdapter
```
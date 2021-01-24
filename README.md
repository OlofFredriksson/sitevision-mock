# sitevision-mock

> Jest mock for Sitevision Webapps / Restapps (Server side Javascript)

[![Build](https://github.com/OlofFredriksson/sitevision-mock/workflows/Build/badge.svg)](https://github.com/OlofFredriksson/sitevision-mock/actions)
[![npm](https://img.shields.io/npm/v/sitevision-mock)](https://www.npmjs.com/package/sitevision-mock)

## Prerequisites

Your Module Server Javascript code must be written in ES6-format in order to use this mock, see more here how to get started:
https://github.com/OlofFredriksson/babel-plugin-transform-sitevision-apps

## Getting started

`npm install --save-dev sitevision-mock`

### Load all (recommended)

In your `jest.config.js`, add following:

```javascript
{
  "moduleNameMapper": {
      ...require("sitevision-mock")
  }
}
```

### Load specific

```javascript
{
  "moduleNameMapper": {
      "appData":"<rootDir>/node_modules/sitevision-mock/dist/appData.js",
      "globalAppData":"<rootDir>/node_modules/sitevision-mock/dist/globalAppData.js"
  }
}
```

---

The functions is already compiled to ES2015 with Babel during build so you dont need to add them in `transformIgnorePatterns`.

## Limits

-   Dont use `jest.mock("Sitevision Class")` since the objects is already jest mocks.

## Roadmap

This project is in an early / **experimental** phase, but since this is files only used during local development, i dont see any risk using them in your project. It is recommended to lock the version since breaking changes could happen.

TODO:

-   1: Add empty template files for each of the Sitevision api's and utils (at least the most imporant ones ;))
-   1.1: Write a **README** with examples how to getting started.
-   2: Implement mock functions for the most common use cases so you dont need to manual do it in your test cases.

## Why using this?

If you write unit tests with Jest, you should be able to focus on writing tests on the functions and logic in your code, not spend time on writing mock functions that you should just ignore.

Imported classes will get wrapped in a jest object, so you can mock the return value or check if functions have been called.

Without this plugin, you could use [virtual mocks with jest](https://jestjs.io/docs/en/jest-object) to define the files.

## References Sitevision API

-   https://developer.sitevision.se/webdav/files/apidocs/overview-summary.html
-   https://developer.sitevision.se/docs/webapps

## Notice

This project is made during my spare time and since I dont have access to any Sitevision server its quite hard at the moment to show a good template project where this mock, and the babel-transform-plugin is used.

In a perfect world, maybe this mock is something that in the future should be generated by Sitevision themself? Much easier than doing reverse engineering. :-) (But less fun?)

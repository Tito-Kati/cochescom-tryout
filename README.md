# Introduction

The main motivation of this project is to solve the challenge proposed by Coches.com in the file
[TRYOUT.md](TRYOUT.md) available at the root of this same project.

Therefore, this document will explain how to use this project, as well as the structure that has been followed and the
reasons behind the different decisions that have been made during development.

## Installing the Project

The project has been developed using the latest v18 LTS version of Node, and it is recommended to run it with this
version to avoid compatibility issues.

If your system has another version of Node installed, it is recommended to use NVM to have multiple versions of Node
available simultaneously.

The remaining versions of the packages and dependencies are fixed in the `yarn.lock` file, which has been included with
at the root of the project.

To download these dependencies while respecting these versions, simply run the `yarn install` command in the root of the
project.

## Environment

Since the project is a tryout, no environment configuration (i.e. `.env` files) is required.

All environment variables such as endpoints or API keys for services like Chromatic are written directly in the code.

## Available Commands

### `yarn dev`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the
build for the best performance.

### `yarn start`

Serves on [http://localhost:3000](http://localhost:3000) the version that has been previously built with `yarn build`.

### `yarn lint`

Checks the code style and some errors. It can fix the styles automatically if run with `--fix` option.

### `yarn typecheck`

Run TypeScript type-checking to search for conflicts in the project.

### `yarn test`

Launches the test runner in the interactive watch mode.

In these tests, the logic behind the code is tested exclusively, since **Storybook + Chromatic are used for the Visual
Regression Tests**.

### `yarn storybook`

Runs Storybook in the development mode. Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

Components will reload when you make changes.

Stories have been defined to cover all the visual cases that the components supports. Non-visual tests (the logical
ones) are covered with `yarn test`.

### `yarn build-storybook`

Builds Storybook for "production" to the `storybook-static` folder. The build is minified and the filenames include the
hashes.

### `yarn chromatic`

Builds Storybook and uploads it to Chromatic. Chromatic is a Visual Regression Testing Service.

For each build it will make captures all the stories and compare them with the previous version. If the images are
different, a story-by-story confirmation will be requested that the changes that have occurred are expected.

The builds, screenshots and stories of different versions can be checked on the page:
https://www.chromatic.com/builds?appId=63f69b1917aa3f3b80cd540a

You can send me your email so that I authorize you, and you can see the Visual Regression Tests.

Or create your own project in chromatic and modify the `--project-token` in the chromatic command in `package.json` to
match your project's.

## Used Dependencies

### JavaScript Framework

To align with the Coches.com stack, [Next.js](https://nextjs.org/) has been used as the JavaScript framework.

To speed up the setup of the project, a Next.js with Typescript Template has been used, which
offers predefined commands and configurations.

Although it allows for detailed configuration of all aspects of React and the other libraries used for building the
application, default configurations have always been used to save time.

#### HTTP Client

To make HTTP requests, the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) has been chosen. This
API is native in all web browsers and also has support in Node starting from v18.

It is fully capable of making requests while keeping the code clean, saving space in the bundle by not having to include
libraries such as Axios or Ajax.

#### Cache

To cache the data requested in the tryout, the native 
[LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) has been used.

The reasons are the same as for the HTTP client. There are plugins for Redux and libraries that offer this
functionality, but this native API is fully capable, reduces the bundle size, and also reduces the cost of preparing the
project to solve the challenge in a short time.

### CSS Framework

The challenge gives complete freedom to choose which tools to use for the visual part, therefore, SCSS has been used
together with [TailwindCSS](https://tailwindcss.com/) to generate the necessary visual components for the application.

The reason for using TailwindCSS was to speed up and homogenize a base of styles, I recommend taking a look at 
`tailwind.config.js` to see all the options that have been configured.

The [BEM](https://getbem.com/) naming convention has been followed along with React module styles to keep the CSS code
clean and organized, as well as the Mobile First Pattern to generate simpler Cascading Style Sheets for less capable
devices (i.e. mobile devices).

Although only images was provided for desktop design, all components have been adapted to display correctly on devices
of all sizes following the Mobile First Pattern mentioned above.

### Unit Testing

[Jest](https://jestjs.io/) has been used for Unit Testing along with
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

As mentioned earlier, these tests have been developed exclusively to only test the logic of the application, leaving
Visual Regression Testing to Storybook and Chromatic.

### Visual Regression Testing

Stories have been created for all components with visual purpose, so we can test them individually in a sandbox mode
using the [Storybook](https://storybook.js.org/) library.

Additionally, the [Chromatic](https://www.chromatic.com/) service has been used to turn all these stories into visual
regression tests.

## Directories

For this project, a series of sub-folders have been created in the `src` directory to categorize the code based on its
functionality.

The SOLID principles have been followed, and inspiration has been taken from DDD and Hexagonal Architecture to make the
separation of concerns.

### `src/components`

This directory stores components whose main purpose is to visually represent the data that the application handles.

None of these components will use services without the user interaction.

### `src/dtos`

Directory where the application's data transfer objects are stored.

These objects are just the skeleton of the data that is passed between services and components.

Additionally, they have some functions to transform this data and make it reusable in different parts of the application
without coupling these implementations to the components.

### `src/pages`

Directory where the components associated with each of the application's pages are stored.

These components are associated 1:1 with a URL and consume a service to obtain data from the application during
their loading.

### `src/services`

Directory where external services such as API calls are located.

These services make use of the native Fetch and LocalStorage APIs to fulfill their function.

Since each service is associated with only one entity and to save some development time, the transformation of
infrastructure data to domain entities has been delegated to these services. In a larger-scale application, it is ideal
to separate Repositories from Transformers.

### `__fixtures__`

Some pre-built data that is reused in both tests and stories.

### `__stories__`

This folder contain the stories belonging to the component with the same name on `src` folder. These stories are used
by Storybook to create a sandbox where these components can be tested freely and by Chromatic to perform Visual
Regression Tests.

Pages do not have stories, as they do not have their own visual representation.

### `__tests__`

This folder contain Unit Tests that cover the logic of the application. They are directly associated with the file with
the same name on `src` folder.

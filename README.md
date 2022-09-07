<div align="center">
  <a href="#">
  	<img src="https://media.giphy.com/media/GHeV8BGjJAAWk/giphy.gif" alt="React Native Components" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>@dfhernandez/common-utilities</b>
  </p>
  <p>
     <i>Library that contains all sharable utilities and configuration files, written in Javascript.</i>
  </p>
  <p>

[![NPM version](https://img.shields.io/npm/v/@dfhernandez/common-utilities?style=flat-square)](https://img.shields.io/npm/v/@dfhernandez/common-utilities?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

  </p>
</div>

---

# 2600Hz - Commio
## _JS Utilities Library_

## Installation

```sh
yarn add @dfhernandez/common-utilities
```

## Usage

```js
import { capitalize, humanize } from '@dfhernandez/common-utilities';

// ...

<Text>{capitalize(headerText)}</Text>
<Button title={humanize(buttonName)} onPress={}.... />
```

You can also import or require directly from folder

```js
const {
  prettierBaseConfig,
} = require('@dfhernandez/common-utilities/lib/prettier-config');

prettierBaseConfig.jsxBracketSameLine = false;

module.exports = prettierBaseConfig;
```

**Configuration files**
You can extend any of the following configs:
- eslint (_.eslintrc.js_)
- prettier (_..prettierrc.js_)
- release-it (_.release-it.js_)
- commitlint (_commitlint.config.js_)
- svgrrc (_.svgrrc.js_)
- jest (_jest.config.js_)
- lint-staged (_lint-staged.config.js_)
- tsconfig (_tsconfig.json_)

All configuration files are imported and used same way, there are just two files that need different treatment

*eslint*
Eslint file exports a function that receives the root folder

```js
const {
  eslintBaseConfig,
} = require('@dfhernandez/common-utilities/lib/eslint-config');

module.exports = eslintBaseConfig(__dirname);
```

*tsconfig*
This file must extends from any of the ts config files available
```json
{
  "extends": "@dfhernandez/common-utilities/tsconfig.base",
  "compilerOptions": {
    "baseUrl": "./",
    ...
  },
  "exclude": [...],
  "include": [...],
}
  
```

## Development

This project requires [Node.js](https://nodejs.org/) v14+ to run.

Using *.nvmrc* file helps to normalize node version used by all maintainers.
If you are required to use version specified in this file, run these commands.

```bash
nvm use
nvm install
```

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) v1+ to install dependencies and devDependencies.

```bash
yarn install
# Or just
yarn
```

**Create symlink**
Run the following command on package root folder, so you can consume on an app locally

```bash
yarn link
```

**Watch project**
Build package whenever there is a change
```bash
yarn watch
```

**Consume the package**
`Both projects must be placed on same folder, otherwise won't work`
```bash
yarn link @dfhernandez/common-utilities
```

Build the package
_Automatically will build the project_
```bash
yarn build
```

## Utilities

Format code using [Eslint](https://eslint.org/)

```bash
yarn run lint:fix
```

Format code using [Prettier](https://prettier.io/)
```bash
yarn run format
```

Format code using [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/)
```bash
yarn run prettify
```

Check [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) on files
```bash
yarn run typescript
```

Run full check
```bash
yarn run full-check
```

## Tech
Components library uses a number of open source projects to work properly:

- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) - Strongly typed programming language which builds on JavaScript
- [NodeJs](https://nodejs.org/es/) - Allows execute javascript scripts on the terminal
- [Luxon](https://moment.github.io/luxon/) - library for dealing with dates and times in JavaScript (better alternative than Moment.js)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

**Commits**
Commits must follow [conventional commit format](https://conventionalcommits.org/)
Make sure your messages look like the following examples
```
feat: Adding new badge component
fix: Touchable component not being exported correctly
fix!: Drop support for Typescript
```
_Note that the last one will generate a Major commit. It has the same result as adding a breaking change footer_

Follow [Semantic Versioning 2.0.0](https://semver.org/) to update project version.

[Release-It](https://github.com/release-it/release-it) will take care of versioning, you just have to give the correct type to commit:

- **fix** - to indicate a bug fix (PATCH) ex . v0.0.1
- **feat** - to indicate a new feature (MINOR) ex. v0.1.0
- **chore** - for updates that do not require a version bump (.gitignore, comments, etc.)
- **docs** - for updates to the documentation
- **BREAKING CHANGE** - regardless of type, indicates a Major release (MAJOR) ex. v1.0.0

Visit [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for more examples.

**Make a release**
Run following command after your last commit/amend. Then answer with Y/N the prompt
```bash
yarn release
```

## License

MIT

![main_logo](https://raw.githubusercontent.com/psychobolt/leetcode-storybook/master/logo.png)

# LeetCode Storybook Starter

[![Main workflow](https://github.com/psychobolt/leetcode-storybook-starter/actions/workflows/main.yml/badge.svg)](https://github.com/psychobolt/leetcode-storybook-starter/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/psychobolt/leetcode-storybook-starter/branch/main/graph/badge.svg)](https://codecov.io/gh/psychobolt/leetcode-storybook-starter/tree/main/src)

A starter sandbox for solving [LeetCode](https://leetcode.com/) problems in [Storybook](https://storybook.js.org/)

## Included

- Login to your user account with [Leetcode CLI](https://www.npmjs.com/package/vsc-leetcode-cli)
- Scaffold Leetcode problems with [Yeoman](https://yeoman.io/) and [generator-leetcode-storybook](https://www.npmjs.com/package/generator-leetcode-storybook)
- Yarn [Plug'n'Play](https://yarnpkg.com/features/pnp) support
- [ES Module](https://nodejs.org/api/esm.html) system support
- [styled-components](https://www.styled-components.com/) with [default](https://www.styled-components.com/docs/tooling#stylelint) [stylelint](https://stylelint.io/) support
- Type checking with [Flow](https://flow.org)
- Test Automation
    - Visual testing with [Chromatic](https://www.chromatic.com/)
    - Interactive testing with [@storybook/addon-interactions](https://www.npmjs.com/package/@storybook/addon-interactions)
    - Run component and story tests with [Jest](https://jestjs.io/) and included libraries:
        - [React Testing Library](https://testing-library.com/docs/react-testing-library)
        - [@storybook/testing-react](https://www.npmjs.com/package/testing-react)
    - Code Coverage reporting with [Codecov](https://codecov.io/)
- JS rule style checking with [ESLint](http://eslint.org/) using [AirBnb config](https://www.npmjs.com/package/eslint-config-airbnb) and plugins:
    - [Storybook](https://www.npmjs.com/package/eslint-plugin-storybook)
    - [MDX](https://www.npmjs.com/package/eslint-plugin-mdx)
    - [Flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
    - [Webpack Resolver](https://www.npmjs.com/package/eslint-import-resolver-webpack)
- Continuous integration with [GitHub Actions](https://github.com/features/actions)

## Development Guide

Please see [DEVELOPMENT.md](DEVELOPMENT.md)

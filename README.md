<div align="center">
<h1>rtl-simple-queries</h1>

<p>Simple wrapper queries for @testing-library/react</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## The problem

To get an element from while testing with -
[@testing-library/react](https://github.com/testing-library/react-testing-library),
we have 6 variants viz. getBy, getAllBy, queryBy, queryAllBy, findBy, and
findAllBy.

We have to remember which one to use when. The name of methods is entirely a
familiarity thing. But just by the name of the method it bit difficult to know
which one would throw erorr if element is not found, or which one is async.

## This solution

This library wraps those methods with easier to remember APIs

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev rtl-simple-queries
```

## Usage

`screen` can be exported from `'rtl-simple-queries'`

Addional parameters from sync query `allowEmpty` and `allowMultiple` and for
async we only have one option `allowMultiple`

```javascript
import {screen} from 'rtl-simple-queries'

fetchByText(/text/, {allowEmpty: true, allowMultiple: false})
fetchByText(/text/, {allowMultiple: false})
fetchByText(/text/)

// async
await fetchByTextAsync(/text/, {allowMultiple: true})
```

To use queies for scoped container we could do

```javascript
// test-utils. js
function render(component, options) {
  const utils = rtlRender(component, options)
  const queries = getSimpleQueries(utils)
  return {...utils, ...renderSyncQueries}
}

// use this render instead of importing from @testing-library/react
const {fetchByText} = render(<p>text</p>)
```

## Other Solutions

You can refer to
[cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet#queries)
when you forget.

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/balavishnuvj/"><img src="https://avatars2.githubusercontent.com/u/13718688" width="100px;" alt="Balavishnu V J"/><br /><sub><b>Balavishnu V J</b></sub></a><br /><a href="https://github.com/balavishnuvj/rtl-simple-queries/commits?author=balavishnuvj" title="Code">💻</a> <a href="https://github.com/balavishnuvj/rtl-simple-queries/commits?author=balavishnuvj" title="Documentation">📖</a> <a href="#infra-balavishnuvj" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/balavishnuvj/rtl-simple-queries/commits?author=balavishnuvj" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[version-badge]: https://img.shields.io/npm/v/rtl-simple-queries.svg?style=flat-square
[package]: https://www.npmjs.com/package/rtl-simple-queries
[downloads-badge]: https://img.shields.io/npm/dm/rtl-simple-queries.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/rtl-simple-queries
[license-badge]: https://img.shields.io/npm/l/rtl-simple-queries.svg?style=flat-square
[license]: https://github.com/balavishnuvj/rtl-simple-queries/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/balavishnuvj/rtl-simple-queries/blob/master/other/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/balavishnuvj/rtl-simple-queries/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/balavishnuvj/rtl-simple-queries/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/balavishnuvj/rtl-simple-queries/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->

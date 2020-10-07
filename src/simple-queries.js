// eslint-disable-next-line testing-library/no-dom-import
import {screen as rtlScreen} from '@testing-library/dom'

export const variants = [
  'LabelText',
  'PlaceholderText',
  'Text',
  'DisplayValue',
  'AltText',
  'Title',
  'Role',
  'TestId',
]
// was easier to test
// Object.keys(rtlScreen).forEach(queryName => {
//   if (queryName.startsWith('getAllBy')) {
//     const variantName = queryName.replace('getAllBy', '')
//     variants.push(variantName)
//   }
// })

function getProxySyncMethod(variant, queries, {allowMultiple, allowEmpty}) {
  const fnName = `${allowEmpty ? 'query' : 'get'}${
    allowMultiple ? 'All' : ''
  }By${variant}`
  return queries[fnName]
}

function getProxyAsyncMethod(variant, queries, {allowMultiple}) {
  const fnName = `find${allowMultiple ? 'All' : ''}By${variant}`
  return queries[fnName]
}

function getSimpleQueries(utils) {
  const syncQueries = {}
  const asyncQueries = {}
  variants.forEach(variant => {
    syncQueries[`fetchBy${variant}`] = (
      matcher,
      {allowMultiple = false, allowEmpty = false, ...options} = {},
      ...args
    ) => {
      const fn = getProxySyncMethod(variant, utils, {
        allowMultiple,
        allowEmpty,
      })
      return fn(matcher, options, ...args)
    }
    asyncQueries[`fetchBy${variant}Async`] = (
      matcher,
      {allowMultiple = false, ...options} = {},
      ...args
    ) => {
      const fn = getProxyAsyncMethod(variant, utils, {
        allowMultiple,
      })
      return fn(matcher, options, ...args)
    }
  })
  return {...syncQueries, ...asyncQueries}
}

const simpleQueries = getSimpleQueries(rtlScreen)

const screen = {...rtlScreen, ...simpleQueries}

export {screen, getSimpleQueries}

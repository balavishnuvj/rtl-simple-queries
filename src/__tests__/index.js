import * as rtlUtils from '@testing-library/react'
import {screen} from '../'
import {variants} from '../simple-queries'

jest.mock('@testing-library/react')
describe('Cases of screen', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  describe('when no option is passed', () => {
    variants.forEach(variant => {
      test(`getBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}`]('button')
        expect(rtlUtils.screen[`getBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`getBy${variant}`]).toBeCalledWith('button', {})
      })
    })
  })
  describe('when allowEmpty option is passed', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}`]('button', {allowEmpty: true})
        expect(rtlUtils.screen[`queryBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`queryBy${variant}`]).toBeCalledWith(
          'button',
          {},
        )
      })
    })
  })
  describe('when allowMultiple option is passed', () => {
    variants.forEach(variant => {
      test(`getAllBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}`]('button', {allowMultiple: true})
        expect(rtlUtils.screen[`getAllBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`getAllBy${variant}`]).toBeCalledWith(
          'button',
          {},
        )
      })
    })
  })
  describe('when both allowMultiple and allowEmpty option is passed', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}`]('button', {
          allowMultiple: true,
          allowEmpty: true,
        })
        expect(rtlUtils.screen[`queryAllBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`queryAllBy${variant}`]).toBeCalledWith(
          'button',
          {},
        )
      })
    })
  })
  describe('when both allowMultiple and allowEmpty is called along with option options', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}`](
          'button',
          {allowMultiple: true, allowEmpty: true, sometherOption: 'value'},
          {third: 'argument'},
        )
        expect(rtlUtils.screen[`queryAllBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`queryAllBy${variant}`]).toBeCalledWith(
          'button',
          {sometherOption: 'value'},
          {third: 'argument'},
        )
      })
    })
  })
  describe('when no option is called for async', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}Async`]('button')
        expect(rtlUtils.screen[`findBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`findBy${variant}`]).toBeCalledWith('button', {})
      })
    })
  })
  describe('when both allowMultiple option is called for async', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}Async`]('button', {
          allowMultiple: true,
        })
        expect(rtlUtils.screen[`findAllBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`findAllBy${variant}`]).toBeCalledWith(
          'button',
          {},
        )
      })
    })
  })
  describe('when both allowMultiple option and other param is called for async', () => {
    variants.forEach(variant => {
      test(`queryBy${variant} function should be called`, () => {
        screen[`fetchBy${variant}Async`](
          'button',
          {
            allowMultiple: true,
            sometherOption: 'value',
          },
          {third: 'argument'},
        )
        expect(rtlUtils.screen[`findAllBy${variant}`]).toBeCalledTimes(1)
        expect(rtlUtils.screen[`findAllBy${variant}`]).toBeCalledWith(
          'button',
          {sometherOption: 'value'},
          {third: 'argument'},
        )
      })
    })
  })
})

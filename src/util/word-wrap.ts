// TODO: Stop `jp-wrap`. Someday, I'll support prohibited characters & emoji.
const jpWrap = require('jp-wrap')
const termSize = require('term-size')

// NOTE: set card size. (= terminal size)
const wrapSize = 60
const wrapMargin = 10
const { columns } = termSize()
const wrapSetSize = Math.min(wrapSize, columns - wrapMargin)

const jWrap = new jpWrap(wrapSetSize)

export function wordWrap(text: string): string {
  return jWrap(text)
}

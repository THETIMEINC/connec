const jpWrap = require('jp-wrap')
const jWrap = new jpWrap(60)

export function wordWrap(text: string): string {
  return jWrap(text)
}

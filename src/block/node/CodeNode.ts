import { createNodeParser } from './creator'

import type { NodeCreator } from './creator'

const codeRegExp = /^(.*?)(`.*?`)(.*)$/
const codeCommandRegExp = /^()(\$ .+)()$/

export interface CodeNode {
  type: 'code'
  text: string
}

const createCodeNode: NodeCreator<CodeNode> = target => ({
  type: 'code',
  text: target.startsWith('$') ? target : target.substring(1, target.length - 1)
})

export const CodeNodeParser = createNodeParser(createCodeNode, {
  parseOnNested: false,
  parseOnQuoted: true,
  patterns: [codeRegExp, codeCommandRegExp]
})

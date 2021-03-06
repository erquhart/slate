/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.unwrapNodes(editor, { at: [0] })
}

export const input = (
  <editor>
    <block>
      <block>one</block>
      <block>two</block>
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
)

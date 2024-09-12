import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'
import type { BaseEditor } from 'slate'

type RichTextPlugin = Exclude<RichTextCustomElement['plugins'], undefined>[0]

//@ts-ignore
const withLargeBody: RichTextPlugin = incomingEditor => {
  // @ts-ignore
  const editor: BaseEditor & {
    shouldBreakOutOnEnter?: (element: any) => boolean // eslint-disable-line @typescript-eslint/no-explicit-any
  } = incomingEditor

  const { shouldBreakOutOnEnter } = editor

  if (shouldBreakOutOnEnter) {
    editor.shouldBreakOutOnEnter = element =>
      element.type === 'large-body' ? true : shouldBreakOutOnEnter(element)
  }

  return editor
}

export default withLargeBody

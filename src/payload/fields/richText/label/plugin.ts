import type { RichTextCustomElement } from '@payloadcms/richtext-slate/dist/types'
import type { BaseEditor } from 'slate'

type RichTextPlugin = Exclude<RichTextCustomElement['plugins'], undefined>[0]

// @ts-ignore
const withLabel: RichTextPlugin = (incomingEditor: BaseEditor) => {
  const editor = incomingEditor as BaseEditor & {
    shouldBreakOutOnEnter?: (element: any) => boolean // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  const { shouldBreakOutOnEnter } = editor

  if (shouldBreakOutOnEnter) {
    editor.shouldBreakOutOnEnter = element =>
      element.type === 'large-body' ? true : shouldBreakOutOnEnter(element)
  }

  return editor
}
export default withLabel

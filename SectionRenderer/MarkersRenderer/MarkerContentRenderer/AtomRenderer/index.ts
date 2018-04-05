import {
  CreateElement,
  ElementTypeGetter,
  Node
} from 'mobiledoc-vdom-renderer/types'
import { Atom } from 'mobiledoc-vdom-renderer/types/Mobiledoc'
import { throwError } from 'mobiledoc-vdom-renderer/utils'

export interface Options {
  createElement: CreateElement
  getAtomComponent: ElementTypeGetter
}

export default ({ createElement, getAtomComponent }: Options) => ([
  type,
  text,
  payload
]: Atom): Node =>
  createElement(
    getAtomComponent(type) ||
      throwError(
        `Unhandled atom: \`getAtomComponent('${type}')\` did not return a corresponding component.`
      ),
    { payload },
    text
  )

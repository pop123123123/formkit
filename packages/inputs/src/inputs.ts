import { FormKitTypeDefinition } from '@formkit/core'
import textSchema from './classifications/text'
import fileSchema from './classifications/file'
import textareaSchema from './classifications/textarea'
import hiddenSchema from './classifications/hidden'
import groupSchema from './classifications/group'
import listSchema from './classifications/list'
import selectSchema from './classifications/select'
import boxSchema from './classifications/box'
import formSchema from './classifications/form'
import buttonSchema from './classifications/button'
import formatsOptions from './features/options'
import selectFeatures from './features/select'
import checkboxes from './features/checkboxes'
import radios from './features/radios'
import disablesChildren from './features/disables'
import formHandler from './features/form'
import localize from './features/localize'
import files from './features/files'
import ignore from './features/ignore'
import initialValue from './features/initialValue'

/**
 * Default classifications that are available.
 */
const textClassification: FormKitTypeDefinition = {
  type: 'input',
  schema: textSchema,
}

/**
 * The color input.
 * @public
 */
export const color = textClassification

/**
 * The date input.
 * @public
 */
export const date = textClassification

/**
 * The datetime-local input.
 * @public
 */
export const datetimeLocal = textClassification

/**
 * The email input.
 * @public
 */
export const email = textClassification

/**
 * The month input.
 * @public
 */
export const month = textClassification

/**
 * The number input.
 * @public
 */
export const number = textClassification

/**
 * The password input.
 * @public
 */
export const password = textClassification

/**
 * The search input.
 * @public
 */
export const search = textClassification

/**
 * The tel input.
 * @public
 */
export const tel = textClassification

/**
 * The time input.
 * @public
 */
export const time = textClassification

/**
 * The text input.
 * @public
 */
export const text = textClassification

/**
 * The url input.
 * @public
 */
export const url = textClassification

/**
 * The week input.
 * @public
 */
export const week = textClassification

/**
 * The range input.
 * @public
 */
export const range = textClassification

/**
 * The textarea input.
 * @public
 */
export const textarea: FormKitTypeDefinition = {
  type: 'input',
  schema: textareaSchema,
  features: [initialValue],
}

/**
 * Buttons are all this classification:
 */
const buttonClassification: FormKitTypeDefinition = {
  type: 'input',
  schema: buttonSchema,
  features: [localize('submit'), ignore],
}

/**
 * The submit input.
 * @public
 */
export const submit = buttonClassification

/**
 * The button classification.
 * @public
 */
export const button = buttonClassification

/**
 * The hidden input.
 * @public
 */
export const hidden: FormKitTypeDefinition = {
  type: 'input',
  schema: hiddenSchema,
}

/**
 * The group input type.
 * @public
 */
export const select: FormKitTypeDefinition = {
  type: 'input',
  schema: selectSchema,
  props: ['options', 'placeholder'],
  features: [formatsOptions, selectFeatures],
}

/**
 * The checkbox input type.
 * @public
 */
export const checkbox: FormKitTypeDefinition = {
  type: 'input',
  schema: boxSchema,
  props: ['options', 'onValue', 'offValue'],
  features: [formatsOptions, checkboxes],
}

/**
 * The radio input type.
 * @public
 */
export const radio: FormKitTypeDefinition = {
  type: 'input',
  schema: boxSchema,
  props: ['options'],
  features: [formatsOptions, radios],
}

/**
 * The group input type.
 * @public
 */
export const group: FormKitTypeDefinition = {
  type: 'group',
  schema: groupSchema,
  features: [disablesChildren],
}

/**
 * The group input type.
 * @public
 */
export const form: FormKitTypeDefinition = {
  type: 'group',
  schema: formSchema,
  props: [
    'actions',
    'submit',
    'submitLabel',
    'submitAttrs',
    'submitBehavior',
    'incompleteMessage',
  ],
  features: [formHandler, disablesChildren],
}

/**
 * The group input type.
 * @public
 */
export const list: FormKitTypeDefinition = {
  type: 'list',
  schema: listSchema,
  features: [disablesChildren],
}

/**
 * The file input.
 * @public
 */
export const file: FormKitTypeDefinition = {
  type: 'input',
  schema: fileSchema,
  features: [files],
  props: ['files'],
}

/**
 * A single file object in FormKit’s synthetic "FileList".
 * @public
 */
export interface FormKitFile {
  name: string
  file?: File
}

/**
 * A synthetic array-based "FileList".
 * @public
 */
export type FormKitFileValue = FormKitFile[]

import { sample } from '~/lib/lodash'

const placeholderCopywrites = ['你的回覆是我更新 Blog 最大的動力！']
export const getRandomPlaceholder = () => sample(placeholderCopywrites)

export const MAX_COMMENT_TEXT_LENGTH = 500

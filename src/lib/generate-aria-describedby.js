/**
 * Generates a token value for `aria-describedby` when the author provides `description`, `hint`, or `validationMessage` strings.
 * @param {String} id
 * @param {Object} helperTextCandidates
 * @param {String | React.ReactNode} [helperTextCandidates.description]
 * @param {String | React.ReactNode} [helperTextCandidates.hint]
 * @param {String | React.ReactNode} [helperTextCandidates.validationMessage]
 * @returns {String | null}
 */
export function generateAriaDescribedBy(id, { description, hint, validationMessage }) {
  let tokens = ''

  // Only add each of the following to aria-describedby if
  // it was provided as a string. When the author provides
  // a React element, we assume they want to manage aria-describedby themselves.

  if (typeof description === 'string') {
    tokens += ' ' + id + '__description'
  }

  if (typeof hint === 'string') {
    tokens += ' ' + id + '__hint'
  }

  if (typeof validationMessage === 'string') {
    tokens += ' ' + id + '__validation-message'
  }

  if (tokens.length) {
    return tokens.trim()
  }
  return null
}

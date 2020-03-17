/**
 *
 * @type {import('splendid').Element}
 */
export default function splitP({ children, splendid }) {
  splendid.pretty(false)
  const [content] = children
  const pp = content.trim().split(' ')
  return pp.map((p) => {
    return `<span>${p} </span>`
  }).join('')
}
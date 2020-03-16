export default function splitP({ children }) {
  const [content] = children
  const pp = content.trim().split(' ')
  return pp.map((p) => {
    return <span>{p} </span>
  })
}
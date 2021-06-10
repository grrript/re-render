import { memo } from 'react'

/* this child wont re-render because it is memoized */
const Child = () => {
  console.log('render Child 2')
  return <div>Child2</div>
}

export default memo(Child)

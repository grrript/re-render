import { useState, useEffect } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
  console.log('render Parent')
  const [state, setState] = useState('demo')
  useEffect(() => {
    setState('demo2')
  }, [])
  return (
    <div>
      Parent1 {state}
      <Child1 state={state} />
      <Child2 />
    </div>
  )
}

export default Parent

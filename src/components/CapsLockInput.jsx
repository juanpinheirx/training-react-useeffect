import PropTypes from "prop-types"
import { useState } from 'react';
export default function CapsLockInput(props) {
  const capsLock = props.children;
  const [lock, setLock] = useState(capsLock);
  const triggerState = (e) => setLock(e.target.value.toUpperCase())
  return (
    <div>
      <h1>{lock}</h1>
      <input type="text" onChange={triggerState} />
    </div>
  )
}

CapsLockInput.propTypes = {
  children: PropTypes.any,
  txt: PropTypes.any
}

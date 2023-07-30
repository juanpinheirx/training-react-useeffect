import PropTypes from "prop-types"
import { useEffect, useState } from 'react'
export default function Contador(props) {
  const counting = props.number;
  const [count, setCount] = useState(counting)
  const triggerCount = () => setCount(count + 1)
  const triggerDecount = () => setCount(count - 1);
  const [bool, setBool] = useState(true);

  useEffect(() => {
     if (count === 1) {
      setBool(true)
     } if (count === 20) {
      setBool(false)
     }
}, [count])
  
  return (
    <div>
      <h1>
        {count}
        </h1>
      <button  onClick={triggerCount} disabled={!bool}>
        Clique para aumentar
      </button>
      <button onClick={triggerDecount} disabled={bool}>
        Clique para diminuir
      </button>
      <button type="submit" >
        Números a enviar
      </button>
    </div>
  )
}

Contador.propTypes = {
  children: PropTypes.any,
  number: PropTypes.any
}

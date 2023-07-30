import CapsLockInput from './components/CapsLockInput';
import Contador from './components/Contador';
function App() {
  return (
    <div>
      <h1>
        insira aqui seu texto para torná-lo em grito
      </h1>
      <CapsLockInput txt='' />
      <Contador number={1}/>
    </div>
  )
}

export default App
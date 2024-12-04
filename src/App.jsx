
import './App.css'
import CounterButton from './counter-example/counter-button'
import CounterValue from './counter-example/counter-value'

function App() {


  return (
 
    <div>
      <h1 className='text-3xl font-bold underline mb-2'>Redux Toolkit</h1>
      <CounterButton />
      <CounterValue />
    </div>
  )
}

export default App

import {GlobalStyles} from './styles/GlobalStyles';
import {CardsList} from './components/CardsList'
import {useState} from 'react'

function App() {
  const [activeModal, setActiveModal] = useState(false)

  return (
    <>
    <h1>Jogue a Sorte</h1>
  <CardsList
  activeModal = {activeModal}
  setActiveModal = {setActiveModal}
  />
    <GlobalStyles modalActive = {activeModal}/>
    </>
  )
}

export default App

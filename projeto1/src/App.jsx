import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Titulo from './Titulo'


function App() {

  return (
  <div>
    <Titulo cor={'blue'}/>
    <Titulo cor={'pink'}/>
    <Titulo cor={'green'}/>
    <Titulo cor={'yellow'}/>
  </div>
  )

}


export default App
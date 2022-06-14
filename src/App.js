
import Gif from './Components/Gif';
import './App.css';
import Home from './Components/Home';

import { useContext } from 'react';
import {gifClickContext } from './Context/gifClickContext'


function App() {
const {state} = useContext(gifClickContext)

  return (
    <div className="App">

<Home />
{state && <Gif/> }
    

    </div>
  );
}

export default App;

  {/* <Routes>
       <Route path='/gif' element={ <Gif />} >
      </Route> </Routes> */} 

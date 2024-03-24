
import { useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import './App.css'
import { ADD_TASK } from './redux/action';

function App() {
  const[item,setItem]=useState('')
  const dispatch=useDispatch();
const storeList=useSelector((state)=>state.item)
 function handleChange(e){
setItem(e.target.value);

 }

 function Submit(e){
  e.preventDefault()
dispatch({type:ADD_TASK,payload:item})
setItem('')
 }
  return (
    <>
      <h1>REDUX APP</h1>
      <input type="text" value={item} onChange={handleChange}/>
      <button onClick={Submit}>Submit</button>

      <div>
{JSON.stringify(storeList)}
      </div>
    </>
  )
}

export default App

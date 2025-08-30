import { useState } from "react"
import Inputarea from "./component/Inputarea"
import ToDoItem from "./component/ToDoItem"

function App() {
 const[items,setItems] = useState([])

 const addItems = (inputText)=>{
     setItems((previousitems)=>{
          return([...previousitems,inputText])
        })
 }
//  console.log(items);

 const deleteItem =(id)=>{
  setItems((previousitems)=>{
    return previousitems.filter((items,index)=>{
      return index!==id;
    })
  })
 }
  return (
    <div className="container">
      <div className="heading">
            <h1>To-Do List</h1>
      </div> 
      <div>
        <Inputarea addItems={addItems}/>
        <div>
          <ul>
            {
              items.map((items,index)=>{
                return(
                  <ToDoItem key={index} text={items} deleteItem={deleteItem} id={index}/>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

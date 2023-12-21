import { useState } from "react"
import Button from "./components/Button"
import Item from "./components/Item";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const onInputChange = (e) =>{
    setText(e.target.value);
  }

  const onKeyDown = (e) => {
    if(e.key === 'Enter'){
      addToDo();
    }
  }

  const onDelete = (index) => {
    todos.splice(index,1);
    setTodos([ ...todos ]);
  }

  const addToDo = ()=>{
    if(text.trim()!=""){
      setTodos([text, ...todos]);
      setText("");
    }
  }

  return(
  <main className="bg-black flex justify-center min-h-screen p-16 text-white">
    <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
      <input type="text" className="bg-white/20 p-2 rounded text-white" onChange={onInputChange} value={text} onKeyDown={onKeyDown}/>
      <Button className="bg-white rounded p-2 text-black" onClick={addToDo}>Agregar</Button>
      {
        todos.map((todo, index)=>{
          return(
            <Item key={`todo-${index}`} text={todo} onDelete={() => onDelete(index)}/>                         
          )
        })
      }
    </div>
  </main>
  )
};

import {useState, useRef} from 'react'
function Todohead(){
    const [inputValue, setInputValue] = useState('')
    const [todolist, setTodolist] = useState([])

    const btnClick = useRef()
    const input = useRef()



function add(){
     
   const newItem = [...todolist,{
            id:todolist.length+1,
            text:inputValue
        }]
        btnClick.current.style.background = 'grey'
        setInputValue('')
        
        setTodolist(newItem)
        localStorage.setItem('mytodo', JSON.stringify(newItem))  
}

function getInputValue(){
    if(input.current.value !=='' ){
        btnClick.current.style.background = 'green'
        setInputValue(input.current.value)
    }else{
        btnClick.current.style.background = 'grey'
    }
}


    return(
                
        <div className="todo_foot">
            <input type={'text'} placeholder="Text here ..." onChange={getInputValue} ref={input} value={inputValue}/>
            <button className="add_btn" title="Add to todo list" onClick={add} ref={btnClick}>✔</button>
        
        </div>
    )
    }export default Todohead;
// import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css'


function App() {

const ref = useRef()
const date = new Date()

AOS.init({duration:5000})

    const [inputValue, setInputValue] = useState('')
    const [mytodo, setMytodo] = useState(JSON.parse(localStorage.getItem('mytodo')) || [] )  

function deleteOneItem(itemId){
const items = mytodo.filter((value)=>value.id !== itemId)
setMytodo(items)
localStorage.setItem('mytodo', JSON.stringify(items))  

}
function selected(itemId){
const items = mytodo.filter((value)=>value.id !== itemId)
ref.current.style.background = 'yellowgreen'  

}


    function add(){
     
      const newItem = [...mytodo,{
               id:mytodo.length+1,
               text:inputValue
           }]
           
           setMytodo(newItem)
           setInputValue('')
           localStorage.setItem('mytodo', JSON.stringify(newItem))  
   }

   
  function clear(){
    localStorage.clear('mytodo')
} 


return (
  <div className='my_todo'>
    
    <div className="todo_head">
        <h1>My Todo list</h1>
        <a> {date.getDate()}. {date.getMonth()+1}. {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</a>
        <button onClick={clear} style={{padding:'3px', background:'red', color:'wheat',cursor:'pointer',float:'right',marginRight:'5px'}}
        >Clear all</button>
    </div>

<hr/>

    <div className="todo_body">
        <div>
        {mytodo.map((item, index)=> <div className='mappedItem ' data-aos={'fade-up'} key={index} ref={ref}>
            <p>{index+1}</p>. <p className='secondP'>{item.text}</p> 
            <p> {date.getDate()}. {date.getMonth()+1}. {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</p>
            <button onClick={()=>selected(item.id)}>⭐</button>  
            <button onClick={()=>deleteOneItem(item.id)}>❌</button>
        </div>  
        
        )}
        </div>
        </div>

        <hr/>

        <div className="todo_foot">
            <input type={'text'} placeholder="Text here ..." onChange={(e)=>setInputValue(e.target.value)}value={inputValue}/>
            <button className="add_btn" title="Add to todo list" onClick={add}>✔</button>
        
        </div>
  </div>
)


}

export default App;

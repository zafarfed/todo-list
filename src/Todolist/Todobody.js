import {useState, useEffect, useRef} from 'react'

function Todobody(){

    const ref = useRef()

    const date = new Date()
    
        const [mytodo, setMytodo] = useState(JSON.parse(localStorage.getItem('mytodo')) || [] )  
    
function deleteOneItem(itemId){
    const items = mytodo.filter((value)=>value.id !== itemId)
    setMytodo(items)
}
function selected(itemId){
    const items = mytodo.filter((value)=>value.id !== itemId)
    ref.current.style.background = 'yellowgreen'
}

    return(
                
        <div className="todo_body">
        <div>
        {mytodo.map((item, index)=> <div className='mappedItem' key={index} ref={ref}>
            <p>{index+1}</p>. <p className='secondP'>{item.text}</p> 
            <p> {date.getDate()}. {date.getMonth()+1}. {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</p>
            <button onClick={()=>selected(item.id)}>⭐</button>  
            <button onClick={()=>deleteOneItem(item.id)}>❌</button>
        </div>  
        
        )}
        </div>
        </div>
    )
    }export default Todobody;
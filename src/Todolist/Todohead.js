function Todohead(){

    const date = new Date()

function clear(){
    localStorage.clear('mytodo')
}

return(
            
    <div className="todo_head">
        <h1>My Todo list</h1>
        <a> {date.getDate()}. {date.getMonth()+1}. {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</a>
        <button onClick={clear} style={{padding:'3px', background:'red', color:'wheat',cursor:'pointer',float:'right',marginRight:'5px'}}
        >Clear all</button>
    </div>
)
}export default Todohead;
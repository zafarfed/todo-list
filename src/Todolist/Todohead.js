function Todohead(){

    const date = new Date()

return(
            
    <div className="todo_head">
        <h1>My Todo list</h1>
        <a> {date.getDate()}. {date.getMonth()+1}. {date.getFullYear()}  {date.getHours()}:{date.getMinutes()}</a>
    </div>
)
}export default Todohead;
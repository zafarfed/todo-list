// import logo from './logo.svg';
import './App.css';
// import {useState} from 'react'
import Todohead from './Todolist/Todohead';
import Todobody from './Todolist/Todobody';
import Todofoot from './Todolist/Todofoot';


function App() {
return (
  <div className='my_todo'>
    <Todohead/>
    <hr/>
    <Todobody/>
    <hr/>
    <Todofoot/>
  </div>
)

// const [user, setUser] = useState('')
// const [data, setData] = useState([
//   {id:1, name:'Zafar'},
//   {id:2, name:'Nodir'},
//   {id:3, name:'Sadaddin'},
//   {id:4, name:'Sulaymon'},

// ])
// const [editedName, setEditedName] = useState(null)
// const [changedName, setChangedName] = useState(null)

// function deleteUser(itemId){
// const users = data.filter((value)=>value.id !== itemId)
// setData(users)
// }

// function addUser(e){
//   e.preventDefault()
// const newUser = [...data, { 
//   id:data.length+1,
//   name:user
// }]
// setData(newUser)
// }

// function editUser(item){
//   setEditedName(item.id)
//   setChangedName(item.name)
// }

// function save(){
//   const saveArray = data.map((item)=>editedName ==item.id?{...item, name:changedName}:item)
//   setData(saveArray)
//   setEditedName(null)
// }

//   return (
//     <div className="App">
//       <h1>Todo list</h1>
//       <form onSubmit={addUser}>
//           <input type={'text'} className='p-1' onChange={(e)=>setUser(e.target.value)}/>
//           <button type='submit' className='btn btn-success'>Add</button>
//       </form>
//       <table className='table'>
//         <thead>
//         <tr>
//           <th>ID</th>
//           <th>User</th>
//           <th>Actions</th>
//         </tr>
//         </thead>
//         <tbody>
//             {
//             data.map((item,index)=>{return <tr key={index}>
            
//               <td>{index+1}</td>
//               <td style={{width:'200px'}}>{editedName==item.id? <input type={'text'}
//                onChange={(e)=>setChangedName(e.target.value)} value={changedName}/> : item.name}</td>
//               <td>
//                 {
//                   editedName==item.id ? 
//                   <button onClick={save}>✔</button> :
//                   <button onClick={()=>editUser(item)}> ✏</button>
//                 }
//                 <button onClick={()=>deleteUser(item.id)}>❌</button>
//                 </td>

//               </tr>}
//             )}
//         </tbody>
//       </table>
//     </div>
//   );
}

export default App;

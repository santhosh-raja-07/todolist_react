import React from 'react'
import { useState } from 'react'
import { FaTrash } from "react-icons/fa6";
import {  MdModeEditOutline } from "react-icons/md";
import { Card  } from "antd";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Todo = ( ) => {
let [items , setItems] = useState([
  {id : 1 , label : "HTML & CSS", checked : true},
  {id : 2 , label : "Javascript", checked : true},
  {id : 3 , label : "Mysql", checked : true},
  {id : 4 , label : "React js", checked : false}
])

let [newItems , setNewItems] = useState("")
let [editing , setEditing] = useState( false )
let [currentId , setcurrentId] = useState(null)

let handledChecked = (id)=>{
  let newListitems = items.map((x)=>{
    return x.id === id ? {...x, checked : !x.checked } : x
  })
  setItems(newListitems)
}

let handledDelete = (id)=>{
  let remainingItems = items.filter((x)=> x.id != id)
  .map( (x , index)=>{
    return{
      ...x , id : index+1
    }
  } )
  setItems(remainingItems)
}

let handleAddItems = ()=>{

  if(editing){
    let newitem = items.map( (x)=>{
      return x.id === currentId ? {...x , label : newItems} : x
    } )
    setItems(newitem)
    setcurrentId( null )
    setEditing( false )
    setNewItems( "" )
  }
  else{
    setItems( [...items , { id : items.length+1 , label : newItems , checked : false }] )
    setNewItems( "" )
  }

}

let handleUpdate = (id)=>{
    let updatedlist = items.find((x)=> id === x.id)
    setNewItems(updatedlist.label)
    setEditing(true)
    setcurrentId(id)
}

  return (
    <>
    <Card className='card'>
     <main>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" style={{width : "500px"}} label="Add new items" value={newItems} variant="outlined"  onChange={ (e)=>{ setNewItems(e.target.value)}}/>
      <Button style={{
        marginTop : "1rem"

      }} variant="contained" color="success" onClick={ handleAddItems }>{editing ? "Save" : "Add" }</Button>
      </Box>
     </main>
     </Card>
      <ul>
      {
         items.map((x)=>{
             return(
              <Card className='cards'>
              <li key = {x.id} className='item'>
                <input type='checkbox'  checked = {x.checked} onChange={()=>handledChecked(x.id)}/>
                <label>{ x.label }  </label>
                <Button id = "delete"  variant="contained" style={{color : "white"}} tabIndex={0}  onClick={ ()=>handledDelete(x.id) }>Delete</Button>
                <Button id= "edit"  variant="contained" style={{color : "white"}}  tabIndex={0} onClick={ ()=>handleUpdate(x.id) }>Update</Button>
              </li>
              </Card>
             )
         })
      }
    </ul>
    </>
  )
}

export default Todo


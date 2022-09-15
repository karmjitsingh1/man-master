import React,{useState,useEffect} from 'react'
import { Button ,Form} from 'react-bootstrap' 
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
//import { v4 as uuid} from "uuid"
import {useNavigate, useParams} from 'react-router-dom';
function Edit(){
    
    const [name,setName] =useState("")
    const[age,setAge] =useState("")
    const [address,setAddress] =useState("")
    const [id,setId]=useState("")
   
    const { id1 }=useParams()

    let history=useNavigate();
    var index=List.map(function(e){
        return e.id
    }).indexOf(id1);
 
    const handledUpdate=(e)=>{
       e.preventDefault();
       let a=List[index];
       a.Name=name;
       a.Age=age;
       a.Address=address;
       history("/")
    }
    useEffect(()=>{
        console.log(id1,"kamam");
        console.log(List.filter(item=>item.id===id1));
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
        setAddress(localStorage.getItem("Address"));
        setId(localStorage.getItem("Id"));



    },[id1])

    return(
        <>
        <div>
        <Form container="g-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder='Enter the name' value={name} required onChange={(e)=>setName(e.target.value)}>


        </Form.Control>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder='Enter the Age' value={age}  required onChange={(e)=>setAge(e.target.value)}>
        

        </Form.Control>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formAdress">
        <Form.Control type="text" placeholder='Enter the Address' value={address} required onChange={(e)=>setAddress(e.target.value)}>


        </Form.Control>

        </Form.Group>
        <Button onClick={(e)=>handledUpdate(e)} type="submit">Update</Button>


        </Form>

        </div>

        </>

    )
}
export default Edit;
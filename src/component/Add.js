import React,{useState} from 'react'
import { Button ,Form} from 'react-bootstrap' 
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { v4 as uuid} from "uuid"
import {Link,useNavigate} from 'react-router-dom';
function Add(){
    const [name,setName] =useState("")
    const[age,setAge] =useState("")
    const [address,setAddress] =useState("")

    let history=useNavigate();

    const handledSubmit=(e)=>{
        e.preventDefault();
        const ida=uuid();
        let uniqeid=ida.slice(0,8);
        let a=name,
        b=age,
        c=address;
        List.push({id:uniqeid, Name:a, Age:b, Address:c})
        history("/");
    }
    return(
        <>
        <Form container="g-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className="mb-3" controlId="formName">
        <Form.Control type="text" placeholder='Enter the name' required onChange={(e)=>setName(e.target.value)}>


        </Form.Control>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
        <Form.Control type="text" placeholder='Enter the Age' required onChange={(e)=>setAge(e.target.value)}>
        

        </Form.Control>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formAdress">
        <Form.Control type="text" placeholder='Enter the Address' required onChange={(e)=>setAddress(e.target.value)}>


        </Form.Control>

        </Form.Group>
        <Button onClick={(e)=>handledSubmit(e)} type="submit"> Submit</Button>


        </Form>

        </>

    )
}
export default Add

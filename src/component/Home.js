import React  from "react";
import { Button,Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import {Link,useNavigate} from 'react-router-dom'
function Home(){
    let history=useNavigate();
    const handledEdit=(id,name,age,address)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
        localStorage.setItem("Address",address)

    }

    const handledDelete=(id)=>{
        var index=List.map(function(e){
            return e.id
        }).indexOf(id);
        List.splice(index,1)
         history('/')
    }
    return(
        <>
            <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Address
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    List && List.length>0
                    ? List.map((item)=>{
                        return(
                            <tr>
                                <td>
                                   {item.Name}
                                </td>
                                <td>
                                  {item.Age} 
                                </td>
                                <td>
                                  {item.Address}  
                                </td>
                                <Link to={`/${item.id}/edit`}>
                                <Button onClick={()=>{
                                    handledEdit(item.id,item.Name,item.Age,item.Address) }}>
                                Edit
                               
                                </Button>
                                </Link>
                             
                                &nbsp;
                                <Button onClick={()=>{
                                    handledDelete(item.id)}}>
                                      Delete
                                </Button>
                                <td>

                                </td>
                            </tr>

                        )
                    })
                    :" No Data Available"
                }
            </tbody>
            

            </Table>
            <br/>
                <Link className="d-grid gap-2" to="/create">
                <Button size="lg">Add Member</Button>


                </Link>
           


            </div>
        </>

    )
}

export default Home;

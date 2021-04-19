import React,{useState} from 'react';
import * as data from '../MOCK_DATA.json';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import Pagination from './Pagination';
import orderBy from 'lodash/orderBy';

// ...

  const EmployeeList = (addedData) => {
    addedData.data["id"]=data.default.length+1;
    const employeeData =data.default.concat(addedData.data);
    console.log(employeeData)
    const [currentPage,setCurrentPage]=useState(1);
    const PageSize=50;
    const indexOfLastCard=currentPage * PageSize;
    const indexOfFirstCard=indexOfLastCard - PageSize;
    const CurrentCards= orderBy(employeeData,['id'], ['desc']).slice(indexOfFirstCard,indexOfLastCard)

    console.log(addedData)
    const paginate=(pageNumber)=>setCurrentPage(pageNumber);
      return   (
          <>
        <CardColumns>
        {CurrentCards.map(x=> {
                   return (
                                <Card key={x.id} bg={x.status?'primary':'secondary'}
                                        text='light'>
                                    <Card.Body>
                                        <Card.Title>
                                          Name: {x.first_name}{' '}{x.last_name}
                                        </Card.Title>
                                        <Card.Text>
                                        Email: {x.email}
                                        </Card.Text>
                                        <Card.Text>
                                         Gender: {x.gender}
                                        </Card.Text>
                                        <Card.Text>
                                         Status: {x.status?'true':'false'}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                    )
                    })}
                    
            </CardColumns>
             <Pagination CardsPerPage={PageSize} TotalCards={data.default.length} paginate={paginate}></Pagination>
           </>  
      )
    } 

 export default EmployeeList

import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent = ({CardsPerPage,TotalCards,paginate})=>{

    let active = 1;
    const PageNumbers=[];
    for (let number = 1; number <= Math.ceil(TotalCards/CardsPerPage); number++) {
        PageNumbers.push(
        <Pagination.Item key={number} active={number === active} onClick={()=>paginate(number)}>
          {number}
        </Pagination.Item>,
      );
    }
    
    const paginationforCard = (
      <div>
        <Pagination>{PageNumbers}</Pagination>
      </div>
    );

   return(paginationforCard)

}
export default PaginationComponent
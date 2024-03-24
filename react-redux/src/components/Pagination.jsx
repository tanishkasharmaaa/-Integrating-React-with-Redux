// eslint-disable-next-line react/prop-types
export function Pagination({currentPage, totalPage, onPageChange} ) {
   
  
    return (
      <>
       
          <div>
           <button  onClick={()=>onPageChange(Math.max(1,currentPage-1))}>previous</button>
           <div>{currentPage}</div>
           <button onClick={()=>onPageChange(Math.min(totalPage,currentPage+1))}>Next</button>
          </div>
   
      </>
    );
  }
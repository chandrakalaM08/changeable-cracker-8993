import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleIncrement = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

    return (
      <>
    <div style={{marginBottom: "20px"}}>
      <button onClick={handleDecrement} style={{height:"40px" , background:"pink" , width:"45px" , marginRight:"10px", borderRadius:"5px",fontWeight:"600"}}> Prev </button>
      <button disabled style={{height:"40px" , background:"orange" , width:"45px" , marginRight:"10px", borderRadius:"5px",fontWeight:"600"}}>{currentPage}</button>
          <button onClick={handleIncrement} style={{ height: "40px", background: "pink", width: "45px", marginRight: "10px", borderRadius: "5px", fontWeight: "600" }}> Next</button>
          <br />
      </div>
            <hr />
            </>
  );
};

export default Pagination;

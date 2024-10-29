import React from 'react'

const TableData = ({data}) => {
  if(!data){
    return <p>No data available</p>;
  }
  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Type</th>
          <th>Breed</th>
          <th>Your Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.petname}</td>
          <td>{data.type}</td>
          <td>{data.breed}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableData;
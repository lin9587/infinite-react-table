import React from 'react'

const Table: React.FC = ({}) => {
  return (
    <table border={1} summary="Monthly savings for the Flintstones family">
      <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
  )
}

export default Table

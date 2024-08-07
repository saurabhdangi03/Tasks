import React from 'react';

function PersonTable({ persons, onEdit, onDelete }) {
  return (
    <div>
      <h2>Person detail</h2>
      <table>
        <thead>
          <tr>
            <th>sr no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>D.O.B</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.length > 0 ? (
            persons.map((person, index) => (
              <tr key={person.id}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.mobile}</td>
                <td>{person.dob}</td>
                <td>
                  <button onClick={() => onEdit(person)}>Edit</button>
                  <button onClick={() => onDelete(person.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No persons</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PersonTable;

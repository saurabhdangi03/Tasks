import React, { useState } from 'react';
import PersonTable from './PersonTable';
import PersonForm from './PersonForm';
import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  const addPerson = (person) => {
    setPersons([...persons, { ...person, id: persons.length + 1 }]);
    setFormVisible(false);
  };

  const editPerson = (id, updatedPerson) => {
    setPersons(persons.map((person) => (person.id === id ? updatedPerson : person)));
    setFormVisible(false);
    setEditingPerson(null);
  };

  const deletePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  const handleAddClick = () => {
    setEditingPerson(null);
    setFormVisible(true);
  };

  const handleEditClick = (person) => {
    setEditingPerson(person);
    setFormVisible(true);
  };

  return (
    <div className="App">
      <div className="container">
        <button className="add-button" onClick={handleAddClick}>Add</button>
        <PersonTable 
          persons={persons} 
          onEdit={handleEditClick} 
          onDelete={deletePerson} 
        />
        {isFormVisible && (
          <div className="sidebar">
            <PersonForm 
              onSubmit={editingPerson ? editPerson : addPerson} 
              person={editingPerson}
              onClose={() => setFormVisible(false)} // Pass a prop to close the form
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

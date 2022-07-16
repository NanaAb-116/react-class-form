import React, { useState } from 'react';

function FunctionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gen, setGen] = useState('');
  const [students, setStudents] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents(
      [...students, { name, email, gen }],
      setName(''),
      setEmail(''),
      setGen('')
    );
  };

  return (
    <>
      <form className='form'>
        <label className='required'>Name:</label> <br />
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label className='required'>Email:</label> <br />
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label className='required'>Gen:</label> <br />
        <input
          type='text'
          name='gen'
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
        />
        <br />
        <button className='submit-btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {students.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.gen}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default FunctionForm;

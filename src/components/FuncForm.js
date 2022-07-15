import React, { useState } from 'react';

function FuncForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <div>
      <form className='form'>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          name='name'
          id='name'
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <br />
        <input
          type='email'
          name='email'
          id='email'
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          type='password'
          name='password'
          id='password'
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type='submit' className='submit-btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FuncForm;

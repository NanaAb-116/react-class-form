import React, { Component } from 'react';

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = { name: '', email: '', password: '' };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (name) => (e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form className='form'>
          <label htmlFor='name' className='required'>
            Name
          </label>
          <br />
          <input
            type='text'
            name='name'
            id='name'
            value={this.state.name}
            onChange={this.handleChange('name')}
          />
          <br />
          <label htmlFor='email' className='required'>
            Email
          </label>
          <br />
          <input
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
          <br />
          <label htmlFor='password' className='required'>
            Password
          </label>
          <br />
          <input
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <br />
          <button
            type='submit'
            className='submit-btn'
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ClassForm;

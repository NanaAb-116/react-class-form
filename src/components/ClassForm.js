import React, { Component } from 'react';

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      students: [{ name: 'Nana', email: 'nana@gmail.com', gen: 22 }],
    };
  }
  handleRegister = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      students: [
        ...this.state.students,
        { name: this.state.name, email: this.state.email, gen: this.state.gen },
      ],
    });
  };

  render() {
    return (
      <>
        <form className='form'>
          <label className='required'>Name:</label> <br />
          <input
            type='text'
            name='name'
            value={this.state.students.name}
            onChange={this.handleRegister}
          />
          <br />
          <label className='required'>Email:</label> <br />
          <input
            type='text'
            name='email'
            value={this.state.students.email}
            onChange={this.handleRegister}
          />
          <br />
          <label className='required'>Gen:</label> <br />
          <input
            type='text'
            name='gen'
            value={this.state.students.gen}
            onChange={this.handleRegister}
          />
          <br />
          <button className='submit-btn' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>

        {this.state.students.map((student, index) => {
          return (
            <div key={index}>
              <h1>name:{student.name}</h1>
              <h2>email : {student.email}</h2>
              <h3>gen : {student.gen}</h3>
              <hr />
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassForm;

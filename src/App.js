import React, { Component } from 'react';
import './App.css';
import CourseForm from './Components/CourseForm/CourseForm'
import CourseList from './Components/CourseList/CourseList'

class App extends Component {
  render(){
    return (
      <div>
        <h1>Courses Section</h1>
        <CourseForm/>
        <CourseList/>
      </div>
    );
  }
}

export default App;

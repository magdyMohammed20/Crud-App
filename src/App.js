import React, { Component } from 'react';
import './App.css';
import CourseForm from './Components/CourseForm/CourseForm'
import CourseList from './Components/CourseList/CourseList'

class App extends Component {
  state={
    courses:[
      {id: 1,name: 'magdy'},
      {id: 2,name: 'mohammed'},
      {id: 3,name: 'hossam'}
    ]
  }
  render(){

    const courses = this.state.courses;
    const listCourses = courses.map((item , index)=>{
      return <CourseList key={item.id} details={item}/>
    })
    return (
      <div>
        <h1>Courses Section</h1>
        <CourseForm/>
        <ul>
        {listCourses}
        </ul>
      </div>
    );
  }
}

export default App;

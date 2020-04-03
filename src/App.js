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
    ],
    current:''
  }

  // When Input Value Change I Will Set This Value In 'Current' Variable
  handleChange = e =>{
    this.setState({
      current: e.target.value
    })
  }

  // For Add The Course In Courses List
  addCourse = e =>{
    e.preventDefault();
    let newCourse = this.state.current;
    let courses = this.state.courses;
    // Get Last Element Id Of Courses To Be Incremented
    let lastCourseId = courses[courses.length-1];
    
    if(newCourse !== ''){
      // Add 1 For The New Course Id For Be Unique
      courses.push({id:lastCourseId.id + 1,name: newCourse})
      // Set The New Course And Clear The Input
      this.setState({
        courses,
        current:''
      })
    }else{
      alert('Please Enter Course Name')
    }
  }
  render(){
    // Get All Courses For Listing It
    const courses = this.state.courses;

    // Loop Through Courses For Pass It To 'CourseList' Component
    const listCourses = courses.map((item , index)=>{
      return <CourseList key={index} details={item}/>
    })

    return (
      <div>
        <h1>Courses Section</h1>
        <CourseForm handleChange={this.handleChange} addCourse={this.addCourse} current={this.state.current}/>
        <ul>
        {listCourses}
        </ul>
      </div>
    );
  }
}

export default App;

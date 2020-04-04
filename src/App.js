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
      if(this.state.courses.length !== 0){
        // Add 1 For The New Course Id For Be Unique If Courses Has At Least 1 Element
        courses.push({id:lastCourseId.id + 1,name: newCourse})
      }else{
        // Add 1 For The New Course Id For Be Unique If Courses Not Has Any Elements
        courses.push({id:1,name: newCourse})
      }
      // Set The New Course And Clear The Input
      this.setState({
        courses,
        current:''
      })
    }else{
      alert('Please Enter Course Name')
    }
  }

  // Delete Course
  deleteCourse = index =>{
    const courses = this.state.courses;
    const findIndex = courses.findIndex((item,itemIndex)=> index==itemIndex)
    courses.splice(findIndex , 1)
    this.setState({
      courses
    })
  }


  // Update Course Name After Edit The Course
  updateCourse = (index,newValue) =>{
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = newValue;
    this.setState({
      courses
    })
  }


  render(){
    // Get All Courses For Listing It
    const courses = this.state.courses;

    // Loop Through Courses For Pass It To 'CourseList' Component
    const listCourses = courses.map((item , index)=>{
      return <CourseList key={index} details={item} deleteCourse={this.deleteCourse} indexOfDeleted={index} courseName={item.name} updateCourse={this.updateCourse}/>
    })

    return (
      <div className='w-50 mx-auto'>
        <h1 class='text-white my-3'>Courses Section</h1>
        <CourseForm handleChange={this.handleChange} addCourse={this.addCourse} current={this.state.current}/>
        <ul className='list-unstyled mt-4'>
        {this.state.courses.length > 0 ? listCourses : <div className='bg-danger text-white p-3 rounded'>There Is No Items To Show</div>}
        </ul>
      </div>
    );
  }
}

export default App;

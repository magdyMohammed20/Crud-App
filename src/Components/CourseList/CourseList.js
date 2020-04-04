import React, { Component } from 'react';

class CourseList extends Component {

  state={
    isEdit: false
  }

  renderCourse = () =>{
    return(
        <div className='d-flex justify-content-between my-2 text-white'>
          {this.props.details.name}
          <div>
            <button className='btn btn-info text-white mr-2' onClick={()=>this.toggleIsEdit()}>Edit</button> 
            <button className='btn btn-danger text-white' onClick={()=>this.props.deleteCourse(this.props.indexOfDeleted)}>Delete</button>
          </div>
        </div>
    )
  }

  // For Show The Update Form When Click On Edit Button
  renderUpdateForm = () =>{
    return <form className='d-flex justify-content-between' onSubmit={this.update}>
      <input type='text' ref={(v)=>{this.input=v}} className='form-control' defaultValue={this.props.courseName}/>
      <button type='submit' className='btn btn-success ml-3' onClick={()=>this.toggleIsEdit}>Update</button>
    </form>
  }

  // For Toggle isEdit Variable
  toggleIsEdit = () =>{
    let isEdit = !this.state.isEdit;
    this.setState({
      isEdit
    })
    
  }

  // Update Course
  update = e =>{
    e.preventDefault();
    this.props.updateCourse(this.props.indexOfDeleted,this.input.value)
    this.toggleIsEdit()
  }
  render() {
    return (
      <li className='my-3'>
        {
          this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()
        }
      </li>
    );
  }
}

export default CourseList;
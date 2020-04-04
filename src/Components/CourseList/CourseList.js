import React, { Component } from 'react';

class CourseList extends Component {
  render() {
    return (
      <li className='d-flex justify-content-between my-2 text-white'>
        {this.props.details.name}
        <button className='btn btn-danger text-white' onClick={()=>this.props.deleteCourse(this.props.indexOfDeleted)}>Delete</button>
      </li>
    );
  }
}

export default CourseList;
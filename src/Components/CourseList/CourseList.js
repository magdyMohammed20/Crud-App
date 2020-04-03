import React, { Component } from 'react';

class CourseList extends Component {
  render() {
    return (
      <li>
        {this.props.details.name}
      </li>
    );
  }
}

export default CourseList;
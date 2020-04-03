import React from 'react';

function CourseForm(props){
  return (
    <form onSubmit={props.addCourse}>
      {/*Use {props.current} For Clear The Input After Add The Course*/}
      <input type='text' onChange={props.handleChange} value={props.current}/>
      <button>Add</button>
    </form>
  );
}

export default CourseForm;
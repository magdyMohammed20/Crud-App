import React from 'react';

function CourseForm(props){
  return (
    <form onSubmit={props.addCourse} className='d-flex'>
      {/*Use {props.current} For Clear The Input After Add The Course*/}
      <input type='text' className='form-control' onChange={props.handleChange} value={props.current}/>
      <button className='btn btn-success ml-3'>Add</button>
    </form>
  );
}

export default CourseForm;
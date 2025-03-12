import React from 'react';
import axios from 'axios';

function Course(props) {
  return (
    <div className="col-md-4 mb-3" key={props.course.id}>
        <div className="card card-size">
            <div className="card-header">{props.course.category}</div>
            <div className="card-body overflow-auto">{props.course.description}</div>
        </div>
    </div>
  )
}
export default  Course;

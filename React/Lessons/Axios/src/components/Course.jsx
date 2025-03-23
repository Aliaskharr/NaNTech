import React, { Component } from 'react'

class Course extends Component {

  removeCard = () => {
    this.props.removeCourse(this.props.course.courseId)
  }

  editCardd = () => {
    this.props.editCard(this.props.course.courseId);
  }

  render(props) {
    return (
      <div className="col-md-4 mb-3" key={this.props.course.courseId}>
        <div className="card card-size">
            <div className="card-header">{this.props.course.courseName}</div>
            <div className="card-body overflow-auto">{this.props.course.courseDescription}</div>
            <div className="card-footer">
              <button className='btn btn-sm btn-danger' onClick={this.removeCard}>Remove</button>
              <button className='btn btn-sm btn-success ms-2' onClick={this.editCardd}>Edit</button>
            </div>
        </div>
    </div>
    )
  }
}


export default Course;


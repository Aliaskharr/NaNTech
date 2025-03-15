import React, { Component } from 'react'

export default class addCourse extends Component {
    addCourse = (event) => {
        event.preventDefault();
        let newCourse = {
            courseName: event.target.courseName.value,
            courseDescription: event.target.courseDescription.value
        };
        event.target.courseName.value = '';
        event.target.courseDescription.value = '';
        this.props.addCourse(newCourse);
        
    }
  render() {

    console.log('render addCOurse');
    
    return (
        <div className="card p-3 mb-3">

        <form onSubmit={this.addCourse}>
            <div className="mb-3 mt-3">
                <label className="form-label">Course Name:</label>
                <input type="text" className="form-control" name="courseName"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Course Description:</label>
                <textarea type="text" className="form-control" name="courseDescription"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
  }
}

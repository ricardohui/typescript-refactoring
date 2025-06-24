class Person{
  _courses: string[];
  
  get courses() {
    return this._courses ? this._courses.slice() : [];
  }

  addCourse(course: string) {
    if (!this._courses) {
      this._courses = [];
    }
    this._courses.push(course);
  }
  removeCourse(course: string) {
    if (this._courses) {
      const index = this._courses.indexOf(course);
      if (index !== -1) {
        this._courses.splice(index, 1);
      }
    }
  }
}
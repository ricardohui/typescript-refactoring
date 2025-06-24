class Person{
  _courses: string[];
  get courses() {
    return this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}
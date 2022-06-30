// Create an object factory for a student object.
// The student object should have the following methods
  // info - logs the name and year of the student

  function createStudent(name, year) {
    return {
      name,
      year,
      courses: [],
      info() {
        console.log(`${this.name} is a ${this.year} year student.`)
      },
      addCourse(course) {
        this.courses.push(course)
      },
      listCourses() {
        this.courses.forEach(course => console.log(course))
      },
      addNote(courseCode, text) {
        let course = this.getCourseByCode(courseCode)
        if (course.hasOwnProperty('note')) {
          course.note += ` ${text}`
        } else {
          course.note = text
        }
      },
      updateNote(courseCode, text) {
        let course = this.getCourseByCode(courseCode)
        course.note = text
      },
      viewNotes() {
        let coursesWithNotes = this.courses.filter(object => object.hasOwnProperty('note'))
        coursesWithNotes.forEach(course => {
          console.log(`${course.name}: ${course.note}`)
        })
      },
      getCourseByCode(courseCode) {
        for (let index = 0; index < this.courses.length; index++) {
          let course = this.courses[index]
          if (course.code === Number(courseCode)) {
            return course
          }
        }
        return "Course could not be found!"
      },
    }
  }


const p = (element => console.log(element))
let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
// foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Just kidding!');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();


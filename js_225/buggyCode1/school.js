function School() {
  return {
    students: [],
    makeStudent(name, year) {
      const validYears = ['1st', '2nd', '3rd', '4th']
      if (!validYears.includes(year)) {
        console.log('Invalid year')
        return
      }
      let student = createStudent(name, year)
      this.students.push(student);
      return student
      // Year can only be "1st, 2nd, 3rd, or 4th."
      // Return student object
    },
    enrollCourse(studentObj, courseObj) {
      student = this.findStudentByName(studentObj.name)
      let course = Object.assign({}, courseObj)
      if (student) {
        student.addCourse(course);
        console.log(`${student.name} enrolled in ${courseObj.name} ${courseObj.code}`)
        return
      } 
      console.log('Something went wrong!')
    },
    addGrade(studentObj, courseObj, grade) {
      let student = this.findStudentByName(studentObj.name);
      let course = student.getCourseByCode(courseObj.code);
      course.grade = grade;
    },
    findStudentByName(studentName) {
      let validStudent = this.students.find(student => student.name === studentName)
      if (validStudent) {
        return validStudent
      } else {
        console.log('The student could not be found!')
        return undefined
      }
    },
    getReportCard(studentObj) {
      let student = this.findStudentByName(studentObj.name);
      for (let i = 0; i < student.courses.length; i++ ) {
        let grade = student.courses[i].grade
        if (!grade) {
          grade = 'In progress'
        }
        console.log(`${student.courses[i].name}: ${grade}`)
      }
    },
    courseReport(courseName) {
      let grades = []
      console.log(`=${courseName} Grades=`)
      this.students.forEach(student => {
        let course = student.courses.find(course => course.name === courseName)
        if (course && course.grade && course.grade !== 'In progress') {
          grades.push(`${student.name}: ${course.grade}`)
        }
      })
      if (grades.length === 0) {
        console.log("No students have grades posted for this course!")
      } else {
      grades.forEach(grade => console.log(grade));
      }
    }

  }
}

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


const LS = new School()
let foo = LS.makeStudent('foo', '3rd');
let bar = LS.makeStudent('bar', '1st');
let qux = LS.makeStudent('qux', '2nd');
let math = {name: 'Math', code: 101,}
let advMath = {name: 'Advanced Math', code: 102,}
let physics = {name: 'Physics', code: 202,}
LS.enrollCourse(foo, math);
LS.enrollCourse(foo, advMath);
LS.addGrade(foo, math, 95);
LS.addGrade(foo, advMath, 90);
LS.enrollCourse(foo, physics);
LS.enrollCourse(bar, math);
LS.addGrade(bar, math, 91);
LS.enrollCourse(qux, math);
LS.addGrade(qux, math, 93);
LS.enrollCourse(qux, advMath);
LS.addGrade(qux, advMath, 90);
LS.courseReport('Physics')
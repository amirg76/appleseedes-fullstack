const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1.

school.findPerson = function (type, id) {
  const PersonSearch = school[type].find((e) => e.id === id);
  console.log(PersonSearch);
  return PersonSearch;
};
school.findPerson("students", 10);

// 2.

school.assignStudent = function (id, subject) {
  const studentToTeacher = school.teachers.find((e) => {
    if (!e.capacityLeft) {
      return false;
    }
    return e.capacityLeft > 0 && e.subjects.indexOf(subject) !== -1;
  });
  if (!studentToTeacher)
    return console.log(`Sorry, 
  no available teachers left`);

  studentToTeacher.students.push(id);
  studentToTeacher.capacityLeft--;

  return studentToTeacher;
};
school.assignStudent(11, "history");

// 3.

school.assignTeachersSubject = function (teachersId, newSubject) {
  const subjectToTeacher = school.teachers.find((e) => {
    if (e.subjects.indexOf(newSubject) !== -1) return false;
    return e.id === teachersId && e.subjects.indexOf(newSubject) === -1;
  });
  if (subjectToTeacher) subjectToTeacher.subjects.push(newSubject);
};
school.assignTeachersSubject(1, "bible");
console.log(school.teachers[0].subjects);

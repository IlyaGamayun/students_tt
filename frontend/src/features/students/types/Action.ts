import Student, { StudentId } from './Student';

type Action =
| { type: 'students/deleteStudent'; payload: StudentId }
| { type: 'students/editStudent'; payload: Student }
| { type: 'students/createStudent'; payload: Student }
| { type: 'students/loadStudents'; payload: Student[] };

export default Action;

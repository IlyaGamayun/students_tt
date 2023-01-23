/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import * as api from './api';
import StudentRow from './StudentRow';
import Student from './types/Student';

export default function StudentsList(): JSX.Element {
    const [arrStudents, setArrStudents] = useState<Student[]>([]);
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [score, setScore] = useState('');

function handleSubmit(event: React.FormEvent): void {
  event.preventDefault();

  setArrStudents((students) => {
    const student: Student = {
        id: students.length + 1,
        name,
        birthdate,
        score: Number(score),
    };

    return [...students, student];
  });
}

const handleEdit = (student: Student): void => {
    setArrStudents((students) =>
    students.map((newStudent) => newStudent.id === student.id ? student : newStudent));
};

function deleteStudent(student : Student): void {
        setArrStudents((students) => students.filter((s) => s !== student));
    }

useEffect(() => {
        api.loadStudents().then((students) => setArrStudents(students));
    }, []);

    return (
<>
<h1>Таблица выпускников</h1>
      <div className="addBtn">
        <form onSubmit={handleSubmit}>
            <input
              placeholder="Имя студента"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{' '}
            <input
              placeholder="Дата рождения"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />{' '}
            <input
              placeholder="Средний балл"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              type="number"
            />{' '}
            <button type="submit">Добавить студента</button>
        </form>
      </div>
        <table>
                <tr>
                    <th>ФИО студента</th>
                    <th>Дата рождения</th>
                    <th>Средний балл</th>
                    <th />
                </tr>
                {arrStudents.map((student) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onDelete={deleteStudent}
                  onEdit={handleEdit}
                />
)
                )}
        </table>
</>
    );
}

/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useReducer, useState } from 'react';
import * as api from './api';
import reducer from './reducer';
import StudentRow from './StudentRow';
import Student from './types/Student';
import StudentsListState from './types/StudentsListState';

const initialState: StudentsListState = {
    students: [],
};

export default function StudentsList(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { students } = state;
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [score, setScore] = useState('');

    function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const student: Student = {
        id: students.length + 1,
        name,
        birthdate,
        score: Number(score),
    };

    dispatch({ type: 'students/createStudent', payload: student });
    }

    const handleEdit = (student: Student): void => {
        dispatch({ type: 'students/editStudent', payload: student });
    };

    function deleteStudent(student : Student): void {
        dispatch({ type: 'students/deleteStudent', payload: student.id });
        }

    useEffect(() => {
            api
            .loadStudents()
            .then((data) =>
            dispatch({ type: 'students/loadStudents', payload: data }));
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
                    {students.map((student: Student) => (
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

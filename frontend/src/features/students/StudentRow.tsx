/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Student from './types/Student';

interface StudentRowProps {
    student: Student;
    onDelete: (student: Student) => void;
    onEdit: (student: Student) => void;
}

export default function StudentRow({
    student,
    onDelete,
    onEdit
}: StudentRowProps): JSX.Element {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [score, setScore] = useState(0);

    function toggleEdit(): void {
        if (edit) {
            onEdit({ ...student, name, birthdate, score });
        }
        setEdit((e) => !e);
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };

    const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setBirthdate(event.target.value);
    };

    const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setScore(Number(event.target.value));
    };

    return (

<tr>
                    <td>{edit ? (
                    <input value={name} onChange={handleNameChange} />
                    ) : (
                        student.name
                        )}
                    </td>
                    <td>{edit ? (
                    <input value={birthdate} onChange={handleBirthdateChange} />
                    ) : (
                        student.birthdate
                        )}
                    </td>
                    <td>{edit ? (
                    <input value={score} onChange={handleScoreChange} />
                    ) : (
                        student.score
                        )}
                    </td>
                    <td className="buttons">
                        <button onClick={toggleEdit} className="editBtn">✏️</button>
                        <button onClick={() => onDelete(student)} className="deleteBtn">❌</button>
                    </td>
</tr>
    );
}

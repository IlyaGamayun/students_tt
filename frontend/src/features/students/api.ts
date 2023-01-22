import Student from './types/Student';

// eslint-disable-next-line import/prefer-default-export
export async function loadStudents(): Promise<Student[]> {
    const students: Student[] = [
        {
            id: 1,
            name: 'Пушкин Александр Сергеевич',
            birthdate: '06.06.1799',
            score: 3.7,
        },
        {
            id: 2,
            name: 'Кюхельбекер Вильгельм Карлович',
            birthdate: '10.06.1797',
            score: 4.2,
        },
        {
            id: 3,
            name: 'Горчаков Александр Михайлович',
            birthdate: '04.06.1798',
            score: 4.3,
        }
    ];
    return students;
}

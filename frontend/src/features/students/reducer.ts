import Action from './types/Action';
import StudentsListState from './types/StudentsListState';

export default function reducer(state: StudentsListState, action: Action): StudentsListState {
    switch (action.type) {
        case 'students/loadStudents': {
            return {
                ...state,
                students: action.payload };
        }

        case 'students/deleteStudent': {
            return {
                ...state,
                students: state.students.filter((s) => s.id !== action.payload)
            }; }

        case 'students/editStudent': {
            return {
                ...state,
                students: state.students.map((st) =>
                st.id === action.payload.id ? action.payload : st),
            }; }

        case 'students/createStudent': {
            return { ...state,
            students: [...state.students, action.payload]
        }; }
    }
}

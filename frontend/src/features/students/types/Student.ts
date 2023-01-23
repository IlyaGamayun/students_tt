export default interface Student {
    id: number;
    name: string;
    birthdate: string;
    score: number;
}

export type StudentId = Student['id'];

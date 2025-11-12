export interface Student {
  _id?: string;
  name: string;
  age: number;
  course: string;
  skills?: string[];
  email: string;
  isEnrolled?: boolean;
}

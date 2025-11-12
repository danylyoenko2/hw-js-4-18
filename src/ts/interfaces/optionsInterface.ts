import { Student } from "./studentInterface";

export interface Options {
  method: string;
  headers?: {};
  body?: Student;
}

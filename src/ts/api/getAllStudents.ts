import { proccessRes } from "../helpers/proccessResponse";
import { Student } from "../interfaces/studentInterface";

export const getAllStudents = (api: string) =>
  fetch(api).then(proccessRes<Student>);

import { fetchWrapper } from "../helpers/fetchWrapper";
import { proccessRes } from "../helpers/proccessResponse";
import { Student } from "../interfaces/studentInterface";

export const createNewStudent = (api: string, student: Student) =>
  fetchWrapper(api, { method: "POST", body: student }).then(
    proccessRes<Student>
  );

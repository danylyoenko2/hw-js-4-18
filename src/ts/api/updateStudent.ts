import { fetchWrapper } from "../helpers/fetchWrapper";
import { proccessRes } from "../helpers/proccessResponse";
import { Student } from "../interfaces/studentInterface";

export const updateStudent = (api: string, id: string, updStudent: Student) =>
  fetchWrapper(`${api}/${id}`, { method: "PATCH", body: updStudent }).then(
    proccessRes<Student>
  );

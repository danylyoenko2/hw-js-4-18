import { success } from "@pnotify/core";
import { createNewStudent } from "../api/createNewStudent";
import { BASE_URL } from "../http/http";
import { Student } from "../interfaces/studentInterface";
import { updateStudent } from "../api/updateStudent";
import { deleteStudent } from "../api/deleteStudent";
import { createMarkUp } from "../components/studentsTableMarkUp";

export class studentServise {
  static create = async (studentData: Student) =>
    createNewStudent(BASE_URL, studentData).then((data) => {
      success({
        title: "Успіх!",
        text: "Ви успішно додали нового студента!",
      });
      createMarkUp();
    });

  static update = async (studentData: Student, id: string) => {
    console.log(studentData);
    updateStudent(BASE_URL, id, studentData).then((data) => {
      success({
        title: "Успіх!",
        text: "Ви успішно оновили інформацію про студента!",
      });
      createMarkUp();
    });
  };

  static delete = async (id: string) => {
    console.log(id);
    deleteStudent(BASE_URL, id).then(() => {
      success({
        text: "Ви успішно видалили користувача!",
      });
      createMarkUp();
    });
  };
}

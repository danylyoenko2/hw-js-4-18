import Handlebars from "handlebars";
import studentsSourse from "bundle-text:../../template/students.hbs";
import { getAllStudents } from "../api/getAllStudents";
import { BASE_URL } from "../http/http";
const tableBody = document.querySelector("[data-students-body]");

const studentsTemplate = Handlebars.compile(studentsSourse);

export const createMarkUp = async (): Promise<void> => {
  try {
    const data = await getAllStudents(BASE_URL);
    const studentsHTML = studentsTemplate(data);
    console.log(data);
    if (tableBody) {
      tableBody.innerHTML = studentsHTML;
    }
  } catch (error) {
    console.log(error);
  }
};

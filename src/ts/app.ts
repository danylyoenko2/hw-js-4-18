import { createMarkUp } from "./components/studentsTableMarkUp";
import { handleEdit } from "./editMode";
import { Student } from "./interfaces/studentInterface";
import { studentServise } from "./service/studentService";

const form = document.querySelector("[data-students-form]") as HTMLFormElement;
const loadBtn = document.querySelector("[data-students-load]");
const tableBody = document.querySelector("[data-students-body]");

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const studentData: Student = {
    name: target.studentName.value.trim(),
    age: target.studentAge.value.trim(),
    course: target.studentCourse.value.trim(),
    skills: target.studentSkills.value.trim(),
    email: target.studentEmail.value.trim(),
    isEnrolled: target.studentIsEnrolled.checked,
  };
  studentServise.create(studentData);
  form?.clear();
};

form?.addEventListener("submit", handleSubmit);
tableBody?.addEventListener("click", handleEdit);
loadBtn?.addEventListener("click", createMarkUp);

import { error, info } from "@pnotify/core";
import { Student } from "./interfaces/studentInterface";
import { studentServise } from "./service/studentService";

export const handleEdit = (e: Event) => {
  const targetRow = (e.target as HTMLElement).closest("tr");

  const currentEditing = document.querySelector("tr.is-edit");
  if (currentEditing && targetRow !== currentEditing) {
    cancelEdit(currentEditing);
  }
  if (!targetRow) return;
  enterEditMode(targetRow);
  targetRow.addEventListener("click", handleClick);
};
const enterEditMode = (row: any) => {
  row.classList.add("is-edit");
  row.addEventListener("keydown", handleKeyDown);
};
const handleKeyDown = (e: KeyboardEvent) => {
  const row = e.currentTarget as HTMLElement;

  if (e.key === "Enter") {
    e.preventDefault();
    saveRowData(row);
    leaveEditMode(row);
  } else if (e.key === "Escape") {
    cancelEdit(row);
  }
};
const saveRowData = (row: any) => {
  const studentId = row.dataset.student;
  type updatedDataType = Pick<
    Student,
    "name" | "email" | "age" | "skills" | "course"
  >;

  const updatedData = {} as updatedDataType;

  const inputs = row.querySelectorAll(".students__edit");

  inputs.forEach((input: HTMLInputElement) => {
    const field = input.dataset.studentfield as string;
    if (field) {
      (updatedData as any)[field] = input.value; // !!! пофіксить пізніше костиль
    }
  });

  if (!updatedData.name || !updatedData.email) {
    error({
      title: "Помилка!",
      text: "Ім'я та Email не можуть бути порожніми!",
    });
    return;
  }

  studentServise.update(updatedData, studentId);
};
const cancelEdit = (row: any) => {
  const inputs = row.querySelectorAll(".students__edit");

  inputs.forEach((input: HTMLInputElement) => {
    const viewSpan = input.previousElementSibling;
    if (viewSpan) {
      input.value = viewSpan.textContent;
    }
  });

  leaveEditMode(row);
  info({
    title: "Редагування",
    text: "Редагування скасовано!",
  });
};
const leaveEditMode = (row: any) => {
  row.classList.remove("is-edit");
  row.removeEventListener("keydown", handleKeyDown);
};
const handleClick = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target.tagName !== "BUTTON") return;
  const parentRow = target.parentElement?.parentElement;
  const id = parentRow?.dataset.student;
  if (target.dataset.studentaction === "save") {
    saveRowData(parentRow);
    leaveEditMode(parentRow);
  } else {
    leaveEditMode(parentRow);
    parentRow?.removeEventListener("click", handleClick);
    studentServise.delete(String(id));
  }
};

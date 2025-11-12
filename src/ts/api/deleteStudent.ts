import { fetchWrapper } from "../helpers/fetchWrapper";
import { proccessRes } from "../helpers/proccessResponse";

export const deleteStudent = (api: string, id: string) =>
  fetchWrapper(`${api}/${id}`, { method: "DELETE" }).then(proccessRes<null>);

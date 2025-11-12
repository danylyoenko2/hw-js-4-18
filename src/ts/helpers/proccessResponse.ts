export const proccessRes = <T>(res: Response): Promise<T> => {
  if (!res.ok) throw new Error("Oops... Somethins went wrong!");
  return res.json();
};

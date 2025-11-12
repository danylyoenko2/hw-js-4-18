import { Options } from "../interfaces/optionsInterface";

export const fetchWrapper = (url: string, options: Options) => {
  const fetchOptions = {
    method: options.method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(options.body),
  };

  console.log(fetchOptions);

  return fetch(url, fetchOptions);
};

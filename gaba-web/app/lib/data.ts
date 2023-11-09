import { Section } from "./definitions";

const URL: any = process.env.APP_URL + "/api";

export const getSections = async () => {
  const res = await fetch(URL + "/sections");

  const data: Section[] = await res.json();

  return data;
};

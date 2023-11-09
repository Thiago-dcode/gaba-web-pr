import { Section } from "./definitions";

const URL: any = process.env.APP_URL + "/api";

export const getSections = async () => {
try {
  const res = await fetch(URL + "/sections");
console.log(URL);
  const data: Section[] = await res.json();
  
  return data;
} catch (error) {
    console.log(error)
}
};

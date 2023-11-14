import { Url } from "next/dist/shared/lib/router/router";

export type User = {
  id: string;
  username: StringConstructor;
  email: string;
  name: string;
  password: String;
  surname: String;
};
export type Media = {
  id: number;
  type: string;
  url: string;
  sections: Section[];
  user: User;
  userId: number;
};

export type Section = {
  id: number;
  name: string;
  link: Url;
  isActive: boolean;
  description: string;
  iconUnActive: string;
  iconActive: string;
  published: boolean;
  user: User;
  userId: number;
  media: Media[];
};

import {User} from "./user";

export interface Card {
  id: number;
  name: string;
  number: string;
  limit: string;
  pay: string;
  color: string;
  user?: User;
}

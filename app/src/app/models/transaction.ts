import {Card} from "./card";

export interface Transaction {
  id: number;
  name: string;
  value: number;
  date: Date;
  by: number;
  attention: boolean;
  icon: string;
  card?: Card;
}

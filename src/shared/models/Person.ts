import { Gender } from "../components/PersonDisplay";

export interface Person {
    firstName: string;
    lastName: string;
    age: number,
    gender: Gender
}
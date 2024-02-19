import { useEffect, useState } from "react";
import {Person} from "./req-res";

export const useReqRes = () => {
    const url = "https://reqres.in/api/users?page=2";
    const [people, setPeople] = useState<Person[]>([]);

    useEffect( () => {

       const connect = async () => {
          const response = await fetch(url);
          const allData = await response.json();
          setPeople(allData.data);
       }

       connect();

    }, []);

    return {
        people: people
    }

}
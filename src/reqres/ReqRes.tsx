import { PersonCard } from "../shared/components/PersonCard";
import { useReqRes } from "./req-res-hook";

export const ReqRes = () => {
    const people = useReqRes().people;
    return (
        <div>
            {
                people.map( person => 
                    <PersonCard person={person}></PersonCard>
                )
            }
        </div>
    )
}
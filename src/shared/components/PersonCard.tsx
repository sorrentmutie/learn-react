import { FC } from "react";
import { Person } from "../../reqres/req-res";

export interface PersonCardProps {
    person: Person
}

export const PersonCard: FC<PersonCardProps>
 = ( {person} ) => {
    return (
        <div className="card border-primary mb-3" style={{width: "20rem"}}>
  <div className="card-header">{person.email}</div>
  <div className="card-body">
    <h4 className="card-title">{person.first_name} {person.last_name}</h4>
    <img src={person.avatar}></img>
  </div>
</div>
    )
 }




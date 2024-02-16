import { FC } from "react"
import { Person } from "../models/Person"

export enum Gender {
    Male, Female
}


export interface PersonDisplayProps {
    person: Person
}

export const PersonDisplay: FC<PersonDisplayProps> = ( {person}) => {
    const wrapperName = 
    person.gender === Gender.Male ? "AppMale" : "AppFemale"

    return (
        <>
           <h3 className={wrapperName}>  {person.firstName} {person.lastName} </h3>
        </>
    )
}
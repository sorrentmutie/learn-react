import { Display } from "./Display";

export interface MyButtonProps {
    counter: number,
    clickHandler: () => void
}


export const MyButton = (props: MyButtonProps) => {
    return (
        <>
         <button onClick={props.clickHandler}> 
            Cliccami
         </button>
         <Display currentValue={props.counter}/>
        </>
    )
} 
import { FC } from "react";
import { ProductProps } from "./ProductProps";
import 'bootstrap/dist/css/bootstrap.min.css';


export const ProductsDisplay: FC<ProductProps>
 = (props) => {

    return <div>
        <h3 style={{color: 'red'}}>{props.data}, ci sono 
            <span className="badge bg-primary">{props.value}</span>
             prodotti in magazzino
        </h3>
    </div>


    
 }

export const Products = (props: ProductProps) => <h3>{props.data}, ci sono {props.value} prodotti in magazzino</h3>
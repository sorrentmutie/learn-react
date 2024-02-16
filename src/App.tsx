import './App.css';
import { Empty } from './shared/components/Empty';
import { Gender, PersonDisplay } from './shared/components/PersonDisplay';
import { ProductsDisplay } from './shared/components/Products/Products';
import { Person } from './shared/models/Person';

const App = () => {
const numberOfProducts = 10;
const person : Person = {
  firstName: "Mario",
  lastName: 'Rossi',
  age: 35,
  gender: Gender.Male
}

const person2 : Person = {
  firstName: "Maria",
  lastName: 'Rossi',
  age: 35,
  gender: Gender.Female
}

const renderMessage = (products: number) =>
    {
      return products === 0 ? <Empty/> : <ProductsDisplay value={products} data={"Ciao"}/>
    }


return (
  <>
   <PersonDisplay person={person}></PersonDisplay>
   <PersonDisplay person={person2}></PersonDisplay>
   {renderMessage(numberOfProducts)}
  </>
)
}

export default App;

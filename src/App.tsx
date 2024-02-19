import './App.css';
import { ReqRes } from './reqres/ReqRes';
import { Menu } from './shared/components/Menu';
import { Welcome } from './shared/components/Welcome';
import { MenuItem } from './shared/models/menuItem';
const App = () => {

  const navigate = (url: string) => window.open(url);

  const menuItems: MenuItem[] = [
      {text: "Home", url:"#", key: "home"},
      {text: "Features", url:"https://www.google.com", key: "features"},
      {text: "Pricing", url:"https://www.microsoft.com", key: "pricing"},
      {text: "About", url:"https://www.amazon.com", key: "about"},
  ];


return (
  <>
   <Menu menuItems={menuItems} onMenuItemClicked={navigate}/>
   <ReqRes/>
  </>
  )
}

export default App;

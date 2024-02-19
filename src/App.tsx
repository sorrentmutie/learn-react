import './App.css';
import { ReqRes } from './reqres/ReqRes';
import { MainNavigation } from './shared/components/MainNavigation';
import { Menu } from './shared/components/Menu';
import { Welcome } from './shared/components/Welcome';
import { MenuItem } from './shared/models/menuItem';
const App = () => {

  const navigate = (url: string) => window.open(url);

  const menuItems: MenuItem[] = [
      {text: "Home", url:"/", key: "home"},
      {text: "Features", url:"/features", key: "features"},
      {text: "Pricing", url:"/pricing", key: "pricing"},
      {text: "About", url:"/about", key: "about"},
  ];


return (
  <>
   <Menu menuItems={menuItems} onMenuItemClicked={navigate}/>
   <MainNavigation/>
  </>
  )
}

export default App;

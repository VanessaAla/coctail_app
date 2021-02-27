import "./App.css";
import Title from "./components/Title";
import { Switch, Route } from "react-router-dom";
import CocktailCategoryList from "./pages/CocktailCategoryList";
import CocktailList from "./pages/CocktailList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Switch>
        <Route path="/Cocktail Categories" component={CocktailCategoryList} />
        <Route path="/Cocktail List" component={CocktailList} />
      </Switch>
    </div>
  );
}

export default App;

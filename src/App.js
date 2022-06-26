import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Cart/>
      <h2>Let's get started!</h2>
      <Header/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;

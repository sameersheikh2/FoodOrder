import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShowing , setCartIsShowing] = useState(false);

  const showCartHandler = () =>{
    setCartIsShowing(true);
  }

  const hideCartHandler = () =>{
    setCartIsShowing(false);
  }

  return (
    <div>
      {cartIsShowing && <Cart onClose={hideCartHandler}/>}
      <h2>Let's get started!</h2>
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;

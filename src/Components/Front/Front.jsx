import axios from "axios";
import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import List from "./List";
import Nav from "./Nav";

function Front() {

  const [products, setProducts] = useState(null);

  // Read municipalities. Paima produktus is const
  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <FrontContext.Provider value={{
      products
    }}>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
          </div>
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
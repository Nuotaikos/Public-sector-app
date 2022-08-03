import axios from "axios";
import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import List from "./List";
import Nav from "./Nav";

function Front() {

  const [products, setProducts] = useState(null);

  const [addCom, setAddCom] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());


  // Read municipalities. Paima produktus is const
  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(res => setProducts(res.data));
  }, [lastUpdate]);

  // Komentarai
  useEffect(() => {
    if (null === addCom) return;
    axios.post('http://localhost:3003/comments', addCom)
      .then(res => {
        setLastUpdate(Date.now());
      })
  }, [addCom]);

  return (
    <FrontContext.Provider value={{
      products,
      setAddCom
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
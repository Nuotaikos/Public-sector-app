import axios from "axios";
import { useEffect, useState } from "react";
import FrontContext from "./FrontContext";
import List from "./List";
import Nav from "./Nav";

function Front() {

  const [products, setProducts] = useState(null);

  const [addCom, setAddCom] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());


  // Read products. Paima produktus is const
  useEffect(() => {
    axios.get('http://localhost:3003/products')
      .then(res => {
        const products = new Map();
        res.data.forEach(p => {
          let comment;
          if (null === p.com) {
            comment = null;
          } else {
            comment = { id: p.com_id, com: p.com };
          }
          if (products.has(p.id)) {
            const pr = products.get(p.id);
            if (comment) {
              pr.com.push(comment);
            }
          } else {
            products.set(p.id, { ...p });
            const pr = products.get(p.id);
            pr.com = [];
            delete pr.com_id;
            if (comment) {
              pr.com.push(comment);
            }
          }
        });
        console.log([...products].map(e => e[1]));
        setProducts([...products].map(e => e[1]).map((p, i) => ({ ...p, row: i })));
      })

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
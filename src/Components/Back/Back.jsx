import axios from 'axios';
import { useEffect, useState } from 'react';
import BackContext from './BackContext';
import CatsCrud from './Cats/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';
import { v4 as uuidv4 } from 'uuid';


function Back({ show }) {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [messages, setMessages] = useState([]);

  const [cats, setCats] = useState(null);

  const [createCat, setCreateCat] = useState(null);
  const [deleteCat, setDeleteCat] = useState(null);
  const [editCat, setEditCat] = useState(null);
  const [modalCat, setModalCat] = useState(null);

  const [products, setProducts] = useState(null);
  const [createProduct, setCreateProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);


  // Read cat

  useEffect(() => {
    axios.get('http://localhost:3003/admin/cats')
      .then(res => setCats(res.data));
  }, [lastUpdate]);

  // Read products 
  //(nuskaitysime sectorius)

  useEffect(() => {
    axios.get('http://localhost:3003/admin/products')
      .then(res => setProducts(res.data));
  }, [lastUpdate]);

  // Create cat

  useEffect(() => {
    if (null === createCat) return;
    axios.post('http://localhost:3003/admin/cats', createCat)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [createCat]);

  // Create Sector

  useEffect(() => {
    if (null === createProduct) return;
    axios.post('http://localhost:3003/admin/products', createProduct)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [createProduct]);

  // Delete cat
  useEffect(() => {
    if (null === deleteCat) return;
    axios.delete('http://localhost:3003/admin/cats/' + deleteCat.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [deleteCat]);

  // Delete sectors
  // trinam pagal product id

  useEffect(() => {
    if (null === deleteProduct) return;
    axios.delete('http://localhost:3003/admin/products/' + deleteProduct.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [deleteProduct]);

  // Edit cat  
  useEffect(() => {
    if (null === editCat) return;   /* editCat – is virsau. Tai viena kategorija, kurioje yra id ir title */

    axios.put('http://localhost:3003/admin/cats/' + editCat.id, editCat) /* editCat – perdavinesim title */
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [editCat]);

  // Edit sectors
  useEffect(() => {
    if (null === editProduct) return;
    axios.put('http://localhost:3003/admin/products/' + editProduct.id, editProduct)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
  }, [editProduct]);

  const showMessage = (m) => {
    const id = uuidv4();
    m.id = id;
    setMessages(msg => [...msg, m]);
    setTimeout(() => {
      setMessages(mes => mes.filter(ms => ms.id !== id))
    }, 5000);
  }



  return (
    <BackContext.Provider value={{
      setCreateCat,
      cats,
      setDeleteCat,
      messages,
      setEditCat,
      setModalCat,
      modalCat,  /* atvaizduos modala */
      setCreateProduct,
      products,
      setDeleteProduct,
      setEditProduct,
      setModalProduct,
      modalProduct /* atvaizduos modala */
    }}>
      {
        show === 'admin' ?
          <>
            <Nav />
            <div className="card mt-4">
              <div className="card-header">
                <h2>Admin page/BACK </h2>
              </div>
            </div>
          </>
          : show === 'cats' ? <CatsCrud /> :
            show === 'products' ? <ProductsCrud /> : null
      }
    </BackContext.Provider>
  )
}

export default Back;


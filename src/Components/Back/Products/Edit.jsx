import { useEffect, useState, useContext } from "react";
import BackContext from "../BackContext";

function Edit() {

  const { modalProduct, setEditProduct, setModalProduct, cats } = useContext(BackContext);

  const [title, setTitle] = useState('');
  const [municipalities, setMunicipalities] = useState('');
  const [cat, setCat] = useState('0');

  useEffect(() => {
    if (null === modalProduct) {
      return;
    }
    setTitle(modalProduct.title);
    setMunicipalities(modalProduct.municipalities);
    setCat(cats.filter(c => c.title === modalProduct.cat)[0].id);
  }, [modalProduct, cats]);

  const handleEdit = () => {
    const data = {
      title,
      id: modalProduct.id,
      municipalities: parseInt(municipalities),
      cat: parseInt(cat)
    };
    console.log('data', data)
    setEditProduct(data);
    setModalProduct(null);
  }

  if (null === modalProduct) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Sector</h5>
            <button type="button" className="close" onClick={() => setModalProduct(null)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label className="form-group mb-2">Sectors</label>
              <select className="form-control" onChange={e => setTitle(e.target.value)} value={title}>
                <option value="0" >Please, select Sector</option>
                <option value="Aplinkosauga">Aplinkosauga</option>
                <option value="Civilinė sauga">Civilinė sauga</option>
                <option value="Įdarbinimas">Įdarbinimo paslaugos</option>
                <option value="Kultūra">Kultūra</option>
                <option value="Medicina">Medicina</option>
                <option value="Mokesčių administravimas">Mokesčių administravimas</option>
                <option value="Mokslo">Mokslo paslaugos</option>
                <option value="Priešgaisrinė apsauga">Priešgaisrinė apsauga</option>
                <option value="Socialinės paslaugos">Socialinės paslaugos</option>
                <option value="Sportas">Sportas</option>
                <option value="Susiekimas">Susiekimas</option>
                <option value="Švietimas">Švietimas</option>
                <option value="Teisėsauga">Teisėsauga</option>
              </select>
            </div>
            <div className="form-group">
              <label>Municipalities</label>
              <select className="form-control" onChange={e => setCat(e.target.value)} value={cat}>
                <option value="0">Please, select Municipality</option>
                {
                  cats ? cats.map(c => <option key={c.id} value={c.id}>{c.title}</option>) : null
                }
              </select>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalProduct(null)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edit;
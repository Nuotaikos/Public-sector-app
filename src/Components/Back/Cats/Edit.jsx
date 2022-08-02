import { useEffect, useState, useContext, useRef } from "react";
import getBase64 from "../../../Functions/getBase64";
import BackContext from "../BackContext";

function Edit() {

  const { modalCat, setEditCat, setModalCat } = useContext(BackContext);


  const [title, setTitle] = useState('');

  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
      .then(photo => setPhotoPrint(photo))
      .catch(_ => {
        // tylim
      })
  }

  useEffect(() => {
    if (null === modalCat) {
      return;
    }
    setTitle(modalCat.title);
    setPhotoPrint(modalCat.photo);
  }, [modalCat]);

  const handleEdit = () => {
    const data = {
      title,
      id: modalCat.id,
      photo: photoPrint,
    };
    setEditCat(data);
    setModalCat(null);
  }

  if (null === modalCat) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Municipality Changer</h5>
            <button type="button" className="close" onClick={() => setModalCat(null)}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              {/* <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} /> */}
              <select className="form-control" onChange={e => setTitle(e.target.value)} value={title}>
                <option value="0" >Please, select Municipality</option>
                <option value="Akmenės r. sav.">Akmenės r. sav.</option>
                <option value="Alytaus m. sav.">Alytaus m. sav.</option>
                <option value="Birštono sav.">Birštono sav.</option>
                <option value="Druskininkų sav.">Druskininkų sav.</option>
                <option value="Elektrėnų sav.">Elektrėnų sav.</option>
                <option value="Ignalinos r. sav.">Ignalinos r. sav.</option>
                <option value="Kauno m. sav.">Kauno m. sav.</option>
                <option value="Klaipėdos m. sav.">Klaipėdos m. sav.</option>
                <option value="Molėtų r. sav.">Molėtų r. sav.</option>
                <option value="Panevėžio m. sav.">Panevėžio m. sav.</option>
                <option value="Trakų r. sav.">Trakų r. sav.</option>
                <option value="Varėnos r. sav.">Varėnos r. sav.</option>
                <option value="Vilniaus m. sav.">Vilniaus m. sav.</option>
                <option value="Zarasų r. sav.">Zarasų r. sav.</option>
              </select>
              <small className="form-text text-muted">Update Municipality name.</small>
            </div>
            <div className="form-group">
              <label>Add new photo</label>
              <input ref={fileInput} type="file" className="form-control" onChange={doPhoto} />
              <small className="form-text text-muted">Upload Municipal coat of arms</small>
            </div>
            {
              photoPrint ? <div className="photo-bin"><img src={photoPrint} alt="Municipal coat of arms" /></div> : null
            }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setModalCat(null)}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleEdit}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
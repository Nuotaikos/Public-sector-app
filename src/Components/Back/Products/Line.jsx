import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {       //Paimam line ir returne is line atspausdinam title, price ir t.t.

  const { setDeleteProduct, setModalProduct } = useContext(BackContext);

  const handleDelete = () => {  /* veiks paspaudus mygtuka po irasymo i serveri */
    setDeleteProduct(line);
  }

  const handleEdit = () => {
    setModalProduct(line); /* paspaudus mygtuka edit, setmodal data pakeis state i kazka */
  }

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="cat">
          {
            line.photo ? <div className="photo-bin"><img src={line.photo} alt={line.title} /></div> : null
          }
        </div>
        <div className="content">
          <b>{line.title}</b>
          <b>{line.municipalities}</b>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
          <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default Line;

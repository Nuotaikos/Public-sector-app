import { useContext } from 'react';
import BackContext from '../BackContext';

function Line({ line }) {

  const { setDeleteCat, setModalCat } = useContext(BackContext);

  const handleDelete = () => {
    setDeleteCat(line);
  }

  const handleEdit = () => {
    setModalCat(line); /* mygtukas, kuris iskvicia modala */
  }

  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <b>{line.title}</b>
        </div>
        <div className="cat">
          {
            line.photo ? <div className="photo-bin"><img src={line.photo} alt={line.title} /></div> : null
          }
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

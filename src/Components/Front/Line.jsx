import { useContext, useState } from "react";
import FrontContext from "./FrontContext";

function Line({ line }) {

  const { setAddCom } = useContext(FrontContext);

  const [com, setCom] = useState('');

  const addComment = () => {
    setAddCom({ product_id: line.id, com });
    setCom('');
  }

  return (

    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <div className='mr-4'>
            {
              line.photo ? <div className="photo-bin"><img src={line.photo} alt={line.title} /></div> : null
            }
          </div>
          <b>{line.title}</b>
          <div className="cat">{line.cat}</div>
          <b>{line.municipalities}</b>
        </div>
        <div className="comments">
          <h5>Comments</h5>
          <ul className="list-group">
            {
              line.com.map(c => <li key={c.id} className="list-group-item">{c.com}</li>)
            }
          </ul>
          <div className="form-group">
            <textarea className="form-control" rows="3" value={com} onChange={e => setCom(e.target.value)}></textarea>
          </div>
          <button type="button" className="btn btn-outline-primary" onClick={addComment}>Add comment</button>
        </div>
      </div>
    </li >
  );
}

export default Line;



//   return (
//     <li className="list-group-item">
//       <div className="item">
//         <div className="cat">
//           {
//             line.photo ? <div className="photo-bin"><img src={line.photo} alt={line.title} /></div> : null
//           }
//         </div>
//         <div className="content">
//           <b>{line.title}</b>
//           <b>{line.municipalities}</b>
//         </div>
//         <div className="buttons">
//           <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
//           <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </li>
//   );
// }

// export default Line;

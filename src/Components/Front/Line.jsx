function Line({ line }) {

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
      </div>
    </li>
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

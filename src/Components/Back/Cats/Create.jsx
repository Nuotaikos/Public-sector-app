import { useContext, useRef, useState } from 'react';
import BackContext from '../BackContext';
import getBase64 from '../../../Functions/getBase64';

function Create() {

  const { setCreateCat } = useContext(BackContext);

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

  // const handleCreate = () => {
  //   const data = { title };
  //   setCreateCat(data);
  //   setTitle('');
  // }
  const handleCreate = () => {
    const data = {
      title,
      photo: photoPrint
    };
    setCreateCat(data);
    setTitle("");
    setPhotoPrint(null);

  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new Municipality</h2>
      </div>
      <div className="card-body">
        <div className="form-group ">
          <label className="form-group mb-2">Title</label>
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
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input ref={fileInput} type="file" className="form-control" onChange={doPhoto} />
          <small className="form-text text-muted">Upload Municipal coat of arms</small>
        </div>
        {
          photoPrint ? <div className="photo-bin"><img src={photoPrint} alt="Municipal coat of arms" /></div> : null
        }
        <button type="button" className="btn btn-primary mt-3" onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default Create;

//   return (
  //     <div className="card mt-4">
  //       <div className="card-header">
  //         <h2>Create new Municipality</h2>
  //       </div>
  //       <div className="card-body">
  //         <div className="form-group">
  //           <label>Title</label>
  //           <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
  //           <small className="form-text text-muted">Enter municipality name here.</small>
  //         </div>
  //         <button type="button" className="btn btn-outline-primary" onClick={handleCreate}>Create</button>
  //       </div>
  //     </div>
  //   );
  // }

  // export default Create;
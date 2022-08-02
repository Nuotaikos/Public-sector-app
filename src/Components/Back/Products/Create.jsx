import { useContext, useState } from 'react';
import BackContext from '../BackContext';


function Create() {

  const { cats, setCreateProduct } = useContext(BackContext);

  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('0');


  const handleCreate = () => {
    const data = {
      title,
      cat: parseInt(cat),
    };
    setCreateProduct(data);
    setTitle("");
    setCat('0');

  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new Sector</h2>
      </div>
      <div className="card-body">
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
        </div>
        <button type="button" className="btn btn-outline-primary" onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}
//     <div className="card mt-4 m-4">
//       <div className="card-header">
//         <h2>Create new Sector</h2>
//       </div>
//       <div className="card-body">
//         <div className="form-group ">
//           <label className="form-group mb-2">Select Municipality</label>
//           {/* <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} /> */}
//           <select className="form-control" onChange={e => setTitle(e.target.value)} value={title}>
//             {/* <option value="0" >Please, select Municipality</option>
//             <option value="Akmenės r. sav.">Akmenės r. sav.</option>
//             <option value="Alytaus m. sav.">Alytaus m. sav.</option>
//             <option value="Birštono sav.">Birštono sav.</option>
//             <option value="Druskininkų sav.">Druskininkų sav.</option>
//             <option value="Elektrėnų sav.">Elektrėnų sav.</option>
//             <option value="Ignalinos r. sav.">Ignalinos r. sav.</option>
//             <option value="Kauno m. sav.">Kauno m. sav.</option>
//             <option value="Klaipėdos m. sav.">Klaipėdos m. sav.</option>
//             <option value="Molėtų r. sav.">Molėtų r. sav.</option>
//             <option value="Panevėžio m. sav.">Panevėžio m. sav.</option>
//             <option value="Trakų r. sav.">Trakų r. sav.</option>
//             <option value="Varėnos r. sav.">Varėnos r. sav.</option>
//             <option value="Vilniaus m. sav.">Vilniaus m. sav.</option>
//             <option value="Zarasų r. sav.">Zarasų r. sav.</option> */}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Photo</label>
//           <input ref={fileInput} type="file" className="form-control" onChange={doPhoto} />
//           <small className="form-text text-muted">Upload Municipal coat of arms</small>
//         </div>
//         {
//           photoPrint ? <div className="photo-bin"><img src={photoPrint} alt="Municipal coat of arms" /></div> : null
//         }
//         <button type="button" className="btn btn-primary mt-3" onClick={handleCreate}>Create</button>
//       </div>
//     </div>
//   );
// }

export default Create;


import { useContext } from 'react';
import Line from './Line';
import FrontContext from './FrontContext';

function List() {

  const { products } = useContext(FrontContext); //kategorijos is FrontContext. Kategorijas paimam is serverio ir atiduodam i konteksta

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>List of Sectors</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {
            products ? products.map(p => <Line key={p.id} line={p}></Line>) : null
            /*Liste paimam products ir ismepinam I line paduodami products*/
          }
        </ul>
      </div>
    </div>
  );
}

export default List;



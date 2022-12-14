import { useContext } from 'react';
import Line from './Line';
import BackContext from '../BackContext';

function List() {

  const { cats } = useContext(BackContext);

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>List of Municipalities</h2>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {
            cats ? cats.map(cat => <Line key={cat.id} line={cat}></Line>) : null
            /*Liste paimam cats ir ismepinam I line paduodami cats*/
          }
        </ul>
      </div>
    </div>
  );
}

export default List;

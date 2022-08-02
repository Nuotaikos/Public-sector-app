import List from "./List";
import Nav from "../Nav";
import Create from "./Create";
import Edit from "./Edit";

function Crud() {
  return (
    <>
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit />
    </>
  );
}

export default Crud;

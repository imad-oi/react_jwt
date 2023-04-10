import Facture from "../components/admin/Facture";
import Form from "../components/admin/Form";

const Service = ({ name, labels, selects }) => {
  console.log("name : ", name);

  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col">
            <div className="card">
              <h5 className="card-header">{name}</h5>
              <div className="card-body">
                <p className="card-text">
                  {
                    name ==='Facture' ? <Facture/> : <Form labels={labels} selects={selects} />
                  }
                </p>
              </div>
              <div className="card-footer d-flex justify-content-end ">
                <button className="btn btn-primary">
                  Send <i class="fa fa-send" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

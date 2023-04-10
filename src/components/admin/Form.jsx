import * as React from "react";
import "../../styles/Form.css";

const Form = ({ labels, selects }) => {
  // const [value, setValue] = useState("");

  return (
    <React.StrictMode>
      <form>
        <div className="container">
          <div className="row">
            {labels.map((item, index) => (
              <div className="col-4">
                <div className="form-group" key={index}>
                  <label>{item.label}</label>
                  <input autoComplete="off"  type={item.type} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </React.StrictMode>
  );
};

export default Form;

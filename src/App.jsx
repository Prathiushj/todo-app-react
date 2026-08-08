import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [textt, setText] = useState([]);

  const toDo = () => {
    if (!val.trim()) return;
    setText([...textt, { id: Date.now(), title: val, status: false }]);
    setVal("");
  };

  const change = (event) => {
    setVal(event.target.value);
  };

  return (
    <>
      <header className="bg-success">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title">Doable</h3>
              <p className="para">
                Makes heavy workloads feel simple and achievable.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-dark section">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-12">
              <div className="card cardStyle mx-auto">
                <div className="card-body">
                  <h5 className="card-title text-center">Add To Do</h5>
                  <div className="text-center">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="text-center inp"
                      value={val}
                      onChange={change}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary mt-2 butt"
                      onClick={toDo}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark section2">
        <div className="container">
          <div className="row justify-content-center">
            <h3 className="title text-center">Your List</h3>
            <div className="col-md-6 col-12">
              <div className="card cardStyle2 mx-auto">
                <div className="card-body">
                  <div>
                    {textt.map((item, index) => {
                      return (
                        <div
                          className="row justify-content-center"
                          key={item.id}
                        >
                          <div className="col-2">
                            <input
                              className=""
                              id={item.id}
                              type="checkbox"
                              checked={item.status}
                              onChange={(event) => {
                                setText(
                                  textt.map((newItem) => {
                                    if (newItem.id === item.id) {
                                      return {
                                        ...newItem,
                                        status: event.target.checked,
                                      };
                                    }

                                    return newItem;
                                  }),
                                );
                              }}
                            ></input>
                          </div>
                          <div
                            className="col-8 paraDiv"
                            style={{ textAlign: "center" }}
                          >
                            <label
                              className="form-check-label para2"
                              htmlFor={item.id}
                              style={{
                                textDecoration: item.status
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {item.title}
                            </label>
                          </div>
                          <div className="col-2" style={{ textAlign: "end" }}>
                            <i
                              className="bi bi-trash icon"
                              onClick={(event) => {
                                setText(
                                  textt.filter(
                                    (newItem) => newItem.id !== item.id,
                                  ),
                                );
                              }}
                            ></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

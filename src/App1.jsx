import "./main.scss";

import { useEffect, useState } from "react";
import Create from "./components/Create";
import { create, edit, read, remove } from "./Functions/localStorage";
import List from "./components/List";
import Edit from "./components/Edit";
import Sorting from "./components/Sorting";

/*
Sukurkite duomenų struktūrą localStorage pagal schemą: 
id: int(nuo 1);
registrationCode: string(8);
isBusy: int(1);
lastUseTime: date;
totalRideKilometres: float(du skaičiai po kablelio); */

function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null); //create
  const [scooters, setScooters] = useState(null); //read
  const [deleteData, setDeleteData] = useState(null); //delete
  const [editData, setEditData] = useState(null); //edit
  const [sortScooters, setSortScooters] = useState("0");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (null === scooters) {
      return;
    }
    setSum(0);
    for (let i = 0; i < scooters.length; i++) {
      setSum((x) => x + scooters[i].distance);
    }
  }, [scooters]);

  //1. Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  }, [createData]);

  //2. Read
  useEffect(() => {
    setScooters(read());
  }, [lastUpdate]);
  //Delete
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);
  //Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  }, [editData]);

  // Sort
  useEffect(() => {
    localStorage.getItem("Sorting")
      ? setSortScooters(localStorage.getItem("Sorting"))
      : setSortScooters("1");
  }, []);
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>
                <svg className="kolt">
                  {" "}
                  <use className="kolt" href="#kolt"></use>
                </svg>
              </h1>
              <Create
                setCreateData={setCreateData}
                setScooters={scooters}
              ></Create>
            </div>
            <div className="col-8">
              <List
                scooters={scooters}
                setDeleteData={setDeleteData}
                setModalData={setModalData}
                sortScooters={sortScooters}
                setSortScooters={setSortScooters}
              ></List>
            </div>
            <Edit
              setEditData={setEditData}
              modalData={modalData}
              setModalData={setModalData}
            ></Edit>
          </div>
          <footer>
            <div>
              <ul>
                Statistics: <br />
                <li>
                  <div>Kolts: {scooters && scooters.length} </div>
                </li>
                <li>
                  <div> Total distance rided: {sum} Km. </div>
                </li>
              </ul>

              <Sorting
                setSortScooters={setSortScooters}
                sortScooters={sortScooters}
              ></Sorting>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

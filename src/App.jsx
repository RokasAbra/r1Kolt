
import './main.scss';

import { useEffect, useState } from 'react';
import Create from './components/Create';
import { create, edit, read, remove } from './Functions/localStorage';
import List from './components/List';
import Edit from './components/Edit';




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
  const [editData, setEditData] = useState(null);//edit

  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (null === scooters) {
      return ;
    }
    setSum(0);
    for (let i = 0; i < scooters.length; i++) {
      setSum((x) => x + scooters[i].distance);
      
    }
  },[scooters])
  
  //1. Create 
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  },[createData]);

//2. Read 
useEffect(() => {
  setScooters(read());
},[lastUpdate])
//Delete 
useEffect(()=> {
  if (null === deleteData) {
    return;
  }
  remove(deleteData);
  setLastUpdate(Date.now());
  
},[deleteData])
//Edit
useEffect(() => {
  if (null === editData) {
    return;
  }
  edit(editData);
  setLastUpdate(Date.now());
},[editData])
  return (
    <>
    <div className="container">
    
      <div className='row'>
        <div className='col-4'>
        <h1><svg className='kolt'> <use href='#kolt'></use></svg></h1>
        <Create setCreateData={setCreateData}></Create>
        </div>
      <div className='col-8'>
       <List scooters={scooters}
       setDeleteData={setDeleteData}
       setModalData={setModalData}></List>
       
      </div>
      <Edit setEditData={setEditData}
      modalData={modalData}
      setModalData={setModalData}></Edit>
      </div>
    </div>
    {/* <h3 className='footer'>Statistika: 
     <i>Viso paspirtuku: {scooters && scooters.length}</i>
      <i>Bendras nuvaziuotas atstumas: {sum} Km.</i>
    </h3> */}
    </>
  );
}

export default App;

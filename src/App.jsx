import logo from './logo.svg';
import './main.scss';

import { useEffect, useState } from 'react';




/*
Sukurkite duomenų struktūrą localStorage pagal schemą: 
id: int(nuo 1);
registrationCode: string(8);
isBusy: int(1);
lastUseTime: date;
totalRideKilometres: float(du skaičiai po kablelio); */



function App() {
  // const [lastUpdate, setLastUpdate] = useState(Date.now());


  // const [createData, setCreateData] = useState(null); //create




  //1. Create 
  // useEffect(() => {
  //   if (null === createData) {
  //     return;
  //   }
    
  // },[createData]);
  return (
    <>
    <div className="container">
    <h1>Kolt Scooters</h1>
      <div className='row'>
        <div className='col-4'>asdasd</div>
      
      <div className='col-8'>
        update
      </div>
      </div>
    </div>
    </>
  );
}

export default App;

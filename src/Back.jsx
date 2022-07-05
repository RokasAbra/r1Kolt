import { useEffect, useState } from 'react';


import Create from './Components/Front/Create';
import List from './Components/Front/List';
import Edit from './Components/Front/Edit';
import ScootersContext from './components/ScootersContext';
import axios from 'axios';
import Message from './Components/Message';
import FrontContext from './Components/Front/FrontContext';

import CreateGoods from './Components/goods/Create';


function Back() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  ///Trees
  const [scooters, setScooters] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //Goods
//   const [goods, setGoods] = useState(null);
//   const [createDataGoods, setCreateDataGoods] = useState(null);
//   const [deleteDataGoods, setDeleteDataGoods] = useState(null);



  const [message, setMessage] = useState(null);
  const [disableCreate, setDisableCreate] = useState(false);


  useEffect(() => {
    // setInterval(() => setLastUpdate(Date.now()), 3000);
  }, []);

//////////////////TREES?/////////////////////////////
  //Read
  useEffect(() => {
    axios.get('http://localhost:3008/scooters')
      .then(res => setScooters(res.data));
  }, [lastUpdate]);

  // Create
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3008/scooters', createData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      })
      .catch(error => {
        showMessage({ text: error.message, type: 'danger' });
      })
      .then(() => {
        setDisableCreate(false);
      })


  }, [createData]);

  // Delete
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3008/medziai/' + deleteData.id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [deleteData]);

  // Edit
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3008/medziai/' + editData.id, editData)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }, [editData]);

//////////////GOODS//////////////////////


//   // Create
//   useEffect(() => {
//     if (null === createDataGoods) return;
//     axios.post('http://localhost:3003/gerybes', createDataGoods)
//       .then(_ => {
//         setLastUpdate(Date.now());
//       })
//   }, [createDataGoods]);

//   // Read
//   useEffect(() => {
//     axios.get('http://localhost:3003/gerybes')
//       .then(res => {
//         console.log(res.data);
//         setGoods(res.data);
//       });
//   }, [lastUpdate]);

//     // Delete
//     useEffect(() => {
//       if (null === deleteDataGoods) return;
//       axios.delete('http://localhost:3003/gerybes/' + deleteDataGoods.id)
//         .then(res => {
//           showMessage(res.data.msg);
//           setLastUpdate(Date.now());
//         });
//     }, [deleteDataGoods]);



    // DELETE COMMENT
    const handleDeleteComment = id => {
      axios.delete('http://localhost:3008/komentarai/' + id)
      .then(res => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now());
      });
  }








  const showMessage = msg => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  }


  return (
    <ScootersContext.Provider value={
      {
       
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate,
      
        handleDeleteComment
      }
    }>
    <FrontContext.Provider value={{
     
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
            <CreateGoods/>
           
          </div>
          <div className="col-8">
            <List></List>
          </div>
        </div>
      </div>
      <Edit />
      <Message />
      </FrontContext.Provider>
    </ScootersContext.Provider>
  );


}
export default Back;


function Scooters({scooter, setDeleteData, setModalData}) {
    
    const handleDeleteData = () => {
        setDeleteData(scooter);
    };
    const handleEditData = () =>{
        setModalData(scooter);
        console.log(scooter);
    };
   
    return (
        <>
        <li className="list-group">
            <div className="list">
                <div className="content">
                    <b>Id: {scooter.id}</b>
                    <b>Registracijos kodas: <br /> {scooter.registrationCode}</b>
                    <b>Laisvas: <br />{scooter.isBusy ? 'Open for a ride' : 'Busy' }</b>
                    <b>Paskutines keliones laikas: <br />{scooter.lastUseTime}</b>
                    <b>Nuvaziuotas atstumas: <br />{scooter.distance} km</b>
                    <button onClick={handleEditData} style={{color: '#397a65'}}>Edit</button>
                    <button onClick={handleDeleteData}style={{color: '#397a65'}} className='deleteBtn'>Delete</button>
                </div>
          
            </div>
        </li>
        
        
        </>
    )
}
export default Scooters;
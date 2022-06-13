function Scooters({r, setDeleteData, setModalData}) {
    
    const handleDeleteData = () => {
        setDeleteData(r);
    };
    const handleEditData = () =>{
        setModalData(r);
    };
    return (
        <>
        <li className="list-group">
            <div className="list">
                <div className="content">
                    
                    <b>Registracijos kodas: <br />{r.registrationCode}</b>
                    <b>Laisvas: <br />{r.isBusy ? 'Open for a ride' : 'Busy' }</b>
                    <b>Paskutines keliones laikas: <br />{r.lastUseTime}</b>
                    <b>Nuvaziuotas atstumas: <br />{r.distance} km</b>
                    <button onClick={handleEditData}>Edit</button>
                    <button onClick={handleDeleteData}>Delete</button>
                </div>
                
            </div>
        </li>
        
        
        </>
    )
}
export default Scooters;
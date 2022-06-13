import Scooters from "./Scooters";


function List({scooters, setDeleteData, setModalData}) {
    
    return(

        <>
        <div>
           
        </div>
        <div className="scootersList">
            <ul>
                {
                    scooters ? scooters.map((r) => (<Scooters key={r.id} r={r} setDeleteData={setDeleteData} setModalData={setModalData}></Scooters>)) : null
                }
            </ul>
        </div>
        </>
    )
}

export default List;
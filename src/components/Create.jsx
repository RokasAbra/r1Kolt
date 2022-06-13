import { useState } from "react";
import getRegCode from "../Functions/getRegCode";

/*
Sukurkite duomenų struktūrą localStorage pagal schemą: 
id: int(nuo 1);
registrationCode: string(8);
isBusy: int(1);
lastUseTime: date;
totalRideKilometres: float(du skaičiai po kablelio); */

function Create({setCreateData}) {

    const [registrationCode, setRegistrationCode] = useState(getRegCode());
    const [isBusy, setIsBusy] = useState(1);
    const [lastUseTime, setLastUseTime] = useState(0);
    const [TotalRideKilometers, setTotalRideKilometers] = useState(0);
   
    const handleCreate = () => {
        const data = {
            registrationCode,
            isBusy,
            lastUseTime,
            TotalRideKilometers,
        }
        setCreateData(data);
        setRegistrationCode(getRegCode());
        setIsBusy(1);
        setLastUseTime(0);
        setTotalRideKilometers(0);
    };

    return (
        <>
        <div ><button className="topBtn" onClick={handleCreate}>Add Scooter</button></div>
        </>
    )
}

export default Create;

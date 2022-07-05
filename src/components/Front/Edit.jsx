import { useEffect, useState } from "react";

function Edit({ modalData, setModalData, setEditData }) {
  const [registrationCode, setRegistrationCode] = useState("");
  const [isBusy, setIsBusy] = useState(1);
  const [lastUseTime, setLastUseTime] = useState("yyyy-MM-dd");
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setRegistrationCode(modalData.registrationCode);
    setIsBusy(modalData.isBusy);
    setLastUseTime(modalData.lastUseTime);
    setDistance();
  }, [modalData]);
  const handleEdit = () => {
    const data = {
      registrationCode,
      isBusy,
      lastUseTime,
      distance: Number(modalData.distance) + Number(distance),
      id: modalData.id,
    };
    setEditData(data);
    setModalData(null);
    setDistance(0);
    console.log(data);
  };

  if (null === modalData) {
    return null;
  }

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <h2>Edit</h2>
          </div>
          <div className="modalBody">
            <p>
              Registration Code: <i>{registrationCode}</i>
            </p>
            <p>
              Last Use Date: <i>{modalData.lastUseTime}</i>
            </p>
            <input
              type="date"
              onChange={(e) => setLastUseTime(e.target.value)}
              value={lastUseTime}
            ></input>
            <p>
              Total Distance Traveled: <i>{modalData.distance}</i> Km.
            </p>
            <p>Todays Distance: </p>
            <input
              type="number"
              onChange={(e) => setDistance(e.target.value)}
              value={distance}
              placeholder="km"
            />
            <p>Open for ride?</p>
            <b>
              Yes{" "}
              <input
                type="checkbox"
                onChange={(e) => setIsBusy(e ? 1 : 0)}
                checked={isBusy ? 1 : 0}
              />
            </b>
            <b>
              No{" "}
              <input
                type="checkbox"
                onChange={(e) => setIsBusy(e ? 0 : 1)}
                checked={isBusy ? 0 : 1}
              />
            </b>
          </div>
          <div className="editoFooter">
            <button onClick={() => setModalData(null)}>Close</button>
            <button onClick={handleEdit}>Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;

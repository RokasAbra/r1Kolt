import Scooters from "./Scooters";

function List({ scooters, setDeleteData, setModalData, sortScooters }) {
  return (
    <>
      <div></div>
      <div className="scootersList">
        <ul>
          {/* {
                    scooters ? scooters.map((r) => (<Scooters key={r.id} r={r} setDeleteData={setDeleteData} setModalData={setModalData}></Scooters>)) : null
                } */}
          {sortScooters === "0"
            ? scooters === null
              ? null
              : [...scooters].map((scooter) => (
                  <Scooters
                    key={scooter.id}
                    scooter={scooter}
                    setDeleteData={setDeleteData}
                    setModalData={setModalData}
                  ></Scooters>
                ))
            : null}
          {sortScooters === "1"
            ? scooters === null
              ? null
              : [...scooters]
                  .sort((a, b) => a.id - b.id)
                  .map((scooter) => (
                    <Scooters
                      key={scooter.id}
                      scooter={scooter}
                      setDeleteData={setDeleteData}
                      setModalData={setModalData}
                    ></Scooters>
                  ))
            : null}
          {sortScooters === "2"
            ? scooters === null
              ? null
              : [...scooters]
                  .sort((a, b) => b.distance - a.distance)
                  .map((scooter) => (
                    <Scooters
                      key={scooter.id}
                      scooter={scooter}
                      setDeleteData={setDeleteData}
                      setModalData={setModalData}
                    ></Scooters>
                  ))
            : null}
          {sortScooters === "3"
            ? scooters === null
              ? null
              : [...scooters]
                  .sort((a, b) => a.lastUseTime.localeCompare(b.lastUseTime))
                  .map((scooter) => (
                    <Scooters
                      key={scooter.id}
                      scooter={scooter}
                      setDeleteData={setDeleteData}
                      setModalData={setModalData}
                    ></Scooters>
                  ))
            : null}
          {sortScooters === "4"
            ? scooters === null
              ? null
              : [...scooters]
                  .sort((a) => (a.isBusy ? 0 : 1))
                  .map((scooter) => (
                    <Scooters
                      key={scooter.id}
                      scooter={scooter}
                      setDeleteData={setDeleteData}
                      setModalData={setModalData}
                    ></Scooters>
                  ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default List;

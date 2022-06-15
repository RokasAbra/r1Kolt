import {sortingScooters} from "../Functions/localStorage";

function Sorting({sortScooters, setSortScooters}) {
    return (
        <>
        <div className="sort">
        <label>Sort By: </label>
        <select value={sortScooters} onChange={e => {
          setSortScooters(e.target.value);
          sortingScooters(e.target.value)
          console.log('ok');
        }}>
          <option value="0">-</option>
          <option value="1">id</option>
          <option value="2" >Distance</option>
          <option value="3" >Date</option>
          <option value="4" >Availability</option>
        </select>
      </div>
        </>
    )
}
export default Sorting;
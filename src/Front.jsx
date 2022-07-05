import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import FrontContext from "./components/Front/FrontContext";
import FrontList from "./Components/Front/List";
import TreeList from "./Components/List";
function Front() {
  const [goods, setGoods] = useState(null);
  const [trees, setTrees] = useState(null);
  const [createComment, setCreateComment] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3008/").then((res) => {
      console.log(res.data);
      setGoods(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3008/").then((res) => {
      console.log(res.data);
      setTrees(res.data);
    });
  }, []);

  useEffect(() => {
    if (null === createComment) return;
    axios
      .post("http://localhost:3008/", createComment)
      .then((_) => {});
  }, [createComment]);
  return (
    <FrontContext.Provider
      value={{
        
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-5">
            <FrontList />
          </div>
          <div className="col-7">
            <TreeList />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}
export default Front;

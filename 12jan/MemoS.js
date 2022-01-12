import React, { useState ,useMemo} from "react";
function MemoS() {
  const [count, setData] = useState(1)
  const [item, setItem] = useState(20)
  const Mcm = useMemo(function MultiCount(){
    console.log("MultiCount")
    return count*5;
  },[count])
  return (
    <div>
      <h1>Hooks in React </h1>
      {/* <button onClick={()=>setData("Peter")}>Update State</button> */}
      <h1>Hooks in React {count}</h1>
      <h1>Hooks in React Item{item}</h1>
      <h2>MultiCount{Mcm}:</h2>
      <button onClick={() => setData(count + 1)}>Update State</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>

    </div>
  );
}

export default MemoS;
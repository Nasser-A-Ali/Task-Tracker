import { HiPlusSm, HiMinusSm } from "react-icons/hi";

function Button({ text, color, onAdd, showAdd }) {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onAdd}>
      {text} {text === "Close" ? <HiMinusSm /> : ""}
      {text === "Add" ? <HiPlusSm /> : ""}
      {/* {showAdd ? <HiMinusSm /> : <HiPlusSm />} */}
    </button>
  );
}

export default Button;

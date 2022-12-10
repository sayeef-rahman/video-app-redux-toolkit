import { useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  console.log("search: ", search);

  return (
    <form>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

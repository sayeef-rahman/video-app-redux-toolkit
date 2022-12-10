import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    console.log(e);
  };
  return (
    <form>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        // value={input}
        onChange={(e) => handleInput(e)}
      />
    </form>
  );
}

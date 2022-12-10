import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";

export default function Search() {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);
  const navigate = useNavigate();
  
  // use match checks if we are in the given parameter route or not
  const match = useMatch('/');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    //if the user is not in home page then after search we should redirect user to home;
    !match && navigate("/"); 
  };

  return (
    <form onSubmit={handleSubmit}>
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

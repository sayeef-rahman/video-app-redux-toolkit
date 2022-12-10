import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tagSelected,
  tagRemoved,
  searched,
} from "../../features/filter/filterSlice";

export default function Tag({ tag }) {
  const { title } = tag;
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  // useEffect(() => {
  //   dispatch(tagSelected());
  // }, [dispatch]);

  const isSelected = selectedTags.includes(title) ? true : false;
  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };
  return (
    <div
      className={`px-4 py-1 rounded-full cursor-pointer ${
        isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
      }`}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
}

{
  /* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
redux
</div> */
}

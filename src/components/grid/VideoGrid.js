import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";
import Loading from "../ui/Loading";

export default function VideGrid() {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12 mx-auto my-auto">{error}</div>;
  } else if (!isLoading && !isError && videos?.length === 0) {
    content = (
      <div className="col-span-12 mx-auto my-auto">No Videos Found!</div>
    );
  } else {
    content = videos.map((video) => {
      return <VideoGridItem key={video.id} video={video} />;
    });
  }

  //   camel case to title cse
  const camelToTitle = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  // console.log(camelToTitle("helloThereMister"));

  // snake case to title case
  const titleCase = (s) =>
    s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
      c ? c.toUpperCase() : " " + d.toLowerCase()
    );
  // console.log(titleCase("_big_animal___with_more_Nodes"));

  // snake case to sentence case
  const sentenceCase = (s) =>
    s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
      c ? c.toUpperCase() : " " + d.toUpperCase()
    );
  // console.log(sentenceCase("_big_animal___with_more_Nodes"));

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        {content}
      </div>
    </section>
  );
}

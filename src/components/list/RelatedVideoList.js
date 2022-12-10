import RelatedVideoListItem from "./RelatedVideoListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
const RelatedVideoList = ({ tags, currentVideoId }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12 mx-auto my-auto">{error}</div>;
  } else if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = (
      <div className="col-span-12 mx-auto my-auto">No Related Videos Found!</div>
    );
  } else {
    content = relatedVideos.map((relatdVideo) => {
      return (
        <RelatedVideoListItem key={relatdVideo.id} relatdVideo={relatdVideo} />
      );
    });
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};
export default RelatedVideoList;

export default function Player({ vodeLink }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={vodeLink}
      title="Some video title"
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

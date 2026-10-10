import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-screen" role="status" aria-label="Loading page">
      <div className="loading-ring" aria-hidden="true"></div>
      <p className="loading-text">loading...</p>
    </div>
  );
};

export default Loading;
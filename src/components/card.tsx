const Card: React.FC<{
  title: string;
  imageUrl: string;
  content: string;
  username: string;
}> = (props) => {
  const { title, imageUrl, content, username } = props;
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by-3">
            <img src={imageUrl} alt="bing" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">@{username}</p>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

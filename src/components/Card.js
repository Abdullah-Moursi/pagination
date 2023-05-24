const Card = ({ title, country, website }) => {
  return (
    <div className="card">
      <footer>
        <div>
          <h2>{title}</h2>
          <a href={website} target="_blank">
            Go to Website
          </a>
        </div>
        <p>{country}</p>
      </footer>
    </div>
  );
};

export default Card;

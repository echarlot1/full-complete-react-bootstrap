const Component1 = ({ images, alt, title, description }) => {
  return (
    <div>
      <li>
        <img src={images} alt={alt} style={{ width: "110px" }} />
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default Component1;

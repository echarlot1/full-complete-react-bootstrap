const Component1 = (props) => {
  return (
    <div>
      <li>
        <img src={props.images} alt={props.alt} style={{ width: "110px" }} />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </li>
    </div>
  );
};

export default Component1;

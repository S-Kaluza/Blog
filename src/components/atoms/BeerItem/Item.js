const Item = (props) => {
  return (
    <li>
      <img src={props.beer.image_url} width="100px" /> {props.beer.name}
    </li>
  );
};

export default Item;

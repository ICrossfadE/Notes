const ButtonCreateItem = ({ item }) => {
  const style = {
    backgroundColor: item.color,
  };
  return (
    <button
      id={item.id}
      style={style}
      className="h-4 w-4 my-2 rounded-full bg-lime-500"
    ></button>
  );
};

export default ButtonCreateItem;

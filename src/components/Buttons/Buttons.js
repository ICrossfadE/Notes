import ButtonCreateItem from "../Button-create-item/Button-create-item";

const Buttons = ({ data }) => {
  const elements = data.map((item) => {
    const { id } = item;
    return <ButtonCreateItem id={id} key={id} />;
  });

  return <div className="flex flex-col">{elements}</div>;
};

export default Buttons;

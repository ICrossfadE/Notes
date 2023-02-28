import ButtonCreateItem from "../buttonCreateItem/buttonCreateItem";
import { store } from "../../state";

const Buttons = () => {
  const buttonCreateItems = store.categoryList.map((categoryItem) => {
    return <ButtonCreateItem key={categoryItem.id} item={categoryItem} />;
  });

  return <div className="flex flex-col">{buttonCreateItems}</div>;
};

export default Buttons;

import ButtonCreateItem from "../buttonCreateItem/buttonCreateItem";
import { store } from "../../state/index";

const Buttons = (state) => {
  const elements = store.categoryList.map((item) => {
    const { id } = item;
    return <ButtonCreateItem key={id} item={item} />;
  });

  return <div className="flex flex-col">{elements}</div>;
};

export default Buttons;

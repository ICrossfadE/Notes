const BurgerMenu = () => {
  return (
    <div className="flex flex-col items-center h-screen w-20 border-r border-gray-400">
      <span className="py-4 text-2xl">Menu</span>
      <button className="flex items-center justify-center my-4 h-12 w-12 rounded-full bg-zinc-900 ">
        <span className="material-symbols-outlined text-4xl text-amber-400 ">
          add
        </span>
      </button>

      <div className="flex flex-col">
        <button className="h-4 w-4 my-2 rounded-full bg-lime-500"></button>
        <button className="h-4 w-4 my-2 rounded-full bg-amber-500"></button>
        <button className="h-4 w-4 my-2 rounded-full bg-blue-500"></button>
        <button className="h-4 w-4 my-2 rounded-full bg-pink-400"></button>
        <button className="h-4 w-4 my-2 rounded-full bg-gray-400"></button>
      </div>
    </div>
  );
};

export default BurgerMenu;

export const Header = () => {
  return (
    <div>
      <img className="w-[92px] h-[20px] mt-5  mb-10 ml-20" src="homelogo.png" />
      <div className="flex gap-2 ml-120 mt-[-65] mb-10">
        <button className="w-[97px] h-[36px] border rounded-md">Genre</button>
        <button className="w-[397px] h-[36px] border rounded-md text-muted-foreground pr-60">
          Search
        </button>
      </div>
      <img src="home.png" />
    </div>
  );
};

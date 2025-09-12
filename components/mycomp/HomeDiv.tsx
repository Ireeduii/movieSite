export function HomeDiv() {
  return (
    <div className="absolute ml-[140px]">
      <p className="text-white text-[16px]">Now playing</p>
      <h3 className="text-4xl text-white">Wicked</h3>
      <p className="tetx-white text-[18px]">
        6.9<span className="text-[16px] text-[#FAFAFA]">/10</span>
      </p>
      <footer>
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </footer>

      <button className="px-4 py-2 bg-white border rounded-md">
        Watch Trailer
      </button>
    </div>
  );
}

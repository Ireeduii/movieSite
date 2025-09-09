export const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 mt-15 h-[280px] p-10 text-white">
      <div className="flex justify-between items-start h-full">
        <div>
          <h3 className="italic font-bold">Movie Z</h3>
          <p className="text-[14px] pt-2">
            Movie Z © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[14px] mr-100">Contact Information</h4>
          <img className="gap-2 " src="Wifi icon.png" />
          <p className="mt-2 ml-7">
            Email:
            <br></br>support@movieZ.com
          </p>
        </div>
      </div>
    </div>
  );
};

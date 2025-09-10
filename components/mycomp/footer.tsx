export const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 mt-15 h-[280px] p-10 text-white">
      <div className="flex justify-between items-start h-full">
        <div className="ml-10">
          <h3 className="italic font-bold">Movie Z</h3>
          <p className="text-[14px] pt-2">
            Movie Z © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="ml-90">
          <h4 className="text-white text-[14px] mr-100">Contact Information</h4>
          {/* <img className="gap-2 " src="Wifi icon.png" /> */}
          <p className="mt-2 ml-7">
            Email:
            <br></br>support@movieZ.com
          </p>
          <p className="mt-2 ml-7">
            Phone: <br></br>
            +976 (11) 123-4567
          </p>
        </div>

        <div>
          <h5 className="pb-2">Follow us</h5>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.instagram.com/">Twitter</a>
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

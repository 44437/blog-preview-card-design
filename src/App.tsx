const App = () => (
  <>
    <div className="flex bg-c_blue h-full min-h-screen items-center justify-center">
      <div className="bg-white flex flex-col w-[320px] p-4 rounded-[20px]">
        <img
          className="rounded-[10px]"
          src="./images/image-qr-code.png"
          alt="image-qr-code.png"
        />
        <div className="h-[24px]"></div>
        <div className=" mx-4">
          <p className="text-[#1F314F] font-bold text-center	text-[22px] leading-120 font-outfit">
            Improve your front-end skills by building projects
          </p>
          <div className="h-[16px]"></div>
          <p className="text-[#68778D] tracking-0.2 font-normal text-center	text-[15px] leading-140 font-outfit">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
        <div className="h-[24px]"></div>
      </div>
    </div>
  </>
);

export default App;

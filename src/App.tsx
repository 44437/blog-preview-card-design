const App = () => (
  <>
    <div className="flex items-center justify-center h-full min-h-screen bg-[#F4D04E]">
      <div className="flex flex-col font-figtree w-[327px] sm:w-[384px] rounded-[20px] bg-white p-[23px] border border-black shadow-[rgba(0,0,0,1)_8px_8px_1px_1px]">
        <img
          className="rounded-[10px]"
          src="/images/illustration-article.svg"
          alt=""
        />
        <div className="my-6">
          <div className="py-1 px-3 rounded-[4px] bg-[#F4D04E] inline-block">
            <p className="text-[14px] font-extrabold leading-150">Learning</p>
          </div>
          <div className="h-3" />
          <p className="text-[14px] font-medium leading-150">
            Published 21 Dec 2023
          </p>
          <div className="h-3" />
          <p className="text-[24px] font-extrabold leading-150">
            HTML & CSS foundations
          </p>
          <div className="h-3" />
          <p className="text-[16px] text-[#6B6B6B] font-medium leading-150">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex flex-row items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="images/image-avatar.webp"
            alt=""
          />
          <div className="w-3" />
          <p className="text-[14px] font-extrabold leading-150">Greg Hooper</p>
        </div>
      </div>
    </div>
  </>
);

export default App;

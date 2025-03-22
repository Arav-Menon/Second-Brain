export const Main = () => {
  return (
    <>
      <section className="h-screen w-screen flex flex-col mt-20 " >
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-7xl font-bold bg-[linear-gradient(white,_blue)] text-transparent bg-clip-text">
              Your second brain is here!
            </h1>
            <p className="text-center text-2xl font-semibold text-gray-500 mt-2 ">
              The second brain where, <br /> you can store your <br />
              thoughts.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-14 object-cover h-96 w-full " >
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*_MtuMuLqwNvBy7D1uKdAgg.png"
            alt="" className="object-fill"
          />
        </div>
      </section>
    </>
  );
};

import React, { useEffect, useState } from "react";
import NavbarWithCTAButton from "../../components/Nav/Nav";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  //   const [buttonDisable, setButtonDisable] = useState(true);
  const [select, setSelect] = useState(1);

  const navigate = useNavigate();
  const refCity = useRef();
  const refTotalGuest = useRef();
  const refCheckIn = useRef();
  const refCheckOut = useRef();

  const findHotel = () => {
    console.log(refCheckIn.current.value);
    console.log(refCity.current.value);
    console.log(refTotalGuest.current.value);

    console.log(refCheckOut.current.value);
    
    if (
      refCheckIn.current.value &&
      refCity.current.value &&
      refTotalGuest.current.value &&
      refCheckOut.current.value
    ) {
      navigate(
        `hotel/search?city=${refCity.current.value}&total_guest=${refTotalGuest.current.value}&check_in=${refCheckIn.current.value}&check_out=${refCheckOut.current.value}`
      );
    } else {
        toast.error("Please fill out all the required fields.")
    }
  };

  return (
    <div>
      <NavbarWithCTAButton />
      {/* <div className="mt-[72px] h-[75px] w-full bg-slate-300"></div> */}
      <div className="flex justify-center items-center w-full relative">
        <img
          className="h-[400px] w-full object-cover"
          src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
        <div
          className="home-jumbotron flex justify-center py-8 absolute"
          style={{ height: "200px" }}
        >
          <h1 className="text-4xl text-white font-semibold mr-1">Hai,</h1>
          <h1 className="text-4xl text-white font-semibold">
            Where's your destination ?
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1  justify-center px-52 mt-[-200px]  ">
        <div className="bg-white rounded-md drop-shadow-xl px-10 py-5">
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setSelect(1)}
              className={
                select === 1
                  ? "font-bold border-b-2 text-lg border-cyan-700 rounded-l  text-cyan-700"
                  : "font-semibold  text-lg"
              }
            >
              Hotel
            </button>

            <button
              onClick={() => setSelect(2)}
              className={
                select === 2
                  ? "font-semibold border-b-2  text-lg border-cyan-700 rounded-l  text-cyan-700"
                  : "font-semibold  text-lg"
              }
            >
              Bus
            </button>
          </div>

          {select === 1 ? (
            <>
              <div className="flex gap-5 my-[20px] ">
                <div className="flex flex-col w-1/2  ">
                  <label className="font-semibold" htmlFor="city">
                    City
                  </label>
                  <input
                    placeholder="Bandung"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    name=""
                    id="city"
                    ref={refCity}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/4">
                  <label className="font-semibold" htmlFor="1 ">
                    Total Guest
                  </label>
                  <input
                    placeholder="1 Person"
                    className=" w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="number"
                    name=""
                    id="guest"
                    ref={refTotalGuest}
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col w-1/2">
                  <label className="font-semibold" htmlFor="city">
                    Check In
                  </label>
                  <input
                    placeholder="2023/32/28"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="date"
                    name=""
                    id="checkin"
                    ref={refCheckIn}
                    required
                  />
                </div>
                <div className="flex flex-col w-2/4">
                  <label className="font-semibold" htmlFor="city">
                    Check Out
                  </label>
                  <input
                    placeholder="2023/32/28"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="date"
                    name=""
                    id="checkout"
                    ref={refCheckOut}
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-5 my-[20px] ">
                <div className="flex flex-col w-1/2  ">
                  <label className="font-semibold" htmlFor="city">
                    From
                  </label>
                  <input
                    placeholder="Bandung"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    name=""
                    id="city"
                  />
                </div>
                <div className="flex flex-col w-2/4">
                  <label className="font-semibold" htmlFor="1 ">
                    Total Guest
                  </label>
                  <input
                    placeholder="1 Person"
                    className=" w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    name=""
                    id="city"
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col w-1/2">
                  <label className="font-semibold" htmlFor="city">
                    To :
                  </label>
                  <input
                    placeholder="Jakarta"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="text"
                    name=""
                    id="city"
                  />
                </div>
                <div className="flex flex-col w-2/4">
                  <label className="font-semibold" htmlFor="departure">
                    Departure
                  </label>
                  <input
                    placeholder="Jakarta"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
                    type="date"
                    name=""
                    id="departure"
                  />
                </div>
              </div>
            </>
          )}

          <div className=" w-full flex justify-between my-[50px] items-center">
            <p className="text-slate-400 underline">
              Syarat perjalanan berlaku selama pandemi
            </p>
            <button
              //   disabled={buttonDisable}
              onClick={findHotel}
              className="px-[32px] py-[8px] bg-red-600 text-white rounded-md"
            >
              Find Hotel
            </button>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import NavbarWithCTAButton from "../../components/Nav/Nav";
import { useLocation } from "react-router-dom";
import { findDOMNode } from "react-dom";
import axios from "axios";

const HotelList = () => {
  const location = useLocation().search;
  const [hotels, setHotels] = useState(null);
  const [availRooms, setAvailRooms] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guest, setGuest] = useState(null);
  const [city, setCity] = useState(null);

  const searchHotel = async () => {
    try {
      const city = new URLSearchParams(location).get("city");
      const total_guest = new URLSearchParams(location).get("total_guest");
      const check_In = new URLSearchParams(location).get("check_in");
      const check_Out = new URLSearchParams(location).get("check_out");
      console.log(city);
      console.log(total_guest);

      setCheckIn(check_In);
      setCheckOut(check_Out);
      setGuest(total_guest);
      setCity(city);

      const findHotel = await axios.get(
        `http://localhost:5000/hotel/search?city=${city}`
      );

      setHotels(findHotel.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchHotel();
  }, []);


  if (!hotels) {
    return <div>SABAR BOSS</div>;
  }

  return (
    <div className="h-[200px] grid">
      <NavbarWithCTAButton />
      {/* left side card */}

      <div className="w-full h-[100px] mt-[72px]">
        <img
          className="object-cover h-[400px] w-full"
          src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
          alt=""
        />
      </div>

      <div className="flex justify-between items-center  px-52 mt-[350px]">
        <div>
          <p className="font-semibold text-xl">{`Your search result in ${city}`}</p>
          <div className="flex text-gray-600 gap-5">
            <p>{checkIn}</p>
            <div>-</div>
            <p>{checkOut}</p>
            <div>-</div>
            <p>{`${guest} Person`}</p>
          </div>
        </div>
        <button className="px-[20px] py-[8px] bg-cyan-700 text-white text-sm rounded-md">
          Change
        </button>
      </div>
      <div className="px-52   flex gap-10 mt-[20px] xl:flex-row flex-col ">
        <div className="w-full xl:w-3/12">
          <div className="w-full p-[40px] h-auto shadow-xl  rounded-md">
            <div className="border-b-2 h-[70px]">
              <p className="lg:text-sm">Sort Results</p>
              <p className="sm:text-sm md:text-md text-gray-500">
                Sort your search result by :
              </p>
            </div>
            <div className="flex items-center mt-[10px]">
              <input
                className="mr-2"
                type="checkbox"
                id="html"
                name="fav_language"
                value="HTML"
              />
              <label for="html" className="lg:text-sm">
                Highest Price
              </label>
            </div>
          </div>
        </div>
        {/* right side card */}

        <div className="flex flex-col  w-full xl:w-9/12  rounded-md gap-10 ">
          {/* card 1 */}

          {hotels &&
            hotels.map((item) => {
              const cok = item.rooms?.reduce((a, b) => {
                return a + b.total_room;
              }, 0);
              console.log(cok);

              return (
                <div className="w-full h-[240px] shadow-xl  rounded-md flex  cursor-pointer">
                  <div className="h-full w-[300px]">
                    <img
                      className="h-full w-full object-cover rounded-md"
                      src={item.hotel_images[0].url_image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col  justify-between  w-full  p-5">
                    <h1 className="font-bold text-xl mb-[10px]">
                      {item.hotel_name}
                    </h1>
                    <div>
                      <button className="rounded-xl px-[10px] bg-cyan-700  text-white ">
                        Hotel
                      </button>
                    </div>
                    <div className="">
                      <i className="bx bxs-star text-yellow-300"></i>
                      <i className="bx bxs-star  text-yellow-300"></i>
                      <i className="bx bxs-star  text-yellow-300"></i>
                      <i className="bx bxs-star  text-yellow-300"></i>
                      <i className="bx bxs-star  text-yellow-300"></i>
                    </div>
                    <div className="flex items-center">
                      <i class="bx bxs-edit-location text-gray-500"></i>
                      <p className="text-gray-500">{item.city.city_name}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className=" text-gray-500 ">{`${cok} Available Rooms`}</p>
                      <div className="text-2xl text-red-600 font-bold"></div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* card 2 */}
        </div>
      </div>
      {/* right side card */}
    </div>
  );
};

export default HotelList;

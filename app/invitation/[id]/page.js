import FormDialog from "@/components/Dialog";
import { FaLocationDot } from "react-icons/fa6";

async function fetchData(id) {
  const inv = await fetch(
    `https://91htv6ktm9.execute-api.us-east-1.amazonaws.com/dev/invitation/${id}`
  ).then((res) => res.json());
  return inv;
}
function calculateDaysUntil(date) {
  const today = new Date();
  const targetDate = new Date(date);
  const timeDiff = targetDate - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const inv = await fetchData(id);

  const title = `Y&H Wedding Invitation | 26th June 2024`;
  const description = `Save the Date | ${inv.data.invitor_name_for_card}`;


  return {
    title,
    description,
    openGraph: {
      images: ["http://localhost:3000/images/ogImage.png"],
    },
  };
}

export default async function Page({ params: { id } }) {
  const { data } = await fetchData(id);

  return (
    <div className="font-gilda-display  flex flex-col justify-center items-center uppercase bg-texture bg-cover bg-fixed bg-opacity-50">
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Gilda+Display&display=swap"
        rel="stylesheet"
      />
      <img
        className="absolute top-0 left-0 sm:w-96 w-56"
        src="/images/corner3.png"
        alt="corner image"
      />

      <div className="relative flex flex-col items-center justify-center text-black ">
        <div className="text-[15px] sm:text-3xl pt-10 pb-3 text- tracking-[.15em] text-amber-600">
          Save the Date
        </div>

        <div className="tracking-[.15em] uppercase ">
          <div className="text-[10px] flex justify-center font-semibold  pb-2 sm:text-xl pt-1 ">
            On 26th of June 2024
          </div>
          <div className="text-[8px] flex justify-center font-semibold  pb-4 sm:text-[15px] pt-1 ">
            At Suriya Resort Kammala
          </div>
          <div className="flex justify-center">
            {" "}
            <div className=" sm:w-44 w-14 bg-slate-400 h-0.5  "></div>
          </div>
          <div className="text-[10px] pt-5  sm:text-xl uppercase flex justify-center">
           {calculateDaysUntil('2024-06-26')} Days to go!
          </div>
        </div>
        <div id="invitation">
        <div className="text-[12px]  font-semibold pt-10 sm:pt-16  sm:text-4xl flex justify-center   tracking-[.25em]">
          Yashodara & Harshana
        </div>
      </div>

      <div className=" tracking-[.10em] sm:pt-1 flex flex-col items-center">
     
          <h1 className="text-[10px] w-full  sm:text-xl pt-5 sm:pb-5 pb-3 sm:px-48 pr-1  text-center justify-center">
            Together with their parents Mr.Sumith De Alwis & Mrs. Chandima
            Ganhewage And Mr. Darmadasa Rajapaksha & Mrs. Dayantha priyangani
          </h1>

          <h1 className="text-[10px] pb-5 sm:text-xl sm:px-48 pl-5 text-center justify-center">
            Request the honor of your presence of{" "}
          </h1>
          <div className="text-center justify-center flex flex-col items-center ">
            <div className="relative inline-block">
              <h1 className="relative z-10 sm:text-4xl font-extrabold text-[22px] font-dancing-script text-[#daa520] normal-case pb-2">
                {data.invitor_name_for_card}
              </h1>
            </div>
            <div className="h-0.5 bg-black opacity-20 w-full"></div>
          </div>

          <h1 className="text-[10px] px-5 sm:px-36 pt-5 pb-2 sm:text-xl text-center justify-center text-black  opacity-50">
            {" "}
            to exchange vows and step into this beautiful journey of love and
            togetherness
          </h1>

          <FormDialog id={id} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="sm:text-3xl text-md sm:pt-10  pb-3 font-dancing-script ">
            {" "}
            H & Y
          </h1>
          <div className="h-0.5 bg-black sm:w-44 w-28 flex justify-center opacity-50 "></div>
          <h1 className="pb-10 sm:text-2xl text-md pt-3">26.06.2024</h1>
        </div>
        {/* <div className="flex justify-center mt-10">
  <svg className="w-6 h-6 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 010 1.414l10 10a1 1 0 01-1.414 1.414L4 8.707l-1.293 1.293a1 1 0 01-1.414-1.414z" clip-rule="evenodd" />
  </svg>
</div> */}
        <div className="relative">
          <img
            className=" w-full "
            src="/images/background.JPG"
            alt="landing image"
          />

          <div className="absolute inset-0 bg-black opacity-50  w-full "></div>

          <div className="absolute inset-0 flex items-center  text-white  pt-5">
            <div>
              <h1 className=" sm:text-xl text-[7px] pb-5 sm:pr-50 normal-case px-16 justify-center text-center">
                Welcome to our wedding Invitation! We've created this site as a
                convenient and interactive way to share all of the important
                details with you leading up to our wedding. We can't wait to
                celebrate this exciting new chapter of our lives together with
                you.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 id="schedule" className="sm:text-4xl text-sm sm:pt-10 pt-10">
            Location
          </h1>
          <div className="h-0.5 bg-white w-24 flex justify-center "></div>
        </div>
        <div className="flex justify-center pt-3 sm:pt-10">
          <div className="sm:pr-5 pr-2 pl-2 sm:text-2xl text-[8px] pt-3">
            Grand Ball Room
          </div>
          <div className="border-l border-black opacity-50 sm:h-16 h-10"></div>
          <div className="sm:pl-5 pl-3 sm:text-2xl text-[8px] pt-3 ">
            Suriya resort Kammala
          </div>
        </div>
        <div className="sm:pr-5 pr-2  sm:text-lg text-[7px] pt-3 pb-5 flex justify-center lowercase">
              <FaLocationDot className="sm:size-5 size-3" />

          <a
            href="https://www.google.com/maps/dir//8R2R%2B42X,+Kammala+Rd,+Kammala/@7.3003554,79.7577163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae2e997a664e917:0x8177657b30a5aaaa!2m2!1d79.840144!2d7.3003702?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline  hover:text-orange-600 pl-1 text-[10px]"
          >
            View on Google Maps
          </a>
        </div>
        <div id="schedule">

          <img
            className="center  pt-5 sm:pl-72 sm:pr-72 pr-10 pl-10 scale-100"
            src="/images/shedule.png"
            alt="landing image"
          />
        </div>

        <div id="gallery" className="sm:pt-20 pt-8">
          <div className="flex flex-col items-center ">
            <h1 className="sm:text-4xl text-sm sm:pb-5 pb-1">Gallery</h1>

            <div className="h-0.5 bg-white sm:w-44 w-24  flex justify-center "></div>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 px-20 pt-3">
            <img
              className="center sm:scale-y-80 scale-95"
              src="/images/galleryone.jpg"
              alt="landing image"
            />
            <img
              className="center scale-95  pt-0"
              src="/images/gallerytwo.jpg"
              alt="landing image"
            />
            <img
              className="center scale-95  pt-0"
              src="/images/gallerythree.jpg"
              alt="landing image"
            />
            <img
              className="center  scale-95  pt-0"
              src="/images/galleryfour.jpg"
              alt="landing image"
            />
            <img
              className="center scale-95  pt-0"
              src="/images/galleryfive.jpg"
              alt="landing image"
            />
            <img
              className="center s scale-95  scale-y-80 pt-0"
              src="/images/gallerysix.jpg"
              alt="landing image"
            />
          </div>
        </div>
        <div className="justify-center flex sm:text-lg text-[10px]">
          <a href="#invitation" className="p-3 ">
            Invitation
          </a>
          <a href="#schedule" className="p-3">
            Schedule
          </a>
          <a href="#gallery" className="p-3">
            Gallery
          </a>
          {/* <a href="/" className="p-3">
        Login
      </a> */}
        </div>
        <h1 className="p-3 text-[5px] w-full sm:text-sm bg-orange-50 flex justify-center  normal-case">
          All rights reserved by Harshana & Yashodara
        </h1>
      </div>
    </div>
  );
}

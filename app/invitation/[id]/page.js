import Example from "@/components/Dialog";

async function fetchData(id) {
  const inv = await fetch(
    `https://91htv6ktm9.execute-api.us-east-1.amazonaws.com/dev/invitation/${id}`
  ).then((res) => res.json());
  return inv;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  const inv = await fetchData(id);

  const title = `Save the date | ${inv.data.invitor_name_for_card}`;
  const description = `Yashodara & Harshana Wedding Invitation  | ${inv.data.invitor_name_for_card}`;

  return {
    title,
    description,
    openGraph: {
      images: ["http://localhost:3000/images/h.png"],
    },
  };
}

export default async function Page({ params: { id } }) {
  const { data } = await fetchData(id);

  return (
    // <div className="">
    //   {data.invitor_name_for_card}
    //   <Example />
    // </div>

    <div className="font-gilda-display relative uppercase bg-texture bg-cover bg-fixed  bg-opacity-30">
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
        <div className="text-[12px] sm:pb-5 pb-2   sm:text-4xl flex justify-center   tracking-[.25em]">
          Yashodara & Harshana
        </div>
        <div className="flex justify-center font-semibold">
          <div className="text-[10px]  pb-2 sm:text-xl pr-3 pt-1 ">
            26th of June 2024
          </div>

          <div className="sm:h-10 h-6 bg-slate-400 w-0.5 flex"></div>
          <div className="text-[10px]  pb-4 sm:text-xl pl-3 pt-1 ">
            Suriya Resort Kammala
          </div>
        </div>
        <div className="text-[12px]   sm:text-xl uppercase flex justify-center">
          30 Days to go!
        </div>
      </div>

    {/* <div className="justify-center flex sm:h-96 h-80">
      <img
        className="sm:scale-125 scale-10"
        src="src/assets/image_one.png"
        alt="landing image"
      />
    </div> */}
  </div>

  <div className=" tracking-[.10em] sm:pt-1 flex flex-col items-center">
    <div id="invitation">

     

        <h1 className="text-[8px] w-full  sm:text-xl pt-10 sm:pb-5 pb-3 sm:px-48 pr-1  text-center justify-center">
        Together with their parents 
Mr.Sumith De Alwis & Mrs. Chandima Ganhewage
And 
Mr. Darmadasa Rajapaksha & Mrs. Dayantha priyangani


        </h1>
        
        <h1 className="text-[8px] pb-5 sm:text-xl sm:px-48 pl-5 text-center justify-center">
        Request the honor of your presence of {" "}
        </h1>
        <div className="text-center justify-center flex flex-col items-center ">
        <div className="relative inline-block">
      <h1 className="relative z-10 sm:text-4xl text-[15px] font-dancing-script text-[#daa520] normal-case pb-3">
        {data.invitor_name_for_card}
      </h1>
  
    </div>
          <div className="h-0.5 bg-black opacity-20 w-2/3"></div>
        </div>

        <h1 className="text-[8px] px-5 sm:px-36 pt-5 pb-2 sm:text-xl text-center justify-center text-black  opacity-50">
          {" "}
          to exchange vows and step into this beautiful journey of love and
          togetherness
        </h1>

      {/* <FormDialog /> */}
    </div>
    <div className="flex flex-col items-center">
      <h1 className="sm:text-3xl text-md sm:pt-10  pb-3 font-dancing-script ">
        {" "}
        H & Y
      </h1>
      <div className="h-0.5 bg-black sm:w-44 w-28 flex justify-center opacity-50 "></div>
      <h1 className="pb-10 sm:text-2xl text-md pt-3">06.26.2024</h1>
    </div>

    <div className="relative">
      {/* Image */}
      <img
        className=" w-full "
        src="/images/background.jpg"
        alt="landing image"
      />
      {/* Overlay */} 
      <div className="absolute inset-0 bg-black opacity-50  w-full "></div>
      {/* Text */}
      <div className="absolute inset-0 flex items-center  text-white  pt-5">
        <div>
          <h1 className=" sm:text-xl text-[5px] pb-5 sm:pr-50 normal-case px-16 justify-center text-center">
            Welcome to our wedding website! We've created this site as a
            convenient and interactive way to share all of the important
            details with you leading up to our wedding. We can't wait to
            celebrate this exciting new chapter of our lives together with
            you.
          </h1>
        </div>
      </div>
    </div>

    <div className="flex justify-center pt-10">
      <div className="sm:pr-5 pr-2 pl-2 sm:text-2xl text-[8px] pt-3">
        Grand Ball Room
      </div>
      <div className="border-l border-black opacity-50 sm:h-16 h-10"></div>
      <div className="sm:pl-5 pl-3 sm:text-2xl text-[8px] pt-3 ">
        Suriya resort waikkal
      </div>

      
    </div>
    <div className="sm:pr-5 pr-2 pl-2 sm:text-lg text-[5px] pt-3 flex justify-center lowercase">
          <a
            href="https://www.google.com/maps/dir//8R2R%2B42X,+Kammala+Rd,+Kammala/@7.3003554,79.7577163,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae2e997a664e917:0x8177657b30a5aaaa!2m2!1d79.840144!2d7.3003702?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline  hover:text-blue-800"
          >
            View on Google Maps
          </a>
        </div>
    <div id="schedule">
      {/* <div className="flex flex-col items-center pt-5">
        <h1 id="schedule" className="sm:text-4xl text-2xl sm:pt-10 pt-10">
          Schedule
        </h1>
        <div className="h-0.5 bg-white w-44 flex justify-center "></div>
      </div> */}
      <img
        className="center  pt-5 sm:pl-72 sm:pr-72 pr-10 pl-10"
        src="/images/shedule.png"
        alt="landing image"
      />
    </div>

    <div id="gallery" className="sm:pt-20 pt-8">
      <div className="flex flex-col items-center ">
        <h1 className="sm:text-4xl text-sm sm:pb-5 pb-1">Gallery</h1>
       <div className="flex flex-col items-center">
      
        <div className="h-0.5 bg-white w-44 flex justify-center "></div>
      </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-0 pb-0 scale-75">
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
    <div className="justify-center flex sm:text-lg text-[5px]">
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
    <h1 className="p-3 text-[5px] w-full sm:text-sm bg-orange-50 flex justify-center font-dancing-script normal-case">
      All rights reserved by Harshana & Yashodara
    </h1>
  </div>
</div>
  );
}

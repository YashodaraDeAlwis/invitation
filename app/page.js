
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-texture bg-cover bg-fixed  bg-opacity-30">
       <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
      <div className="tracking-[.15em] uppercase pt-10 ">
        <div className="text-[12px] sm:pb-5 pb-2 font-dancing-script sm:text-4xl flex justify-center tracking-[.25em]">
          Yashodara & Harshana
        </div>
        <div className="flex justify-center font-semibold">
          <div className="text-[10px] pb-2 sm:text-xl pr-3 pt-1">
            26th of June 2024
          </div>

          <div className="sm:h-10 h-6 bg-slate-400 w-0.5 flex"></div>
          <div className="text-[10px] pb-4 sm:text-xl pl-3 pt-1">
            Suriya Resort Kammala
          </div>
        </div>
        <div className="text-[12px] sm:text-xl uppercase flex justify-center">
          Wedding Invitation
        </div>
      </div>
    </main>
  );
}

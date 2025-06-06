import light from "../assets/Frame 1171277211 (1).png";
import vector from "../assets/Vector 3.png";
import Vector1 from "../assets/Vector (12).png";
import Vector2 from "../assets/Vector 4.png";
import apps from "../assets/Frame 1171277211 (2).png";
import box from "../assets/image 8.png";
import bot from "../assets/image 12.png";
import computer from "../assets/image 10.png";
import vector3 from "../assets/Vector 6.png";

const BlueSide = () => {
  return (
    <div className="bg-[#16072c] overflow-hidden">
      <div className="mx-auto">
        <div className="text-white px-8 py-14 font-sans">
          {/* Header Section with Lightbulb and Title */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10 px-4 mx-auto">
            <img
              src={light}
              alt="Light bulb"
              className="w-32 md:w-44 h-auto mt-2 md:mt-0"
            />

            <div>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-center">
                Why Raem Track?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-2">
                Let’s Break It Down – Unify. Analyze. Optimize.
              </p>
            </div>
          </div>

          {/* Connect Your Tools Block */}
          <div className="mb-12 mt-20 flex justify-center px-4">
            <div className="flex items-center gap-3">
              <img src={Vector1} alt="star" className="w-5 mb-12" />
              <p className="text-gray-300 font-semibold md:mr-40 text-center sm:text-left">
                <span className="text-cyan-400">Connect your tools</span>
                — No more silos. Raem Track <br /> automatically pulls in all
                your active projects and <br /> tasks — zero data migration
                headaches.
              </p>
            </div>
          </div>

          {/* Images: Vector (Left) and App Graphic (Right) */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 relative px-4 ml-16">
            <img
              src={vector}
              alt="Vector design"
              className="w-[200px] z-0 ml-0 md:ml-35"
            />
            <img
              src={apps}
              alt="Connected apps diagram"
              className="w-[300px] md:w-[350px] z-10 mt-6 md:mt-25"
            />
          </div>

          <p className="mt-16 font-semibold text-center">
            Plug in Asana, Jira, Trello, Monday.com (or all of them).
          </p>
        </div>
        {/* Image Row */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:space-x-8 relative px-4 md:px-0 mr-4 md:mr-24">
          <div className="flex">
            <img src={Vector1} alt="star" className="w-[25px] h-[25px] mt-2" />
            <img
              src={box}
              alt="stock"
              className="w-[200px] sm:w-[250px] md:w-[353px]"
            />
          </div>
          <img
            src={Vector2}
            alt="vector"
            className="w-[120px] sm:w-[150px] md:w-[184px] mt-6 md:mt-[7rem]"
          />
        </div>

        {/* Text Block */}
        <div className="mt-6 w-full px-4 md:px- items-center">
          <div className="flex justify-center items-center">
            <p className="text-base  text-gray-300 font-semibold text-left max-w-xl md:ml-[25rem]  pr-4">
              <span className="text-cyan-500">
                Visualize Everything in One Dashboard
              </span>
              – Watch as your project <br />
              data transforms into interactive <br />
              dashboards — task status, team workload, <br />
              velocity charts, and more.
            </p>
          </div>
        </div>
        <p className="font-semibold mt-16 text-white text-center">
          You get a clean, unified view of everything happening — instantly.
          Less digging, more doing.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-24  py-10">
          {/* Bot image with text below */}
          <div className="flex flex-col items-center justify-center w-[289px] text-white mt-10">
            {/* Star and Bot image side by side */}
            <div className="flex items-start space-x-2">
              <img src={Vector1} alt="star" className="w-5 mt-2" />
              <img src={bot} alt="" className="w-[289px] h-[210px]" />
              <div className="md:hidden ">
                <img
                  src={vector3}
                  alt=""
                  className="max-w-full h-[290px] mr-30"
                />
              </div>
            </div>

            {/* Paragraph below */}
            <p className="text-base font-semibold text-start  items-center ml-10 -mt-10 md:mt-4">
              <span className="text-cyan-500">
                Get AI Insights & Smart Alerts
              </span>
              — <br />
              Our AI analyzes team activity <br />
              and project patterns to spot risks <br />
              and suggest optimizations — before things go off track.
            </p>
            {/* Vector3 image */}
          </div>

          <div className="hidden md:block mb-10">
            <img src={vector3} alt="" className="max-w-full h-[290px] " />
          </div>

          {/* Computer image */}
          <div className="flex flex-col items-center justify-center w-[289px] text-white mt-10">
            <img src={computer} alt="" className="w-[280px] h-[250px]" />
            <p className="text-base font-semibold mt-10 text-white text-start ml-15">
              <span className="text-cyan-500">
                Customize Reports & Share Results
              </span>
              - Build on-brand reports for stakeholders or export snapshots for
              quick check-ins.
            </p>
          </div>
        </div>
        <p className="font-semibold text-center text-white ">
          Effortlessly stay ahead of overruns, team overloads, and urgent
          issues—saving hours on reports while keeping everyone aligned.
        </p>
      </div>
      <div className="flex justify-center items-center  mt-10 mb-10">
        <button className="px-12 py-3 bg-[#8635FC] hover:bg-purple-800 cursor-pointer text-white rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default BlueSide;

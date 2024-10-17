import Banner from "@/components/Banner/Banner";
import Feature from "@/components/Feature/Feature";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto py-8">

        <Banner />

      </div>
      <div className=" bg-slate-100 my-[150px]">

        <div className=" container mx-auto  py-10 px-10">
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="w-10/12 py-8">
              <div className="hidden whitespace-nowrap rounded-xl bg-slate-50 text-base text-center font-semibold leading-8  text-slate-700 lg:block w-24">
                Create
              </div>

              <div className="text-slate-950 font-extrabold text-4xl my-3">
                Build Docs to suit any type
                <br />
                <span>of work</span>
              </div>

              <div className="text-slate-950 font-semibold text-lg">
                Create the perfect Doc or wiki with nested pages, styling options, and templates. Embed bookmarks, add tables, and more to format documents for any need, from roadmaps to wikis and knowledge bases.
              </div>

              <div className="flex items-center mt-6">
                <button
                  className="inline-flex items-center text-sm font-semibold rounded-lg h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-8 py-2 shadow-lg"
                >
                  Get Started
                </button>


              </div>
            </div>

            {/* Right Section */}
            <div className="w-10/12 bg-purple-600 rounded-lg shadow-lg py-2 relative">
              <video
                className="w-full shadow-lg rounded-2xl relative right-5"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://images.ctfassets.net/w8fc6tgspyjz/5xUWo7it7ChgBzEAOH7vQB/27840034dd892608659a7b351af950fb/docs.png"
                src="https://videos.ctfassets.net/w8fc6tgspyjz/3fsFkoqWIUtYPVDC6LyKgp/5069f00b1689882ca5edff05ced58896/docs30-1-future-of-docs.mp4"
              ></video>
            </div>
          </div>
        </div>

        <div className="container mx-auto  py-10 px-10">
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-8">


            {/* Right Section */}
            <div className="w-10/12 bg-blue-600 rounded-lg shadow-lg py-3 relative">
              <video
                className="w-full shadow-lg rounded-2xl relative left-4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://images.ctfassets.net/w8fc6tgspyjz/7B7Eiuk5y3F4D8N6rCBajG/724a08c7945ced84dd47b96c050ef2cc/collaborate-on-docs.png"
                src="https://videos.ctfassets.net/w8fc6tgspyjz/uaz2dsQdoROmX5NnuuBa3/d66264ac25ae8a2fa20863b1722fe590/docs30-2-collaborate-together.mp4"
              ></video>
            </div>

            {/* Left Section */}

            <div className="w-10/12 py-8">
              <div className="hidden whitespace-nowrap rounded-xl bg-slate-50 text-base text-center font-semibold leading-8  text-slate-700 lg:block w-fit px-2">
                Editing & Comments
              </div>

              <div className="text-slate-950 font-extrabold text-4xl my-3">
                Collaborate on ideas
                <br />
                <span>together</span>
              </div>

              <div className="text-slate-950 font-semibold text-lg">
                Edit in real-time alongside your team. Tag others with comments, assign them action items, and convert text into trackable tasks to stay on top of ideas.

              </div>

              <div className="flex items-center mt-6">
                <button
                  className="inline-flex items-center text-sm font-semibold rounded-lg h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-8 py-2 shadow-lg"
                >
                  Get Started
                </button>


              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto  py-10 px-10">
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="w-10/12 py-8">
              <div className="hidden whitespace-nowrap rounded-xl bg-slate-50 text-base text-center font-semibold leading-8  text-slate-700 lg:block w-fit">
                Tasks & Widgets


              </div>

              <div className="text-slate-950 font-extrabold text-4xl my-3">
                Connect your Docs

                <br />
                <span>to workflows</span>
              </div>

              <div className="text-slate-950 font-semibold text-lg">
                Access everything in one place by linking Docs and tasks together. Add widgets to update workflows, change project statuses, assign tasks, and more—all within your editor.

              </div>

              <div className="flex items-center mt-6">
                <button
                  className="inline-flex items-center text-sm font-semibold rounded-lg h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-8 py-2 shadow-lg"
                >
                  Get Started
                </button>


              </div>
            </div>

            {/* Right Section */}
            <div className="w-10/12  bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-lg shadow-lg py-4 relative">
              <video
                className="w-full shadow-lg rounded-2xl relative right-5"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://images.ctfassets.net/w8fc6tgspyjz/5xUWo7it7ChgBzEAOH7vQB/27840034dd892608659a7b351af950fb/docs.png"
                src="https://videos.ctfassets.net/w8fc6tgspyjz/3fsFkoqWIUtYPVDC6LyKgp/5069f00b1689882ca5edff05ced58896/docs30-1-future-of-docs.mp4"
              ></video>
            </div>
          </div>
        </div>

        <div className="container mx-auto  py-10 px-10">
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-8">


            {/* Right Section */}
            <div className="w-10/12 bg-gradient-to-br to-fuchsia-500  from-violet-500 rounded-lg shadow-lg py-3 relative">
              <video
                className="w-full shadow-lg rounded-2xl relative left-4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="https://images.ctfassets.net/w8fc6tgspyjz/2psjdlRmcz44XHSbo2CZut/cc982a1565289fe5f63379d4754eecfd/docs_3.0_-_home.png"
                src="https://videos.ctfassets.net/w8fc6tgspyjz/45u9pMY5uxAQCFnNSPbjVY/7fc07f7ed68fce9e49fa04a43362ea52/docs30-4-keep-work-organized.mp4"
              ></video>
            </div>

            {/* Left Section */}

            <div className="w-10/12 py-8">
              <div className="hidden whitespace-nowrap rounded-xl bg-slate-50 text-base text-center font-semibold leading-8  text-slate-700 lg:block w-fit px-2">
                Organize
              </div>

              <div className="text-slate-950 font-extrabold text-4xl my-3">
                Keep work organized with
                <br />
                <span>Docs Hub</span>
              </div>

              <div className="text-slate-950 font-semibold text-lg">
                With verified wikis highlighted for your teams, templates to create new resources, and the ability to search, sort, and filter for any other asset, using Docs Hub to find the information you need is a breeze.


              </div>

              <div className="flex items-center mt-6">
                <button
                  className="inline-flex items-center text-sm font-semibold rounded-lg h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-8 py-2 shadow-lg"
                >
                  Get Started
                </button>


              </div>
            </div>
          </div>
        </div>
      </div>


      <Feature />
    </>

  );
}

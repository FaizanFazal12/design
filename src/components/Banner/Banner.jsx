import React from "react";

export default function Banner() {
  return (
    <div className="mt-[150px] mb-20">
      <div className="my-40 w-10/12 mx-auto md:flex  gap-5">
        {/* Left Section */}
        <div className="w-full  py-10 md:my-0 my-10">
          <div className="hidden whitespace-nowrap rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold leading-6 text-slate-700 lg:block w-24">
            ClickUp Docs
          </div>

          <div className="text-slate-950 font-extrabold md:text-5xl my-3 text-3xl ">
            Your Docs & work, all in
            <br />
            <span>one place</span>
          </div>

          <div className="text-slate-950 font-semibold text-lg">
            Create beautiful Docs, wikis, and more—then connect them to
            workflows to execute on ideas with your team.
          </div>

          <div className="flex items-center mt-6">
            <button
              className="inline-flex items-center text-sm font-semibold rounded-lg h-10 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-8 py-2 shadow-lg"
            >
              Get Started
            </button>

            <div className="mx-2 text-slate-500 text-base font-medium ">
              Free forever.
              <br />
              No credit card.
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <img
              src="https://images.ctfassets.net/w8fc6tgspyjz/T09wEzXa7rBqtA7ESV3B4/7eafd2fd27bb2eb1c079a6b06abc8f96/stars.png"
              className="w-20"
              alt="Stars"
            />
            <span className="text-slate-500 text-base font-medium">25,000+ reviews from</span>

            <svg
              width="89"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.438 9.615l1.349 2.34c-1.982 1.516-5.065 1.7-7.347-.048A6.147 6.147 0 01.788 3.991C2.405 1.148 5.432.52 7.38.981c-.053.114-1.22 2.535-1.22 2.535s-.092.006-.144.007a3.29 3.29 0 00-1.465.397 3.484 3.484 0 00-1.849 2.69 3.396 3.396 0 00.23 1.688c.185.451.447.852.799 1.19a3.41 3.41 0 001.923.95 3.34 3.34 0 002.014-.319 4.1 4.1 0 00.677-.431c.03-.02.057-.045.093-.073z"
                fill="#FF492C"
              ></path>
              <path
                d="M8.443 2.722c-.115-.113-.222-.217-.328-.323-.063-.062-.124-.127-.189-.188-.023-.022-.05-.053-.05-.053l.031-.066c.124-.249.319-.43.55-.575.254-.162.551-.244.853-.236.386.007.745.103 1.048.362.223.191.338.434.358.723.034.489-.168.862-.57 1.123-.235.154-.49.273-.744.413-.14.078-.26.146-.398.286-.121.141-.127.274-.127.274l1.826-.002v.813H7.884v-.078c-.01-.4.036-.776.22-1.14.168-.332.43-.576.744-.764.242-.144.497-.267.74-.411.149-.09.255-.22.254-.408a.372.372 0 00-.286-.35.889.889 0 00-1.012.426l-.101.174zm3.532 6.028l-1.539-2.658H7.391L5.84 8.777H8.91l1.513 2.645 1.552-2.672z"
                fill="#FF492C"
              ></path>
              <path
                d="M36.84 6.59L31.227.98a.477.477 0 00-.666 0l-1.108 1.108 4.503 4.504c.18.18.18.485 0 .665l-4.642 4.642 1.109 1.108c.194.18.485.18.665 0l5.736-5.736a.481.481 0 00.014-.68z"
                fill="#009C9C"
              ></path>
            </svg>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full ">
          <video
            className="w-full  mx-5 border border-slate-200 rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.ctfassets.net/w8fc6tgspyjz/112UNA3tMbultf8yhIw7Dx/5a7f6d345dbb7824f439647a2eff6659/docs__5_.png"
            src="https://videos.ctfassets.net/w8fc6tgspyjz/7gQFEwcB3Anj2zEniwtr6X/dbaac00b6a8fb29cafc5b4acc623964e/Docs_3-2_Web_2.mp4"
          ></video>
        </div>
      </div>

      {/* Review Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-slate-950 font-semibold text-lg text-center">
          Trusted by 2 million+ teams to redefine the way they work and
          communicate.
        </div>

        <div className="my-7 flex gap-4">
          <span>
            <svg
              width="124"
              height="16"
              viewBox="0 0 124 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_138_41632)">
                <path
                  d="M80.2256 15.3509H76.8382V1.52661L87.7325 1.53558C87.7325 1.53558 89.7271 1.46118 90.996 2.71474C90.996 2.71474 92.2911 3.79623 92.2911 6.4396V15.3488H88.9125V6.20933C88.9125 6.20933 88.9541 5.27712 88.6365 4.94998C88.6365 4.94998 88.3557 4.59464 87.8218 4.59464H80.2173L80.2244 15.346L80.2256 15.3509ZM94.6455 15.3485V2.40562V1.53693H108.24V4.60909L98.0122 4.6083V6.95708H105.117V9.92363H98.0122V12.2804H108.303V15.3533H94.6375L94.6455 15.3485ZM70.9353 15.3485V2.40562V1.53693H74.3084V15.3533H70.9353V15.3485ZM113.095 15.3485V4.60512H109.911V1.53296H122.576V4.60512H116.471V15.3485H113.097H113.095ZM59.7948 15.3485V4.60512H56.6107V1.53296H69.2757V4.60512H63.1703V15.3485H59.7972H59.7948ZM49.6231 6.94755C50.4473 6.9412 50.9405 6.94835 51.139 6.82749C51.139 6.82749 51.4853 6.63597 51.4893 6.22497L51.4901 5.32135C51.4901 4.90845 51.1398 4.71883 51.1398 4.71883C50.8768 4.5759 50.4311 4.60274 49.373 4.60171H42.8015V6.94732H49.774L49.6231 6.94755ZM51.4407 15.3485V10.6335C51.4407 10.2096 51.0864 10.032 51.0864 10.032C50.9266 9.93277 50.4481 9.9149 49.7437 9.9149H49.9074H42.8015V15.3478H39.4284V2.40482V1.53614H49.9574C51.7758 1.5417 53.0312 1.80913 53.8959 2.6486C54.7455 3.51411 54.8583 4.64641 54.863 5.82478V6.8086C54.874 7.80989 54.3479 8.72304 53.7204 9.25505L53.8465 9.31762C54.1026 9.44165 54.2426 9.61737 54.2426 9.61737C54.7199 10.2268 54.7141 10.7513 54.713 11.396V15.3512H51.4408L51.4407 15.3485ZM0.431276 1.53217V2.40165V15.3446H3.80438V9.91649H14.0237V6.94835H3.80438V4.60115H15.6833V1.52899H0.429688L0.431276 1.53217Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M121.435 12.9052V13.5395H122.026C122.186 13.5395 122.341 13.4959 122.364 13.2586C122.398 12.944 122.171 12.9052 122.026 12.9052H121.435ZM121.198 12.6968H122.021C122.307 12.6968 122.583 12.7504 122.606 13.1662C122.616 13.4045 122.544 13.4909 122.364 13.6268C122.554 13.7479 122.559 13.7767 122.587 14.0962C122.606 14.3384 122.573 14.3772 122.675 14.5369H122.394L122.355 14.3047C122.316 14.0863 122.423 13.7479 122.041 13.7479H121.435V14.537H121.198L121.198 12.6968ZM121.817 12.1886C121.004 12.1886 120.341 12.8516 120.347 13.6703C120.347 14.4834 121.005 15.1464 121.823 15.1425C122.637 15.1425 123.3 14.4834 123.3 13.6655C123.3 12.8516 122.636 12.1886 121.817 12.1886ZM121.823 15.3346C120.899 15.3346 120.152 14.5892 120.152 13.6655C120.148 12.7452 120.899 11.9949 121.823 11.9949C122.743 11.9949 123.494 12.7452 123.494 13.6655C123.494 14.5898 122.743 15.3314 121.823 15.3346Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M34.7896 15.486C35.8854 15.1137 36.7382 13.8518 36.943 12.2653V11.8068H31.3252V15.4864H34.7888L34.7896 15.486ZM36.9438 5.06016V4.64527C36.7285 2.98969 35.8123 1.68507 34.6443 1.37857H31.326V5.05976L36.9438 5.06016ZM17.1721 11.8072V12.2617C17.3756 13.8498 18.2282 15.114 19.3272 15.4864H22.7733V11.8068L17.1721 11.8072ZM19.4709 1.38135C18.3044 1.68801 17.3857 2.99326 17.1721 4.65123V5.06318H22.7733V1.38199L19.4709 1.38135ZM36.9478 6.59505H31.3299V10.2762H36.9478V6.59505ZM24.3066 15.4883H29.8022V11.8087H24.3066V15.4883ZM29.8022 1.37817H24.3066V5.05937H29.8022V1.37817ZM17.1769 10.2715H22.7781V6.59028H17.1769V10.2715Z"
                  fill="#EE2E24"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_138_41632">
                  <rect
                    width="123.871"
                    height="15"
                    fill="white"
                    transform="translate(0 0.928467)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="124"
              height="16"
              viewBox="0 0 124 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_138_41632)">
                <path
                  d="M80.2256 15.3509H76.8382V1.52661L87.7325 1.53558C87.7325 1.53558 89.7271 1.46118 90.996 2.71474C90.996 2.71474 92.2911 3.79623 92.2911 6.4396V15.3488H88.9125V6.20933C88.9125 6.20933 88.9541 5.27712 88.6365 4.94998C88.6365 4.94998 88.3557 4.59464 87.8218 4.59464H80.2173L80.2244 15.346L80.2256 15.3509ZM94.6455 15.3485V2.40562V1.53693H108.24V4.60909L98.0122 4.6083V6.95708H105.117V9.92363H98.0122V12.2804H108.303V15.3533H94.6375L94.6455 15.3485ZM70.9353 15.3485V2.40562V1.53693H74.3084V15.3533H70.9353V15.3485ZM113.095 15.3485V4.60512H109.911V1.53296H122.576V4.60512H116.471V15.3485H113.097H113.095ZM59.7948 15.3485V4.60512H56.6107V1.53296H69.2757V4.60512H63.1703V15.3485H59.7972H59.7948ZM49.6231 6.94755C50.4473 6.9412 50.9405 6.94835 51.139 6.82749C51.139 6.82749 51.4853 6.63597 51.4893 6.22497L51.4901 5.32135C51.4901 4.90845 51.1398 4.71883 51.1398 4.71883C50.8768 4.5759 50.4311 4.60274 49.373 4.60171H42.8015V6.94732H49.774L49.6231 6.94755ZM51.4407 15.3485V10.6335C51.4407 10.2096 51.0864 10.032 51.0864 10.032C50.9266 9.93277 50.4481 9.9149 49.7437 9.9149H49.9074H42.8015V15.3478H39.4284V2.40482V1.53614H49.9574C51.7758 1.5417 53.0312 1.80913 53.8959 2.6486C54.7455 3.51411 54.8583 4.64641 54.863 5.82478V6.8086C54.874 7.80989 54.3479 8.72304 53.7204 9.25505L53.8465 9.31762C54.1026 9.44165 54.2426 9.61737 54.2426 9.61737C54.7199 10.2268 54.7141 10.7513 54.713 11.396V15.3512H51.4408L51.4407 15.3485ZM0.431276 1.53217V2.40165V15.3446H3.80438V9.91649H14.0237V6.94835H3.80438V4.60115H15.6833V1.52899H0.429688L0.431276 1.53217Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M121.435 12.9052V13.5395H122.026C122.186 13.5395 122.341 13.4959 122.364 13.2586C122.398 12.944 122.171 12.9052 122.026 12.9052H121.435ZM121.198 12.6968H122.021C122.307 12.6968 122.583 12.7504 122.606 13.1662C122.616 13.4045 122.544 13.4909 122.364 13.6268C122.554 13.7479 122.559 13.7767 122.587 14.0962C122.606 14.3384 122.573 14.3772 122.675 14.5369H122.394L122.355 14.3047C122.316 14.0863 122.423 13.7479 122.041 13.7479H121.435V14.537H121.198L121.198 12.6968ZM121.817 12.1886C121.004 12.1886 120.341 12.8516 120.347 13.6703C120.347 14.4834 121.005 15.1464 121.823 15.1425C122.637 15.1425 123.3 14.4834 123.3 13.6655C123.3 12.8516 122.636 12.1886 121.817 12.1886ZM121.823 15.3346C120.899 15.3346 120.152 14.5892 120.152 13.6655C120.148 12.7452 120.899 11.9949 121.823 11.9949C122.743 11.9949 123.494 12.7452 123.494 13.6655C123.494 14.5898 122.743 15.3314 121.823 15.3346Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M34.7896 15.486C35.8854 15.1137 36.7382 13.8518 36.943 12.2653V11.8068H31.3252V15.4864H34.7888L34.7896 15.486ZM36.9438 5.06016V4.64527C36.7285 2.98969 35.8123 1.68507 34.6443 1.37857H31.326V5.05976L36.9438 5.06016ZM17.1721 11.8072V12.2617C17.3756 13.8498 18.2282 15.114 19.3272 15.4864H22.7733V11.8068L17.1721 11.8072ZM19.4709 1.38135C18.3044 1.68801 17.3857 2.99326 17.1721 4.65123V5.06318H22.7733V1.38199L19.4709 1.38135ZM36.9478 6.59505H31.3299V10.2762H36.9478V6.59505ZM24.3066 15.4883H29.8022V11.8087H24.3066V15.4883ZM29.8022 1.37817H24.3066V5.05937H29.8022V1.37817ZM17.1769 10.2715H22.7781V6.59028H17.1769V10.2715Z"
                  fill="#EE2E24"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_138_41632">
                  <rect
                    width="123.871"
                    height="15"
                    fill="white"
                    transform="translate(0 0.928467)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="124"
              height="16"
              viewBox="0 0 124 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_138_41632)">
                <path
                  d="M80.2256 15.3509H76.8382V1.52661L87.7325 1.53558C87.7325 1.53558 89.7271 1.46118 90.996 2.71474C90.996 2.71474 92.2911 3.79623 92.2911 6.4396V15.3488H88.9125V6.20933C88.9125 6.20933 88.9541 5.27712 88.6365 4.94998C88.6365 4.94998 88.3557 4.59464 87.8218 4.59464H80.2173L80.2244 15.346L80.2256 15.3509ZM94.6455 15.3485V2.40562V1.53693H108.24V4.60909L98.0122 4.6083V6.95708H105.117V9.92363H98.0122V12.2804H108.303V15.3533H94.6375L94.6455 15.3485ZM70.9353 15.3485V2.40562V1.53693H74.3084V15.3533H70.9353V15.3485ZM113.095 15.3485V4.60512H109.911V1.53296H122.576V4.60512H116.471V15.3485H113.097H113.095ZM59.7948 15.3485V4.60512H56.6107V1.53296H69.2757V4.60512H63.1703V15.3485H59.7972H59.7948ZM49.6231 6.94755C50.4473 6.9412 50.9405 6.94835 51.139 6.82749C51.139 6.82749 51.4853 6.63597 51.4893 6.22497L51.4901 5.32135C51.4901 4.90845 51.1398 4.71883 51.1398 4.71883C50.8768 4.5759 50.4311 4.60274 49.373 4.60171H42.8015V6.94732H49.774L49.6231 6.94755ZM51.4407 15.3485V10.6335C51.4407 10.2096 51.0864 10.032 51.0864 10.032C50.9266 9.93277 50.4481 9.9149 49.7437 9.9149H49.9074H42.8015V15.3478H39.4284V2.40482V1.53614H49.9574C51.7758 1.5417 53.0312 1.80913 53.8959 2.6486C54.7455 3.51411 54.8583 4.64641 54.863 5.82478V6.8086C54.874 7.80989 54.3479 8.72304 53.7204 9.25505L53.8465 9.31762C54.1026 9.44165 54.2426 9.61737 54.2426 9.61737C54.7199 10.2268 54.7141 10.7513 54.713 11.396V15.3512H51.4408L51.4407 15.3485ZM0.431276 1.53217V2.40165V15.3446H3.80438V9.91649H14.0237V6.94835H3.80438V4.60115H15.6833V1.52899H0.429688L0.431276 1.53217Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M121.435 12.9052V13.5395H122.026C122.186 13.5395 122.341 13.4959 122.364 13.2586C122.398 12.944 122.171 12.9052 122.026 12.9052H121.435ZM121.198 12.6968H122.021C122.307 12.6968 122.583 12.7504 122.606 13.1662C122.616 13.4045 122.544 13.4909 122.364 13.6268C122.554 13.7479 122.559 13.7767 122.587 14.0962C122.606 14.3384 122.573 14.3772 122.675 14.5369H122.394L122.355 14.3047C122.316 14.0863 122.423 13.7479 122.041 13.7479H121.435V14.537H121.198L121.198 12.6968ZM121.817 12.1886C121.004 12.1886 120.341 12.8516 120.347 13.6703C120.347 14.4834 121.005 15.1464 121.823 15.1425C122.637 15.1425 123.3 14.4834 123.3 13.6655C123.3 12.8516 122.636 12.1886 121.817 12.1886ZM121.823 15.3346C120.899 15.3346 120.152 14.5892 120.152 13.6655C120.148 12.7452 120.899 11.9949 121.823 11.9949C122.743 11.9949 123.494 12.7452 123.494 13.6655C123.494 14.5898 122.743 15.3314 121.823 15.3346Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M34.7896 15.486C35.8854 15.1137 36.7382 13.8518 36.943 12.2653V11.8068H31.3252V15.4864H34.7888L34.7896 15.486ZM36.9438 5.06016V4.64527C36.7285 2.98969 35.8123 1.68507 34.6443 1.37857H31.326V5.05976L36.9438 5.06016ZM17.1721 11.8072V12.2617C17.3756 13.8498 18.2282 15.114 19.3272 15.4864H22.7733V11.8068L17.1721 11.8072ZM19.4709 1.38135C18.3044 1.68801 17.3857 2.99326 17.1721 4.65123V5.06318H22.7733V1.38199L19.4709 1.38135ZM36.9478 6.59505H31.3299V10.2762H36.9478V6.59505ZM24.3066 15.4883H29.8022V11.8087H24.3066V15.4883ZM29.8022 1.37817H24.3066V5.05937H29.8022V1.37817ZM17.1769 10.2715H22.7781V6.59028H17.1769V10.2715Z"
                  fill="#EE2E24"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_138_41632">
                  <rect
                    width="123.871"
                    height="15"
                    fill="white"
                    transform="translate(0 0.928467)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="124"
              height="16"
              viewBox="0 0 124 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_138_41632)">
                <path
                  d="M80.2256 15.3509H76.8382V1.52661L87.7325 1.53558C87.7325 1.53558 89.7271 1.46118 90.996 2.71474C90.996 2.71474 92.2911 3.79623 92.2911 6.4396V15.3488H88.9125V6.20933C88.9125 6.20933 88.9541 5.27712 88.6365 4.94998C88.6365 4.94998 88.3557 4.59464 87.8218 4.59464H80.2173L80.2244 15.346L80.2256 15.3509ZM94.6455 15.3485V2.40562V1.53693H108.24V4.60909L98.0122 4.6083V6.95708H105.117V9.92363H98.0122V12.2804H108.303V15.3533H94.6375L94.6455 15.3485ZM70.9353 15.3485V2.40562V1.53693H74.3084V15.3533H70.9353V15.3485ZM113.095 15.3485V4.60512H109.911V1.53296H122.576V4.60512H116.471V15.3485H113.097H113.095ZM59.7948 15.3485V4.60512H56.6107V1.53296H69.2757V4.60512H63.1703V15.3485H59.7972H59.7948ZM49.6231 6.94755C50.4473 6.9412 50.9405 6.94835 51.139 6.82749C51.139 6.82749 51.4853 6.63597 51.4893 6.22497L51.4901 5.32135C51.4901 4.90845 51.1398 4.71883 51.1398 4.71883C50.8768 4.5759 50.4311 4.60274 49.373 4.60171H42.8015V6.94732H49.774L49.6231 6.94755ZM51.4407 15.3485V10.6335C51.4407 10.2096 51.0864 10.032 51.0864 10.032C50.9266 9.93277 50.4481 9.9149 49.7437 9.9149H49.9074H42.8015V15.3478H39.4284V2.40482V1.53614H49.9574C51.7758 1.5417 53.0312 1.80913 53.8959 2.6486C54.7455 3.51411 54.8583 4.64641 54.863 5.82478V6.8086C54.874 7.80989 54.3479 8.72304 53.7204 9.25505L53.8465 9.31762C54.1026 9.44165 54.2426 9.61737 54.2426 9.61737C54.7199 10.2268 54.7141 10.7513 54.713 11.396V15.3512H51.4408L51.4407 15.3485ZM0.431276 1.53217V2.40165V15.3446H3.80438V9.91649H14.0237V6.94835H3.80438V4.60115H15.6833V1.52899H0.429688L0.431276 1.53217Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M121.435 12.9052V13.5395H122.026C122.186 13.5395 122.341 13.4959 122.364 13.2586C122.398 12.944 122.171 12.9052 122.026 12.9052H121.435ZM121.198 12.6968H122.021C122.307 12.6968 122.583 12.7504 122.606 13.1662C122.616 13.4045 122.544 13.4909 122.364 13.6268C122.554 13.7479 122.559 13.7767 122.587 14.0962C122.606 14.3384 122.573 14.3772 122.675 14.5369H122.394L122.355 14.3047C122.316 14.0863 122.423 13.7479 122.041 13.7479H121.435V14.537H121.198L121.198 12.6968ZM121.817 12.1886C121.004 12.1886 120.341 12.8516 120.347 13.6703C120.347 14.4834 121.005 15.1464 121.823 15.1425C122.637 15.1425 123.3 14.4834 123.3 13.6655C123.3 12.8516 122.636 12.1886 121.817 12.1886ZM121.823 15.3346C120.899 15.3346 120.152 14.5892 120.152 13.6655C120.148 12.7452 120.899 11.9949 121.823 11.9949C122.743 11.9949 123.494 12.7452 123.494 13.6655C123.494 14.5898 122.743 15.3314 121.823 15.3346Z"
                  fill="#231F20"
                ></path>
                <path
                  d="M34.7896 15.486C35.8854 15.1137 36.7382 13.8518 36.943 12.2653V11.8068H31.3252V15.4864H34.7888L34.7896 15.486ZM36.9438 5.06016V4.64527C36.7285 2.98969 35.8123 1.68507 34.6443 1.37857H31.326V5.05976L36.9438 5.06016ZM17.1721 11.8072V12.2617C17.3756 13.8498 18.2282 15.114 19.3272 15.4864H22.7733V11.8068L17.1721 11.8072ZM19.4709 1.38135C18.3044 1.68801 17.3857 2.99326 17.1721 4.65123V5.06318H22.7733V1.38199L19.4709 1.38135ZM36.9478 6.59505H31.3299V10.2762H36.9478V6.59505ZM24.3066 15.4883H29.8022V11.8087H24.3066V15.4883ZM29.8022 1.37817H24.3066V5.05937H29.8022V1.37817ZM17.1769 10.2715H22.7781V6.59028H17.1769V10.2715Z"
                  fill="#EE2E24"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_138_41632">
                  <rect
                    width="123.871"
                    height="15"
                    fill="white"
                    transform="translate(0 0.928467)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-10">
        <div className="font-extrabold text-3xl md:text-5xl text-slate-950">
          The secret to your team&apos;s success
        </div>
        <div className="text-slate-950 font-semibold text-base text-center py-2">
          ClickUp is the difference between chaotic projects and seamless
          collaboration.
        </div>
      </div>

      <div className="flex gap-5 justify-center">
        <div className="sm:w-1/2 lg:w-1/3 p-3">
          <div className="w-full bg-transparent  rounded-lg overflow-hidden border-slate-400 border">
            <div className="flex flex-col p-6 border-t border-gray-300">
              <div className="text-center font-bold  text-2xl my-3">
                Without ClickUp
              </div>
              {[
                "One-on-One Instruction",
                "Lesson Packages",
                "Flexible Scheduling",
                "Dang this much!",
                "Something else cool",
              ].map((item, index) => (
                <div
                  className="flex-1 inline-flex items-center mb-3"
                  key={index}
                >
                  <div className="bg-red-300 border-red-700 border mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-red-800 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 12l4.361 4.361a1 1 0 01-1.414 1.414L12 14.828l-4.361 4.361a1 1 0 01-1.414-1.414L10.586 12 6.225 7.639a1 1 0 010-1.414z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-base py-[0.5px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 p-3">
          <div className="w-full bg-transparent  rounded-lg overflow-hidden border-slate-400 border">
            <div className="flex flex-col p-6 border-t border-gray-300">
              <div className="text-center font-bold  text-2xl my-3">
                With ClickUp
              </div>
              {[
                "One-on-One Instruction",
                "Lesson Packages",
                "Flexible Scheduling",
                "Dang this much!",
                "Something else cool",
              ].map((item, index) => (
                <div
                  className="flex-1 inline-flex items-center mb-3"
                  key={index}
                >
                  <div className="bg-green-300 border-green-700 border mr-3 p-1 rounded-full">
                    <svg
                      className="h-3 w-3 text-green-800 fill-current"
                      viewBox="0 0 20 20"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                    </svg>
                  </div>
                  <p className="font-semibold text-base py-[0.5px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
      <div className="flex items-center justify-center mt-6">
            <button
              className="inline-flex items-center text-sm font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
          hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-3 py-4 shadow-lg"
            >
              Get Started ,its Free
            </button>

          </div>
    
    </div>
  );
}

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* main image */}
      <div className="relative">
        <Image
          src="/assetes/images/Section.png"
          alt="Food Banner"
          width={1000}
          height={350}
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        {/* <div className=" absolute w-full h-full top-0 left-0 bg-[#00000066]"></div> */}
      </div>

      {/* content */}
      <div className="px-48 mt-10">
        <p className="text-[14px] leading-6">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>

        <div className="mt-4 text-gray-900">
          <h4 className=" text-3xl w-[579px]  font-semibold">
            Quisque erat urna, congue et libero in eleifend euismod velit.
          </h4>
          <p className="mt-6 text-[14px] font-normal">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        {/* image with text */}
        <div className="flex items-start gap-4 mt-20 relative">
          <Image
            src="/assetes/images/about-people.jpg.png"
            alt="man image"
            width={500}
            height={800}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "800px",
              objectFit: "cover",
            }}
          />
          <div className="text-[14px] leading-6 absolute bottom-[-60px] rounded-xl left-[159px] bg-white p-8">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </div>
          {/* content */}
          <div>
            <p className="text-[16px] text-gray-900 my-10 ml-5">
              Rachel Leonard - Bacola CEO
            </p>
            <h3 className="text-3xl font-medium mb-10">
              Duis convallis luctus pretium. Pellentesque habitant morbi
            </h3>
            <p className="text-[14px] text-gray-900 mb-5 ml-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p className="text-[14px] text-gray-900 ml-5">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>
          </div>
        </div>

        <p className='text-[14px] text-gray-900 mt-20'>
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </div>
    </div>
  );
};

export default page;

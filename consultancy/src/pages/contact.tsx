import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto md:px-10 px-4 md:py-24 py-28 flex justify-center items-center">
      <main className=" flex flex-col gap-10  w-full">
        <div className=" flex flex-col justify-center">
          <div className="md:max-w-4xl space-y-4">
            <h3 className="border-l-4 pl-2 border-blue-900 md:text-xl text-xl font-semibold cursor-pointer">
              Contact{" "}
            </h3>
            <p className="text-3xl pl-2 font-semibold">Let us know how <span className="text-blue-900">we can help</span></p>

            <p className=" text-lg pl-2">
              Whether you want to start a delivery or just want to ask us a
              question, we're here to help. Reach out to
              <strong className="text-blue-900">{" "}Nepal Education Consultancy.</strong>
            </p>
          </div>
          <div>
            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
              {contactMethods.map((item, idx) => (
                <li key={idx}>
                  <h4 className=" md:text-xl font-semibold text-lg  hover:text-gray-500 duration-500  cursor-pointer ">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-x-3">
                    <div className="flex-none  text-blue-900 font-semibold animate-bounce duration-700">
                      {item.icon}
                    </div>
                    <p className=" text-[17px]   text-gray-800 cursor-pointer hover:text-gray-500 duration-200">
                      {item.contact}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" mt-10 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3533.6662849173067!2d85.41898517546589!3d27.665794776206397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM5JzU2LjkiTiA4NcKwMjUnMTcuNiJF!5e0!3m2!1sen!2snp!4v1737711969867!5m2!1sen!2snp"
            width="600"
            height="450"
            title="map"
            className=" md:w-[1500px] md:h-[500px] h-96 w-full"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Suryabinayak, Bhaktapur",
    title: "Our office",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+977 015924589, 9841432103 , 9766885473",
    title: "Phone",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "info@awalandsons.com , puruawal@gmail.com",
    title: "Email",
  },
];
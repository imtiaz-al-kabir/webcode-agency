import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import banner from "../../assets/banner.png";
const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-[#f2f4f8] py-16 ">
      <div className="container mx-auto flex justify-between items-center px-5">
        <div>
          <h1 className="text-4xl font-semibold">
            Creative Web Design <br /> For Businesses
          </h1>
          <p className="py-6">
            Unlock your design skills to create beautiful websites and apps with
            a <br />
            poweful and easy-to-use tool.
          </p>
          <div className="space-x-4">
            <button className="btn btn-primary py-3">
              <span>Get Started</span>
              <FaArrowRight />
            </button>
            <button className="btn btn-outline btn-primary">Contact Us</button>
          </div>
        </div>
        <div className="relative">
          <div className="relative group ">
            <img src={banner} alt="banner" />
            <button
              onClick={openModal}
              className="absolute inset-0 top-19 flex justify-center items-center group-hover:opacity-70 transition z-0"
            >
              <FaRegCirclePlay className="text-5xl text-white hover:text-red-600" />
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-black opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <button
                className="absolute bg-black text-white rounded-full text-2xl top-3 right-3 w-6 h-6 pb-1 flex justify-center items-center hover:text-red-600"
                onClick={closeModal}
              >
                &times;
              </button>
              <iframe
                className="w-full aspect-video "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fdKtjnU9zuA?si=sX9uoiNdLjJY78v2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            Modal
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

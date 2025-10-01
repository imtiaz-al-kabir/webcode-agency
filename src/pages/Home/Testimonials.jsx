import { FaCircleUser } from "react-icons/fa6";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      logo: "/images/logos/logo1.png",
      review:
        "This platform has revolutionized how we manage our projects. Highly recommend!",
      author: "John Doe",
      role: "CEO, TechCorp",
    },
    {
      id: 2,
      logo: "/images/logos/logo2.png",
      review:
        "An excellent tool with great support! It's a game-changer for our business.",
      author: "Jane Smith",
      role: "Marketing Lead, BizSoft",
    },
    {
      id: 3,
      logo: "/images/logos/logo3.png",
      review:
        "Amazing experience! The user-friendly design has made our processes much smoother.",
      author: "Mark Johnson",
      role: "Project Manager, CloudNet",
    },
    {
      id: 4,
      logo: "/images/logos/logo4.png",
      review:
        "Outstanding service and innovation. Their solutions saved us time and boosted productivity.",
      author: "Emily Carter",
      role: "Operations Head, FinEdge",
    },
    {
      id: 5,
      logo: "/images/logos/logo5.png",
      review:
        "A reliable platform with exceptional features. Our team collaboration has never been better.",
      author: "Michael Lee",
      role: "CTO, InnovateX",
    },
    {
      id: 6,
      logo: "/images/logos/logo6.png",
      review:
        "The level of support and attention to detail is unmatched. Truly impressed!",
      author: "Sophia Brown",
      role: "Founder, StartUpHub",
    },
  ];

  return (
    <div className="bg-[#f2f4f8] py-10">
      <div className="container mx-auto px-4">
        <HeadingSection subtitle="Testimonials" title="What Our Clients Say" />

        <div className="carousel w-full space-x-4 rounded-box">
          {reviews.map((item, index) => (
            <div
              key={item.id}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full flex justify-center"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-10 max-w-lg text-center shadow-md">
                <img
                  src={item.logo}
                  alt={item.author}
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
                <p className="text-gray-600 italic">"{item.review}"</p>

                <div className="flex flex-col items-center space-y-2 mt-5">
                  <div className="text-5xl text-blue-600">
                    <FaCircleUser />
                  </div>
                  <h2 className="font-bold text-xl">{item.author}</h2>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${index === 0 ? reviews.length : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${index === reviews.length - 1 ? 1 : index + 2}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/members/person1.png",
      name: "John Doe",
      role: "CEO",
      linkedIn: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
    {
      id: 2,
      image: "/images/members/person2.png",
      name: "Jane Smith",
      role: "CTO",
      linkedIn: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      facebook: "https://facebook.com/janesmith",
    },
    {
      id: 3,
      image: "/images/members/person3.png",
      name: "Mark Johnson",
      role: "Designer",
      linkedIn: "https://linkedin.com/in/markjohnson",
      twitter: "https://twitter.com/markjohnson",
      instagram: "https://instagram.com/markjohnson",
      facebook: "https://facebook.com/markjohnson",
    },
    {
      id: 4,
      image: "/images/members/person4.png",
      name: "Emily Carter",
      role: "Developer",
      linkedIn: "https://linkedin.com/in/emilycarter",
      twitter: "https://twitter.com/emilycarter",
      instagram: "https://instagram.com/emilycarter",
      facebook: "https://facebook.com/emilycarter",
    },
  ];
  return (
    <div className="bg-[#f2f4f8] py-10">
      <div className="container mx-auto ">
        <HeadingSection subtitle="Our Team" title="Meet the Experts" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white transition-all overflow-hidden duration-300 shadow hover:shadow-2xl"
            >
              <img src={member.image} alt="" className="w-full" />
              <div className="p-5 text-center space-y-3">
                <h1 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h1>
                <h2 className="text-sm text-gray-500">{member.role}</h2>

                <div className="flex gap-5 justify-center">
                  <Link to={member.linkedIn}>
                    <FaLinkedinIn className="text-2xl text-blue-500" />
                  </Link>
                  <Link to={member.twitter}>
                    <FaTwitter className="text-2xl text-blue-500" />
                  </Link>

                  <Link to={member.facebook}>
                    <FaFacebook className="text-2xl text-blue-500" />
                  </Link>
                  <Link to={member.instagram}>
                    <FaInstagram className="text-2xl text-blue-500" />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <button className="btn btn-outline  btn-primary px-8 ">
                    Connect {member.name.split(" ")[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

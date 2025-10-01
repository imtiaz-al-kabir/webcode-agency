import {
  LuCloudDrizzle,
  LuCodeXml,
  LuSettings,
  LuSmartphone,
} from "react-icons/lu";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const tools = [
  {
    icon: LuSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements.",
  },
  {
    icon: LuCodeXml,
    title: "Developer-Friendly",
    description: "Optimized for developers with clean and efficient code.",
  },

  {
    icon: LuSmartphone,
    title: "Responsive Design",
    description: "Build tools that look great on any device and screen size.",
  },

  {
    icon: LuCloudDrizzle,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with cloud services for better productivity.",
  },
];

const Tools = () => {
  return (
    <div className="container mx-auto py-10">
      {/* <div className="text-center">
        <p className="text-blue-600 font-semibold">The Tools You Need</p>
        <h2 className="text-3xl lg:text-4xl font-bold py-5">
          All-in-One Solution for Your Projects
        </h2>
      </div> */}

      <HeadingSection subtitle='The Tools You Need'  title='All-in-One Solution for Your Projects'></HeadingSection>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8 px-5">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer"
          >
            <tool.icon className="text-blue-600 text-4xl" />
            <h3 className="pt-4 text-xl font-bold">{tool.title}</h3>
            <p className="text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center py-3">
        <button className="btn btn-primary">Explore more</button>
      </div>
    </div>
  );
};

export default Tools;

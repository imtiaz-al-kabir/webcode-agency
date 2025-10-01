import { useState } from "react";
import HeadingSection from "../../components/HeadingSection/HeadingSection";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Freelancer",
      monthlyPrice: 25,
      yearlyPrice: 250, // 25 * 12
      saves: "$25 USD per month, paid annually",
      features: [
        "1 Project",
        "Basic Support",
        "Access to all templates",
        "5GB Storage",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 65,
      yearlyPrice: 650, // 65 * 12
      saves: "$55 USD per month, paid annually",
      features: [
        "5 Projects",
        "Priority Support",
        "Access to all templates",
        "25GB Storage",
        "Advanced Analytics",
      ],
    },
    {
      name: "Agency",
      monthlyPrice: 95,
      yearlyPrice: 950, // 95 * 12
      saves: "$95 USD per month, paid annually",
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "Access to all templates",
        "Unlimited Storage",
        "Custom Branding",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <div className="py-10 ">
      <div className="container mx-auto px-5">
        <HeadingSection
          subtitle="Pricing"
          title="Choose Your Plan"
          description="Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you"
        />

        <div className="flex justify-center gap-3 py-3">
          <label  className="inline-flex items-center cursor-pointer">
            <span>{isYearly ? "Yearly Pricing" : "Monthly Pricing"}</span>
          </label>
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="toggle toggle-primary "
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
          {pricingPlans.map((plan) => (
            <div className="shadow text-center space-y-3 transition-all py-5 rounded-xl hover:shadow-2xl">
              <h1 className="text-2xl font-bold">{plan.name}</h1>
              <p className="text-xl font-semibold">Best for {plan.name}</p>
              <div className="text-4xl font-bold">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="font-normal text-xl">
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>
              <p>{isYearly ? plan.saves : ""}</p>

              <button className="btn-primary btn rounded-3xl">
                {" "}
                Choose {plan.name}{" "}
              </button>

              <div className="flex justify-center">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li className="text-xl flex flex-item-start items-center m ">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l5 5L20 7"
                        />
                      </svg>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

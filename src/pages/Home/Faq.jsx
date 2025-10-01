import HeadingSection from "../../components/HeadingSection/HeadingSection";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Who should use the app?",
      answer:
        "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools.",
    },
    {
      id: 2,
      question: "What is included with my subscription?",
      answer:
        "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan.",
    },
    {
      id: 3,
      question: "How do I get paid?",
      answer:
        "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard.",
    },
    {
      id: 4,
      question: "Is my personal information safe?",
      answer:
        "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times.",
    },
    {
      id: 5,
      question: "How can we get in touch?",
      answer:
        "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have.",
    },
  ];
  return (
    <div className="bg-[#f2f4f8] py-10 px-5 ">
      <div className="container mx-auto">
        <HeadingSection subtitle="FAQ" title="Frequently Asked Questions" />

        {faqs.map((faq) => (
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

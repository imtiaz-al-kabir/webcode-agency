import HeadingSection from "../../components/HeadingSection/HeadingSection";

const Newsletter = () => {
  return (
    <div>
      <div className="container mx-auto py-10 px-5">
        <HeadingSection
          title="Stay Updated with Our Newsletter"
          description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
        />
        <div className="text-center py-4 space-x-4">
            <button className="btn btn-primary">Subscribe Now</button>
            <button className="btn btn-outline btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

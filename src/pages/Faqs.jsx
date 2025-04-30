import Cta from "../components/CTA/Cta";
import CTA2 from "../components/CTA/CTA2";
import FaqsList from "../components/faqs/FaqsList";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Faqs = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-20 px-[3%] md:px-[6%]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="md:col-span-2 py-[40px]">
            <FaqsList />
          </div>
          <div className="md:col-span-1">
            <CTA2 infaq={true} />
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
      <div>
        <Cta />
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;

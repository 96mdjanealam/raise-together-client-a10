import Banner from "../Banner/Banner";
import FAQSection from "../FaqSection/FaqSection";
import RunningCampaign from "../RunningCampaign/RunningCampaign";
import Testimonials from "../Testimonials/Testimonials";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RunningCampaign></RunningCampaign>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
    </div>
  );
}

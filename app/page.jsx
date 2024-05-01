import EventsSection from "@/components/events/EventsSection";
import HeroSection from "@/components/hero-section/HeroSection";
import VideoSection from "@/components/video-section/VideoSection";
import WorshipPage from "@/components/worship/WorsipPage";
import GestureSection from "@/components/gesture/GestureSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <WorshipPage />
      <EventsSection />
      <GestureSection />
    </>
  );
}

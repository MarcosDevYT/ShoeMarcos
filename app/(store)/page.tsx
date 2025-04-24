import { CategoriesSection } from "@/components/store/sections/CategoriesSection";
import { FeaturedSection } from "@/components/store/sections/FeaturedSection";
import { HeroSection } from "@/components/store/sections/HeroSection";

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
    </>
  );
}

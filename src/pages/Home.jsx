
import HeroSection from "@/components/HeroSection/HeroSection"
import HomeOnline from "@/components/HomeOnline/HomeOnline"
import ProductSection from "@/components/ProductSection/ProductSection"
import ReviewSlider from "@/components/ReviewSlider/ReviewSlider"
import { Search } from "@/components/Search/Search"
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory"
import Support from "@/components/SupportSection/Support"
const Home = () => {
  return (
    <>
        <HeroSection />
        <Search />
        <ShopByCategory />
        <Support />
        <ProductSection />
        <HomeOnline />
        <ReviewSlider />
    </>
  )
}

export default Home
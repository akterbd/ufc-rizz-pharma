import BodyBg from "@/assets/img/body-bg.webp";
import HeroSection from "../../components/HeroSection/HeroSection"
import HomeOnline from "../../components/HomeOnline/HomeOnline"
import ProductSection from "../../components/ProductSection/ProductSection"
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider"
import { Search } from "../../components/Search/Search"
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory"
import Support from "../../components/SupportSection/Support"
import Footer from "../footer/Footer"
import Header from "../header/Header"

const MainLayout = () => {
  return (
    <>
        <Header />
        <main className="home-page" style={{backgroundImage:`url(${BodyBg})`}}>
            <HeroSection />
            <Search />
            <ShopByCategory />
            <Support />
            <ProductSection />
            <HomeOnline />
            <ReviewSlider />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout
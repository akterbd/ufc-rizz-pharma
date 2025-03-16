import shapeStar from "@/assets/img/shape-star-icon.svg";
import shapeStar3 from "@/assets/img/shape-3.svg";
import shapeStar2 from "@/assets/img/shape-2.svg";
import WeightLose from "@/assets/img/portrait-fitness-people 1.png";
import sexualHealth from "@/assets/img/sexual-health.png";
import brainHealth from "@/assets/img/brain-health.png";
import testosteroneHRT from "@/assets/img/testosterone-HRT.png";
import athleticPerfomance from "@/assets/img/Athletic-Perfomance.png";
import beautyHairLoss from "@/assets/img/Beauty-Hair-Loss.png";
import "./shop-by-category.scss";
import Heading from "../Heading/Heading";
import CategoryItem from "./CategoryItem";


const categories = [
    { title: "Weight<br/> Loss", shape: shapeStar, image: WeightLose },
    { title: "Sexual<br/> Health", shape: shapeStar3, image: sexualHealth },
    { title: "Brain<br/> Health", shape: shapeStar, image: brainHealth },
    { title: "Testosterone<br/> HRT", shape: shapeStar2, image: testosteroneHRT },
    { title: "Athletic<br/> Perfomance", shape: shapeStar, image: athleticPerfomance },
    { title: "Beauty and<br/> Hair Loss", shape: shapeStar2, image: beautyHairLoss },
];

const ShopByCategory = () => {
  return (
    <section className="shop-by-category">
        <div className="container">
            <Heading>Shop by <span>Category</span></Heading>
            <div className="grid-container">
                {categories.map((category) => (
                    <CategoryItem 
                    key={category.title}
                    title={<span dangerouslySetInnerHTML={{ __html: category.title }} />} 
                    shape={category.shape}
                    image={category.image}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ShopByCategory
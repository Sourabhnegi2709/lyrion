
import BannerHero from "../components/BannerHero"
import AboutStats from "../components/AboutStats"
import ImageSlider from "../components/ImageSlider"
import Cards from "../components/cards"

export default function Home() {
  return (
    <main>
      <BannerHero />
      <AboutStats />
      <ImageSlider />
      <Cards />
    </main>
  )
}
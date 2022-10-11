import GlassMorphism from "./GlassMorphism/GlassMorphism"
import ButtonOne from "./Buttons/ButtonOne"
import BoxShadow from "./BoxShadow/BoxShadow"
import InputOne from "./Inputs/InputOne"
import Banner1 from "./Banners/Banner1"
import Footer from "./Footer/footer"
export default function Layout() {
  const footerData =[
    {
      link:'',
      icon:'https://img.icons8.com/fluency/48/000000/twitter.png'
    } , {
      link :'',
      icon:'https://img.icons8.com/sf-black/64/000000/github.png'
    }
  ]
  return (
    <>
      <Footer  footer={footerData}/>
      <Banner1 />
      <GlassMorphism />
      <ButtonOne />
      <BoxShadow />
      <InputOne />
    </>
  )
}

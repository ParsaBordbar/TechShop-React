import {HeadElement} from "../../Components/HeadElement";
import { Hero } from "../../Components/Hero";
import CatCard from "../../Components/CatgoryCard";

function Home(){
    return(
    <>
    <Hero/>
    <HeadElement variant="" title="Monitors" desc="Buy shit from us" imgSrc="src\assets\monitor.jpg"/>
    <HeadElement variant="black" title="Keyboards" imgSrc="src\assets\KBNObg.png" desc="see, compare & even hear them..."/>
    <div className="card m-10 mt-16 mb-16">
        <div className="flex flex-row justify-between m-10 gap-6">
            <CatCard variant="black" title="Phones" desc="Brand New from Your favorite Brand" src="src\assets\NoBGphone.png"/>
            <CatCard title="Phones"/>
        </div>
        <div className="flex flex-row justify-between m-10 gap-6">
            <CatCard title="Phones"/>
            <CatCard variant="black" title="Phones"/>
        </div>
        <div className="flex flex-row justify-between m-10 gap-6">
            <CatCard variant="black" title="Phones"/>
            <CatCard title="Phones"/>
        </div>
    </div>
    <Hero/>
    </>
    )
}
export default Home;
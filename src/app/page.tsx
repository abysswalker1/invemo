import "./main.css";
import Hero from "./components/_sections/hero/Hero";
import AssetManagement from "./components/_sections/AssetManagement/AssetManagement";

export default function Home() {
  return (
    <main>
      <Hero />    
      <div className="main_content">
        <div className="container">
          <AssetManagement />
        </div>
      </div>  
    </main>
  );
}

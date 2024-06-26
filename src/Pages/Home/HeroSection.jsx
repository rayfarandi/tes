import RayFarandiCV from "./doc/RayFarandiCV.pdf"

export default function HeroSection(){
    const downloadCV = ()=>{
        const link = document.createElement("a")
        link.href = RayFarandiCV
        link.download = "RayFarandiCV.pdf"
        link.click()

    }

    return(
    <>
    <section id="heroSection" className="hero-section md:px-[133.333px] md:py-[85.333px] px-5 py-10">
        <div className="hero-section-content-box animate-fade-right animate-duration-1000 animate-delay-1000">
            <div className="hero-section-content">
                <p className="section-title ">Hey, I'm Ray</p>
                <h1 className="hero-section-title">
                    <span className="text-violet-500">
                    Web
                    </span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero-section-description">
                I am a full-stack developer with a big curiosity for new things. I am experienced in developing web frontends using React, Tailwind, and Redux, and I fetch data using HTTP requests with Axios. On the backend, I am proficient in Node.js, Golang, and PostgreSQL for backend development. I'm always interested in learning more about programming languages and enjoy working both in teams and independently to achieve goals.  
                </p>
            </div>
            <button className="btn transition ease-in-out delay-300 duration-300 bg-violet-600 text-violet-50 hover:bg-violet-700 hover:scale-110 hover:-translate-y-1" onClick={downloadCV}>Download CV</button>
        </div>
        <div className="hero-section-img animate-fade-down">
            <img src="./img/hero_img.png" alt="hero Section" />
            
        </div>
        
    </section>
    </>
    )
    
}
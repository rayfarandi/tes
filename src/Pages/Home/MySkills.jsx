/* eslint-disable jsx-a11y/img-redundant-alt */
import data from "../../data/index.json"

export default function MySkills(){
    return(
        <section className="skills-section" id="mySkills">
            <div className="portfolio-container">
                {/* <p className="section-title">My skill</p> */}
                <h2 className="skills-section-heading">My Skill</h2>
            </div>
            <div className="skills-section-container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills-section-card items-center">
                        <div className="skills-section-card-content text-center">
                            <h3 className="skills-section-title">{item.title}</h3>
                        </div>
                        <div className="skills-section-img flex-wrap">
                            {Array.isArray(item.src) ? (
                                item.src.map((src, srcIndex) => (
                                    <>
                                    <div className="flex-col items-center justify-items-center flex">
                                    <img className="md:w-14 md:h-14 w-8 h-8" key={srcIndex} src={src.img} alt={`Skill ${srcIndex + 1}`} />
                                    <div>{src.description}</div>
                                    </div>
                                    
                                    </>
                                ))
                            ) : (
                                // <div className="skills-section-img">
                                    <img src={item.src} alt="Product-chain" />
                                // </div>
                                
                            )}
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

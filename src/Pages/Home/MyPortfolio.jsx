/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/anchor-is-valid */
import data from "../../data/index.json"
import { FaGithub } from "react-icons/fa"

export default function Myportfolio(){
    return(
        <>
        <section className="portfolio-section" id="MyPortfolio">
            <div className="portfolio-container-box">
                <div className="portfolio-container">
                    <p className="sub-title">Recent Project</p>
                    <h2 className="section-heading">My Portfolio</h2>
                </div>
                <div>
                    <a href="https://github.com/rayfarandi" target="_blank" rel="noopener noreferrer">
                        
                    <button className="btn btn-accent hover:animate-wiggle animate-once">
                    <FaGithub className="w-5 h-5" />
                        Visit My Github
                    </button>
                    </a>
                </div>
            </div>
            <div className="portfolio-section-container grid md:grid-cols-3 grid-cols-1">
                {data?.portfolio?.map((item,index)=>(
                    <div key={index} className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                        <figure><img src={item.src} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary hover:animate-wiggle animate-once" onClick={()=> document.getElementById(`details-${index}`).showModal()}>Details</button>

                            {/* Modal */}
                            <dialog id={`details-${index}`} className="modal">
                                <div className="modal-box">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <div className="flex flex-col ">
                                    <img className="justify-items-center md:w-full md:h-80 w-80 h-64" src={item.src} alt="" />
                                    <p className="py-4">{item.description}</p>

                                    <div className="grid grid-cols-2 gap-4">
                                    <div className="grid grid-rows-2 gap-2">
                                    {item.frontEnd && <a className="link link-primary" target="_blank" rel="noopener noreferrer" href={item.frontEnd}>Frontend Link</a>}
                                    {item.backEnd && <a className="link link-primary" href={item.backEnd} target="_blank" rel="noopener noreferrer">Backend Link</a>}
                                    </div>
                                    
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-primary w-full">Visit Link</button>
                                    </a>
                                    
                                    
                                    </div>

                                </div>
                                
                                </div>
                            </dialog>
                            {/* Modal end */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        </>
    )
}
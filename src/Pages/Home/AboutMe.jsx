export default function AboutMe(){
    return(
        <>
            <section id="AboutMe" className="grid md:grid-cols-2 md:px-16 gap-4 px-5">
                <div className="card lg:card-side bg-base-100 shadow-xl max-h-80  ">
                        <figure><img src="./img/about-me.svg" alt="Album"/></figure>
                        <div className="card-body">
                        <p>Name</p>
                        <h2>Ray Farandi</h2>
                        <p>Mail</p>
                        <h2>Rayfarandi1994@gmail.com</h2>
                        <p>Phone</p>
                        <h2>+62 85951626452</h2>
                        <p>Address</p>
                        <h2>Depok, Jawa Barat</h2>                       
                        </div>
                </div>
                    
                <div className="md:p-8 p-5 w-full" id="informasi">
                    <div className="space-y-1 md:space-y-2">
                        <h2 className="">About Me</h2>
                        <h3 className="text-xl">Education</h3>
                        <div className="">
                        <div className="grid grid-cols-2">
                            <div className="text-star">
                                <strong>Fazztrack</strong><span>, Full Stack Web & Golang</span> 
                            </div>
                            <p className="text-end">
                            Okt 2023 - Apr 2024  
                            </p>
                            
                        </div>
                        <span>
                            Bootcamp as a fullstack web developer and golang
                        </span>
                        </div>
                        <div className="">
                        <div className="grid grid-cols-2">
                            <div className="text-star">
                                <strong>Universitas Gunadarma</strong><span>, Sistem Informasi</span> 
                            </div>
                            <p className="text-end">
                            Jul 2017 - Agu 2018  
                            </p>
                            
                        </div>
                        <span>
                            Grade Point Average (GPA) : 3.05
                        </span>
                        </div>
                        
                        <h3 className="text-xl">
                            Work Experiences
                        </h3>
                        <div>
                        <div className="grid grid-cols-2">
                            <div className="text-star">
                                <strong>NUKLINDOLAB</strong><span>, IT Staff </span> 
                            </div>
                            <p className="text-end">
                            Juli 2018 - Agu 2023  
                            </p>
                            
                        </div>
                        <div className="grid grid-cols-2">
                        <span>-Manage Internet, Lan, Wan.</span>
                        <span className="text-end">-Manage Telephone IP PABX. </span>
                        <span>-Manage Server Cloud Data</span>
                        <span className="text-end">-Manage Security Network</span>
                        <span>Manage Laboratory Application Server</span>
                        </div>
                        </div>
                        <div>
                        <div className="grid grid-cols-2">
                            <div className="text-star">
                                <strong>PT.KARYA SENTOSA UNGGUL</strong><span>, IT Staff </span> 
                            </div>
                            <p className="text-end">
                            Mei 2017 - Juni 2018  
                            </p>
                            
                        </div>
                        <div className="grid grid-cols-2">
                        <span >-Maintain and update IT systems and software</span>
                        <span className="text-end">-Manage Internet, Lan, Wan.</span>
                        
                        <span >-Install and configure new hardware and software</span>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
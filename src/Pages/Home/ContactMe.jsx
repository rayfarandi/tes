export default function ContactMe(){
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
    return(
        
        <section id="Contact" className="contact-section">
            <div>
                
                <h2>Contact Me</h2>
                <p className="text-lg">Please get in touch</p>

            </div>
            <form action={process.env.REACT_APP_API_EMAIL}
             method="post" 
             className="container-form-container"
            >
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">First Name</span>
                        <input
                         type="text"
                         className="contact-input text-md"
                         name="first-name"
                         id="first-name"
                         required
                         />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">Last Name</span>
                        <input
                        type="text"
                        className="contact-input text-md"
                        name="last-name"
                        id="last-name"
                        required
                        />
                    </label>  
                </div>
                    <label htmlFor="email" className="contact-label pt-2">
                        <span className="text-md">Email</span>
                        <input 
                        type="email"
                        className="contact-input text-md" 
                        name="email" 
                        id="email"
                        required
                        />
                    </label>
                    <label htmlFor="message" className="contact-label pt-2">
                        <span className="text-md">Message</span>
                        <textarea 
                        className="contact-input text-md" 
                        id="message"
                        name="message"
                        rows="8"
                        placeholder="Type your message..."
                        required
                        />
                    </label>
                    <label htmlFor="checkbox" className="checkbox-label pt-5">
                        <input 
                        type="checkbox" 
                        required 
                        name="checkbox" 
                        id="checkbox" 
                        />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact-form-btn">Submit</button>
                    </div>
            </form>
        </section>
        
    )
}
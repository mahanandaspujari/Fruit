const ContactUs=()=>(
    <>
        <div className="contact">
            <div>
                <div className="contact-section mt-5">
                    <h1>Contact Us</h1>
                    <h5>Healing Center, 176 W Street name, New York, NY</h5>
                    <h5>(+91) 987 654 3210</h5>
                    <h5>name@domain.com</h5>
                </div>
                <div className="post-section mt-5">
                    <h1>Recent Post</h1>
                    <ul>
                        <li className="p1">consectetur adipisc elit,
                            sed do eiusmod</li>
                        <li className="p2">consectetur adipisc elit,
                            sed do eiusmod</li>
                        <li className="p3">consectetur adipisc elit,
                            sed do eiusmod</li>
                    </ul>
                </div>

            </div>
            <div>
                <div className="pages-section mt-5">
                    <h1>Pages</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Fruits</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="newsletter mt-5">
                    <h1>Newsletter</h1>
                    <input type="text" placeholder="Enter Your Email" /><br />
                    <button className="btn btn-info">Subscribe</button>
                </div>
            </div>

        </div>
    </>
)
export default ContactUs
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        
        <div className=" footer-container">
            <div>
                <h3>Genius Car Mechanic Shop</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus illo sequi ad deserunt quisquam facilis, optio assumenda accusamus quo odit adipisci recusandae.</p>
            </div>
            <div className=" footer-links">
                <h2>Quick Links</h2>
                <div>Services</div>
                <div>Vehicle</div>
                <div>Appointments</div>
                <div>Reviews</div>
                <div>Contact Us</div>      
            </div>
            <div>
                <h2>Contact Info</h2>
                <address>
                    kalabagan, Dhaka
                    customer@carmechanic.com <br />
                    Mon - Fri: 7:00 AM - 6:00 PM <br />
                    Sat - Sun: Closed
                </address>
            </div>
            
        
        </div>
        <hr />
        <p>Copyright Car Mechanic Shop 2023. All Rights Reserved</p>
        </div>
    );
};

export default Footer;
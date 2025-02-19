import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<p className="footer-text">Shilpa Chowbey, 2025</p>
				<div className="homepage-socials">
					<a href="https://github.com/schowbey" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
					</a>
					<a href="https://www.linkedin.com/in/shilpa-chowbey/" target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon"/>
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/logo";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

import "./styles/homepage.css";

const Homepage = () => {
	const logoStyle = {
		display: "flex",
		zIndex: 999,
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
							<div style={logoStyle}>
								<Logo width={65} link={false} />
							</div>
								<h3>Hello,</h3>
								<h1>I'm Shilpa Chowbey.</h1>
								<p>I'm a 4th-year at UC San Diego, studying Cognitive and Computer Science.</p>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="prof-photo.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a href="https://github.com/schowbey" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
							</a>
							<a href="https://www.linkedin.com/in/shilpa-chowbey/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon"/>
							</a>
						</div>
						<br></br><hr></hr>

						<div>
							Throughout my time as an undergraduate, I have worked on a variety of internships and class projects that have influenced my career growth and aspirations. 
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
				
			</div>
		</React.Fragment>
	);
};

export default Homepage;

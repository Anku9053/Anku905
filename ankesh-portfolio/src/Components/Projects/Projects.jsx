import React, { useContext } from "react";
import "./Projects.css";
import { themeContext } from "../../Context";
import jidoka from "./jidoka.png"
import IMG1 from "../../assets/fitness first.png"
import IMG2 from "../../assets/Masai mall.png"
import IMG3 from "../../assets/glamour beauty.png"
import IMG4 from "../../assets/Zara.png"
// sourabh shukla\src\assets\
// sourabh shukla\src\assets\   sourabh shukla\src\assets\    sourabh shukla\src\assets\   sourabh shukla\src\assets\
function Projects() {
  const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
   
  return (
    <div className="projects" id="projects">
      <h1 className="p-title">PROJECTS</h1>
      <div className="project">
        <h1 className="project-heading">Fitness First</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
            <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra" />          
            </div>
            <div className="project-video-div-for-media">
             
              <img src={IMG1} alt="zostel" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://fitness-first-g.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/RuchiAgrawal9186/FitnessFirst"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            It's a collaborative project, made by four people in a span of 5 working days. Fitness First is an online website that helps people to become fit and overcome their anxiety of loosing weights.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>User can search the exercise according to their preference</li>
              <li>Category-wise page listing & Product filtration</li>
              <li>User can watch the video of that particular exercise</li>
              {/* <li>All the data is coming from backed using fetch and stored payment and booking details in MongoDB</li> */}
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Home Page</li>
              <li>
              Developed Homepage along with many kind of animation.
              </li>
              {/* <li>Developed Checkout Page along with all Functionality</li> */}
              <li>Developed Homepage fully responsiveness for all diffrent sizes apart from Homepage some other things are responsive too.</li>
            </ul>
            <h1 className="p-div">
            A collaborative project executed in 5 days
            </h1>
          </div>
        </div>
      </div>















{/* 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 */}











      <div className="project">
        <h1 className="project-heading">Masai Mall</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
            <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra" /> 
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
            </div>
            <div className="project-video-div-for-media">
             
              <img src={IMG2} alt="zostel" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://dreamy-semifreddo-625c90.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/ashishk2007/attractive-songs-1315"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Masai Mall is an Indian e-commerce company.Where User can Shopping according their prefece.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>User can search the Products according to their preference</li>
              <li>Category-wise page listing & Product filtration</li>
              <li>Add to cart & Multiple types of payment options</li>
              <li>All the data is coming from backed using fetch </li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Product page with all the functionality</li>
              <li>
              Developed Single Product Page along with all Functionality
              </li>
             
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 6 days.
            </h1>
          </div>
        </div>
      </div>








{/* 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333*/}









      <div className="project">
        <h1 className="project-heading">Glamour Beauty</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             
              <img src={IMG3} alt="snapdeal" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://glamour-pi.vercel.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/Omkanta/dusty-hat-6390/tree/main/dusty-hat-6390"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Glamour Beauty is an Indian e-commerce website. Where User can Shopping according their prefece.
            
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login | Landing Page | Home Page | Products Page | Add To Cart Page</li>
              
              <li>Add To Cart Page| Add Products in Cart | Checkout</li>
              
              <li>Filter & Sort Products according to your need</li>
              
              <li>Checkout and Payment Page along with all Functionality</li>
              <li>Login and Signup with all the functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Products Page with filter and sort functionality </li>
              <li>
              Developed a Particular Products Page with all Functionality
              </li>
              
              <li>Developed Backend for Web App using JSON-Server</li>
              
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 6 days.
            </h1>
          </div>
        </div>
      </div>












      
      <div className="project">
        <h1 className="project-heading">Zara Clone</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
            <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             <img src={IMG4} alt="zoomcar" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>  
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://resonant-puppy-aa5911.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/Anku9053/-defeated-fall-3461"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
           Zara Clone is an Indian e-commerce website. Where User can Shopping according their prefece. It is a popular E-commerce Website.

            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Multiple User Sign Up and Login</li>
              <li>Search Apply any Products</li>
              <li>User Friendly HomePage</li>
              <li>CheckOut Page</li>
              <li>User Friendly HomePage</li>
              
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
            
              
              <li>Developed Homepage</li>
              
              <li>Search Functionality as well as filter and sort</li>
                            
              <li>Developed Checkout Page</li>
              
            </ul>
            <h1 className="p-div">
              A Solo project built by me within 5 days.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

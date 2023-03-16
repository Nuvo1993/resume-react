import "./AboutMe.css";
import {Typography} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe(){
    AOS.init();
    return(
        <div data-aos="fade-up"  id="aboutMeSection" className="secondarySection">
        <Typography variant="h6">
          Welcome to my About Me section, where you can learn more about who I am, my background, and what motivates me. I am passionate about [insert passions], and I bring that enthusiasm to everything I do. Here, you can discover more about my experiences, skills, and interests, and get to know me beyond my professional achievements. So take a few moments to learn about the person behind the resume and see how we might be a good fit.
        </Typography>
      </div>
    );
}
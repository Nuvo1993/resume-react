import "./AboutMe.css";
import {
  Typography,
  CardClasses,
  Grid,
  Paper,
  styled,
  Container,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../../assets/images/DB9A0086.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AboutMe() {
  AOS.init();
  return (
    <div data-aos="fade-up" id="aboutMeSection" className="secondarySection">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Typography>
                Hi, my name is [Your Name], and I'm a [Your Job Title] with a
                passion for [Your Field of Work]. I've always been interested in
                [Your Field of Work], and I pursued my education and career in
                this field because I'm passionate about [What Inspired You].
                Outside of work, I enjoy [Your Hobbies and Interests], which
                help me relax and recharge after a busy day. I'm also proud of
                [Your Accomplishments], which have helped me grow both
                personally and professionally. For me, [Your Core Values and
                Beliefs] are essential to living a fulfilling life, and I strive
                to embody these values in everything that I do. My personal
                motto is [Your Personal Mission Statement or Motto], which
                reminds me to stay focused and motivated in my work and personal
                life. When faced with new challenges and opportunities, I like
                to [Your Approach to Challenges and Opportunities]. I believe
                that this mindset helps me to stay open-minded and adaptable in
                an ever-changing world. Currently, I'm excited about [Things
                You're Working On or Excited About for the Future], which I
                believe will help me to make a positive impact in my community
                and beyond.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div data-aos="fade-left" className="circle-container">
                <img src={profilePic} alt="My Image" className="circle-image" />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

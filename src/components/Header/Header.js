import "./Header.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import profilePic from "../../assets/images/DB9A0086.jpg";
import { TagCloud } from "react-tagcloud";

const data = [
  { value: ".NET Core", count: 25 },
  { value: "C#", count: 18 },
  { value: "AWS", count: 38 },
  { value: "Javascript", count: 30 },
  { value: "Node.js", count: 28 },
  { value: "Angular", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "CSS3", count: 20 },
  { value: "React", count: 22 },
  { value: "TotalAgility", count: 7 },
  { value: "NPM", count: 25 },
  { value: "SQL", count: 15 },
  { value: "Git", count: 17 },
  { value: "TFS", count: 27 },
  { value: "Angular.js", count: 30 },
  { value: "TypeScript", count: 15 },
  { value: "Jira", count: 30 },
  { value: "GitHub Actions", count: 11 },
];
const options = {
  luminosity: "light",
  hue: "blue",
};

const SimpleCloud = () => (
  <TagCloud minSize={12} maxSize={75} tags={data} colorOptions={options} />
);
export default function Header() {
  return (
    <header className="App-header">
      <Paper className="header-wrapper" elevation={12}>
      <Container maxWidth="xl" >
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <div data-aos="fade-right" className="text">
              <Typography variant="h3">
                Hello, <br /> I'm{" "}
                <span className="highlight">Austin Neveau</span>
                <br /> I'm a full-stack web developer.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div data-aos="fade-left" className="circle-container">
              <img src={profilePic} alt="My Image" className="circle-image" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <SimpleCloud />
          </Grid>
          <Grid item xs={6}>
            <div data-aos="fade-up">
              <Typography variant="h6">
                As a full-stack software developer, I possess a strong passion
                for learning and implementing new technologies. My ability to
                learn quickly and efficiently enables me to adapt to any project
                and deliver high-quality solutions. I am excited to work with
                like-minded individuals and contribute to the growth of any
                organization that values innovation, collaboration, and
                excellence.
              </Typography>
            </div>
          </Grid>
        </Grid>

        {/* <Grid container spacing={1}>
          <Grid item xs={4}>
            <div data-aos="fade-right" className="text">
              <Typography variant="h3">
                Hello, <br /> I'm{" "}
                <span className="highlight">Austin Neveau</span>
                <br /> I'm a full-stack web developer.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div data-aos="fade-left" className="circle-container">
              <img src={profilePic} alt="My Image" className="circle-image" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div data-aos="fade-up">
              <Typography variant="h6">
                As a full-stack software developer, I possess a strong passion
                for learning and implementing new technologies. My ability to
                learn quickly and efficiently enables me to adapt to any project
                and deliver high-quality solutions. I am excited to work with
                like-minded individuals and contribute to the growth of any
                organization that values innovation, collaboration, and
                excellence.
              </Typography>
            </div>
          </Grid>
        </Grid> */}
      </Container>
      </Paper>
    </header>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

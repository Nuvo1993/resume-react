import "./Header.css";
import { Typography, Container, Grid, Box, Avatar } from "@mui/material";
import profilePic from "../../assets/images/DB9A0086.jpg";
import { TagCloud } from "react-tagcloud";
import { useTheme } from "@mui/material/styles";

const data = [
  { value: ".NET Core", count: 45 },
  { value: "C#", count: 55 },
  { value: "AWS", count: 25 },
  { value: "Javascript", count: 35 },
  { value: "Node.js", count: 30 },
  { value: "Angular", count: 30 },
  { value: "React", count: 35 },
  { value: "NextJS", count: 35 },
  { value: "NPM", count: 30 },
  { value: "SQL", count: 50 },
  { value: "Git", count: 50 },
  { value: "TFS", count: 40 },
  { value: "TypeScript", count: 40 },
  { value: "Jira", count: 30 },
  { value: "Openshift", count: 25 },
  { value: "GitHub Actions", count: 25 },
];

const SimpleCloud = () => {
  const theme = useTheme();
  const options = {
    luminosity: "dark",
    hue: theme.palette.primary.main,
  };
  return <TagCloud minSize={16} maxSize={80} tags={data} colorOptions={options} />;
};

export default function Header() {
  const theme = useTheme();
  return (
    <header className="App-header section" id="headerSection">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box data-aos="fade-right">
              <Typography variant="h2" component="h1" gutterBottom>
                Hello, I'm <br />
                <span className="highlight">Austin Neveau</span>
              </Typography>
              <Typography variant="h5" component="h2" color="textSecondary" sx={{ mb: 3 }}>
                I'm a full-stack web developer.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                As a full-stack software developer, I possess a strong passion
                for learning and implementing new technologies. My ability to
                learn quickly and efficiently enables me to adapt to any
                project and deliver high-quality solutions.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box data-aos="fade-left" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Avatar
                src={profilePic}
                alt="Austin Neveau"
                sx={{ width: 250, height: 250, mb: 4, boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
              />
              <Box sx={{ width: '100%' }}>
                <SimpleCloud />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}

import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CodeIcon from "@mui/icons-material/Code";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const workHistory = [
  {
    company: 'Company A',
    position: 'Software Engineer',
    duration: 'Jan 2019 - Dec 2020',
  },
  {
    company: 'Company B',
    position: 'Senior Developer',
    duration: 'Jan 2021 - Present',
  },
];

function SkillChips({ title, skills }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip label={skill} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function Resume() {
  AOS.init();
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React", "Angular"];
  const backEndSkills = ["Node.js", "Python", "Ruby", "Java", "C#"];
  const devOpsSkills = ["Git", "Docker", "Kubernetes", "AWS", "Terraform"];
  return (
    <div data-aos="fade-up" id="resumeSection">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "inline-flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 300
            },
          }}
        >
          <Paper elevation={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <DeveloperModeIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    fontSize: "75px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="flex-start">
              <Grid item xs={12} sm={4}>
                <SkillChips title="Front End Skills" skills={frontEndSkills} />
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CodeIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    fontSize: "75px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="flex-start">
              <Grid item xs={12} sm={4}>
                <SkillChips title="Back End Skills" skills={backEndSkills} />
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <CodeIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    fontSize: "75px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid item container direction="column" alignItems="flex-start">
              <Grid item xs={12} sm={4}>
                <SkillChips title="DevOps and Tools" skills={devOpsSkills} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Work History
        </Typography>
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019 - 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <Typography variant="h6" component="h1">
              Software Developer
            </Typography>
            <Typography>Company A</Typography>
            <Typography>
              - Developed web applications using React and Node.js
              <br />
              - Collaborated with cross-functional teams
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017 - 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3}>
            <Typography variant="h6" component="h1">
              Junior Developer
            </Typography>
            <Typography>Company B</Typography>
            <Typography>
              - Worked on front-end development using HTML, CSS, and JavaScript
              <br />
              - Assisted in maintaining internal tools
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* Add more TimelineItems for additional work history */}
    </Timeline>
      </CardContent>
    </Card>
      </Container>
    </div>
  );
}

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
import TerminalIcon from "@mui/icons-material/Terminal";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import unfLogo from "../../assets/images/unf-logo.jpg";
import fscjLogo from "../../assets/images/fscj-logo.png";
import resume from "../../assets/Resume.pdf";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const workHistory = [
  {
    company: "Company A",
    position: "Software Engineer",
    duration: "Jan 2019 - Dec 2020",
  },
  {
    company: "Company B",
    position: "Senior Developer",
    duration: "Jan 2021 - Present",
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
  const frontEndSkills = ["React", "Angular", "Typescript", "Javascript", "RxJS", "HTML", "CSS"];
  const backEndSkills = [
    "Node.js",
    "C#",
    "Java",
    "RESTApi",
    "Entity Framework",
    "SQL Server",
    "xUnit",
  ];
  const devOpsSkills = [
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Splunk",
    "Jira",
    "TFS",
  ];
  return (
    <div data-aos="fade-up" id="resumeSection">
      <Container maxWidth="xl">
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', mb: 5, color: '#1B2838', fontWeight: 700 }}>
          Resume & Skills
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={4}>
          <Paper elevation={12} className="skillBox">
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
          </Grid>
          <Grid item xs={12} lg={4}>
          <Paper elevation={12} className="skillBox">
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
          </Grid>

          <Grid item xs={12} lg={4}>
          <Paper elevation={12} className="skillBox">
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <TerminalIcon
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
          </Grid>
        </Grid>



        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Work History
            </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    2022 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                      Senior Software Developer
                    </Typography>
                    <Typography>TIAA Bank</Typography>
                    <Typography>
                      - Developed and maintained advanced software applications
                      using a variety of programming languages, frameworks, and
                      technologies.
                      <br />- Collaborated with product owners, business
                      analysts, and stakeholders to gather requirements,
                      identify technical solutions, and create detailed project
                      plans.
                      <br />- Led cross-functional teams to deliver high-quality
                      software products on time and within budget.
                      <br />- Developed strategies to improve our Software
                      development lifecycle process
                      <br />- Implemented proven methodologies and stringent
                      quality control measures to ensure that software products
                      met functional and non-functional requirements, including
                      scalability, performance, and security.
                      <br />- Provided production support for any high priority
                      production issues
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    2016 - 2022
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
                    <Typography>TIAA Bank</Typography>
                    <Typography>
                      - Designed web applications using various frameworks based
                      on clients specifications.
                      <br />- Converted console applications to SSIS
                      <br />- Triaged application vulnerabilities using
                      Veracode.com
                      <br />- Managed applications with other developers using
                      Team Foundation Server as a source control.
                      <br />- Created reporting applications using the IBM’s
                      enterprise planning software TM1.
                      <br />- Developed unit tests for all development releases
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    2015 - 2016
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                      QA Analyst
                    </Typography>
                    <Typography>EverBank</Typography>
                    <Typography>
                      - Wrote and maintained test scripts using Microsoft Test
                      Manager
                      <br />- Worked closely with developers to resolve any
                      identified bugs
                      <br />- Evaluated and tested all internal applications for
                      IT corporate and accounting groups.
                      <br />- Created automated test scripts for several
                      applications using the Selenium framework.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    June 2015 - August 2015
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                      IT Intern
                    </Typography>
                    <Typography>EverBank</Typography>
                    <Typography>
                      - Created documentation for Development and QA groups
                      <br />- Developed an understanding of Everbank’s SDLC
                      <br />- Mentored with QA analysts to test various
                      development updates
                      <br />- Partnered with co-workers to discuss department
                      and individual goals{" "}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              {/* Add more TimelineItems for additional work history */}
            </Timeline>
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    January 2015 - April 2018
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                      University of North Florida
                    </Typography>
                    <Typography>
                      Bachelors Degree of Information Technology
                    </Typography>
                    <img
                      src={unfLogo}
                      alt="My Image"
                      className="circle-image"
                    />
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    January 2012 - December 2014
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                      Florida State College of Jacksonville
                    </Typography>
                    <Typography>Associates Degree</Typography>
                    <img
                      src={fscjLogo}
                      alt="My Image"
                      className="circle-image"
                    />
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                className="download-button"
                variant="contained"
                color="primary"
                startIcon={<PictureAsPdf />}
                href={resume}
                download="Resume.pdf"
              >
                Download Resume
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

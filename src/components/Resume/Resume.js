import "./Resume.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
  Button,
  Container,
  Paper
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import unfLogo from "../../assets/images/unf-logo.jpg";
import fscjLogo from "../../assets/images/fscj-logo.png";
import resume from "../../assets/resume_austinneveau.pdf";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function SkillChips({ icon, title, skills }) {
  return (
    <Card className="skillBox">
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {icon}
          <Typography variant="h5" component="div" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
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
    <div data-aos="fade-up" id="resumeSection" className="section">
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
          Resume & Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <SkillChips
              icon={<DeveloperModeIcon sx={{ fontSize: 40 }} />}
              title="Front End"
              skills={frontEndSkills}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SkillChips
              icon={<CodeIcon sx={{ fontSize: 40 }} />}
              title="Back End"
              skills={backEndSkills}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SkillChips
              icon={<TerminalIcon sx={{ fontSize: 40 }} />}
              title="DevOps & Tools"
              skills={devOpsSkills}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Work History
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                March 2021 - Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6">Lead Software Developer</Typography>
                  <Typography variant="subtitle1" gutterBottom>EverBank</Typography>
                  <Typography variant="body2">
                    - Coordinated weekly production deployments, reducing delays by 40%.<br />
                    - Managed deployment pipeline with Netlify, reducing build times by 30%.<br />
                    - Built internal content plugin, saving 5 hours of developer time per week on average.<br />
                    - Mentored a team of 5 developers.<br />
                    - Maintained critical OpenShift APIs with 99.8% uptime.<br />
                    - Member of the Core AI team.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                March 2016 - March 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6">Senior Software Developer</Typography>
                  <Typography variant="subtitle1" gutterBottom>TIAA Bank</Typography>
                  <Typography variant="body2">
                    - Experience with RESTful and SOAP APIs.<br />
                    - Managed monthly releases for the client acquisition team.<br />
                    - Designed SPA applications in .NET C# and Angular.<br />
                    - Built multiple ETL pipelines.<br />
                    - Triaged and resolved vulnerabilities using Veracode.<br />
                    - Maintained 70% code coverage.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                August 2015 - March 2016
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6">QA Analyst</Typography>
                  <Typography variant="subtitle1" gutterBottom>EverBank</Typography>
                  <Typography variant="body2">
                    - Wrote and maintained test scripts, reducing production bugs by 40%.<br />
                    - Built automated tests with Selenium, reducing manual testing time by 8 hours a week.<br />
                    - Performed application testing and quality assurance.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Education
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2015 - 2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6">University of North Florida</Typography>
                  <Typography variant="subtitle1">B.S. Information Technology</Typography>
                  <img src={unfLogo} alt="UNF Logo" className="school-logo" />
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                2012 - 2014
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="timeline-paper">
                  <Typography variant="h6">Florida State College of Jacksonville</Typography>
                  <Typography variant="subtitle1">A.A. Degree</Typography>
                  <img src={fscjLogo} alt="FSCJ Logo" className="school-logo" />
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdf />}
            href={resume}
            download="Resume.pdf"
            sx={{ borderRadius: '20px', padding: '10px 30px' }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </div>
  );
}

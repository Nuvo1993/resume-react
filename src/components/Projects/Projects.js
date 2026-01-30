import "./Projects.css";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import everbankSite_IMG from "../../assets/images/everbank-site.png";
import nuvodrawsSite_IMG from "../../assets/images/nuvodraws-site.png";
import leafsAdventure_IMG from "../../assets/images/leafsAdventure.png";
import internal_IMG from "../../assets/images/internal.png";

export default function Projects() {
  AOS.init();
  return (
    <div data-aos="fade-up" id="projectsSection" className="secondarySection">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 176 }}
                image={everbankSite_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  EverBank
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  EverBank Bank is an online bank that provides personal
                  banking, investing, and lending solutions for individuals and
                  businesses. Its website, everbank.com, serves as a platform
                  for customers to access their accounts, manage their finances,
                  and apply for banking services.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href="https://www.everbank.com/">EverBank.com</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 176 }}
                image={nuvodrawsSite_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Art Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  My personal website and online art portfolio. The website
                  showcases my art work and skills in web development, design,
                  and branding. It also provides a means for potential clients
                  to contact me for freelance work or collaboration
                  opportunities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 191 }}
                image={leafsAdventure_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Leafs Adventure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leafs Adventure was a mobile platformer game I developed for
                  unity as a senior project in college. This was a really
                  enjoyable programming experience for me as gaming has always
                  been a hobby of mine. The game was inspired by classic games
                  like Super Mario bros and the Legend of Zelda.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardMedia
                sx={{ height: 191 }}
                image={internal_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Internal
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A large number of the applications I have supported have been
                  internal applications. Most of these are .NET web services
                  that support the day to day business functionality. I've also
                  worked internally with Netlify, OpenShift, SQL Server, Azure DevOps,
                  TFS, Git and more.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import "./Projects.css";
import {Typography} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import tiaabankSite_IMG from "../../assets/images/tiaabank-site.png";
import nuvodrawsSite_IMG from "../../assets/images/nuvodraws-site.png";
export default function Projects() {
  AOS.init();
  return (
    <div data-aos="fade-up" id="projectsSection" className="secondarySection">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 176 }}
                image={tiaabankSite_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  TIAA Bank
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href="https://www.tiaabank.com/">TIAABANK.COM</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 176 }}
                image={nuvodrawsSite_IMG}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  austinneveauart
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href="https://www.ocala.com/story/news/education/2018/03/20/belleview-middle-teacher-scolded-for-monkey-comment/12951379007/">Nuvodraws</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="../../../assets/images/DB9A0086.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Leafs Adventure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">tiaabank.com</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image="../../../assets/images/DB9A0086.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">tiaabank.com</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

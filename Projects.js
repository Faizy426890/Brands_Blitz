import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.jpg";
import projImg2 from "../assets/img/p2.jpg";
import projImg3 from "../assets/img/p3.jpg";
import projImg4 from "../assets/img/p4.jpg";
import projImg5 from "../assets/img/p10.jpg";
import projImg6 from "../assets/img/p9.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "",
      description: "",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>START PROMOTING YOUR MUSIC</h2>
                <p>
                The satisfaction of our clients is paramount. We go above and beyond to exceed their expectations and deliver exceptional service. Our dedication to client satisfaction fosters trust and long-term partnerships.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                      Our relationship with clients doesn't end after a campaign or project concludes. We provide ongoing support and guidance, helping artists navigate the ever-evolving music landscape and stay ahead of the curve.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

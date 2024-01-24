import React from "react";
import img from "../../images/theme2.webp";
import "./Pages.scss";
import { Container,Grid } from "@mui/material";
import Layout from "../Layout";
import img2 from "../../images/pokhara.jpg";
import SinglePageDetail from "../Components/SinglePageDetail";
import Mainbutton from "../Components/Buttons/Mainbutton";
import StarIcon from '@mui/icons-material/Star';

const SinglePage = () => {
  return (
    <>
      <Layout>
        <div className="aboutus--container">
          <Container>
            <div className="aboutus--content">
              <h1 className="pages--header">Pokhara , Nepal</h1>
              <p className="pages--subheader">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <div className="singlepage--contents">
            <div className="review--booking">
                
                        <div className="place--title">
                            <p>Pokhara,Nepal</p>
                        </div>
                   
                 
                        <div style={{alignItems:'center',display:'flex'}} className="place--review">
                             <StarIcon style={{color:'#fd7e14',fontSize:'30px'}}/>
                             <StarIcon style={{color:'#fd7e14',fontSize:'30px'}}/>
                             <StarIcon style={{color:'#fd7e14',fontSize:'30px'}}/>
                             <p style={{margin:'0px',color:'gray'}}>(2)</p>
                          
                        </div>
                  
                
                        <Mainbutton value='Book Now'/>
                   
                
            </div>
            <SinglePageDetail />
            <div className="singlepage--img--container">
              <img src={img2} />
           
            <div className="singlepage--content--info">
              <p>
                Amet orci, nibh blanditiis tempor soluta bibendum, omnis
                dictumst eiusmod felis mollis porta molestiae, laborum fugiat,
                phasellus minim labore habitasse culpa dignissimos? Distinctio
                molestias! Incididunt pede nostra mollit quam quaerat voluptas
                similique accumsan quae accusantium aliqua illum faucibus amet
                voluptatum natoque sodales. Proident facilisis, atque impedit
                ullam recusandae ducimus quisquam faucibus dolorum nibh neque
                libero, laudantium harum labore facilis proident nec doloribus
                netus. Posuere accusamus nam repudiandae, tincidunt! Id
                doloribus tempus potenti adipiscing deleniti nemo! Vel, tortor
                eiusmod omnis molestie sint quisque mollitia molestiae et!
                Veniam mollitia adipisci, anim eligendi? Turpis laborum leo
                quisque eos! Suspen sectetuer proident ex nostrud, ratione. Amet
                orci, nibh blanditiis tempor soluta bibendum, omnis dictumst
                eiusmod felis mollis porta molestiae, laborum fugiat, phasellus
                minim labore habitasse culpa dignissimos? Distinctio molestias!
                Incididunt pede nostra mollit quam quaerat voluptas similique
                accumsan quae accusantium aliqua illum faucibus amet voluptatum
                natoque sodales. Laboris justo dolorem deserunt consectetur
                ultricies tortor cum tenetur ducimus occaecati imperdiet enim
                mus ab arcu. Taciti euismod metpus!
              </p>
            </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default SinglePage;

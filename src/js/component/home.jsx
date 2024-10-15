import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";

//create your first component
const Home = () => {
  const values = [
    {
      title: "Card title",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sapien nullam, sollicitudin tristique ligula fringilla porta libero viverra dapibus eleifend, ut eros suspendisse faucibus hac varius ante hendrerit.",
      image:
        "https://images-ext-1.discordapp.net/external/cMxDyJRmvZ0I8jWKQx1JdTn1pzvB3PQJBEPdi1_mqCE/%3Fq%3Dtbn%3AANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q%26s/https/encrypted-tbn0.gstatic.com/images?format=webp&width=348&height=226",
    },
    {
      title: "Card title",
      content:
        "Torquent feugiat dignissim curae quisque taciti arcu class ante, integer neque pulvinar eget cursus dui rhoncus quis ullamcorper, vitae dapibus semper facilisi litora aptent posuere.",
      image:
        "https://images-ext-1.discordapp.net/external/cMxDyJRmvZ0I8jWKQx1JdTn1pzvB3PQJBEPdi1_mqCE/%3Fq%3Dtbn%3AANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q%26s/https/encrypted-tbn0.gstatic.com/images?format=webp&width=348&height=226",
    },
    {
      title: "Card title",
      content:
        "Litora aptent sollicitudin quam tincidunt mollis ac at nam mattis, feugiat commodo platea varius penatibus metus tempus.",
      image:
        "https://images-ext-1.discordapp.net/external/cMxDyJRmvZ0I8jWKQx1JdTn1pzvB3PQJBEPdi1_mqCE/%3Fq%3Dtbn%3AANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q%26s/https/encrypted-tbn0.gstatic.com/images?format=webp&width=348&height=226",
    },
    {
      title: "Card title",
      content: "Fames nisl porta platea urna vulputate massa ligula vivamus.",
      image:
        "https://images-ext-1.discordapp.net/external/cMxDyJRmvZ0I8jWKQx1JdTn1pzvB3PQJBEPdi1_mqCE/%3Fq%3Dtbn%3AANd9GcT4ByS9ZYbtouvFYRybSm_6em1Dn_7vlBic-Q%26s/https/encrypted-tbn0.gstatic.com/images?format=webp&width=348&height=226",
    },
  ];
  return (
    <div style = {{width: "100%", height: "100%"}}>
    <nav className="navbar bg-dark"  style = {{width: "100%", padding: "10px 94px 10px 105px"}}>
        <div className="container-fluid">
          
        <a className="navbar-brand" href="#"> 
          <span  style = {{width: "30", height: "24"}} className="d-inline-block align-text-top text-light">
          Start Bootstrap
            </span>
        </a>
        <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Contact</a>
        </li>
      </ul>
      </div>
      </nav>
      <div className="container">
      <div className="bg-light p-5 rounded-lg">
      <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
      <p className="lead text-dark">Lorem ipsum dolor sit amet consectetur adipiscing elit sapien nullam, sollicitudin tristique ligula fringilla porta libero viverra dapibus eleifend, ut eros suspendisse faucibus hac varius ante hendrerit.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
    <div className="py-3 text-center d-flex gap-5 ">
      {values.map((postcard) => {
        return (
          <Card
            title={postcard.title}
            content={postcard.content}
            image={postcard.image}
          />
        );
      })}
          </div>
      </div>
      <footer>
    <div className="row bg-dark">
        <div className="col-lg-12">
            <p className="text-light text-center"style = {{paddingTop: "70px"}}>Copyright &copy; Your Website 2019</p>
        </div>
    </div>
</footer>
    </div>
  );
};

export default Home;

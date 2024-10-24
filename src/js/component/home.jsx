import React from "react";

//include images into your bundle
import Card from "./card.jsx";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

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
    <div style={{ width: "100%", height: "100%" }}>
      <Navbar />
      <div className="container">
        <Content />
        <div className="row my-4">
          {values.map((postcard, index) => (
            <div className="col-md-3 d-flex justify-content-center" key={index}>
              <Card title={postcard.title} content={postcard.content} image={postcard.image} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

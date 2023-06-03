import React from "react";
import shape1 from "../assets/shape_1-1.png";
import grow from "../assets/img_2.png";

function SectionTwo() {
  return (
    <div className="container-fluid section-2-wrapper">
      <div className="section-2-under-wrapper">
        <div className="section-one-bg-design">
          <div className="bg-design circul s-2-1"></div>
        </div>
        <div className="container ">
          <div className="section-2-shape">
            <img className="section-2-shape-1" src={shape1} alt="" />
          </div>
          <h1 className="text-center">
            Want to grow your business <br /> <span>with us</span>
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                illum hic repellat ipsam deleniti ut molestias, voluptates
                reprehenderit omnis iste, dignissimos, atque doloribus. Amet,
                debitis a. Dolore porro sequi ut delectus impedit labore, et,
                molestias corrupti corporis a nulla voluptates? Facere rerum est
                ratione pariatur at illum ad voluptatem corrupti omnis fugiat
                obcaecati dolore commodi, doloribus voluptas dolor? Iste cumque
                nesciunt ea iusto impedit unde totam laborum voluptates,
                obcaecati consequatur suscipit libero? Quam totam fugiat ad
                laudantium error neque quis unde quibusdam sunt adipisci
                recusandae similique ipsum inventore sit perferendis alias id,
                impedit iure labore expedita delectus non at officiis!
              </p>
            </div>
            <div className="col-md-6">
              <div>
                <img src={grow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;

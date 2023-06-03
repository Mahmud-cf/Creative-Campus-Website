import React from "react";
import titlebg from "../assets/yellow-bg.png";
import workProcess from '../assets/work-process.png'

function SectionThree_WorkProcess() {
  return (
    <div className="container-fluid work-process-wrapper">
        <div className="s-3-1 testimonial-shape"></div>
      <div className="container">
        <div className="section-title text-center">
          <h1>
            Our Work <span>Process </span>
          </h1>
          
          <img className="title-bg" src={titlebg} alt="" />
        </div>
        <div className="work-process-area">
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={workProcess} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="work-process-main-part">
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>1</p></div>
                            <div>
                                <h4>Research</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus iusto neque quam, atque quasi in officia animi libero cum voluptatibus sit molestias dolorum quo. Quos doloribus nam ducimus eaque impedit possimus, illo optio commodi ad, officiis incidunt! Voluptatem, quis quia.</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>2</p></div>
                            <div>
                                <h4>Design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum unde sequi distinctio a, obcaecati excepturi, ab tenetur facere placeat cupiditate, dolorem quaerat saepe animi consequatur vero vel rerum? Dignissimos, laboriosam accusantium? Alias iusto tempore, laudantium aperiam quibusdam excepturi ab.</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>3</p></div>
                            <div>
                                <h4>Building</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore eum non consequuntur esse iste nostrum voluptatum alias soluta saepe, sit molestiae, id dolore quia officia a provident repellendus sint repudiandae reprehenderit, odit quis et ad maiores! Fugiat voluptatum distinctio maxime!</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>4</p></div>
                            <div>
                                <h4>Deliver</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti accusantium commodi, non hic numquam blanditiis. Totam facilis, aut laborum officiis voluptatum voluptatibus sapiente maxime incidunt repellat quam dolorem. Vel enim sed, repellendus veniam quas quam consectetur nemo hic assumenda!</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree_WorkProcess;

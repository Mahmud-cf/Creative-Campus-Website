import React from "react";
import titlebg from "../assets/yellow-bg.png";
import workProcess from '../assets/workProcess.gif'

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
                <div className="col-md-6 text-center">
                    <img className="img-fluid" src={workProcess} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="work-process-main-part">
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>1</p></div>
                            <div>
                                <h4>Research</h4>
                                <p>The first step in any project is to conduct research to gain a deeper understanding of the problem or opportunity at hand. This may involve conducting market research, analyzing user needs, or researching the latest trends in your industry. This information will inform the design and development of your project.</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>2</p></div>
                            <div>
                                <h4>Design</h4>
                                <p>Based on the insights gained during the research phase, the next step is to create a design for the project. This may involve developing sketches, creating wireframes, or producing high-fidelity designs using design software. The design should be focused on meeting the needs and desires of the target audience while also achieving the goals of the project.</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>3</p></div>
                            <div>
                                <h4>Building</h4>
                                <p>Once the design is finalized, the development phase can begin. This involves building the project using the appropriate tools and technologies. This may involve coding, prototyping, or producing content for the project. The development phase is where the project starts to take shape and become a tangible product.</p>
                            </div>
                        </div>
                        <div className="work-process-single-part">
                            <div className="work-process-number" ><p>4</p></div>
                            <div>
                                <h4>Deliver</h4>
                                <p>Once the project has been tested and refined, it's time to deliver it to the client or end-users. This may involve launching a website, publishing a report, or rolling out a new product or service. Delivery is the final step in the process, but it's important to continue to monitor and refine the project as needed.</p>
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

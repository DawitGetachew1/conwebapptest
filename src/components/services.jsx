import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>CAD DRAFTING SERVICES</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <>
                  {/* Add a new heading after the 6th service */}
                  {i === 9 && (
                    <div className="col-md-12">
                      <h2>3D Modeling Services</h2>
                    </div>
                  )}
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

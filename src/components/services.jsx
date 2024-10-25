import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What Services We Offered</h2>
          <p>
          TiruSera specializes in a wide range of AutoCAD drafting and 3D modeling services:
          </p>
        </div>
        <div className="row">
        <h3>AutoCAD Drafting Services</h3>
          {props.data
            ? props.data.map((d, i) => (
                <>
                  {/* Add a new heading after the 6th service */}
                  {i === 9 && (
                    <div className="col-md-12">
                      <h3>3D Modeling Services</h3>
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

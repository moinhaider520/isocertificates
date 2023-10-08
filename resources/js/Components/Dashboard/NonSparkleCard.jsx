import React from "react";

const NonSparkleCard = ({ growth, heading, money, icon }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card top_widget">
        <div className="body">
          <div className="icon"><i className={icon}></i></div>
          <div className="content">
            <div className="text mb-2 text-uppercase">{heading}</div>
            <h4 className="number mb-0">
              {money}{" "}
              <span className="font-12 text-muted">
                <i className="fa fa-level-up"></i> {growth}%
              </span>
            </h4>
            <small className="text-muted">Analytics for last week</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonSparkleCard;


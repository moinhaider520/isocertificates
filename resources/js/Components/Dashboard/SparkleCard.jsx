import React from "react";
import EChartsReact from "echarts-for-react";

const SparkleCard = ({ seriesData, heading, money, height, perText }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card number-chart">
        <div className="body">
          <span className="text-uppercase">{heading}</span>
          <h4 className="mb-0 mt-2">{money}</h4>
          <small className="text-muted">
            {perText ? perText : 'Analytics for last week'}
          </small>
        </div>
        <EChartsReact
          option={{
            tooltip: {
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              top: 1,
              bottom: 0,
              right: 0,
              left: 0
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                  show: false
                }
              }
            ],
            yAxis: [
              {
                type: 'value',
                splitLine: { show: false },
                axisLine: {
                  show: false
                },
                axisLabel: {
                  show: false
                }
              }
            ],
            series: seriesData
          }}
          opts={{ renderer: 'svg' }} // use svg to render the chart.
          style={{ height: height, marginBottom: -6, opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

export default SparkleCard;

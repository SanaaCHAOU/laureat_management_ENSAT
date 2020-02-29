
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Stats extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div style={{backgroundColor:'#636e72'}}>
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="total users"
                statsValue={3}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="number of employees"
                statsValue={1}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Still studying"
                statsValue={1}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-light" />}
                statsText="undifined career"
                statsValue={1}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
          <Col md={12}>
              <Card
                title="Filtre Options"
                content={
                  <form>
                     <div>
                     <Col md={4}>
                     <select className="browser-default custom-select">
                        <option>Sexe</option>
                        <option value="1">F</option>
                        <option value="2">M</option>
                      </select>
                     </Col> 
                     <Col md={4}>
                     <select className="browser-default custom-select">
                        <option>Promotion</option>
                        <option value="1">2020</option>
                        <option value="2">2019</option>
                        <option value="3">2018</option>
                      </select>
                     </Col> 
                     <Col md={4}>
                     <select className="browser-default custom-select">
                        <option>Filiére</option>
                        <option value="1">BISD</option>
                        <option value="2">CYBERSECURITY</option>
                        <option value="3">Reseaux</option>
                      </select>
                     </Col> 
                     
                    </div>
                  </form>
                }
              />
            </Col>
          </Row>
          

          <Row>
            <Col md={12}>
              <Card
                id="chartActivity"
                title="Chart By statue"  
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
      </div>
    );
  }
}

export default Stats;

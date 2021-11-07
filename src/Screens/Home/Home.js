import React from "react";
import SourceDestination from "../../Components/Form/SourceDestination";
import TrainNameNumber from "../../Components/Form/TrainNameNumber";
import "./Home.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const Home = () => {
  return (
    <div className="container home_form">
      <div className="row w-100">
        <div className="col-12 mb-4">
          <h3 className="text-center">Search Train</h3>
        </div>
        <div className="col-md-6 offset-md-3">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Source/ Destination" key="1">
              <SourceDestination />
            </TabPane>
            <TabPane tab="Train Number/ Train Name" key="2">
              <TrainNameNumber />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;

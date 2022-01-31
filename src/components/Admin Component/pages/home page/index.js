import React from "react";
import FeaturedInfo from '../feactureinfo/index'
import "./home.css";
import { userData } from '../../dummydata';
import WidgetSm from "../..//widgetSm/WidgetSm";
import WidgetLg from '../../widgetLg/WidgetLg'
import Chart from '../../chart/Chart'

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
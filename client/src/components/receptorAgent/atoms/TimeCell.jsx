import * as React from "react";
import moment from "moment";

export default function TimeCell({ params }) {
  return <div>{moment(params.warblerDate).format("DD/MM/YYYY")}</div>;
}

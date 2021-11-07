import React from "react";
import { Modal } from "antd";

const Trainschedule = ({ show, onHide, data }) => {
  return (
    <Modal
      title={<h5 className="mb-0">Train Schedule</h5>}
      centered
      visible={show}
      onCancel={() => onHide()}
      footer={[]}
      width={1050}
    >
      <table className="table">
        <thead className=" bg-primary text-white">
          <tr>
            <th scope="col">Train Number</th>
            <th scope="col">Train Name</th>
            <th scope="col">From Stations</th>
            <th scope="col">Destination Station</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{data.trainNumber}</th>
            <td>{data.trainName}</td>
            <td>{data.fromStnCode}</td>
            <td>{data.toStnCode}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5 overflow-auto">
        <table className="table">
          <thead className=" bg-primary text-white">
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Station Code</th>
              <th scope="col">Station Name</th>
              <th scope="col">Arrival Time</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Halt Time(In minutes)</th>
              <th scope="col">Distance</th>
              <th scope="col">Day</th>
            </tr>
          </thead>
          <tbody>
            {data.stationList.map((val) => (
              <tr key={val.stnSerialNumber}>
                <td>{val.stnSerialNumber}</td>
                <td>{val.stationCode}</td>
                <td>{val.stationName}</td>
                <td>{val.arrivalTime}</td>
                <td>{val.departureTime}</td>
                <td>{val.haltTime}</td>
                <td>{val.distance}</td>
                <td>{val.dayCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default Trainschedule;

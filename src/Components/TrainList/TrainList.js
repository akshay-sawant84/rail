import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { railData } from "../../Constants.js/Constants";
import Trainschedule from "../TrainSchedule/Trainschedule";

const TrainList = () => {
  let navigate = useNavigate();
  const { search } = useLocation();
  let trainNameNum = new URLSearchParams(search).get("trainNameNum");
  let source = new URLSearchParams(search).get("source");
  let destination = new URLSearchParams(search).get("destination");

  const [railListData, setrailListData] = useState([]);
  const [openTimeScheduleModal, setopenTimeScheduleModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  useEffect(() => {
    if (trainNameNum || (source && destination)) {
      if (trainNameNum) {
        const data = railData.filter((val) => {
          return (
            trainNameNum === val.trainNumber ||
            val.trainName.toLowerCase().indexOf(trainNameNum.toLowerCase()) !==
              -1
          );
        });
        setrailListData(data);
      } else {
        const data = railData.filter((val) => {
          return (
            val.fromStnCode.toLowerCase().indexOf(source.toLowerCase()) !==
              -1 &&
            val.stationList.find(
              (val) =>
                val.stationName
                  .toLowerCase()
                  .indexOf(destination.toLowerCase()) !== -1
            )
          );
        });
        setrailListData(data);
      }
    } else {
      navigate("/");
    }
  }, []);

  const _onClickSchedule = (val) => {
    setmodalData(val);
    setopenTimeScheduleModal(true);
  };

  return (
    <>
      {railListData.length > 0 ? (
        <>
          {source && (
            <div className="row mx-2 mx-md-0 mt-4 mb-3">
              <div className="col-12">
                <p>
                  {railListData.length} Results for{" "}
                  <h6 className="mb-0 d-inline">{source}</h6> &rarr;{" "}
                  <h6 className="mb-0 d-inline">{destination}</h6>
                </p>
              </div>
            </div>
          )}
          {railListData.map((val) => (
            <div className="card my-3" key={val.id}>
              <div className="row card-header align-items-center mx-2 mx-md-0">
                <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
                  <h4 className="mb-0 text-center">
                    {val.trainName} ({val.trainNumber})
                  </h4>
                </div>
                <div className="col-md-6 d-flex justify-content-md-end justify-content-center mt-2 mt-md-0">
                  <button
                    className="btn btn-primary"
                    onClick={() => _onClickSchedule(val)}
                  >
                    Train Schedule
                  </button>
                </div>
              </div>
              <div className="row my-3 mx-2 mx-md-0 px-3">
                <div className="col-md-5 d-flex align-items-center">
                  <h5 className="mb-0">
                    {val.departureTime} |{" "}
                    <span className="font-weight-normal">
                      {val.fromStnCode}
                    </span>
                  </h5>
                </div>
                <div className="col-md-2 my-2 my-md-0 d-flex align-items-center justify-content-md-center justify-content-start">
                  <span className="mr-2">&#8213;</span> {val.duration}{" "}
                  <span className="ml-2">&#8213;</span>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-start justify-content-md-end mt-2 mt-md-0">
                  <h5 className="mb-0">
                    {val.arrivalTime} |{" "}
                    <span className="font-weight-normal">{val.toStnCode}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h3 className="my-5 text-center">No Data Found</h3>
      )}
      {openTimeScheduleModal && modalData && (
        <Trainschedule
          show={openTimeScheduleModal}
          onHide={() => setopenTimeScheduleModal(false)}
          data={modalData}
        />
      )}
    </>
  );
};

export default TrainList;

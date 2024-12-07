import { EditPanPage } from "./EditPan/EditPan";
import { ViewPanPage } from "./ViewPan/ViewPan";

import { useEffect, useState } from "react";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { getPanDetailsHandler } from "../apiHandler";
import { Spinner } from "react-bootstrap";

export const PanPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const [panDetails, setPanDetails] = useState(null);
  const [isUpdated, setIsUpdated] = useState(0);

  useEffect(() => {
    const fetchPanDetails = async () => {
      const response = await getPanDetailsHandler(setIsLoading, showAlert);

      if (response) {
        setPanDetails({
          pan: response.pan,
          userInfo: response.userInfo,
        });
      }
    };

    fetchPanDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated]);

  if (isLoading) {
    return (
      <>
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Pan Details...</h4>
        </div>
      </>
    );
  }
  

  // Render EditpanPage for null, Pending, or Rejected statuses
  if (
    !panDetails ||
    panDetails.pan === null ||
    ["Pending", "Rejected",''].includes(panDetails.pan.panStatus)
  ) {
    return <EditPanPage panDetails={panDetails} />;
  }

  // Render ViewpanPage for Approved or other valid statuses
  return <ViewPanPage panDetails={panDetails} setIsUpdated={setIsUpdated} />;
};

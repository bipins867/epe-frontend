import { useEffect, useState } from "react";
import { EditKycPage } from "./EditKyc/EditKyc";
import { ViewKycPage } from "./ViewKyc/ViewKyc";
import { useAlert } from "../../../../../../../UI/Alert/AlertContext";
import { getKycDetailsHandler } from "../apiHandler";
import { Spinner } from "react-bootstrap";

export const KycPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showAlert } = useAlert();
  const [kycDetails, setKycDetails] = useState(null);
  const [isUpdated, setIsUpdated] = useState(0);

  useEffect(() => {
    const fetchKycDetails = async () => {
      const response = await getKycDetailsHandler(setIsLoading, showAlert);

      if (response) {
        setKycDetails({
          kyc: response.kyc,
          userInfo: response.userInfo,
        });
      }
    };

    fetchKycDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated]);

  if (isLoading) {
    return (
      <>
        <div className="loading-screen text-center">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h4 className="loading-text">Fetching Kyc Details...</h4>
        </div>
      </>
    );
  }

  // Render EditKycPage for null, Pending, or Rejected statuses
  if (
    !kycDetails ||
    kycDetails.kyc === null ||
    ["Pending", "Rejected"].includes(kycDetails.kyc.status)
  ) {
    return <EditKycPage kycDetails={kycDetails} />;
  }

  // Render ViewKycPage for Approved or other valid statuses
  return <ViewKycPage kycDetails={kycDetails} setIsUpdated={setIsUpdated} />;
};

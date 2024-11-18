import { useParams } from "react-router-dom";

export const TicketInfoPage = () => {
  const { ticketName } = useParams();
  return (
    <>
      <h1>TicketInfoPage : {ticketName}</h1>
    </>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { CardsPage } from "./Cards/Cards";
import { CardsProfilePage } from "./CardProfile/CardProfile";

export const CardInfoPage = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<CardsPage />} />
        <Route path="type/:title" element={<CardsProfilePage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
    </>
  );
};

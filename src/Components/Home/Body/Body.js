import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./HomeScreen/HomeScreen";
import { Legality } from "./Legality/Legality";
import { User } from "./User/User";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="legality/*" element={<Legality />} />
        <Route path="user/*" element={<User />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

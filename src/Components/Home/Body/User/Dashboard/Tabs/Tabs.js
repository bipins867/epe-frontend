import { DesktopView } from "./DesktopView/DesktopView";
import { MobileView } from "./MobileView/MobileView";

export const TabsView = ({ tabs, activeTab, isMobileView }) => {
  return isMobileView ? (
    <MobileView tabs={tabs} activeTab={activeTab} />
  ) : (
    <DesktopView tabs={tabs} activeTab={activeTab} />
  );
};

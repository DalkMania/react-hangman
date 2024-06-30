import { useContext } from "react";
import { AppContext, GlobalContext } from "../context/GlobalState";

const Notification = () => {
  const { showNotification } = useContext(GlobalContext) as AppContext;

  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = () => {
  toast.info("Success Notification !", {
    position: toast.POSITION.TOP_CENTER,
  });
};

import { toast } from 'react-toastify';

const Toastify = (msg) => {
toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
};
export default Toastify
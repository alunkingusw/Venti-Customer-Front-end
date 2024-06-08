import { toast } from "react-toastify";

export function Success(message) {
    toast.success(message, {
    });
}
export function Error(message){
    toast.error(message);
}
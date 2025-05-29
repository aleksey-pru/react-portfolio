import axios from "axios";
import toast from "react-hot-toast";
axios.defaults.baseURL = "https://6814732b225ff1af1628de21.mockapi.io/";

export const addInfoFromForm = async ({ email, message }) => {
  try {
    const response = await axios.post("/form_feedback", { email, message });
    toast.success("Form successfully submitted");
    return response.data;
  } catch (error) {
    toast.error("Sorry, request error!");
    console.log(error);
  }
};

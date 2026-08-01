import { useEffect } from "react";
import { InterviewService } from "../services";

const TestApi = () => {
  useEffect(() => {
    InterviewService.getDashboard()
      .then((response) => {
        console.log("Dashboard:", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <h1>Testing API...</h1>;
};

export default TestApi;
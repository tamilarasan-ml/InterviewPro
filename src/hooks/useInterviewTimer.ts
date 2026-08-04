import { useEffect } from "react";

import { useInterview } from "./useInterview";

const useInterviewTimer = () => {
  const {
    status,
    isRunning,
    timeRemaining,
    tickTimer,
    finishInterview,
  } = useInterview();

  useEffect(() => {
    if (
      status !== "running" ||
      !isRunning
    ) {
      return;
    }

    if (timeRemaining <= 0) {
      finishInterview();
      return;
    }

    const timer = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, [
    status,
    isRunning,
    timeRemaining,
    tickTimer,
    finishInterview,
  ]);
};

export default useInterviewTimer;
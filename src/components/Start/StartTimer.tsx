import React, { useState, useEffect, FC } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useUnlock } from "../../utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { StartTimerMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  timeCounter: {
    fontSize: "100px",
    color: "#61dafb",
  },

  questionIcon: {
    color: "#61dafb",
  },

  redButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#ff0000, #333)",
      borderColor: "#ff0000",
    },
  },

  greenButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#adff2f, #333)",
      borderColor: "#adff2f",
    },
  },
});

const Completionist = () => <span>You are good to go!</span>;

type Props = {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
};

const renderer: FC<Props> = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

let getLocalStorageValue = (s: any) => localStorage.getItem(s);

const StartTimer = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //Milliseconds
  );
  const wantedDelay = 86400000; //Milliseconds
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_TWO}`);
  };

  useUnlock(`${PromptMessages.PASS}`, true);

  const [enableButton, setEnableButton] = useState(true);

  const handleEnable = () => {
    setEnableButton(false);
  };

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > wantedDelay) {
        // @ts-ignore: Object is possibly 'null'.
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div>
      <div>
        <h1>{StartTimerMessages.TITLE}</h1>
      </div>
      <span className={css(styles.timeCounter)}>
        <Countdown
          date={data.date + data.delay}
          renderer={renderer}
          onStart={(delta) => {
            if (localStorage.getItem("end_date") == null)
              localStorage.setItem(
                "end_date",
                JSON.stringify(data.date + data.delay)
              );
          }}
          onComplete={() => {
            if (localStorage.getItem("end_date") != null)
              localStorage.removeItem("end_date");
          }}
        />
      </span>
      <p>
        {StartTimerMessages.HINT}
        <BsFillPatchQuestionFill
          onClick={handleEnable}
          className={css(styles.questionIcon)}
        />
      </p>
      {enableButton ? (
        <button className={css(styles.redButton)} onClick={handleEnable}>
          {StartTimerMessages.BUTTON}
        </button>
      ) : (
        <button className={css(styles.greenButton)} onClick={routeChange}>
          {StartTimerMessages.BUTTON}
        </button>
      )}
    </div>
  );
};

export default StartTimer;

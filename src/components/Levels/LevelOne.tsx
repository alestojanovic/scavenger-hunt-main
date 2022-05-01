import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useLock } from "../../utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { LevelOneMessages, PromptMessages } from "../../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      background: "linear-gradient(#272727, #333)",
    },

    "::selection": { background: "transparent" },
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

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };

  useLock(`${PromptMessages.DENY}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <button
        className={css(styles.unlockButton)}
        onClick={handleUnlockNavigation}
      >
        {" "}
        {LevelOneMessages.UNLOCK}{" "}
      </button>

      <h3>{LevelOneMessages.HINT}</h3>

      <button
        className={css(
          unLockNavigation ? styles.redButton : styles.greenButton
        )}
        onClick={routeChange}
      >
        {" "}
        {LevelOneMessages.CONTINUE}{" "}
      </button>
    </div>
  );
};

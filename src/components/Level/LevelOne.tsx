import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../stories/headers";
import {
  PrimaryButton,
  SkipButton,
  UnlockButton,
} from "../../stories/buttons/";
import { useLockNoPrompt, useLockPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes, featFlags } from "../../flags";
import {
  DefaultMessages,
  LevelOneMessages,
  PromptMessages,
} from "../../Messages";

export const LevelOne = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  modes.promptMode
    ? useLockPrompt(`${PromptMessages.DEFAULT}`, unLockNavigation)
    : useLockNoPrompt(unLockNavigation);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_QUIZ_TWO}`);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <UnlockButton
        onClick={handleUnlockNavigation}
        label={LevelOneMessages.UNLOCK}
      />

      {featFlags.test && <Title label={LevelOneMessages.HINT} />}

      <PrimaryButton
        onClick={routeChange}
        primary={unLockNavigation}
        size={"small"}
        label={LevelOneMessages.CONTINUE}
      />
      {modes.skipMode && (
        <SkipButton
          onClick={handleUnlockNavigation}
          label={DefaultMessages.SKIP_LEVEL}
        />
      )}
    </div>
  );
};

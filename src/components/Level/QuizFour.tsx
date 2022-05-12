import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../stories/forms/QuizForm/QuizForm";
import { useLockNoPrompt, useUnlockNoPrompt } from "../../utils/utils";
import { PrivateRoutes } from "../../PrivateRoutes";
import { modes } from "../../flags";
import { DefaultMessages } from "../../Messages";
import { PrimaryButton, SkipButton } from "../../stories/buttons";
import { questionSetFour } from "../../QuizSets";

export const QuizFour = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);
  const [skip, setSkip] = useState(true);

  skip ? useLockNoPrompt(unLockNavigation) : useUnlockNoPrompt(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_END_CLASSIC}`);
  };

  const routeSkip = () => {
    navigate(`${PrivateRoutes.PARAM_START_TIMER}`);
  };

  const handleSkip = () => {
    setSkip(false);
  };

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <>
      <PrimaryButton
        onClick={skip ? routeChange : routeSkip}
        primary={skip && unLockNavigation}
        size={"small"}
        label={DefaultMessages.CONTINUE_BUTTON}
      />
      <Quiz questions={questionSetFour} handleUnlock={handleUnlockNavigation} />
      {modes.skipMode && (
        <SkipButton onClick={handleSkip} label={DefaultMessages.SKIP_QUIZ} />
      )}
    </>
  );
};

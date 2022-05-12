# Fun project to try out!

## The idea

This is an interactive web application which is designed to limit users to doing things in certain way while preventing them to skip any steps. You should be aware that confusing user experience is **intended** and not a design flaw. Frustration is part of the game just as much as it is part of programming.

## Gameplay

Since the game is targeting people who are learning computer science it is highly encouraged to use any developer tools and techniques to find the hidden elements of the game. Best advice I can give you is to use inspect element and all browser functionality it has to offer, and to practice persistence at solving the task at hand. Further development of the game will focus more on actual debugging skills and computer science knowledge.

## Running the project locally

In case you would like to try it out locally, you will need to make PrivateRoutes.ts file in your source folder and set up your routes there, or just 'fix' App.tsx and hardcode the url parameters in `<Route>` path.

---

`PrivateRoutes.ts` template

```
import { crypt } from "./utils/cryptoLib";

export const PrivateRoutes = {
  PARAM_START_TIMER: "/",
  PARAM_LEVEL_ONE: "/levelOne",
  PARAM_LEVEL_TWO: "/levelTwo",
  PARAM_LEVEL_THREE: "/levelThree",
  PARAM_LEVEL_FOUR: "/levelFour",
  PARAM_QUIZ_ONE: "/quizOne",
  PARAM_QUIZ_TWO: "/quizTwo",
  PARAM_QUIZ_THREE: "/quizThree",
  PARAM_QUIZ_FOUR: "/quizFour",
  PARAM_END_CLASSIC: "/stepEndClassic",
  TEST: "/test",
  PARAM_404: "*",
};

export const SecretAnswers = {
  ANSWER_ONE: "",
  ANSWER_TWO: crypt("salt", ""),
};

```

---

When this issue is dealt with your project will start with `yarn start` command, and if you want storybook then use `yarn storybook`.

## Development path

- [x] Setup Router, PrivateRoutes and Navigation
- [x] Create persistent countdown timer, Logic, and Styling for Level 1
- [x] Create Logic and Styling for Level 2
- [x] Create Logic and Styling for Level 3
- [x] Restructure the project to have better code quality and architecture
- [x] Migrate CSS to JSS and change package manager to yarn
- [x] Security patch for found vulnerabilities
- [x] New version of gameplay for all Stages
- [x] Create Logic and Styling for Level 4
- [x] Create Logic and Styling for Level 5
- [x] Implement Storybook and export/import all components
- [x] Create themes with useContext API and persist them with localStorage
- [x] Add 404 page
- [ ] Migrate completely to TypeScript
- [ ] Write/Finish tests

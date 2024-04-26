import { render } from "react-dom";
import {
  ShadowDomContainer,
  EmotionShadowDomContainer,
} from "./ShadowDomContainer";
import { css } from "@emotion/css";
import { Emotion } from "@emotion/css/create-instance";
import { Button } from "@skbkontur/react-ui";
import { StyleContainer } from "@skbkontur/react-ui/lib/theming/StyleContainer";

function App() {
  return (
    <div
      className={css`
        background-color: wheat;
        height: calc(100vh - 40px);
        width: calc(100vw - 40px);
        margin: 20px;
        padding: 10px;
      `}
    >
      <div
        className={css`
          background-color: rebeccapurple;
          color: white;
          padding: 10px;
        `}
      >
        Just a regular component outside of any Shadow DOMs
      </div>
      {/* One component inside a shadow Dom: */}
      <EmotionShadowDomContainer>
        {(emotion: Emotion) => (
          <div
            className={emotion.css`
              background-color: green;
              padding: 30px;
              font-size: 20px;
              color: white;
            `}
          >
            I am styled in shadow DOM
          </div>
        )}
      </EmotionShadowDomContainer>
      {/* Another component inside a shadow Dom: */}
      <EmotionShadowDomContainer>
        {(emotion: Emotion) => (
          <div
            className={emotion.css`
              background-color: blue;
              padding: 30px;
              font-size: 20px;
              color: white;
            `}
          >
            I am also styled in shadow DOM
          </div>
        )}
      </EmotionShadowDomContainer>
      <Button>React UI without containers</Button>
      <ShadowDomContainer>
        <Button>React UI without style container</Button>
      </ShadowDomContainer>
      <ShadowDomContainer>
        <StyleContainer>
          <Button>React UI with style container</Button>
        </StyleContainer>
      </ShadowDomContainer>
      <div>Regular text outside shadow DOM.</div>
    </div>
  );
}

render(<App />, document.getElementById("root"));

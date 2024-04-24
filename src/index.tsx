import { render } from "react-dom";
import ShadowDomContainer from "./ShadowDomContainer";
import { css } from "@emotion/css";
import { Emotion } from "@emotion/css/create-instance";

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
      <ShadowDomContainer>
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
      </ShadowDomContainer>
      {/* Another component inside a shadow Dom: */}
      <ShadowDomContainer>
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
      </ShadowDomContainer>
      Regular text outside shadow DOM.
    </div>
  );
}

render(<App />, document.getElementById("root"));

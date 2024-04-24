import React, { ReactNode, useState } from "react";
import root from "react-shadow";
import createEmotion, { Emotion } from "@emotion/css/create-instance";

// Define custom location to insert Emotion styles (instead of document head)
// From: https://emotion.sh/docs/cache-provider

const ShadowDomContainer = ({
  children,
}: {
  children: (emotion: Emotion) => ReactNode;
}) => {
  const [emotion, setEmotion] = useState<any | null>(null);

  function setEmotionStyles(ref: HTMLDivElement) {
    if (ref && !emotion) {
      setEmotion(
        createEmotion({
          key: "emotion-style-container",
          container: ref,
        }),
      );
    }
  }

  function setShadowRefs(ref: HTMLDivElement) {
    setEmotionStyles(ref);
  }

  return (
    <root.div>
      <div data-key="emotion-style-container" ref={setShadowRefs} />
      {emotion && children(emotion)}
    </root.div>
  );
};

export default ShadowDomContainer;

import React, { FC, PropsWithChildren, useState } from "react";
import root from "react-shadow";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Define custom location to insert Emotion styles (instead of document head)
// From: https://emotion.sh/docs/cache-provider

const ShadowDomContainer: FC<PropsWithChildren> = ({ children }) => {
  const [emotionCache, setEmotionCache] = useState<any | null>(null);

  function setEmotionStyles(ref: HTMLDivElement) {
    if (ref && !emotionCache) {
      const createdEmotionWithRef = createCache({
        container: ref,
      });
      console.log(createdEmotionWithRef);
      setEmotionCache(createdEmotionWithRef);
    }
  }

  function setShadowRefs(ref: HTMLDivElement) {
    setEmotionStyles(ref);
  }

  return (
    <root.div>
      <div data-name="emotion-style-container" ref={setShadowRefs} />
      {emotionCache && (
        <CacheProvider value={emotionCache}>{children}</CacheProvider>
      )}
    </root.div>
  );
};

export default ShadowDomContainer;

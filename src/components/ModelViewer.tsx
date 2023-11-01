import React from "react";
import "@google/model-viewer";

export const ModelViewer = (props: { src: any; alt: string }) => {
  const modelRef = React.useRef();

  return (
    // @ts-ignore
    <model-viewer
      ref={modelRef}
      src={props.src}
      alt={props.alt}
      auto-rotate
      camera-controls
      // ref={(ref) => {
      //   modelRef.current = ref;
      // }}
    >
      {/* @ts-ignore */}
    </model-viewer>
  );
};

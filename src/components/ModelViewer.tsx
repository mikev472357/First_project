import React, { useRef, useEffect } from "react";
import "@google/model-viewer";

function ModelViewer(props) {
  const modelRef = useRef(null);
  useEffect(() => {
    if (modelRef.current)
      return (
        <model-viewer
          ref={modelRef}
          src={props.src}
          alt={props.alt}
          auto-rotate
          camera-controls
          {...props}
        ></model-viewer>
      );
  });
}
export default ModelViewer;

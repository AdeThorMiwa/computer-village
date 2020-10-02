import React, { useRef, useState } from "react";
import {
  ZoomContainer,
  MiniImage,
  Zoomer,
  ZoomResult,
  ZoomLens,
} from "./style";
import { DivSkeleton } from "../skeleton/style";

const ImageZoom = ({ data }) => {
  let imageRef = useRef();
  let lensRef = useRef();
  let resultRef = useRef();
  let zoomerRef = useRef();

  const [currentImage, setCurrentImage] = useState(0);

  const getCursorPos = (e) => {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = imageRef.current.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  };

  const moveLens = (e) => {
    let pos, x, y, cx, cy;

    e.preventDefault();
    pos = getCursorPos(e);
    let lens = lensRef.current;
    let res = resultRef.current;

    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;

    if (x > zoomerRef.current.width - lens.offsetWidth) {
      x = zoomerRef.current.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > zoomerRef.current.height - lens.offsetHeight) {
      y = zoomerRef.current.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    lensRef.current.style.left = x + 35 + "px";
    lensRef.current.style.top = y + 10 + "px";
    lensRef.current.style.display = "block";

    cx = res.offsetWidth / lens.offsetWidth;
    cy = res.offsetHeight / lens.offsetHeight;

    resultRef.current.style.backgroundImage = `url(${`${data[currentImage]}`})`;
    resultRef.current.style.backgroundSize = `${
      imageRef.current.width * cx
    }px ${imageRef.current.height * cy}px`;
    resultRef.current.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    resultRef.current.style.display = "block";
  };

  const clear = (e) => {
    lensRef.current.style.display = "none";
    resultRef.current.style.display = "none";
  };

  const setCurrent = (i) => {
    setCurrentImage(i);
  };

  return (
    <ZoomContainer>
      <div className="wrapper">
        <div>
          {data.map((img, i) => (
            <MiniImage
              key={i}
              className={`${currentImage === i ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={`${img}`} alt="..." />
            </MiniImage>
          ))}
        </div>
        <Zoomer ref={zoomerRef} onMouseLeave={(e) => clear(e)}>
          <img
            src={`${data[currentImage]}`}
            ref={imageRef}
            onMouseMove={(e) => window.screen.width > 568 && moveLens(e)}
            id="myImage"
            alt="..."
          />
          <p className="d-none d-md-block">Roll over Image to Zoom In</p>
          <ZoomLens ref={lensRef} />
        </Zoomer>
      </div>
      <ZoomResult ref={resultRef} id="myResult" />
    </ZoomContainer>
  );
};

const ImageZoomSkeleton = () => {
  return (
    <ZoomContainer>
      <div className="wrapper">
        <div>
          <MiniImage>
            <DivSkeleton
              style={{ width: "100%", height: "100%" }}
              className="p-0 m-0"
            />
          </MiniImage>
          <MiniImage>
            <DivSkeleton
              style={{ width: "100%", height: "100%" }}
              className="p-0 m-0"
            />
          </MiniImage>
          <MiniImage>
            <DivSkeleton
              style={{ width: "100%", height: "100%" }}
              className="p-0 m-0"
            />
          </MiniImage>
        </div>
        <Zoomer className="skeleton-zoomer">
          <DivSkeleton style={{ width: "90%", height: "100%" }} />
        </Zoomer>
      </div>
    </ZoomContainer>
  );
};

export { ImageZoom, ImageZoomSkeleton };

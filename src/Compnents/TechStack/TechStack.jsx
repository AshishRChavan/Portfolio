import "./TechStack.css";
import { useState } from "react";
function TechStack({ SVG, bgIconColor, iconColor, text }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="button-wrapper">
        <div
          className="button"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="icon-wrapper"
            style={
              hover
                ? { backgroundColor: `${bgIconColor}` }
                : { backgroundColor: "#ffffff" }
            }
          >
            <SVG iconColor={hover ? iconColor : "#121111"}></SVG>
          </div>
          <div
            className="text-wrapper"
            style={{
              color: bgIconColor === "#ffffff" ? iconColor : bgIconColor,
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
export default TechStack;

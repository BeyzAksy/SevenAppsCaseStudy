import * as React from 'react';
import Svg, {Path, Rect, Defs, G, ClipPath} from 'react-native-svg';

const ArrowDown = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clip-path="url(#clip0_1_19170)">
      <Path
        d="M7 10L12 15"
        stroke="#292929"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 15L17 10"
        stroke="#292929"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_19170">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ArrowDown;

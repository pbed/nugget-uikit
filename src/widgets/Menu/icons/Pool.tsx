import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4.92,15.56H7.78a2.11,2.11,0,0,1,0,4.22H4.27V24H21.14V19.78H17.63a2.11,2.11,0,0,1,0-4.22h0A6.34,6.34,0,0,0,24,9.23v-.7H19.73V3.38L17.28,0H14.11V2.91H0V7.13H14.11v1.4h-7V9.94H0v.7A4.93,4.93,0,0,0,4.92,15.56Zm14.81,5.63v1.4H5.67v-1.4Zm-4.92-1.41H10.59a3.51,3.51,0,0,0,0-4.22h4.22A3.51,3.51,0,0,0,14.81,19.78ZM1.41,4.31H11.3V5.72H1.41ZM12.7,5.72V4.31h1.41V5.72Zm2.82-4.31h1l1.77,2.43V8.53H15.52Zm-7,8.53H22.54a4.93,4.93,0,0,1-4.87,4.22H8.48Zm-1.4,1.4v2.82H4.92a3.51,3.51,0,0,1-3.44-2.82Z"/>
    </Svg>
  );
};

export default Icon;

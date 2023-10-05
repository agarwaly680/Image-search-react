import React from "react";
import { Box,InputBase,Input,styled } from "@mui/material";
const Component=styled(Box)({
    background:"#f6f6f6",
    '& > div':{
        margin:10,
    }
})
function BreadCrumb({setText,setCount}) {
  return (
    <Component>
      <InputBase placeholder="Search Image" onChange={(e)=>setText(e.target.value)}/>
      <InputBase placeholder="Number of Images" type="number" onChange={(e)=>setCount(e.target.value)}/>
    </Component>
  );
}

export default BreadCrumb;

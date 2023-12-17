import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(()=>{
    document.title = `${title} / C-thralu`;
    });
  return null
}
export default UseTitle

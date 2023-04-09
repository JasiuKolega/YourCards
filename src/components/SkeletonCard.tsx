import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props: any) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={160}
    viewBox="0 0 200 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="50" rx="0" ry="0" width="299" height="12" /> 
    <rect x="2" y="71" rx="0" ry="0" width="250" height="12" /> 
    <rect x="2" y="93" rx="0" ry="0" width="220" height="12" /> 
    <rect x="110" y="23" rx="0" ry="0" width="90" height="12" /> 
    <rect x="21" y="19" rx="0" ry="0" width="4" height="6" /> 
    <rect x="16" y="12" rx="0" ry="0" width="0" height="3" /> 
    <rect x="1" y="13" rx="12" ry="12" width="38" height="30" />
  </ContentLoader>
)

export default SkeletonCard;

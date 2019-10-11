import React from "react"
import ContainerStyles from "./container.module.css"

export default ({children}) => (
    <div className={ContainerStyles.container}>{children}</div>
)
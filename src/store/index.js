"use client" 
import React from "react"

import Common from "./common"

const stores = React.createContext({
  common: new Common()
})

export default stores;
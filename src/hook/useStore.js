"use client" 
import React from "react"

import stores from '@/store'

const useStore = () =>React.useContext(stores)

export default useStore
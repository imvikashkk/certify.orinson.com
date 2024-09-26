'use client'

import { ReactNode } from "react"

const Loading = () => {
  return (
    <>
    <section className="h-screen flex justify-center items-center">
    <div className="lds-ripple"><div></div><div></div></div>
    </section></>
  )
}

export default Loading
import { ReactNode } from "react"

const PaddingContainer = ({children}:{children:ReactNode}) => {
  return (
    <div className="padding-container px-8 w-full max-w-7xl mx-auto">{children}</div>
  )
}

export default PaddingContainer
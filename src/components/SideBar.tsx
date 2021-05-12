import { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

export function SideBar ({ children}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
        {children} 
       
        </div>
    </nav>
  )
}
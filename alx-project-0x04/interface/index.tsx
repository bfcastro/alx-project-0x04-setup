import { ReactNode } from "react";

//Button interface
export interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
}

//Layout interface
export interface LayoutProps {
    children: ReactNode;
  }

//Pages
export interface PageRouteProps {
    pageRoute: string
  }
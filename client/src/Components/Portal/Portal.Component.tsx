import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface IPortalProps {
  children: ReactNode;
  wrapperId?: string;
}

const Portal: React.FC<IPortalProps> = ({
  children,
  wrapperId = "root-portal",
}) => createPortal(children, document.getElementById(wrapperId)!);
export default Portal;

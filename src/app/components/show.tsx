import { FC } from "react";

const Show: FC<{ when?: boolean; children?: React.ReactNode }> = ({
  when,
  children,
}) => when && children;

export default Show;

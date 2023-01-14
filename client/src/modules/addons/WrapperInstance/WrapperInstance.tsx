import { ReactNode, FC } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const WrapperInstance: FC<Props> = ({ title, children }) => {
  return <div>WrapperInstance</div>;
};

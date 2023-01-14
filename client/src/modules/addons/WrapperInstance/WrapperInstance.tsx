import { ReactNode, FC } from "react";
import { Wrapper } from "../../ui/Wrapper";

interface Props {
  title: string;
  children: ReactNode;
}

export const WrapperInstance: FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <h1 className="title">{title}</h1>
      {children}
    </Wrapper>
  );
};

import { useEffect, useRef, useState } from "react";
import { Wrapper } from "../../ui/Wrapper";
import { BulletsWrapper, Img } from "./styled";
import { bulletsAnimationProps, images } from "./utils";
import { Row } from "../../ui/Layout";

export const Loading = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage(images[currentImage + 1] ? currentImage + 1 : 0);
    }, 5000);

    return () => clearInterval(intervalRef.current!);
  }, [currentImage]);

  return (
    <Wrapper margin="auto" width="850px" height="400px">
      <Img
        width="100%"
        height="86%"
        bg={`url(./assets/loader/ls-${currentImage}.jpg)`}
      />
      <BulletsWrapper
        width="100%"
        bg="linear-gradient(180deg, #0a0a0a, #2f2e2e)"
        margin="10px 0"
      >
        <Row {...bulletsAnimationProps}>
          <img
            width={200}
            height={40}
            alt="bullet"
            src="./assets/loader/bullet.png"
          />
        </Row>
        <Row
          {...bulletsAnimationProps}
          transition={{ delay: 3, repeat: Infinity, duration: 2 }}
        >
          <img
            width={200}
            height={40}
            alt="bullet"
            src="./assets/loader/bullet.png"
          />
        </Row>
      </BulletsWrapper>
    </Wrapper>
  );
};

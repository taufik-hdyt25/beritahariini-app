import {Button, ButtonProps} from "@rneui/themed";
import {COLORS} from "@src/constants/theme";
import React, {ReactNode} from "react";

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  gapIcon?: number;
}
const ButtonCustom: React.FC<IButtonProps> = ({
  children,
  gapIcon,
  ...props
}): JSX.Element => {
  return (
    <Button
      raised={true}
      containerStyle={{
        alignSelf: "flex-start",
      }}
      buttonStyle={{
        gap: gapIcon,
      }}
      titleStyle={{
        color: COLORS.secondary,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

ButtonCustom.displayName = "Button";
export default ButtonCustom;

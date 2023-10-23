import { icons } from "@data/icons";

interface ICustomIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const Icon = ({ name, width, height, color }: ICustomIconProps) => {
  const icon = icons.find((icon) => icon.name === name);

  // console.log("icons", icons);

  return (
    <svg name={name} width={width} height={height} fill={color}>
      <path
        d={icon?.path?.d}
        fill={icon?.path?.fill}
        stroke={icon?.path?.stroke}
        strokeWidth={icon?.path?.strokeWidth}
        // fillRule={icon?.path?.fillRule}
      />
    </svg>
  );
};

export { Icon };

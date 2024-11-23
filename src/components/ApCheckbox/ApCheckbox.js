import { Checkbox, FormControlLabel } from "@mui/material";
import { useMemo } from "react";

const ApCheckbox = ({
  checked,
  setChecked,

  value,
  label,
  labelPlacement = "end",
  onChange,
  disabled,

  style,
  size = "small",
  color = "var(--primary)",

  icon,
  checkedIcon,

  ...restProps
}) => {
  const checkboxValue = useMemo(() => value || label || null, []);
  const isChecked = useMemo(() => {
    if (typeof checked === "boolean") return checked;
    if (Array.isArray(checked)) return checked.includes(checkboxValue);
    return false;
  }, [checked]);

  const handleChange = (event, changeValue) => {
    if (setChecked) {
      if (typeof checked === "boolean") {
        setChecked(!checked);
      } else if (Array.isArray(checked)) {
        if (checked.includes(checkboxValue)) {
          setChecked(checked.filter((item) => item !== checkboxValue));
        } else {
          setChecked([...checked, checkboxValue]);
        }
      }
    }
    onChange?.(event, changeValue);
  };

  const checkboxProps = useMemo(() => {
    return {
      size: typeof size === "string" ? size : undefined,
      icon,
      checkedIcon,
      sx: {
        ...(color && { color, "&.Mui-checked": { color } }),
        "& .MuiSvgIcon-root": {
          fontSize: typeof size === "number" ? size : undefined,
        },
        padding: "0 9px",
        ...style,
      },
    };
  }, [checked]);

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      disabled={disabled}
      control={<Checkbox sx={{ pl: 0 }} checked={isChecked} onChange={handleChange} {...checkboxProps} {...restProps} />}
    />
  );
};

export default ApCheckbox;

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface DashboardInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  errors?: string[];
  textArea?: boolean;
  className?: string;
}

export const DashboardInput = ({
  id,
  label,
  type = "text",
  placeholder,
  name,
  defaultValue,
  errors,
  textArea,
}: DashboardInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor={id}>{label}</Label>
      {textArea ? (
        <Textarea
          id={id}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full"
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full"
        />
      )}
      <p className="text-red-500">{errors && errors.join(", ")}</p>
    </div>
  );
};

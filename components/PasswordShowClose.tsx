import { Eye, EyeOff } from "lucide-react";

const PasswordShowClose = ({
  eyeOpen,
  setEyeOpen,
}: {
  eyeOpen: boolean;
  setEyeOpen: (value: boolean) => void;
}) => {
  return (
    <div
      onClick={() => setEyeOpen(!eyeOpen)}
      className="absolute top-3 right-2"
    >
      {eyeOpen ? <Eye size={16} /> : <EyeOff size={16} />}
    </div>
  );
};

export default PasswordShowClose;

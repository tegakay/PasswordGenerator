import { LuRectangleVertical } from "react-icons/Lu";

interface strengthProp {
  strength?: number;
}

export const PasswordStrength = ({ strength }: strengthProp) => {
  return (
    <div
      className={`bg-${
        strength && strength > 2 ? "green" : "red"
      }-100 border border-gray-400 text-black-700 px-4 py-3 mt-4 rounded relative flex gap-6`}
      role="alert"
    >
      <strong className="font-bold">STRENGTH</strong>
      <p
        className={`flex text-${
          strength && strength > 2 ? "green" : "red"
        }-500 bg-${strength && strength > 2 ? "green" : "red"}-500`}
      >
        {" "}
        {Array(strength)
          .fill(true)
          .map(() => (
            <LuRectangleVertical />
          ))}
      </p>
    </div>
  );
};

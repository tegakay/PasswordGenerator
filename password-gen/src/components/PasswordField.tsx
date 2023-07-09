import { BsFillClipboard2Fill } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";

interface text {
  password?: string;
}

export const PasswordField = ({ password }: text) => {
  const toast = useToast();
  const copyText = () => {
    navigator.clipboard.writeText(password ? password : "");
    return toast({
      title: "Copied To ClipBoard",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className="flex">
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-48 mx-auto"
        placeholder={password ? password : "Password Shows Here"}
        disabled
      />
      <div onClick={copyText} className="text-4xl cursor-pointer">
        <BsFillClipboard2Fill />
      </div>
    </div>
  );
};

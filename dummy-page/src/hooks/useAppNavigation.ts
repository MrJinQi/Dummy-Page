import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const push = (path: string) => {
    navigate(path);
  };

  return {
    push,
  };
};
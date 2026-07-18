import { useNavigate } from "react-router-dom";
import { buildPath } from "../routes/paths";

export const useAppNavigation = () => {
  const navigate = useNavigate();
  const push = (path: string) => {
    navigate(path);
  };
  
  const goProjectDetail = (projectId: string) => {
    navigate(buildPath.projectDetail(projectId));
  };

  return {
    push,
    goProjectDetail
  };
};
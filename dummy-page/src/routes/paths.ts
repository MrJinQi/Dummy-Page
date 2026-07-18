import { generatePath } from "react-router-dom";

export const PATHS = {
  HOME: "/",
  PROJECTS: "/projects",
  MEETINGS: "/meetings",
  BOTS: "/bots",
  PROJECT_DETAIL: "/projects/:projectId",
} as const;
  

export const buildPath = {
  projectDetail: (projectId: string) =>
    generatePath(PATHS.PROJECT_DETAIL, { projectId }),
};
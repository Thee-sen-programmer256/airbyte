import { Navigate } from "react-router-dom";

import { useListCloudWorkspaces } from "core/api/cloud";

import { RoutePaths } from "../../../pages/routePaths";

export const DefaultView: React.FC = () => {
  const { workspaces } = useListCloudWorkspaces();

  // Only show the workspace creation list if there is more than one workspace
  // otherwise redirect to the single workspace
  return (
    <Navigate
      to={
        workspaces.length !== 1 ? `/${RoutePaths.Workspaces}` : `/${RoutePaths.Workspaces}/${workspaces[0].workspaceId}`
      }
      replace
    />
  );
};

export default DefaultView;

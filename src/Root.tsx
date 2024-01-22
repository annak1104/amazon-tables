import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AccountsTable } from "./pages/AccountsTable";
import { ProfilesTable } from "./pages/ProfilesTable";
import { CampaignsTable } from "./pages/CampaignsTable";
import accounts from "./data/ACCOUNTS_DATA .json";
import profiles from "./data/PROFILES_DATA.json";
import campaigns from "./data/CAMPAIGNS_DATA.json";
import { useMemo } from "react";
import { accountsColumns, profilesColumns, campaignsColumns } from "./components/Columns/Columns";

export const Root = () => {
  const data = useMemo(() => accounts, []);
  const profilesData = useMemo(() => profiles, []);
  const campaignsData = useMemo(() => campaigns, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <AccountsTable
                accountsColumns={accountsColumns}
                accounts={data}
              />
            }
          />
          <Route
            path="/account/:accountId"
            element={
              <ProfilesTable
                profilesColumns={profilesColumns}
                allProfiles={profilesData}
              />
            }
          />
          <Route
            path="/account/:accountId/profile/:profileId"
            element={
              <CampaignsTable
                campaignsColumns={campaignsColumns}
                allCampaigns={campaignsData}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

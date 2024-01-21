import './App.css';
import { AccountsTable } from './components/AccountsTable/AccountsTable';
import { CampaignsTable } from './components/CampaignsTable/CampaignsTable';
import { ProfilesTable } from './components/ProfilesTable/ProfilesTable';
import accounts from './data/ACCOUNTS_DATA .json';
import profiles from './data/PROFILES_DATA.json';
import campaigns from './data/CAMPAIGNS_DATA.json';
import { useMemo } from 'react';


export const App = () => {
  const data = useMemo(() => accounts, []);
  const profilesData = useMemo(() => profiles, []);
  const campaignsData = useMemo(() => campaigns, []);

  const accountsColumns = [
    {
      header: 'ID',
      accessorKey: 'accountId',
    },
    {
      header: 'email',
      accessorKey: 'email',
    },
    {
      header: 'authToken',
      accessorKey: 'authToken',
    },
    {
      header: 'creationDate',
      accessorKey: 'creationDate',
    },
  ];

  const profilesColumns = [
    {
      header: 'ID',
      accessorKey: 'profileId',
    },
    {
      header: 'country',
      accessorKey: 'country',
    },
    {
      header: 'marketplace',
      accessorKey: 'marketplace',
    },
  ];

  const campaignsColumns = [
    {
      header: 'ID',
      accessorKey: 'campaignId',
    },
    {
      header: 'clicks',
      accessorKey: 'clicks',
    },
    {
      header: 'cost',
      accessorKey: 'cost',
    },
    {
      header: 'date',
      accessorKey: 'date',
    },
  ];

  return (
    <>
      <AccountsTable accountsColumns={accountsColumns} accounts={data} />
      <ProfilesTable profilesColumns={profilesColumns} profiles={profilesData} />
      <CampaignsTable campaignsColumns={campaignsColumns} campaigns={campaignsData} />
    </>

  );
};

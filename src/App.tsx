import './App.css';
import { AccountsTable } from './components/AccountsTable/AccountsTable';
import { ProfilesTable } from './components/ProfilesTable/ProfilesTable';
import accounts from './data/ACCOUNTS_DATA .json';
import profiles from './data/PROFILES_DATA.json';
import { useMemo } from 'react';


export const App = () => {
  const data = useMemo(() => accounts, []);
  const profilesData = useMemo(() => profiles, []);
  console.log(profilesData)

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

  return (
    <>
      <AccountsTable accountsColumns={accountsColumns} accounts={data} />
      <ProfilesTable profilesColumns={profilesColumns} profiles={profilesData} />
    </>

  );
};

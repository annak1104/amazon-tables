import './App.css';
import { AccountsTable } from './components/AccountsTable/AccountsTable';
import accounts from './data/ACCOUNTS_DATA .json';
import { useMemo } from 'react';


export const App = () => {
  const data = useMemo(() => accounts, []);

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

  return (
      <AccountsTable accountsColumns={accountsColumns} accounts={data} />
  );
};

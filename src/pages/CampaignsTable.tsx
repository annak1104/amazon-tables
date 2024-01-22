import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnSort,
} from '@tanstack/react-table';
import { ColumnsType } from '@/types/ColumnsType';
import { CampaignType } from '@/types/CampaignsType';
import { useParams } from 'react-router-dom';
import { GoBackButton } from '@/components/Button/Button';

interface ExtendedTableOptions {}

type Props = {
  allCampaigns: CampaignType[];
  campaignsColumns: ColumnsType[];
};

export const CampaignsTable: React.FC<Props> = ({ allCampaigns, campaignsColumns }) => {

  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [filtering, setFiltering] = useState('');
  
  const { profileId } = useParams();

  const filterCampaignsByProfileId = (campaigns: CampaignType[]) => {
    return campaigns.filter(campaign => campaign.profileId === Number(profileId));
  };

  const filteredCampaigns = useMemo(() => filterCampaignsByProfileId(allCampaigns), [
    allCampaigns,
    profileId,
  ]);

  const table = useReactTable<ExtendedTableOptions>({
    data: filteredCampaigns,
    columns: campaignsColumns.map((column) => ({
      accessorKey: column.accessorKey,
    })),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const { accountId } = useParams();


  return (
    <div className='w3-container'>
      <h1>Campaigns-table</h1>
      <GoBackButton path={`/account/${accountId}`} />
      <input
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <table className='w3-table-all'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: 'pointer' }}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{ marginTop: '10px' }}
      >
        <button onClick={() => table.setPageIndex(0)}>First page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last page
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import Table, { TableRow } from '../../../common/table/Table';

const ManagedAccountTable = () => {
  const rows: TableRow[] = [
    {cells: ['Product type', 'Crypto exchange managed account'], isLarge: true},
    {cells: ['Deposit & custody', 'Client’s crypto exchange account'], isLarge: true},
    {cells: ['Liquidity', 'Instant']},
    {cells: ['Reporting', 'Quarterly reporting & fee distribution'], isLarge: true}, 
    {cells: ['Min. investment', '250.000 USD']},
  ]
  return (
    <Table rows={rows} title='Managed account' className='managed-account-table'/>
  );
};

export default ManagedAccountTable;
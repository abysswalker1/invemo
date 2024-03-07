import { FC } from 'react';
import Table from '../../../ui/table/Table';
import { TableRow } from '../../../ui/table/Table';

const StructuredNoteTable: FC = () => {
  const rows: TableRow[] = [
    {cells: ['Product type', 'Listed security with Swiss ISIN and Bloomberg listing'], isLarge: true},
    {cells: ['Deposit & custody', 'Client’s bank'], isLarge: true},
    {cells: ['Liquidity', 'Weekly NAV and liquidity']},
    {cells: ['Reporting', 'Weekly reporting & quarterly fee distribution'], isLarge: true}, 
    {cells: ['Min. investment', '10.000 USD']},
  ]
  return (
    <Table rows={rows} title='Structured note' className='structured-note-table'/>
  );
};

export default StructuredNoteTable;
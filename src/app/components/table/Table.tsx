import { FC } from 'react';
import cn from 'classnames';
import { IWithClass } from '../../types';
import './table.css';

export type TableRow = {
  cells: [string, string]
  isLarge?: boolean
}

interface Props extends IWithClass{
  title: string
  rows: TableRow[]
}

const Table: FC<Props> = (props) => {
  return (
    <div className={cn('table', props.className)}>
      <p className="subtitle">{props.title}</p>
      <div className="table-body">
        {props.rows.map((row, index) => (
          <div 
            className={cn('table-row', row.isLarge && 'large')}
            key={`${props.className}-${index}`}
          >
            <div className="table-row__cell">
              <p>{row.cells[0]}</p>
            </div>
            <div className="table-row__cell">
              <p>{row.cells[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
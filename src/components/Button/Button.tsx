import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
};

export const GoBackButton: React.FC<Props> = ({ path }) => {
  return (
    <Link to={path} className="button">
      <button
      style={{ marginRight: '10px' }}
      >
        Go Back
      </button>
    </Link>
  );
};
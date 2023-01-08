import classNames from 'classnames';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div className={classNames('p-4 border border-neutral-085 rounded-3xl', className)}>{children}</div>
  );
};

Card.defaultProps = {
  className: '',
};

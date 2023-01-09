import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface IPaginationButton extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

export function PaginationButton(props: IPaginationButton) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={classNames(
        'relative inline-flex items-center justify-center px-2 py-2 rounded-xl bg-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400 max-w-40 w-12 mx-3',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

PaginationButton.defaultProps = {
  className: '',
};

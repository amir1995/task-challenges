import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  disabled?: boolean
}

export function Button(props: IButtonProps) {
  const { children, className, ...rest } = props;
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center justify-center rounded-xl bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

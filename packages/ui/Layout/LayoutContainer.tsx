import React from 'react';

type LayoutContainerProps = {
  children: React.ReactNode;
};

const LayoutContainer = (props: LayoutContainerProps): JSX.Element => {
  const { children } = props;

  return (
    <div className="max-w-1248 xs:pt-6 mx-auto flex flex-col items-center justify-center xl:justify-end">
      <div className={'max-w-1248 w-full px-4'}>{children}</div>
    </div>
  );
};

export default LayoutContainer;

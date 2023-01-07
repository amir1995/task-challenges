import classNames from 'classnames'
import React from "react"

type LayoutContainerProps = {
  children: React.ReactNode
}

const LayoutContainer = (props: LayoutContainerProps): JSX.Element => {
  const { children } = props

  return (
    <div
      className={classNames(
        'mx-auto max-w-1248 flex flex-col justify-center items-center xl:justify-end xs:pt-6',
      )}
    >
      <div
        className={'w-full rxs:max-w-528 px-4 rxs:px-0 xmd:max-w-608'}
      >
        {children}
      </div>
    </div>
  )
}

export default LayoutContainer

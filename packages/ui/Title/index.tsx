import React from 'react'

type TitleProps = {
  title: string
  titleSize?: string
  detail?: string
  detailSize?: string
}

export const Title = (props: TitleProps): JSX.Element => {
  const { title, titleSize, detail, detailSize } = props
  return (
    <div>
      <div className="flex justify-between items-center mt-0.5">
        <div className={`${titleSize ?? 'text-1xl'} text-neutral-900 font-title font-medium`}>
          {title}
        </div>
      </div>
      {detail?.length ? (
        <div className={`${detailSize ?? 'text-sb'} text-neutral-850 mt-1 font-medium`}>
          {detail}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

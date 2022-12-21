import React from 'react'
import cx from 'classnames'

import { Module } from '../modules'

const Grid = ({ data = {} }) => {
  const { size, columns } = data

  const getGridSize = (
    breakpoint,
    size,
    justify = false,
    align = false,
    start = false
  ) => {
    const hasBreakpoint = breakpoint && breakpoint.trim()
    const colSpan = hasBreakpoint
      ? `${breakpoint}:col-span-${size}`
      : `col-span-${size}`

    const colStart = hasBreakpoint
      ? `${breakpoint}:col-start-${start}`
      : `col-start-${start}`

    const colJustify = hasBreakpoint ? `${breakpoint}:${justify}` : justify
    const colAlign = hasBreakpoint ? `${breakpoint}:${align}` : align

    return cx(
      colSpan,
      start && colStart,
      justify && colJustify,
      align && colAlign
    )
  }

  return (
    <div className={`customGrid ${data.customClass}`}>
      <div className='mx-auto'>
        <div className={`grid grid-cols-${size} gap-x-4 gap-y-12 `}>
          {columns.map((col, key) => {
            const { sizes, blocks } = col
            return (
              <div
                key={key}
                className={cx(
                  sizes.map((size) =>
                    getGridSize(
                      size.breakpoint,
                      size.width,
                      size.justify,
                      size.align,
                      size.start
                    )
                  )
                )}
              >
                {blocks?.map((data, key) => (
                  <Module
                    key={key}
                    data={data}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default Grid

export const getModuleName = (type) => {
  switch (type) {
    case 'grid':
      return 'Content Grid'
    case 'hero':
      return 'Hero'
    default:
      return null
  }
}

export const getTypeTitles = (types) => {
  const typeNames = types.map((type) => {
    switch (type) {
      case 'freeform':
        return 'Freeform'
      default:
        return null
    }
  })

  return typeNames.join(' + ')
}

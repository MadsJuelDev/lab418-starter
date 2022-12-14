export const blockSerializers = () => {
  const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({ children }) => <h1 className='text-2xl'>{children}</h1>,
      blockquote: ({ children }) => (
        <blockquote className='border-l-purple-500'>{children}</blockquote>
      ),

      // Ex. 2: rendering custom styles
      customHeading: ({ children }) => (
        <h2 className='text-lg text-primary text-purple-700'>{children}</h2>
      ),
    },
  }
  return blockSerializers()
}

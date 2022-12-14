import PortableText from 'react-portable-text'

const RichTextEditor = ({ data }) => {
  return (
    <div>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={data.content}
        serializers={{
          h1: ({ children }) => (
            <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl text-blue-300'>
              {children}
            </h1>
          ),
          link: ({ children, href }) => (
          <a href={href}className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
            {children}
          </a>
          )
          
        }}
      />
    </div>
  )
}

export default RichTextEditor

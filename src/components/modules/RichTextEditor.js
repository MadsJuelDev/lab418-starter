import PortableText from 'react-portable-text'

const RichTextEditor = ({ data }) => {
  return (
    <div className={data.customClass}>
      <PortableText
        className="richText"
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={data.content}
        serializers={{
          h1: ({ children }) => (
            <h1>
              {children}
            </h1>
          ),
          link: ({ children, href }) => (
          <a href={href}>
            {children}
          </a>
          )
          
        }}
      />
    </div>
  )
}

export default RichTextEditor

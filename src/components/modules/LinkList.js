import Link from 'next/link'

const LinkList = ({ data }) => {
  return (
      <ul className={`linkList ${data.customClass}`}>
        {data.items
          ? data.items.map((item, index) => (
              <li
                key={index}
              >
                {item.linkType == 'internal' && (
                  <Link
                    href={item.slug}
                  >
                    {item.linkName}
                  </Link>
                )}
                {item.linkType == 'external' && (
                  <Link
                    href={item.url}
                  >
                    {item.linkName}
                  </Link>
                )}
              </li>
            ))
          : console.log('Error loading list')}
      </ul>
  )
}

export default LinkList

import { Link as ReactRouterLink } from 'react-router-dom';

const Link = ({ children, to = '', url, ...props }) => {
  if (url) to = url

  if (to.startsWith('http') || to.startsWith('//')) {
    return (
      <a href={to} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  } else {
    return <ReactRouterLink to={to}>{children}</ReactRouterLink>
  }
}

export default Link;
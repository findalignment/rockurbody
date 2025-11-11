import { Link } from 'react-router-dom';

/**
 * Breadcrumbs Component
 * 
 * Displays navigation breadcrumbs for improved UX and SEO
 * Includes structured data schema for rich results in search engines
 * 
 * @param {Array} items - Array of breadcrumb objects with { name, url } properties
 *                        Each item should have: { name: string, url: string }
 */
function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="max-w-7xl mx-auto py-4 px-4 md:px-6 lg:px-8"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm md:text-base text-neutralDark/70">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 mx-2 text-neutralDark/40 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              {isLast ? (
                <span 
                  className="font-medium text-neutralDark"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.url} 
                  className="hover:text-accent transition-colors hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;


import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkTextProps extends PropsWithChildren, LinkProps {}

export const LinkText: FC<LinkTextProps> = ({ children, ...rest }) => {
  return (
    <span>
      <Link
        className='underline transition-colors hover:text-primary'
        target='_blank'
        {...rest}
      >
        {children}
        <ExternalLink className='mb-2 ml-1 inline' size={12} />
      </Link>
    </span>
  );
};

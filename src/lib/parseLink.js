'use client';
import parse from 'html-react-parser';
import Link from 'next/link';

export const parseLink = (text, linkText, href, className) => {
  return parse(text, {
    replace: domNode => {
      if (domNode.attribs && domNode.attribs.class === className) {
        return (
          <Link className={`text-lg underline ${className}`} href={href}>
            {linkText}
          </Link>
        );
      }
    },
  });
};

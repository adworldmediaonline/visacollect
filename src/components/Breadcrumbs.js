'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/cn';

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  wrapperClass,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter(path => path);

  return (
    <>
      {paths === '/' ? null : (
        <div className={cn('container', wrapperClass)}>
          <ul className={containerClasses}>
            <li className={listClasses}>
              <Link href={'/'}>{homeElement}</Link>
            </li>
            {pathNames.length > 0 && separator}
            {pathNames.map((link, index) => {
              let href = `/${pathNames.slice(0, index + 1).join('/')}`;
              let itemClasses =
                paths === href
                  ? `${listClasses} ${activeClasses}`
                  : listClasses;
              let itemLink = capitalizeLinks
                ? link[0].toUpperCase() + link.slice(1, link.length)
                : link;
              return (
                <React.Fragment key={index}>
                  <li className={itemClasses}>
                    <Link href={href.endsWith('/blog') ? '/blog' : href}>
                      {itemLink}
                    </Link>
                  </li>
                  {pathNames.length !== index + 1 && separator}
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Breadcrumb;

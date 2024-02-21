import Image from 'next/image';
import Link from 'next/link';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <h2
        className={`text-2xl
         text-primary font-semibold md:text-3xl`}
        style={{ margin: '2rem 0rem .5rem 0rem!important' }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="text-2xl font-semibold text-primary md:text-3xl"
        style={{ margin: '2rem 0rem 1rem 0rem!important' }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className="text-2xl font-semibold text-primary md:text-3xl"
        style={{ margin: '2rem 0rem 1rem 0rem!important' }}
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        className="text-2xl font-semibold text-primary md:text-3xl"
        style={{ margin: '2rem 0rem 1rem 0rem!important' }}
      >
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        className="text-2xl font-semibold text-primary md:text-3xl"
        style={{ margin: '2rem 0rem 1rem 0rem!important' }}
      >
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p
        className="text-lg font-normal leading-loose"
        style={{
          margin: '0px 0px 0.8rem 0px!important',
          // fontSize: '1.10rem',
        }}
      >
        {children}
      </p>
    ),
    img: props => (
      <Image
        priority
        placeholder="blur"
        className="rounded-lg shadow"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    ...components,
  };
}

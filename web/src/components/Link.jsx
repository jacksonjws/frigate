import { h } from 'preact';

export default function Link({ className, children, href, ...props }) {
  return (
    <a className={`text-blue-500 dark:text-blue-400 hover:underline ${className}`} href={href} {...props}>
      {children}
    </a>
  );
}

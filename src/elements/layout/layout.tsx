import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import style from './layout.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Layout';

type TemplateProps = PropsWithChildren<{
  asideElement?: JSX.Element;
  disabledScroll?: boolean;
  footerElement?: JSX.Element;
  headerElement?: JSX.Element;
  isAsideRight?: boolean;
  isAsideSticky?: boolean;
}>;

export const Layout = memo(({
  asideElement,
  children,
  disabledScroll,
  footerElement,
  headerElement,
  isAsideRight,
  isAsideSticky,
}: TemplateProps) => (
  <div className={cn(CLASS_NAME)}>
    {Boolean(headerElement) && (
      <header className={cn(`${CLASS_NAME}__header`)}>
        {headerElement}
      </header>
    )}
    <main
      className={cn(`${CLASS_NAME}__main`, {
        [`${CLASS_NAME}__main--scroll-disabled`]: disabledScroll,
      })}
    >
      {Boolean(asideElement) && (
        <aside
          className={cn(`${CLASS_NAME}__aside`, {
            [`${CLASS_NAME}__aside--right`]: isAsideRight,
            [`${CLASS_NAME}__aside--sticky`]: isAsideSticky,
          })}
        >
          {asideElement}
        </aside>
      )}
      <article className={cn(`${CLASS_NAME}__article`)}>
        {children}
      </article>
    </main>
    {Boolean(footerElement) && (
      <footer className={cn(`${CLASS_NAME}__footer`)}>
        {footerElement}
      </footer>
    )}
  </div>
));

import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import style from './layout.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Layout';

type TemplateProps = PropsWithChildren<{
  asideElement?: JSX.Element;
  footerElement?: JSX.Element;
  headerElement?: JSX.Element;
  isAsideRight?: boolean;
  isAsideSticky?: boolean;
}>;

export const Layout = memo(({
  asideElement,
  children,
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
    <div className={cn(`${CLASS_NAME}__inner`)}>
      <div
        className={cn(`${CLASS_NAME}__content`, {
          [`${CLASS_NAME}__content--aside-right`]: isAsideRight,
        })}
      >
        {Boolean(asideElement) && (
          <aside className={cn(`${CLASS_NAME}__aside`)}>
            <div
              className={cn(`${CLASS_NAME}__aside-inner`, {
                [`${CLASS_NAME}__aside-inner--sticky`]: isAsideSticky,
              })}
            >
              {asideElement}
            </div>
          </aside>
        )}
        <main
          className={cn(`${CLASS_NAME}__main`, {
            [`${CLASS_NAME}__main--without-aside`]: !asideElement,
          })}
        >
          {children}
        </main>
      </div>
      {Boolean(footerElement) && (
        <footer className={cn(`${CLASS_NAME}__footer`)}>
          {footerElement}
        </footer>
      )}
    </div>
  </div>
));

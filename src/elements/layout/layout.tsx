import React, { memo } from 'react';
import classNames from 'classnames/bind';
import style from './layout.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Layout';

type TemplateProps = {
  asideElement?: JSX.Element;
  footerElement?: JSX.Element;
  headerElement?: JSX.Element;
  isAsideRight?: boolean;
  isAsideSticky?: boolean;
  mainElement: JSX.Element;
};

export const Layout = memo(({
  asideElement,
  footerElement,
  headerElement,
  isAsideRight,
  isAsideSticky,
  mainElement,
}: TemplateProps) => (
  <div className={cn(CLASS_NAME)}>
    <div
      className={cn(`${CLASS_NAME}__inner`, {
        [`${CLASS_NAME}__inner--without-header`]: !headerElement,
      })}
    >
      <div
        className={cn(`${CLASS_NAME}__main`, {
          [`${CLASS_NAME}__main--aside-right`]: isAsideRight,
          [`${CLASS_NAME}__main--without-aside`]: !asideElement,
        })}
      >
        {Boolean(asideElement) && (
          <aside
            className={cn(`${CLASS_NAME}__aside`, {
              [`${CLASS_NAME}__aside--right`]: isAsideRight,
            })}
          >
            <div
              className={cn(`${CLASS_NAME}__aside-inner`, {
                [`${CLASS_NAME}__aside-inner--sticky`]: isAsideSticky,
              })}
            >
              {asideElement}
            </div>
          </aside>
        )}
        <main className={cn(`${CLASS_NAME}__main-content`)}>
          {mainElement}
        </main>

      </div>
      {Boolean(footerElement) && (
        <footer className={cn(`${CLASS_NAME}__footer`)}>
          {footerElement}
        </footer>
      )}
    </div>
    {Boolean(headerElement) && (
      <header className={cn(`${CLASS_NAME}__header`)}>
        {headerElement}
      </header>
    )}
  </div>
));

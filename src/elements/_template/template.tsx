import React, { memo, PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import style from './template.module.scss';

const cn = classNames.bind(style);
const CLASS_NAME = 'Template';

type TemplateProps = PropsWithChildren<{}>;

export const Template = memo(({
  children,
}: TemplateProps) => (
  <div className={cn(CLASS_NAME)}>{children}</div>
));

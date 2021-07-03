import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement>, React.ReactEventHandler {
  type: string;
  size: number;
  title?: string;
}

export default function Icon(props: Partial<Props>) {
  const { className: klass, type, title, size, ...rest } = props;
  return (
    <i className={klass} title={title}>
      <svg {...rest} className="icon" aria-hidden="true" fontSize={size}>
        <use xlinkHref={`#i-${type}`} />
      </svg>
    </i>
  );
}

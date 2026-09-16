import type { CSSProperties, FC, HTMLAttributeAnchorTarget, MouseEventHandler } from 'react';
import type { Icon } from '@/types/Icon';
import styles from './Button.module.scss';

type CommonProps = {
  text?: string;
  variant: 'default' | 'primary';
  Icon?: Icon;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  'aria-label'?: string;
};

type ElementPropsMap = {
  a: {
    href: string;
    target?: HTMLAttributeAnchorTarget;
    rel?: string;
  };
  button: {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  };
};

type PropsFor<Element extends keyof ElementPropsMap> = CommonProps & {
  as: Element;
} & ElementPropsMap[Element];

export type ButtonProps = {
  [Element in keyof ElementPropsMap]: PropsFor<Element>;
}[keyof ElementPropsMap];

const propsMap = {
  a: ({ href, target, rel }: PropsFor<'a'>) => ({ href, target, rel }),
  button: ({ type = 'button', disabled }: PropsFor<'button'>) => ({ type, disabled }),
};

const Button: FC<ButtonProps> = (props) => {
  const { as: Component, text, variant, Icon, style, onClick, 'aria-label': label } = props;
  const buttonClassName = `clipped-corners ${styles.button} ${styles[variant]}`;
  const selectedProps = props.as === 'a' ? propsMap.a(props) : propsMap.button(props);

  return (
    <Component
      {...selectedProps}
      className={buttonClassName}
      style={style}
      onClick={onClick}
      aria-label={label}
    >
      {text && <span className={styles.buttonContent}>{text}</span>}
      {Icon && <Icon className={styles.buttonContentIcon} size={18} />}
    </Component>
  );
};

export default Button;

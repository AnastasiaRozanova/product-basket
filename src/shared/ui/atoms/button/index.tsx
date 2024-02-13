import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from "react";
import { clsx } from 'clsx';
import { Icons } from '../icons';
import styles from './styles.module.scss';

type ButtonProps = {
  theme?: 'primary' | 'danger' | 'transparent' | 'ghost';
  icon?: keyof typeof Icons;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;


export const Button = forwardRef<any, ButtonProps>(({ theme = 'danger', icon, className, children, ...props }, ref) => {
  if (icon) {
    const ButtonIcon = Icons[icon];

    return (
        <button className={clsx(styles.button, theme && styles[theme], className)} ref={ref} {...props}>
          <ButtonIcon />
          <span>{children}</span>
        </button>
    )
  }

  return (
      <button className={clsx(styles.button, theme && styles[theme], className)} ref={ref} {...props}>{children}</button>
  )
});

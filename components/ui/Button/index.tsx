/* 汎用Buttonコンポーネント */
import Link from 'next/link';
import styles from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  children,
  onClick,
}: ButtonProps) {
  const className = [styles.button, styles[variant], styles[size]].join(' ');

  /* hrefがある場合はLinkとして描画 */
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

/* 汎用Cardコンポーネント */
import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  const classes = className
    ? `${styles.card} ${className}`
    : styles.card;

  return <div className={classes}>{children}</div>;
}

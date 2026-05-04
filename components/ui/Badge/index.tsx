/* 汎用Badgeコンポーネント */
import styles from './Badge.module.css';

type BadgeProps = {
  label: string;
  color?: 'pink' | 'mint' | 'lavender' | 'blue' | 'gray';
};

export default function Badge({ label, color = 'pink' }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[color]}`}>{label}</span>
  );
}

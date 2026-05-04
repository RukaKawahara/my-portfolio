'use client';
/* Hobbyカルーセル・モーダル（Client Component） */
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { HobbyItem } from './index';
import styles from './Hobby.module.css';

type Props = { images: HobbyItem[] };

export default function HobbyCarousel({ images }: Props) {
  const [selected, setSelected]       = useState<HobbyItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setSelected(null), []);

  /* ESCキーで閉じる */
  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, close]);

  /* モーダル表示中はスクロールを止める */
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  /* スクロール位置からアクティブなインデックスを更新 */
  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  /* 指定インデックスにスクロール */
  const scrollToIndex = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      {/* PC：グリッド / SP：カルーセル */}
      <div className={styles.carouselWrap}>
        {images.length > 1 && activeIndex > 0 && (
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="前へ"
          >
            <FiChevronLeft size={24} />
          </button>
        )}

        <div
          ref={carouselRef}
          className={styles.grid}
          onScroll={handleScroll}
          style={{
            gridTemplateColumns: `repeat(${Math.min(images.length, 3)}, 1fr)`,
            maxWidth: `calc(${Math.min(images.length, 3)} / 3 * 100%)`,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {images.map((item) => (
            <button
              key={item.src}
              className={styles.item}
              onClick={() => setSelected(item)}
              aria-label={`${item.alt}を拡大表示`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
            </button>
          ))}
        </div>

        {images.length > 1 && activeIndex < images.length - 1 && (
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="次へ"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>

      {/* ドットインジケーター（SP かつ2枚以上の場合のみ表示） */}
      {images.length > 1 && (
        <div className={styles.dots} aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}

      {/* モーダル */}
      {selected && (
        <div className={styles.overlay} onClick={close} aria-modal="true" role="dialog">
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrap}>
              <button className={styles.closeButton} onClick={close} aria-label="閉じる">✕</button>
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="90vw"
                className={styles.modalImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

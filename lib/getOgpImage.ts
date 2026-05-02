/* 指定URLのスクリーンショットをmicrolink.io経由で取得する */
export async function getOgpImage(url: string): Promise<string | null> {
  try {
    const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
    const res = await fetch(apiUrl, {
      next: { revalidate: 86400 }, // 24時間キャッシュ
    });
    const json = await res.json();
    return json?.data?.screenshot?.url ?? null;
  } catch {
    return null;
  }
}

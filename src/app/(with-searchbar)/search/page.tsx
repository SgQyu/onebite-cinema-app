import MovieItem from '@/components/movie-item';
import style from './page.module.css';
import { MovieData } from '@/types';
import { notFound } from 'next/navigation';
import delay from '@/util/delay';
import { Suspense } from 'react';

async function SearchResult({ q }: { q: string }) {
  await delay(1000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/movie/search?q=${q}`,
    { cache: 'force-cache' }
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>로딩 중.....</div>;
  }

  const searchMovie: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {searchMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <Suspense key={q || ''} fallback={<div>검색 결과를 찾는 중.....</div>}>
      <SearchResult q={q || ''} />
    </Suspense>
  );
}

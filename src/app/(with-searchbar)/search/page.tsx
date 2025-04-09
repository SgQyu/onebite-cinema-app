import MovieItem from '@/components/movie-item';
import style from './page.module.css';
import { MovieData } from '@/types';
import { notFound } from 'next/navigation';
import delay from '@/util/delay';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  await delay(3000);

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

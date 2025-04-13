import MovieItem from '@/components/movie-item';
import style from './page.module.css';
import { MovieData } from '@/types';
import delay from '@/util/delay';
import { Suspense } from 'react';

async function RecoMovie() {
  await delay(1500);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/movie/random`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return <div>로딩 중.....</div>;
  }

  const recoMovie: MovieData[] = await response.json();

  return (
    <div className={style.reco_conatiner}>
      {recoMovie.slice(0, 3).map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

async function AllMovie() {
  await delay(3000);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/movie`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    return <div>로딩 중.....</div>;
  }

  const allMovie: MovieData[] = await response.json();

  return (
    <div className={style.all_container}>
      {allMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.conatiner}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <Suspense fallback={<div>Loading....</div>}>
          <RecoMovie />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <Suspense fallback={<div>Loading....</div>}>
          <AllMovie />
        </Suspense>
      </section>
    </div>
  );
}

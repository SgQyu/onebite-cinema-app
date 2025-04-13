import { MovieData, ReviewData } from '@/types';
import style from './page.module.css';
import ReviewEditor from '@/components/review-editor';
import ReviewItem from '@/components/review-item';

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/movie`);

    if (!response.ok) return [];

    const movies: MovieData[] = await response.json();

    return movies.map((movie) => ({
      id: movie.id.toString(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/movie/${movieId}`
  );

  const movies = await response.json();

  const {
    title,
    subTitle,
    company,
    runtime,
    description,
    posterImgUrl,
    releaseDate,
    genres,
  } = movies;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.info_container}>
        <div>
          <h2>{title}</h2>
          <div>
            {releaseDate} / {genres.join(', ')} / {runtime}분
          </div>
          <div>{company}</div>
        </div>
        <div>
          <div className={style.subTitle}>{subTitle}</div>
          <div className={style.description}>{description}</div>
        </div>
      </div>
    </section>
  );
}

async function ReviewList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/review/movie/${movieId}`
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className={style.container}>
      <MovieDetail movieId={id} />
      <ReviewEditor movieId={id} />
      <ReviewList movieId={id} />
    </div>
  );
}

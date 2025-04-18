import style from '@/components/review-item.module.css';
import { ReviewData } from '@/types';

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div className={style.container}>
      <div className={style.bottom_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
      </div>
      <div className={style.content}>{content}</div>
      <div>
        <div className={style.delete_btn}>🗑️ 리뷰 삭제하기</div>
      </div>
    </div>
  );
}

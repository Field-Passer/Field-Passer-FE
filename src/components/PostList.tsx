import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { PostType } from '@src/util/userPageTypes';

interface Props {
  data: PostType[];
}

const PostList = ({ data }: Props) => {
  return (
    <div className='max-w-5xl ml-auto mr-auto'>
      {data.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <div className='mx-[-15px] flex flex-wrap gap-[10px] pl-[10px]'>
          {data.map((item: PostType, index: any) => {
            const link = `/board/details/${item.postId}/${item.memberId}`;
            return (
              <div
                key={index}
                className='w-[calc((100%/2)-10px)] mm:w-[calc((100%/4)-10px)] px-[5px] py-[5px] mm:py-[10px] mb-[5px] mm:mb-[10px]'
              >
                <Link to={link} className='flex flex-col mm:gap-[15px] gap-[10px]'>
                  <img
                    role='img'
                    className='w-full border border-gray-500 border-solid object-cover aspect-square rounded-lg'
                    src={item.defaultImageUrl}
                  />
                  <div className='flex flex-col gap-[8px] text-start'>
                    <p className='text-xs text-gray-500'>{item.stadiumName}</p>
                    <p className='text-xm font-black'>{item.title}</p>
                    <p className='text-sm'>{item.price.toLocaleString()} 원</p>
                    <p className='text-xs'>
                      {item.startTime?.slice(5, 10).replace('-', '월 ') + '일'} /{' '}
                      {item.startTime?.slice(11, 16)}
                    </p>
                    <p className='flex gap-[10px] text-[12px] text-gray-500'>
                      {' '}
                      <span className='flex gap-[5px]'>
                        <BsEye />
                        {item.viewCount}
                      </span>{' '}
                      <span className='flex gap-[5px]'>
                        <AiOutlineHeart />
                        {item.wishCount}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostList;

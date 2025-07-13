import Header11 from './noticeHeader';
import Box from './box';
import * as _ from './style';
import { useEffect, useState } from 'react';
import getNotice,{getNoticestd} from '@_api/notice';

export default function Notice() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const teamid = null;
  const teamIdNum = teamid ? Number(teamid) : null;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = teamIdNum == null
          ? await getNotice()
          : await getNoticestd(teamIdNum);
        setPosts(data?.content ?? []);
      } catch (err) {
        console.error('게시물을 불러오는 데 실패했습니다.', err);
      }
    };
    fetchPosts();
  }, [teamIdNum]);
  const filtered = posts.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header11 value={search} onChange={setSearch} />
      <_.BoxContainer>
        {filtered.map(notice => (
          <Box
            key={notice.id}
            idx={notice.id}
            title={notice.title}
            date={notice.createdAt} 
          />
        ))}
      </_.BoxContainer>
    </>
  );
}

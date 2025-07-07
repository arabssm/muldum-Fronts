
import { useState } from 'react';
import Header11 from './noticeHeader';
import Box from './box';
import * as _ from './style';
import { mockdata } from './data';

export default function Notice() {
  const [search, setSearch] = useState('');
  const filtered = mockdata.filter(n =>
    n.title.includes(search)
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
            date={notice.created_at}
          />
        ))}
      </_.BoxContainer>
    </>
  );
}

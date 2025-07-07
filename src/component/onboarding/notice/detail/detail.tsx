import { useParams } from 'react-router-dom';
import makeDocument from '@_util/Document';
import Sidebar from '@_components/sibebar/sidebar';
import * as _ from './style';
import { documents } from './data';

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const doc = documents.find(d => d.id === id);
  if (!doc) return <_.NotFound>문서를 찾을 수 없습니다.</_.NotFound>;
  const date = (() => {
    const d = new Date(doc.created_at);
    const Y = d.getFullYear();
    const M = String(d.getMonth() + 1).padStart(2, '0');
    const D = String(d.getDate()).padStart(2, '0');
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? '오후' : '오전';
    if (h > 12) h -= 12;
    if (h === 0) h = 12;
    return `등록일 ${Y}-${M}-${D}. ${ampm} ${h}:${m}`;
  })();

  return (
    <_.Wrapper>
      <Sidebar />
      <_.ContentArea>
        <_.Up>
            <_.Title>{doc.title}</_.Title>
            <_.Subtitle>{date}</_.Subtitle>
            <_.Subtitle>{doc.teacher}</_.Subtitle>
            </_.Up>
        <_.Body>
          {makeDocument(doc.content)}
        </_.Body>
      </_.ContentArea>
    </_.Wrapper>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';
import makeDocument from '../../../../util/Document';
interface Document {
  id: string;
  title: string;
  content: string;
  date: string;
}


const documents: Document[] = [
    {
      id: '1',
      title: '시작 안내',
      content: '<제목1>시작 안내</제목1> 이 문서는 <강조>makeDocument</강조> 함수 동작을 확인하기 위한 샘플입니다.',
      date: '2025-06-07',
    },
    {
      id: '2',
      title: '기능 설명',
      content: '<제목2>기능 설명</제목2> 본문에서는 <강조>제목 태그</강조>와 <강조>강조 태그</강조>만 사용할 수 있습니다.',
      date: '2025-06-06',
    },
    {
      id: '3',
      title: '마무리 인사',
      content: '<제목3>마무리 인사</제목3> 테스트가 끝났으면, 이제 실제 콘텐츠를 자유롭게 작성해 보세요.',
      date: '2025-06-05',
    },
  ];
  
export default function Detail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const doc = documents.find(d => d.id === id);

  if (!doc) {
    return <div>문서를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{doc.title}</h1>
      <p>{doc.date}</p>
      <div> {makeDocument(doc.content)}</div>
    </div>
  );
}

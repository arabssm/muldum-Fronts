import { useNavigate } from 'react-router-dom';
import Sidebar from './sibebar/sidebar';
import styled from '@emotion/styled';

export default function Notfound() {
  const navigate = useNavigate();
  return (
    <>
    <Wrapper>
      <Sidebar />
      <Main>
        <Error>404</Error>
        <Title>요청하신 화면을 찾을 수 없습니다</Title>
        <SubTitle onClick={() => navigate(-1)}>이전 페이지로 돌아가기</SubTitle>
      </Main>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Error = styled.div`
  color: #FF9B62;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 1.5%;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #545454;
  margin-bottom: 3%;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: #909090;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff9b62;
    text-decoration: underline;
  }
`;

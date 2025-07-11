import * as _ from './style';
import Sidebar from '@_components/sibebar/sidebar';
import {getApplyall,finalapply} from '../../api/apply';
import { useEffect,useState } from 'react';
import Box from '@_components/object/box';

export default function Objectall(teamid){
    const [requests, setRequests] = useState<Request[]>([]); 
    const finalApply= () => {
        finalapply(1)
        .then(() => {
          alert('신청이 완료되었습니다.');
          window.location.reload();
        })
        .catch((err) => {
          console.log("게시물을 불러오는 데 실패했습니다.", err);
        });
      }
      useEffect(() => {
        getApplyall(1)
          .then((data2) => {
            setRequests(data2);
            console.log(data2);
          })
          .catch((err) => {
            console.log("게시물을 불러오는 데 실패했습니다.", err);
          });
      }, []);
      const handleReasonChange = (no: string, newReason: string) => {
        setRequests(rs =>
          rs.map(r => (r.id === no ? { ...r, reason: newReason } : r))
        );
      };
    return(
        <_.PageWrapper>
        <Sidebar />
        <_.Container>
        <_.ListSection>
            <_.ListSectionHeader>
              <_.SectionTitle>우리 팀이 신청한 물건 확인하기</_.SectionTitle>
            </_.ListSectionHeader>
            <_.ListWrapper>
              {requests.map(r => (
                <Box
                  key={r.id}
                  request={r}
                  onReasonChange={handleReasonChange}
                />
              ))}
            </_.ListWrapper>
          </_.ListSection>
          </_.Container>
        </_.PageWrapper>
    );
}
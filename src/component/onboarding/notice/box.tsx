import styled from "@emotion/styled";
export default function Box(title:string,date:string){
    return(
        <>
            <Container>
                <p>{title}</p>
                <p>{date}</p>
            </Container>
        </>
    );
}
const Container=styled.div`

`;
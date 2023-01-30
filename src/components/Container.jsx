import styled from '@emotion/styled';

function Container({children}) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;

export default Container;

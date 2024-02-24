import styled from 'styled-components';

const HomeWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

const TestHomeContainer = () => {
  return <HomeWrapper>test</HomeWrapper>;
};

export default TestHomeContainer;

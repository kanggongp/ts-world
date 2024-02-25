import styled from 'styled-components';

const TestHomeContainer = () => {
  return (
    <HomeWrapper>
      <Tittle>Ainjob Project</Tittle>
    </HomeWrapper>
  );
};

export default TestHomeContainer;

const HomeWrapper = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

const Tittle = styled.h1`
  font-family: 'Noto Sanans Kr', sans-serif;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray900};
`;

const MainButton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue};
`;

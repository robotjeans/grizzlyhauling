import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
  transition: padding 0.3s;
  display: flex;
  position: fixed;
  z-index: 111;
  padding: 0.3rem 1.2rem 0.5rem;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  ${(props) =>
    props.show &&
    `
    padding-top: 0.1rem;
    padding-bottom: 0.4rem;
    background: linear-gradient(180deg,#f5f7fd 50%,rgba(245,247,253,.991353) 53.33%,rgba(245,247,253,.96449) 56.67%,rgba(245,247,253,.91834) 60%,rgba(245,247,253,.852589) 63.33%,rgba(245,247,253,.768225) 66.67%,rgba(245,247,253,.668116) 70%,rgba(245,247,253,.557309) 73.33%,rgba(245,247,253,.442691) 76.67%,rgba(245,247,253,.331884) 80%,rgba(245,247,253,.231775) 83.33%,rgba(245,247,253,.147411) 86.67%,rgba(245,247,253,.0816599) 90%,rgba(245,247,253,.03551) 93.33%,rgba(245,247,253,.0086472) 96.67%,rgba(245,247,253,0));
  `}
`;

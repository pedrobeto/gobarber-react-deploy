import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  > header {
    height: 112px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  justify-content: center;
  margin: -104px auto 0;

  width: 100%;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 12px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: 12px;
  position: relative;
  align-self: center;
  height: 128px;
  width: 128px;

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    cursor: pointer;
    border: 0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Marcellus+SC&family=Raleway:ital,wght@0,200;1,200&display=swap');
</style>;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h2 {
    font-weight: 600;
    letter-spacing: 0.4rem;
    font-size: 3rem;
    font-family: "Marcellus SC", serif;
    text-shadow: -1px 1px 1.8px white;
    text-transform: uppercase;
    text-align: center;
    margin-left: 6%;
    color: #6f4e37;
  }

  img {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 820px) {
    padding: 0 10px;
    h2 {
      font-size: 1rem;
    }
    img {
      height: 60px;
      width: 60px;
    }
  } ;
`;
export const Button = styled.div`
  background-color: #bb9457;
  color: white;
  border-radius: 40px;
  font-weight: 200;
  font-size: 2rem;
  font-family: "Raleway", sans-serif ExtraLight 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  height: 19px;
  cursor: pointer;
  @media (max-width: 820px) {
    font-size: 13px;
  }
`;

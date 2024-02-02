import {styled} from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: blueviolet;
  padding: 0.5rem 5rem;
  @media screen and (max-width: 768px) {
    padding: 0.2rem 1rem;
  }
`;
export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Logo = styled.img`
  width: 10rem;
  height: fit-content;
  @media screen and (max-width: 768px) {
    width: 5rem;
    height: fit-content;
  }
`;
export const AccDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const AccImg = styled.img`
  background-color: antiquewhite;
  width: 2rem;
  height: 2rem;
  border-radius: 4rem;
`;
export const AccId = styled.p`
  color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* letter-spacing: 0.8px; */
`;

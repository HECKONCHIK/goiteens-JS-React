import styled from "styled-components";

export const Container = styled.div`
padding: 10px;
`
 
export const Title = styled.h2`
line-height: 1.3;
`
export const Option = styled.span`
display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin: 8px;
  border: none;
  background-color: ${(props=>props.backgroundColor)};
  transition: transform 250ms linear;

  &:hover{
    transform: translateY(-50%)
  }
`
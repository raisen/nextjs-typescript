import styled from "styled-components";

type Props = {
  text: string
};
export default ({ text }: Props) => {
  return <Wrapper>
    {text}
  </Wrapper>;
};

const Wrapper = styled.section`
  background-color: lightgreen;
  padding: 1em;
  display: inline-block;
`;
import Style from './Greeting.style';

const Greeting = ({ name = 'React' }) => {
  return (
    <>
      <Style.Heading>Hello {name}!</Style.Heading>
      <Style.SubText>It uses styled-components to component styling.</Style.SubText>
    </>
  );
};

export default Greeting;

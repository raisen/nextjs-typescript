import Panel from '../components/panel';
import { MainContext, mainContextDefaultValues } from '../context/main-context';


type Props = {
  text: string;
};

export default ({ text }: Props) => {
  return <MainContext.Provider value={
    {
      ...mainContextDefaultValues,
      text: text,
    }
  }>
    <Panel text={text} />
  </MainContext.Provider>;
};

export async function getStaticProps(context) {
  const text = 'Hello';
  return {
    props: {
      text
    }
  }
};
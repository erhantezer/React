import CardsGrid from '../components/CardsGrid';
import MakeStylesComp from '../components/MakeStyleComp';
import TextFieldComp from '../components/TextFieldComp';
import TypoButtons from '../components/TypoButtons';

const Home = () => {
  return (
    <>
      <TypoButtons /> <br /><br /><br /><br /><br />
      <CardsGrid /> <br /><br /><br /><br /><br />
      <TextFieldComp/>
      <MakeStylesComp/>
    </>
  );
};

export default Home;

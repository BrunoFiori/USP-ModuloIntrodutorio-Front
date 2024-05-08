import CardItem from '../CardItem';
import Produtos from '../../Mocks/Produtos';
import * as S from './styles';

const CardItemsContainer = () => {
  return (
    <S.StyledGroupcardItems>
      {Produtos.map(item => {
        return <CardItem key={item.id} {...item} />;
      })}
    </S.StyledGroupcardItems>
  );
};

export default CardItemsContainer;

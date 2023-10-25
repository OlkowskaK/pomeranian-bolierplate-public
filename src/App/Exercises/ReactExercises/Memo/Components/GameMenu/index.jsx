import { Button } from '../Button';
import { MenuField } from '../MenuField';


export const GameMenu = ({ endGame }) => {
  return (
    <div className='GameMenuMemo'>
      <MenuField title="Czas gry">
        <Button isDisabled>1;23</Button>
      </MenuField>
      <MenuField title="Liczba ruchów">
        <Button isDisabled>5</Button>
      </MenuField>
      <MenuField title="Przyciski sterujące">
        <Button onClick={endGame} type="secondary">
          Stop
        </Button>
      </MenuField>
    </div>
  );
};
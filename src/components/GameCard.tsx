import { Game } from '../hooks/useGames';
import { Card, Image, CardBody, Heading, Text, HStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import noImage from '../../src/assets/no-image-placeholder.webp';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="200px" borderRadius={10} overflow="hidden">
      <Image src={game.background_image || noImage} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.rating_top}
          {game.name} <Emoji rating={game.rating_top} />{' '}
        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;

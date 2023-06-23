import {
  Card,
  CardBody,
  Heading,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import React from 'react';

const GameCardSkeleton = () => {
  return (
    <Card width={'200px'} borderRadius={10} overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

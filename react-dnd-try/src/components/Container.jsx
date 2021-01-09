import React, { useState, useCallback } from 'react';
import Card from './Card';
import update from 'immutability-helper';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  width: 500,
};

const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write',
    },
    {
      id: 2,
      text: 'Make',
    },
    {
      id: 3,
      text: 'README',
    },
    {
      id: 4,
      text: 'Create',
    },
    {
      id: 5,
      text:
        'Twitter',
    },
    {
      id: 6,
      text: '????',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
    {
      id: 8,
      text: 'Farhan',
    },
    {
      id: 9,
      text: 'Emon',
    },
    {
      id: 10,
      text: 'Raton',
    },
    {
      id: 11,
      text: 'Faiza',
    },
    {
      id: 12,
      text: 'Hasan',
    },
    {
      id: 13,
      text: 'Antu',
    },
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [cards]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </DndProvider>
  );
};

export default Container;

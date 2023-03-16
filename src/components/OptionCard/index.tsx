import { memo, MouseEventHandler } from 'react';
import Image from 'next/image';
import { Item } from '@/types';
import Button from '@/components/Button';

const Card = ({
  item,
  isSelected,
  onSelect,
}: {
  item: Item,
  isSelected: boolean,
  onSelect: Function & MouseEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLDivElement>,
}) => {
  return (
    <div
      className={`my-4 sm:mx-4 min-w-[200px] rounded-lg overflow-hidden shadow-defaultHidden ${
        isSelected ? 'bg-cardSelected' : 'bg-cardDefault'
      } `}
    >
      <div className="relative w-full h-[100px]">
        <Image src={item.photoUrL} alt={item.name} fill />
      </div>
      <div className="px-6 pt-2 pb-6 text-sm">
        <div className="text-lg mb-4">{item.name || ''}</div>
        <Button onClick={onSelect} className="bg-btnSelectDefault" data-testid="card">
          {isSelected ? 'Unselect' : 'Select'}
        </Button>
      </div>
    </div>
  );
};

export default memo(Card);

import { useCallback, useState } from 'react';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

import useComputationOptions from '@/hooks/useComputationOptions';
import Card from '@/components/OptionCard';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

const inter = Roboto({ weight: '500', subsets: ['latin'] });

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string | null }>({});
  const [openModal, setOpenModal] = useState(false);
  const { loading, options } = useComputationOptions();

  const handleModal = useCallback(
    (newState: boolean) => () => {
      setOpenModal(newState);
    },
    [],
  );
  const handleSelectOption = useCallback(
    ({ groupId, id }: { groupId: string, id: string }) =>
      () => {
        if (selectedOptions[groupId] === id) {
          setSelectedOptions(prev => {
            delete prev[groupId];
            return {
              ...prev,
            };
          });
          return;
        }
        setSelectedOptions(prev => {
          return {
            ...prev,
            [groupId]: id,
          };
        });
      },
    [setSelectedOptions, selectedOptions],
  );

  return (
    <>
      <Head>
        <title>Syroco Front End Engineering Challenge</title>
        <meta name="description" content="Syroco take-home challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Modal open={openModal} onClose={handleModal(false)} selected={selectedOptions} />
        <div className="p-8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="text-xl mb-8">Efficientship - Computation parameters</div>
              {options?.items?.map(option => (
                <div key={option.id}>
                  <div className="text-lg my-6 bg-headerBg p-3">
                    {option.name || option.title || ''}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap">
                    {option.items?.map(item => (
                      <Card
                        key={item.id}
                        item={item}
                        isSelected={selectedOptions?.[option.id] === item.id}
                        onSelect={handleSelectOption({ groupId: option.id, id: item.id })}
                      />
                    ))}
                  </div>
                </div>
              ))}
              {Object.keys(selectedOptions).length === options?.items.length && (
                <Button
                  onClick={handleModal(true)}
                  className={`mt-6 bg-btnLaunchDefault hover:bg-btnLaunchHover`}
                >
                  Launch computation
                </Button>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

import { memo, useCallback } from 'react';
import Button from '@/components/Button';

const Modal = ({
  selected,
  open,
  onClose,
}: {
  selected: { [key: string]: string | null },
  open: Boolean,
  onClose: Function,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return !open ? null : (
    <div
      className={`w-screen h-screen fixed z-10 ${open ? '' : 'hidden'}`}
      aria-hidden={open ? 'false' : 'true'}
    >
      <div className="w-screen h-screen bg-overlay absolute" onClick={handleClose} />
      <div className="w-[90vw] sm:w-[70vw] h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20 bg-zinc-300 text-zinc-900 text-2xl rounded-lg overflow-scroll">
        <div className="flex justify-end">
          <Button
            data-testid="close-modal"
            className="flex items-center justify-center m-4"
            onClick={handleClose}
            style={{ padding: 'initial', width: 42, height: 42, borderRadius: '100%' }}
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            !!selected.length ? 'w-full' : ''
          } w-full px-4 sm:px-4 max-h-[250px]`}
        >
          <div className="text-2xl">Computation completed</div>
          {!!Object.keys(selected).length && (
            <>
              <div className="text-lg mt-4">Items selected:</div>
              <div className="flex flex-row flex-wrap">
                {Object.keys(selected).map(key => (
                  <div key={key} className="text-lg mt-2 mr-2">
                    {key}: {selected[key]}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);

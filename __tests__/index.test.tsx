import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '../src/components/Modal';
import OptionCard from '../src/components/OptionCard';
import Button from '../src/components/Button';

// Test Modal component
describe('Modal', () => {
  it('should render modal', () => {
    render(
      <Modal
        selected={{
          ship: 'hmm_helsinki',
          'maritime-line': 'north-europe-french-west-indies',
          wasps: 'aeoldrive-solidsail',
        }}
        open
        onClose={() => {}}
      />,
    );

    expect(screen.getByText('Computation completed')).toBeInTheDocument();
    expect(screen.getByText('ship: hmm_helsinki')).toBeInTheDocument();
    expect(screen.getByText('maritime-line: north-europe-french-west-indies')).toBeInTheDocument();
    expect(screen.getByText('wasps: aeoldrive-solidsail')).toBeInTheDocument();
  });

  it('should not render modal', () => {
    render(<Modal selected={{}} open={false} onClose={() => {}} />);

    expect(screen.queryByText('Computation completed')).not.toBeInTheDocument();
  });

  it('should close modal', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal selected={{}} open onClose={onClose} />);

    fireEvent.click(getByTestId('close-modal'));

    expect(onClose).toHaveBeenCalled();
  });
});

// Test Card component
describe('OptionCard', () => {
  it('should render card', () => {
    render(
      <OptionCard
        item={{
          id: '1',
          name: 'test',
          photoUrL:
            'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/HMM.jpg',
        }}
        isSelected={false}
        onSelect={() => {}}
      />,
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should select card', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <OptionCard
        item={{
          id: '1',
          name: 'test',
          photoUrL:
            'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/HMM.jpg',
        }}
        isSelected={false}
        onSelect={onSelect}
      />,
    );

    fireEvent.click(getByTestId('card'));

    expect(onSelect).toHaveBeenCalled();
  });

  it('should unselect card', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <OptionCard
        item={{
          id: '1',
          name: 'test',
          photoUrL:
            'https://syroco-hiring-public-assets.s3.eu-west-1.amazonaws.com/react-take-home-exercise/HMM.jpg',
        }}
        isSelected
        onSelect={onSelect}
      />,
    );

    fireEvent.click(getByTestId('card'));

    expect(onSelect).toHaveBeenCalled();
  });
});

// Test Button component
describe('Button', () => {
  it('should render button', () => {
    render(<Button onClick={() => {}}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

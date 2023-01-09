import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'ui';

describe('Error Page', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('clicks', async () => {
    const mockCallback = jest.fn();
    render(
      <Button onClick={mockCallback}>
        Test Button
      </Button>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('not clicks when disabled', () => {
    const mockCallback = jest.fn(() => null);
    render(
      <Button disabled onClick={mockCallback}>
        Test Button
      </Button>,
    );
    userEvent.click(screen.getByText('Test Button'));
    expect(mockCallback).toHaveBeenCalledTimes(0);
  });

  it('not crash when no callback', () => {
    const { container } = render(<Button>Test Button</Button>);
    userEvent.click(screen.getByText('Test Button'));
    expect(container).toBeDefined();
  });
});

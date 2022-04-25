import ArticleNumberDropdown from './ArticleNumberDropdown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const setActicleNumbers = jest.fn();

describe('ArticleNumberDropdown', () => {
  it('renders select item', () => {
    render(<ArticleNumberDropdown setActicleNumbers={setActicleNumbers} />);
    const selectElement = screen.getByRole('combobox');
    const allOptions = screen.getAllByRole('option');

    expect(allOptions).toHaveLength(4);
    expect(selectElement).toBeInTheDocument();
  });

  it('renders select element and test it with user input to check callback', () => {
    render(<ArticleNumberDropdown setActicleNumbers={setActicleNumbers} />);
    const selectElement = screen.getByRole('combobox');

    userEvent.selectOptions(
      selectElement,
      screen.getByRole('option', { name: '20 Articles' })
    );

    expect(setActicleNumbers).toHaveBeenCalled();
  });
});

import SearchInputForm from './SearchInputForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const setSearchQuery = jest.fn();

describe('InputFrom', () => {
  it('renders a inputfield and a button', () => {
    render(<SearchInputForm setSearchQuery={setSearchQuery} />);
    const inputfieldElement = screen.getByLabelText('Searchinput');
    const buttonElement = screen.getByLabelText('Submit');
    expect(inputfieldElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders inputfield and button with vaild user input', () => {
    render(<SearchInputForm setSearchQuery={setSearchQuery} />);
    const inputfieldElement = screen.getByLabelText('Searchinput');
    const buttonElement = screen.getByLabelText('Submit');
    userEvent.type(inputfieldElement, 'Tesla');
    expect(inputfieldElement).toHaveValue('Tesla');
    expect(buttonElement).not.toBeDisabled();
  });

  it('renders inputfield and button with invaild user input', () => {
    render(<SearchInputForm setSearchQuery={setSearchQuery} />);
    const inputfieldElement = screen.getByLabelText('Searchinput');
    const buttonElement = screen.getByLabelText('Submit');
    userEvent.type(inputfieldElement, '$ Tesla');
    const validationErrorElement = screen.getByText(/special characters/i);
    userEvent.click(buttonElement);
    expect(validationErrorElement).toBeInTheDocument();
    expect(buttonElement).toBeDisabled();
    expect(setSearchQuery).not.toHaveBeenCalled();
  });

  it('renders inputfield, button with vailid user input and submits form', () => {
    render(<SearchInputForm setSearchQuery={setSearchQuery} />);
    const inputfieldElement = screen.getByLabelText('Searchinput');
    const buttonElement = screen.getByLabelText('Submit');
    userEvent.type(inputfieldElement, 'Tesla');
    userEvent.click(buttonElement);
    expect(setSearchQuery).toHaveBeenCalled();
  });
});

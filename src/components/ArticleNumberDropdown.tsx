import styled from 'styled-components';

const ArticleNumberDropdown: React.FC<{
  setActicleNumbers: (arg0: number) => void;
}> = ({ setActicleNumbers }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActicleNumbers(parseInt(e.target.value));
  };

  return (
    <Container>
      <label htmlFor="Article numbers">
        <SelectDropdown
          defaultValue={10}
          aria-label="Adjust article number"
          id="Article numbers"
          onChange={handleChange}
        >
          <option value="DEFAULT" disabled>
            Articles on pages
          </option>
          <option value={5}>5 Articles</option>
          <option value={10}>10 Articles</option>
          <option value={20}>20 Articles</option>
        </SelectDropdown>
        <Arrow></Arrow>
      </label>
    </Container>
  );
};

export default ArticleNumberDropdown;

const Container = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectDropdown = styled.select`
  font-size: 1rem;
  padding: 0.3rem 0.9rem 0.3rem 0.3rem;
  background: var(--bg-color-dark-grey);
  color: white;
  border: 0;
`;

const Arrow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--bg-color-grey-arrow);
  height: 100%;
  width: 2rem;
  pointer-events: none;

  ::before,
  ::after {
    --size: 0.5em;
    --color: rgba(255, 255, 255, 0.5);
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-bottom: var(--size) solid var(--color);

    top: 30%;
  }

  ::after {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid var(--color);

    top: 70%;
  }
`;

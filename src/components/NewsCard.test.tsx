import NewsCard from './NewsCard';
import { render, screen } from '@testing-library/react';

const testArticle = {
  source: {
    id: 'the-verge',
    name: 'The Verge',
  },
  author: 'Jay Peters',
  title:
    'Block and Blockstream are partnering with Tesla on an off-grid, solar-powered Bitcoin mine in Texas',
  description:
    'Block and Blockstream are partnering with Tesla on an open-source, solar-powered Bitcoin mine, the companies announced Friday. Tesla’s 3.8-megawatt Solar PV array and its 12 megawatt-hour Megapack will power the facility, and construction has started on the p…',
  url: 'https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas',
  urlToImage:
    'https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg',
  publishedAt: new Date('2022-04-08T16:02:52Z'),
  content:
    'Its set to open later this year\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nBlock and Blockstream, a … [+1336 chars]',
};

describe('NewsCard', () => {
  it('renders image, overlines, title and content', () => {
    render(<NewsCard article={testArticle} />);
    const authorElement = screen.getByText('Jay Peters');
    const imageElement = screen.getByAltText(/partnering with Tesla/i);
    const dateElement = screen.getByText('8.4.2022');

    expect(authorElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas'
    );
  });
});

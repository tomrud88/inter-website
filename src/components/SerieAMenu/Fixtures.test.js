import { render } from '@testing-library/react';
import Fixtures from './Fixtures';

describe('Fixtures component', () => {
    test('renders fixtures if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
          json: async () => [{ id: 1, homeTeam: "Inter" }],
        });
        render(<Fixtures/>)
    })
} )
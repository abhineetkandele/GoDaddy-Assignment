import { render, screen } from '@testing-library/react';
import RepoDetails from './RepoDetails';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => jest.fn(),
    useParams: () => ({ id: 1 }),
  };
});

describe('RepoDetails', () => {
  const props = {
    repoList: [
      {
        id: 1,
        name: 'test repo name',
        description: 'test repo desc',
        html_url: 'html_url',
        language: 'language',
        open_issues: 'open_issues',
        watchers: 'watchers',
        forks: 'forks',
      },
    ],
  };

  beforeEach(() => {
    render(<RepoDetails {...props} />);
  });

  test('RepoDetails', () => {
    expect(screen.getByText(/test repo name/i)).toBeInTheDocument();
    expect(screen.getByText(/test repo desc/i)).toBeInTheDocument();
  });
});

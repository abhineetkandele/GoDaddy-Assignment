import { fireEvent, render, screen } from '@testing-library/react';
import * as ReactRouter from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import RepoList from './RepoList';

const navidateMockFn = jest.fn();
const useNavigateMock = () => navidateMockFn;
jest.mock('react-router-dom', () => {
  return {
    useNavigate: useNavigateMock,
  };
});

jest.mock('../../hooks/useFetch', () => {
  return {
    __esModule: true,
    default: () => {
      return {
        loading: false,
        error: false,
        data: [
          {
            id: 1,
            name: 'test',
            description: 'test desc',
          },
        ],
      };
    },
  };
});

describe('RepoList', () => {
  const props = {
    setRepoList: jest.fn(),
  };

  beforeEach(() => {
    render(<RepoList {...props} />);
  });

  test('Validate repo list loading', async () => {
    const linkElement = await screen.findByText(/List of Public Go Daddy Repositories/i);
    expect(linkElement).toBeInTheDocument();
    const repoListItems = await screen.findAllByTestId('repolist-item');
    expect(repoListItems.length).toBeGreaterThan(0);
    fireEvent.click(repoListItems[0]);
    expect(navidateMockFn).toHaveBeenCalledWith('/1');
  });
});

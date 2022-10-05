import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { filterData } from './RepoList.helpers';
import classes from './RepoList.module.css';

const RepoList = ({ setRepoList }) => {
  const navigate = useNavigate();

  const { loading, error, data } = useFetch({
    url: 'https://api.github.com/orgs/godaddy/repos',
    initialState: [],
    transformData: filterData,
  });

  useEffect(() => {
    setRepoList(data);
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error occured. Please refresh.</h1>;
  }

  return (
    <div className={classes.repoList}>
      <h1>List of Public Go Daddy Repositories</h1>
      <div className={classes.repoListContainer}>
        {data.map((repoItem) => (
          <div
            className={classes.repoListItem}
            data-testid="repolist-item"
            key={repoItem.id}
            onClick={() => navigate(`/${repoItem.id}`)}
          >
            <h3>{repoItem.name}</h3>
            <p>{repoItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;

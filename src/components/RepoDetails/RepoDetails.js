import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import classes from './RepoDetails.module.css';

const RepoDetails = ({ repoList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const repoItem = repoList.find((repo) => repo.id == id);

  return (
    <>
      <button className={classes.goback} onClick={() => navigate('/')}>
        Go back
      </button>
      {!!repoItem ? (
        <div className={classes.repoItem}>
          <h1>{repoItem.name}</h1>
          <p className={classes.repoItem_description}>{repoItem.description}</p>
          <p>
            <b>Github Link: </b>
            <a href={repoItem.html_url} target="_blank">
              {repoItem.html_url}
            </a>
          </p>

          <p>
            <b>Languages used: </b>
            {repoItem.language}
          </p>
          <div className={classes.repoItem_details}>
            <div className={classes.repoItem_details_item}>
              <p>Open Issues</p>
              <p>{repoItem.open_issues}</p>
            </div>
            <div className={classes.repoItem_details_item}>
              <p>Watchers</p>
              <p>{repoItem.watchers}</p>
            </div>
            <div className={classes.repoItem_details_item}>
              <p>Forks</p>
              <p>{repoItem.forks}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Please Go to home page and try again</p>
      )}
    </>
  );
};

export default RepoDetails;

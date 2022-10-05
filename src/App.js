import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RepoList from './components/RepoList/RepoList';
import classes from './App.module.css';

const RepoDetails = lazy(() => import('./components/RepoDetails/RepoDetails'));

function App() {
  const [repoList, setRepoList] = useState([]);

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<RepoList setRepoList={setRepoList} />} />
            <Route path="/:id" element={<RepoDetails repoList={repoList} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

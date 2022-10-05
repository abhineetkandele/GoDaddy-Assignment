export const filterData = (repo) => {
  const { id, name, description, html_url, forks, open_issues, watchers, language } = repo;
  return {
    id,
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers,
    language,
  };
};

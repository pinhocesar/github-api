import React from "react";
import Layout from "./components/Layout";
import NoSearch from "./components/No-search";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import useGithub from "./hooks/github-hook";

const App = () => {
  const { githubState } = useGithub();
  
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <span>Carregando...</span>
          ) : (
              <>
                <Profile />
                <Repos />
              </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App;
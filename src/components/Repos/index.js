import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hook";
import Card from "../Card";
import * as S from "./styled";

const Repos = () => {
    const {githubState, getUserRepos, getUserStarred} = useGithub()

    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

    useEffect (() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login)
            getUserStarred(githubState.user.login)
        }
        setHasUserForSearchRepos(githubState.repos)
    }, [githubState.user.login])
    
    return (
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositórios</S.WrapperTab>
                        <S.WrapperTab>Favoritos</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                       <S.WrapperList>
                           {githubState.repos.map((item) => (
                                <Card 
                                    key={item.id}
                                    name={item.name}
                                    fullName={item.full_name}
                                    linkToRepo={item.html_url}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                       <S.WrapperList>
                           {githubState.starred.map((item) => (
                                <Card 
                                    key={item.id}
                                    name={item.name}
                                    fullName={item.full_name}
                                    linkToRepo={item.html_url}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
            <></>
            )}
        </>
    )
}

export default Repos;
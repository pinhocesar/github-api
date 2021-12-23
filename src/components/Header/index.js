import React, { useState } from "react";
import useGithub from "../../hooks/github-hook";
import * as S from "./styled";

const Header = () => {
    const { getUser } = useGithub()
    const [usernameForSearch, setusernameForSearch] = useState()

    const submitGetUser = () => {
        if(!usernameForSearch) return
        return getUser(usernameForSearch)
    }
    
    return (
        <header>
            <S.Wrapper>
                <input
                    type="text" 
                    placeholder="Pesquisar nome do usuário" 
                    onChange={(event) => setusernameForSearch(event.target.value)}
                />
                <button
                    type="submit"
                    onClick={submitGetUser}
                >
                    Buscar
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header;
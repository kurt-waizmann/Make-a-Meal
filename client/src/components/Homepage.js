import styled from 'styled-components'
import { useState } from 'react';

import Begin from './Begin';
import Recipe from './Recipe';

const Homepage = () => {
const [newRecipe, setNewRecipe] = useState()

const findRecipe = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
        setNewRecipe(res.meals[0])
	});
}

    return (
        <Wrapper>
            <InnerWrap>
                {newRecipe ? <Recipe newRecipe={newRecipe}/>: <Begin/> }
                <MainBtn onClick={findRecipe}>{newRecipe ? "Nah, Something Else" : "Please, pick for me"}</MainBtn>
            </InnerWrap>
        </Wrapper>
    )
}

export default Homepage

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: red;
    border-radius: 5px;
    width: 34rem;
    height: 645px;
    min-height: 100%;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin: 0px;
    gap: 1rem;
`
const MainBtn = styled.button`
    background-color: inherit;
    border-radius: 5px;
    font-weight: 800;
    font-size: 2rem;
    border: none;
    margin: 1rem;
    text-transform: uppercase;
`


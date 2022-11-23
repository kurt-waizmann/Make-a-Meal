import styled from 'styled-components'

const Recipe = ({ newRecipe }) => {

    return (
        <>
            {newRecipe && <>
                <h1>How would you like to eat...</h1>
                <Name>{newRecipe.strMeal}?</Name>
                <Image src={newRecipe.strMealThumb} />
            </>}
        </>
    )
}

export default Recipe

const Image = styled.img`
    height: 30rem;
    width: 30rem;
`
const Name = styled.p`
    height: 13rem;
    width: 100%;
    display: flex;
    align-items: center;
`
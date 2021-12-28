export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = (id) => {
    console.log(id)
    return {
        type: TOGGLE_FAVORITE,
        mealId: id
    }
}
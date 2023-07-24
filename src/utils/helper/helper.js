export const obobob = (items,itemId,ObjectPropId,ObjectState, )=>{
    return items.map(u => {
        if (u[ObjectPropId] === itemId) {
            return { ...u,...ObjectState , }
        }
        return u
    })
}
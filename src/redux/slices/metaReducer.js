export const createResetMetaReducer =  (actionType, slicesToReset) => {
    return function (reducer)
    {
       return function(state, action)
       {
        if(action.type === actionType)
        {
            const resetState = {};
            slicesToReset.forEach(slice => {
                resetState[slice] = reducer(undefined, {type: '@@INIT'})[slice];
            });
            return {
                ...state,
                ...resetState
            };
        }
        return reducer(state, action);
       };
    };
};
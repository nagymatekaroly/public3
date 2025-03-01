export const load = async (event) => { 
    return {
        user: event.locals.user, //netlifyn e helyére a link kell 
        cica: 23434134123123
    }

}

export const actions = {
    cica: async (event) => {
        var data = await event.request.formData();
        console.log(data.get('cica'))
    },

    kutya: async (event) => {
        var data = await event.request.formData();
        console.log(Number(data.get('kutya')) + 1)
    }
}
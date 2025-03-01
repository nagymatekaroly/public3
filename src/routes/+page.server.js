export const load = async (event) => { 
    console.log(event.locals)
    return {
        user: event.locals.user, //netlifyn e helyére a link kell 
        cica: 23434134123123
    }

}

export const actions = {
    default: async (event) => {
        var data = await event.request.formData();
        console.log(data.get('cica'))
    }
}
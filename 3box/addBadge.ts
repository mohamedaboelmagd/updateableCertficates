

export  const defineBadge = async(address,name,description,photo)=>{
    const uuid = require('uuid/v4');
    const Box = require('3box')

    const id =  uuid();
    const object = {
        description,
        name,
        photo,
        version:1.0,
        orgId:address,
        created:Date.now(),
        updates:[`${id}_v1.0`]

    }


    const myAppSpace = await Box.openSpace(`${address}_badges`)

    await myAppSpace.public.set(id, JSON.stringify(object))
    await myAppSpace.public.set(object.updates[0], JSON.stringify(object))

    return {id , object}

}

export const addBadgeToProfile = async(address,id) =>{

    const Box = require('3box')

    const profile = await Box.getProfile(address)
    const badges = profile.badges || []
    profile.public.set('badges',badges.push(id))

} 
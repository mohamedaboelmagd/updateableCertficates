

export  const addBadge = async(address,name,description,photo)=>{
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

    // update badges space
    const badgesSpace = await Box.openSpace(`${address}_badges`)
    await badgesSpace.public.set(id, JSON.stringify(object))
    await badgesSpace.public.set(object.updates[0], JSON.stringify(object))

    // update profile 
    const profile = await Box.getProfile(address) 
    const badges = profile.badges || []
    profile.public.set('badges',badges.push(id))

    return {id , object}

}

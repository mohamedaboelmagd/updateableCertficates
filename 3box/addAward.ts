
export const addAwards = async(address:string,badgeId, awards:{name,note}[]) =>{

    
    const uuid = require('uuid/v4');
    const Box = require('3box')

    const awardKeys = []
    const awardObjects = []
    const awardArchiveKeys = []
    const awardArchiveObjects = []

for(const item of awards){

    const id =  uuid();
    const object = {
        name:item.name,
        note:item.note || '',
        badgeId,
        version:1.0,
        created:Date.now(),
        updates:[`${id}_v1.0`]
    }

   awardKeys.push(id)
   awardObjects.push(JSON.stringify(object))
   awardArchiveKeys.push(object.updates[0])
   awardArchiveObjects.push(JSON.stringify(object))
    
}

 

    const awardsSpace = await Box.openSpace(`${address}_awards`)
    await awardsSpace.public.setMultiple(awardKeys, JSON.stringify(awardObjects))
    await awardsSpace.public.setMultiple(awardArchiveKeys, JSON.stringify(awardArchiveObjects))

    const badgesSpace =  await Box.openSpace(`${address}_badges`)
    const badge = await badgesSpace.public.get(badgeId)
    await badgesSpace.public.set(badgeId,{...badge , awards:badge.awards.push(...awardKeys)})
}


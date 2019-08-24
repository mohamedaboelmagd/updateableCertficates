const id = 'https://www.npmjs.com/package/uuid'
const archiveId = `badge-${id}-version1.0`
const description = ''
const object = {id,description,updates:[archiveId],version:1.0,created:Date.now()}

// Open space for writing
const myAppSpace = await box.openSpace('vCertificateBadge')

// Update public space data
await myAppSpace.public.set(id, JSON.stringify(description))
await myAppSpace.public.set(archiveId, JSON.stringify(description))


const id = 'https://www.npmjs.com/package/uuid'
const archiveId = `award-${id}-version1.0`
const description = ''
const badgeId = ''
const object = {id,description,badgeId,updates:[archiveId],version:1.0,created:Date.now()}

// Open space for writing
const myAppSpace = await box.openSpace('vCertificateAwards')

// Update public space data
await myAppSpace.public.set(id, JSON.stringify(description))
await myAppSpace.public.set(archiveId, JSON.stringify(description))



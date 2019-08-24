const latest = await box.public.get(`id`)
// latest.name && latest.description  THE UPDATE
latest.version = latest.version + 0.10
latest.updates.unshift( // replace the version number)
latest.updated = Date.now()

// Open space for writing
const myAppSpace = await box.openSpace('vCertificateAwards')

// Update public space data
await myAppSpace.public.set(id, JSON.stringify(description))
await myAppSpace.public.set(latest.updates[0], JSON.stringify(description))


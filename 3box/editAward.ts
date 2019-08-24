export const editAward = async (address: string, id: string) => {
    const Box = require("3box");
    // A line that defines the space as `${address}_awards` maybe needed
    const latest = await box.public.get(id);
    latest.version = latest.version + 0.1;
    latest.updates.unshift(`${id}_v${latest.version}`);
    latest.updated = Date.now();
  
    const awardsSpace = await Box.openSpace(`${address}_awards`);
  
    // Update public space data
    await awardsSpace.public.set(id, JSON.stringify(latest));
    await awardsSpace.public.set(latest.updates[0], JSON.stringify(latest));
  };
  
import { IAward } from "../models/award";

export const editAward = async (address: string, id: string ,  latest:IAward) => {
    const Box = require("3box");
    latest.version = latest.version + 0.1;
    latest.updates.unshift(`${id}_v${latest.version}`);
    latest.updated = Date.now();
  
    const awardsSpace = await Box.openSpace(`${address}_awards`);
  
    // Update public space data
    await awardsSpace.public.set(id, JSON.stringify(latest));
    await awardsSpace.public.set(latest.updates[0], JSON.stringify(latest));
  };
  
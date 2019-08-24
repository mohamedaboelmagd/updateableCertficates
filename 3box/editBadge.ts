import { IBadge } from "../models/badge";

export const editBadge = async (address: string, id: string, latest:IBadge) => {
  const Box = require("3box"); 
  // A line that defines the space as `${address}_badges` maybe needed
  latest.version = latest.version + 0.1;
  latest.updates.unshift(`${id}_v${latest.version}`);
  latest.updated = Date.now();

  const badgesSpace = await Box.openSpace(`${address}_badges`);

  // Update public space data
  await badgesSpace.public.set(id, JSON.stringify(latest));
  await badgesSpace.public.set(latest.updates[0], JSON.stringify(latest));
};

import { ErrorMapper } from './utils/ErrorMapper';

export const loop = ErrorMapper.wrapLoop(() => {
  // Example: iterate rooms
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    // Simple log
    console.log(`Room ${room.name} has ${room.energyAvailable} energy`);
  }
});

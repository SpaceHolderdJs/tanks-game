export interface UserInterface {
  nickname: string;
  password: string;
  email?: string;
  exp: number;
  friends: UserInterface[];
  supplies: UserSupplies;
  turrets: [];
  hulls: [];
  paints: [];
}

export interface UserSupplies {
  h: number;
  da: number;
  dd: number;
  ds: number;
  m: number;
}

export interface UserPosition {
  x: number;
  y: number;
  z: number;
}

export interface BattleUser {
  xp: number;
  hull: string;
  turret: string;
  paint: string;
  position: UserPosition;
  coolDown: number;
  turretRotation: number;
  hullRotation: number;
  currentSupplies: number[];
}

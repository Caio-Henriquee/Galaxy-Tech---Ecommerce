import { usuarios } from "./login.interface";

export type LoginPayload = Omit<usuarios, 'id'>;

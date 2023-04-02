export type Auth = {
  username : string,
  password : string
  token? : string
}

export interface AppState {
  auth : Auth
}

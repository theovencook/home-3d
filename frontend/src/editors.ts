// The editors list (#7): who may change the plan. The backend keeps it and refuses changes from anyone else; these
// helpers are the settings dialog's logic.

/** A Home Assistant user as `home_3d/editors/get` lists them. */
export interface EditorUser {
  id: string;
  name: string;
  is_admin: boolean;
  editor: boolean;
}

/** The editors after ticking (on) or unticking one user. */
export function pickEditor(users: EditorUser[], id: string, on: boolean): string[] {
  return users.filter((u) => (u.id === id ? on : u.editor)).map((u) => u.id);
}

/** This user is the only admin left on the list: unticking them is refused (someone must be able to change it). */
export function lastAdmin(users: EditorUser[], id: string): boolean {
  const admins = users.filter((u) => u.is_admin && u.editor);
  return admins.length === 1 && admins[0].id === id;
}

/** The users whose panel opens in locked tablet mode (#92, `settings.tablet_users`) after ticking or unticking one. */
export function pickTabletUser(list: readonly string[] | undefined, id: string, on: boolean): string[] {
  const rest = (list ?? []).filter((u) => u !== id);
  return on ? [...rest, id] : rest;
}

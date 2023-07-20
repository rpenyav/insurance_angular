import { User } from '../models/user.model'; // Asegúrate de importar el modelo User desde su ubicación correcta

export interface AppState {
  users: User[];
}

/**
 * Importa el modelo User de la carpeta `models`.
 */
import { User } from '../models/user.model';

/**
 * Define la interfaz del estado global de la aplicación.
 * Este estado incluye una lista de usuarios.
 * @interface
 */
export interface AppState {
  /** Una lista de usuarios en el estado de la aplicación. */
  users: User[];
}

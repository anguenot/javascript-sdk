/**
 * Interface for generic API entity properties.
 */
export interface ApiEntity {
  name: string;
  uuid: string;
  deleted: boolean;
  deleted_date: number;
  updated_date: number;
}

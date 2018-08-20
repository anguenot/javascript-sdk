import { CompanyUserJson } from './__json__/company-user';
import { UserDomainJson } from '../user/__json__/user-domain-json';
import { UserType } from '../user/__json__/user-type';

/**
 * Company user class.
 */
/* istanbul ignore next: autogenerated */
export class CompanyUser {

  constructor(private _json: CompanyUserJson) {
  }

  /**
   * Get user type.
   * @returns {UserType}
   */
  get userType(): UserType {
    return this._json.user_type;
  }

  /**
   * Get locked.
   * @returns {boolean}
   */
  get locked(): boolean {
    return this._json.locked;
  }

  /**
   * Get email.
   * @returns {string}
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get phone.
   * @returns {string}
   */
  get phone(): string {
    return this._json.phone;
  }

  /**
   * Get company.
   * @returns {string}
   */
  get company(): string {
    return this._json.company;
  }

  /**
   * Get address.
   * @returns {string}
   */
  get address(): string {
    return this._json.address;
  }

  /**
   * Get city.
   * @returns {string}
   */
  get city(): string {
    return this._json.city;
  }

  /**
   * Get state.
   * @returns {string}
   */
  get state(): string {
    return this._json.state;
  }

  /**
   * Get zip.
   * @returns {string}
   */
  get zip(): string {
    return this._json.zip;
  }

  /**
   * Get country.
   * @returns {string}
   */
  get country(): string {
    return this._json.country;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get fullname.
   * @returns {string}
   */
  get fullname(): string {
    return this._json.fullname;
  }

  /**
   * Get deleted.
   * @returns {boolean}
   */
  get deleted(): boolean {
    return this._json.deleted;
  }

  /**
   * Get created date.
   * @returns {number}
   */
  get createdDate(): number {
    return this._json.created_date;
  }

  /**
   * Get deleted date.
   * @returns {number}
   */
  get deletedDate(): number {
    return this._json.deleted_date;
  }

  /**
   * Get domain.
   * @returns {string | UserDomainJson}
   */
  get domain(): string | UserDomainJson {
    return this._json.domain;
  }

  /**
   * Get first name.
   * @returns {string}
   */
  get firstName(): string {
    return this._json.first_name;
  }

  /**
   * Get last name.
   * @returns {string}
   */
  get lastName(): string {
    return this._json.last_name;
  }

  /**
   * Get role.
   * @returns {string}
   */
  get role(): string {
    return this._json.role;
  }

  /**
   * Get the json representation of this class.
   * @returns {CompanyUserJson}
   */
  get json(): CompanyUserJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
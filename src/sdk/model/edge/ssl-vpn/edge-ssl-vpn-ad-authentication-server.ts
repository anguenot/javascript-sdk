import { EdgeSslVpnAuthServerType } from './__json__/edge-ssl-vpn-auth-server-type';
import { EdgeSslVpnAdAuthenticationServerJson } from './__json__/edge-ssl-vpn-json';
import { EdgeSslVpnAuthenticationServer } from './edge-ssl-vpn-authentication-server';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnAdAuthenticationServer extends EdgeSslVpnAuthenticationServer {

  constructor(protected _json: EdgeSslVpnAdAuthenticationServerJson) {
    super(_json);
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get ip.
   * @returns {string}
   */
  get ip(): string {
    return this._json.ip;
  }

  /**
   * Get port.
   * @returns {number}
   */
  get port(): number {
    return this._json.port;
  }

  /**
   * Get timeout.
   * @returns {number}
   */
  get timeout(): number {
    return this._json.timeout;
  }

  /**
   * Get enable ssl.
   * @returns {boolean}
   */
  get enableSsl(): boolean {
    return this._json.enable_ssl;
  }

  /**
   * Get search base.
   * @returns {string}
   */
  get searchBase(): string {
    return this._json.search_base;
  }

  /**
   * Get bind domain name.
   * @returns {string}
   */
  get bindDomainName(): string {
    return this._json.bind_domain_name;
  }

  /**
   * Get bind password.
   * @returns {string}
   */
  get bindPassword(): string {
    return this._json.bind_password;
  }

  /**
   * Get login attribute name.
   * @returns {string}
   */
  get loginAttributeName(): string {
    return this._json.login_attribute_name;
  }

  /**
   * Get search filter.
   * @returns {string}
   */
  get searchFilter(): string {
    return this._json.search_filter;
  }

  /**
   * Get terminate session on auth fails.
   * @returns {boolean}
   */
  get terminateSessionOnAuthFails(): boolean {
    return this._json.terminate_session_on_auth_fails;
  }

  /**
   * Get type.
   * @returns {EdgeSslVpnAuthServerType}
   */
  get type(): EdgeSslVpnAuthServerType {
    return this._json.type;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnAdAuthenticationServerJson}
   */
  get json(): EdgeSslVpnAdAuthenticationServerJson {
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
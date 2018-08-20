import {
  EdgeSslVpnAuthenticationServerUpdateRequestJson
} from './__json__/edge-ssl-vpn-authentication-server-update-request-json';
import { EdgeSslVpnAuthenticationUpdateRequestJson } from './__json__/edge-ssl-vpn-authentication-update-request-json';
import { EdgeSslVpnAuthenticationServerUpdateRequest } from './edge-ssl-vpn-authentication-server-update-request';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnAuthenticationUpdateRequest {

  private readonly _json: EdgeSslVpnAuthenticationUpdateRequestJson;

  constructor(edgeSslVpnAuthenticationUpdateRequest: EdgeSslVpnAuthenticationUpdateRequest);
  constructor(edgeSslVpnAuthenticationUpdateRequestJson: EdgeSslVpnAuthenticationUpdateRequestJson);
  constructor(firstParam: EdgeSslVpnAuthenticationUpdateRequest | EdgeSslVpnAuthenticationUpdateRequestJson,
              secondaryAuthenticationServer?: EdgeSslVpnAuthenticationServerUpdateRequestJson) {
    if (firstParam instanceof EdgeSslVpnAuthenticationUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeSslVpnAuthenticationUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeSslVpnAuthenticationUpdateRequestJson;
    }
  }

  /**
   * Get authentication servers.
   * @returns {Array<EdgeSslVpnAuthenticationServerUpdateRequest>}
   */
  get authenticationServers(): Array<EdgeSslVpnAuthenticationServerUpdateRequest> {
    return this._json.authentication_servers.map((req) =>
        new EdgeSslVpnAuthenticationServerUpdateRequest(req)
    );
  }

  /**
   * Get secondary authentication server.
   * @returns {EdgeSslVpnAuthenticationServerUpdateRequest}
   */
  get secondaryAuthenticationServer(): EdgeSslVpnAuthenticationServerUpdateRequest {
    return new EdgeSslVpnAuthenticationServerUpdateRequest(this._json.secondary_authentication_server);
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnAuthenticationUpdateRequestJson}
   */
  get json(): EdgeSslVpnAuthenticationUpdateRequestJson {
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
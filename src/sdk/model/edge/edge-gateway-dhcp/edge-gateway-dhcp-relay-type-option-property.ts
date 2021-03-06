import {
  EdgeGatewayDhcpRelayTypeOptionPropertyJson
} from './__json__/edge-gateway-dhcp-relay-type-option-property-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpRelayTypeOptionProperty {

  constructor(private _json: EdgeGatewayDhcpRelayTypeOptionPropertyJson) {}

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpRelayTypeOptionPropertyJson}
   */
  get json(): EdgeGatewayDhcpRelayTypeOptionPropertyJson {
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

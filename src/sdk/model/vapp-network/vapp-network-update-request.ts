import { VappNetworkUpdateRequestJson } from './__json__/vapp-network-update-request-json';
import { IpRangeJson } from '../common/ip-range/__json__/ip-range-json';
import { IpRange } from '../common/ip-range/ip-range';
import { FenceModeType } from '../common/__json__/fence-mode-type';

/* istanbul ignore next: autogenerated */
export class VappNetworkUpdateRequest {

  private readonly _json: VappNetworkUpdateRequestJson;

  constructor(vappNetworkUpdateRequest: VappNetworkUpdateRequest);
  constructor(vappNetworkUpdateRequestJson: VappNetworkUpdateRequestJson);
  constructor(parentNetworkUuid: string, description: string, name: string, primaryDns: string,
              secondaryDns: string, dnsSuffix: string, inherited: boolean, ipRanges: Array<IpRangeJson>,
              routerExternalIp: string, fenceMode: FenceModeType);
  constructor(firstParam: string | VappNetworkUpdateRequest | VappNetworkUpdateRequestJson,
              description?: string, name?: string, primaryDns?: string,
              secondaryDns?: string, dnsSuffix?: string, inherited?: boolean, ipRanges?: Array<IpRangeJson>,
              routerExternalIp?: string, fenceMode?: FenceModeType) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        fence_mode: fenceMode,
        parent_network_uuid: firstParam,
        description: description,
        name: name,
        primary_dns: primaryDns,
        secondary_dns: secondaryDns,
        dns_suffix: dnsSuffix,
        inherited: inherited,
        ip_ranges: ipRanges,
        router_external_ip: routerExternalIp
      } as VappNetworkUpdateRequestJson;
    } else if (firstParam instanceof VappNetworkUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as VappNetworkUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VappNetworkUpdateRequestJson;
    }
  }

  /**
   * Get fence mode.
   * @returns {FenceModeType}
   */
  get fenceMode(): FenceModeType {
    return this._json.fence_mode;
  }

  /**
   * Get parent network uuid.
   * @returns {string}
   */
  get parentNetworkUuid(): string {
    return this._json.parent_network_uuid;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get primary dns.
   * @returns {string}
   */
  get primaryDns(): string {
    return this._json.primary_dns;
  }

  /**
   * Get secondary dns.
   * @returns {string}
   */
  get secondaryDns(): string {
    return this._json.secondary_dns;
  }

  /**
   * Get dns suffix.
   * @returns {string}
   */
  get dnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Get inherited.
   * @returns {boolean}
   */
  get inherited(): boolean {
    return this._json.inherited;
  }

  /**
   * Get ip ranges.
   * @returns {Array<IpRange>}
   */
  get ipRanges(): Array<IpRange> {
    return this._json.ip_ranges.map((range) => {
      return new IpRange(range);
    });
  }

  /**
   * Get router external ip.
   * @returns {string}
   */
  get routerExternalIp(): string {
    return this._json.router_external_ip;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkUpdateRequestJson}
   */
  get json(): VappNetworkUpdateRequestJson {
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

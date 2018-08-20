import { VappNetworkIpTranslationNATRuleRequestJson }
  from './__json__/vapp-network-ip-translation-nat-rule-request-json';

/* istanbul ignore next: autogenerated */
export class VappNetworkIpTranslationNATRuleRequest {

  private readonly _json: VappNetworkIpTranslationNATRuleRequestJson;

  constructor(vappNetworkIpTranslationNATRuleRequest: VappNetworkIpTranslationNATRuleRequest);
  constructor(vappNetworkIpTranslationNATRuleRequestJson: VappNetworkIpTranslationNATRuleRequestJson);
  constructor(mappingMode: string, vmInterface: string, externalIp: string, vmLocalId: string);
  constructor(firstParam: string | VappNetworkIpTranslationNATRuleRequest | VappNetworkIpTranslationNATRuleRequestJson,
              vmInterface?: string, externalIp?: string, vmLocalId?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        mapping_mode: firstParam,
        vm_interface: vmInterface,
        external_ip: externalIp,
        vm_local_id: vmLocalId
      } as VappNetworkIpTranslationNATRuleRequestJson;
    } else if (firstParam instanceof VappNetworkIpTranslationNATRuleRequest) {
      // Copy constructor
      this._json = (firstParam as VappNetworkIpTranslationNATRuleRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VappNetworkIpTranslationNATRuleRequestJson;
    }
  }

  /**
   * Get mapping mode.
   * @returns {string}
   */
  get mappingMode(): string {
    return this._json.mapping_mode;
  }

  /**
   * Get vm interface.
   * @returns {string}
   */
  get vmInterface(): string {
    return this._json.vm_interface;
  }

  /**
   * Get external ip.
   * @returns {string}
   */
  get externalIp(): string {
    return this._json.external_ip;
  }

  /**
   * Get vm local id.
   * @returns {string}
   */
  get vmLocalId(): string {
    return this._json.vm_local_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkIpTranslationNATRuleRequestJson}
   */
  get json(): VappNetworkIpTranslationNATRuleRequestJson {
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
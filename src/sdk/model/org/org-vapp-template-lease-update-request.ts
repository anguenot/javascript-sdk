import { OrgVappTemplateLeaseUpdateRequestJson } from './__json__/org-vapp-template-lease-update-request-json';

/**
 * Org vApp Template Lease Update Request.
 */
/* istanbul ignore next: autogenerated */
export class OrgVappTemplateLeaseUpdateRequest {

  private readonly _json: OrgVappTemplateLeaseUpdateRequestJson;

  constructor(orgVappTemplateLeaseUpdateRequest: OrgVappTemplateLeaseUpdateRequest);
  constructor(orgVappTemplateLeaseUpdateRequestJson: OrgVappTemplateLeaseUpdateRequestJson);
  constructor(vappTemplateDeleteOnStorageExpire: boolean, vappTemplateMaxStorageLease: number);
  constructor(firstParam: boolean | OrgVappTemplateLeaseUpdateRequest | OrgVappTemplateLeaseUpdateRequestJson,
              vappTemplateMaxStorageLease?: number) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        vapp_template_delete_on_storage_expire: firstParam,
        vapp_template_max_storage_lease: vappTemplateMaxStorageLease
      } as OrgVappTemplateLeaseUpdateRequestJson;
    } else if (firstParam instanceof OrgVappTemplateLeaseUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as OrgVappTemplateLeaseUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as OrgVappTemplateLeaseUpdateRequestJson;
    }
  }

  /**
   * Get vapp template delete on storage expire.
   * @returns {boolean}
   */
  get vappTemplateDeleteOnStorageExpire(): boolean {
    return this._json.vapp_template_delete_on_storage_expire;
  }

  /**
   * Get vapp template max storage lease.
   * @returns {number}
   */
  get vappTemplateMaxStorageLease(): number {
    return this._json.vapp_template_max_storage_lease;
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgVappTemplateLeaseUpdateRequestJson}
   */
  get json(): OrgVappTemplateLeaseUpdateRequestJson {
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

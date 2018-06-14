import { ComplianceOverTimeJson, SerieType } from './__json__';
import { ComplianceOverTimeSample } from './compliance-over-time-sample';

/* istanbul ignore next: autogenerated */
export class ComplianceOverTime {
  constructor(private _json: ComplianceOverTimeJson) {}

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get type.
   * @returns {SerieType}
   */
  get type(): SerieType {
    return this._json.type;
  }

  /**
   * Get samples.
   * @returns {Array<ComplianceOverTimeSample>}
   */
  get samples(): Array<ComplianceOverTimeSample> {
    return this._json.samples.map((sample) => { return new ComplianceOverTimeSample(sample); });
  }

  /**
   * Get the json representation of this class.
   * @returns {ComplianceOverTimeJson}
   */
  get json(): ComplianceOverTimeJson {
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
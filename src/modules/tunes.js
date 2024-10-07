class Tunes {
  static TUNES = {
    Standard: ["EN2", "AN2", "DN3", "GN3", "BN3", "EN4"],
    DropD: ["DN2", "AN2", "DN3", "GN3", "BN3", "EN4"],
    DADGAD: ["DN2", "AN2", "DN3", "GN3", "AN3", "DN4"],
    OpenD: ["DN2", "AN2", "DN3", "FS3", "AN3", "DN4"],
    OpenG: ["DN2", "GN2", "DN3", "GN3", "BN3", "DN4"],
    OpenC: ["CN2", "GN2", "CN3", "GN3", "CN4", "EN4"],
    OpenE: ["EN2", "BN2", "EN3", "GS3", "BN3", "EN4"],
    OpenA: ["EN2", "AN2", "EN3", "AN3", "CS4", "EN4"],
    HalfStepDown: ["DS2", "GS2", "CS3", "FS3", "AS3", "DS4"],
    FullStepDown: ["DN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
    HalfStepUp: ["DS2", "GS2", "CS3", "FS3", "AS3", "DS4"],
    FullStepUp: ["DN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
    DropC: ["CN2", "GN2", "CN3", "FN3", "AN3", "DN4"],
  };

  static tune = Tunes.TUNES.Standard;
  static tuneName = "Standard";

  /**
   * setter for tune
   * @param {Array} tune
   */
  setTune(tuneName) {
    this.tune = Tunes.TUNES[tuneName];
    this.tuneName = tuneName;
  }

  /**
   * getter for current tune
   * @returns {Array} tune
   */
  getTune() {
    const left = [];
    const right = [...this.tune.slice(3, 6)];
    for (let i = 2; i >= 0; i--) {
      left.push(this.tune[i]);
    }
    return [left, right];
  }

  /**
   * getter for tune by name
   * @returns {Array} tune
   */
  getTuneByName(tuneName) {
    const left = [];
    const right = [...Tunes.TUNES[tuneName].slice(3, 6)];
    for (let i = 2; i >= 0; i--) {
      left.push(Tunes.TUNES[tuneName][i]);
    }
    return [left, right];
  }

  /**
   * setter for custom tune
   * @param {String} tuneName
   */
  setCustomTune(tuneName, tune) {
    Tunes.TUNES[tuneName] = tune;
    this.setTune(tune);
  }

  /**
   * getter for all tune names
   * @returns {Array} tune names
   */
  getTuneNames() {
    return Object.keys(Tunes.TUNES);
  }
}

export default Tunes;

import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';
var beeper = require('beeper');

/** Make your terminal beep. Useful for grabbing attention.
 * @see {@link https://www.npmjs.com/package/beeper|Beeper}
 * @namespace Beeper
 * 
 * @example
 * rps install beeper
 * 
*/
@RpsModule("beeper")
export default class RPSBeeper {

  /**
 * @function beep
 * @memberof Beeper
 * @example
 * ;Beeps 3 times 
 * beep 3
 * ;Beeps with melody
 * beep "***-**-*"
 * @param {string|number} countOrMelody count or melody string.
 * @summary String|Number → void
 * 
 * 
*/
  @rpsAction({verbName:'beep'})
  async beep (ctx:RpsContext,opts:{}, countOrMelody?:string|number) : Promise<void|Function>{
    return countOrMelody ? beeper(countOrMelody) : beeper;
  }
}

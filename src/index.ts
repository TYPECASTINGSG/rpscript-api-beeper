import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
var beeper = require('beeper');

/** Make your terminal beep. Useful for grabbing attention.
 * @see {@link https://www.npmjs.com/package/beeper|Beeper}
 * @namespace Beeper
*/
@RpsModule("beeper")
export default class RPSBeeper {

  /**
 * @function beep
 * @memberof Beeper
 * @example
 * ;Beep once
 * beep
 * ;Beeps 3 times 
 * beep 3
 * ;Beeps with melody
 * beep "***-**-*"
 * @param {string|number} countOrMelody count or melody string.
 * @returns {void} 
 * @summary Make beep sound
 * 
 * @see {@link https://www.npmjs.com/package/beeper}
 * 
*/
  @rpsAction({verbName:'beep'})
  beep (ctx:RpsContext,opts:{}, countOrMelody?:string|number) : Promise<void>{
    return new Promise((resolve,reject)=>{
      beeper(countOrMelody,resolve);
    });
  }
}

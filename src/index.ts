import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
var beeper = require('beeper');

/** Module for Beeper
 * @namespace Beeper
*/
@RpsModule("beeper")
export default class RPSBeeper {

  /**
 * @function beep
 * @memberof Beeper
 * @example
 * //print 'Hello'
 * console-log 'Hello'
 * //print 'Hello' again
 * console-log $RESULT
 * @param {string|number} countOrMelody count or melody.
 * @returns {void} Doesn't return anything
 * @summary Making beep sound
 * @description Making beep sound
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

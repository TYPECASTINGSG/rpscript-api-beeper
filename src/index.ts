/**
 * @module Beeper
 */

import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
var beeper = require('beeper');


@RpsModule("beeper")
export default class RPSBeeper {

  @rpsAction({verbName:'beep'})
  async beep (ctx:RpsContext,opts:{}, input?:string|number) : Promise<void>{
    beeper(input);
  }
}

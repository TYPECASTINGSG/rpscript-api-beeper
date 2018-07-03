import * as c from 'chai';
import m from 'mocha';

import RPSBeeper from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Beeper', () => {

  m.it('should beeps', async function () {
    let m = new RPSBeeper;

    // await m.beep(new RpsContext,{});
    await m.beep(new RpsContext,{},3);
    // await m.beep(new RpsContext,{},"****-*-*");
    

  }).timeout(0);

})

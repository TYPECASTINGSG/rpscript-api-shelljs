import {expect} from 'chai';
import * as m from 'mocha';
import RpsShelljs from '../src/index';
import {RpsContext} from 'rpscript-interface';

let $CONTEXT, shelljs;
m.beforeEach(() => {
    $CONTEXT = new RpsContext();
    shelljs = new RpsShelljs;
});


m.describe('ShellJS', () => {
  m.it('list directory', async function() {
    let result = await shelljs.ls($CONTEXT,{},".");
    let expected = ['LICENSE.md','README.md',
      'build','node_modules','package-lock.json','package.json',
      'src','test','tsconfig.json']

    expect(result).to.be.deep.equals(expected);
  });

})

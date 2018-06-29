/**
 * @module shelljs
 */
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import shell, { ExecOutputReturnValue } from 'shelljs';
import {ShellString,ShellArray} from 'shelljs';

@RpsModule("shelljs")
export default class RpsShelljs {

  // cat "filename" --options="-rf"

  @rpsAction({defaultName:'cat'})
  async cat (ctx:RpsContext,opts:Object, ...filenames:string[]) : Promise<ShellString> {
    let result = opts['options'] ? shell.cat(filenames) : shell.cat(opts['options'],filenames);
    return result;
  }

  @rpsAction({defaultName:'cd'})
  async cd (ctx:RpsContext,opts:{}, dir:string) : Promise<void> {
    let result = opts['options'];
    return shell.cd(dir);
  }

  @rpsAction({defaultName:'chmod'})
  async chmod (ctx:RpsContext,opts:{}, mode:string, file:string) : Promise<void> {
    let result = opts['options'];
    
    if(result) return shell.chmod(result, mode, file);
    else return shell.chmod(mode,file);
  }

  @rpsAction({defaultName:'cp'})
  async cp (ctx:RpsContext,opts:{}, ...location:string[]) : Promise<void> {
    let options = opts['options'];
    let dest = location.pop();

    if(options) return shell.cp(options,location,dest);
    else return shell.cp(location,dest);
  }


  @rpsAction({defaultName:'echo'})
  async echo (ctx:RpsContext,opts:{}, content:string) : Promise<ShellString> {
    let options = opts['options'];
    if(options) return shell.echo(options,content);
    else return shell.echo(content);
  }

  // @rpsAction({defaultName:'exec'})
  // exec (ctx:RpsContext,opts:{}, functor:any[], fn:Function) : Promise<ExecOutputReturnValue> {
  //   shell.exec();
  // }

  @rpsAction({defaultName:'find'})
  async find (ctx:RpsContext,opts:{}, ...paths:string[]) : Promise<ShellArray> {
    return shell.find(paths);
  }

  @rpsAction({defaultName:'grep'})
  async grep (ctx:RpsContext,opts:{}, regexFilter:string, ...files:string[]) : Promise<ShellString> {
    let options = opts['options'];
    if(options) return shell.grep(options,regexFilter,files);
    else return shell.grep(regexFilter,files);
  }

  @rpsAction({defaultName:'head'})
  async head (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let num = opts['options'];

    if(num) return shell.head({'-n':num},file);
    else return shell.head(file);
  }

  @rpsAction({defaultName:'ln'})
  async ln (ctx:RpsContext,opts:{}, source:string, dest:string) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.ln(options,source,dest);
    else return shell.ln(source,dest);
  }

  @rpsAction({defaultName:'ls'})
  async ls (ctx:RpsContext,opts:{}, ...path:string[]) : Promise<ShellArray> {
    let options = opts['options'];

    if(options) return shell.ls(options,path);
    else return shell.ls(path);
  }

  @rpsAction({defaultName:'mkdir'})
  async mkdir (ctx:RpsContext,opts:{}, ...dir:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.mkdir(options,dir);
    else return shell.mkdir(dir);
  }

  @rpsAction({defaultName:'mv'})
  async mv (ctx:RpsContext,opts:{}, ...location:string[]) : Promise<void> {
    let options = opts['options'];
    let dest = location.pop();

    if(options) return shell.mv(options,location,dest);
    else return shell.mv(location,dest);
    
  }

  @rpsAction({defaultName:'pwd'})
  async pwd (ctx:RpsContext,opts:{}) : Promise<ShellString> {
    return shell.pwd();
  }

  @rpsAction({defaultName:'rm'})
  async rm (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.rm(options,file);
    else return shell.rm(file);
  }

  @rpsAction({defaultName:'sed'})
  async sed (ctx:RpsContext,opts:{}, searchRegex:string, replacement:string, file:string) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.sed(options,searchRegex,replacement,file);
    else return shell.sed(searchRegex,replacement,file);
  }

  @rpsAction({defaultName:'set'})
  async set (ctx:RpsContext,opts:{}, options:string) : Promise<void> {
    return shell.set(options);
  }

  @rpsAction({defaultName:'sort'})
  async sort (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.sort(options,file);
    else return shell.sort(file);
  }

  @rpsAction({defaultName:'tail'})
  async tail (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let num = opts['options'];

    if(num) return shell.tail({'-n':num},file);
    else return shell.tail(file);
  }

  @rpsAction({defaultName:'tempdir'})
  async tempdir (ctx:RpsContext,opts:{}) : Promise<ShellString> {
    return shell.tempdir();
  }


  @rpsAction({defaultName:'touch'})
  async touch (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.touch(options,file);
    else return shell.touch(file);
  }

  @rpsAction({defaultName:'uniq'})
  async uniq (ctx:RpsContext,opts:{}, input:string, output?:string) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.uniq(options,input,output);
    else return shell.uniq(input,output);
  }

  @rpsAction({defaultName:'which'})
  async which (ctx:RpsContext,opts:{}, command:string) : Promise<ShellString> {
    return shell.which(command);
  }

}


/**
 * @module shelljs
 */
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import shell, { ExecOutputReturnValue } from 'shelljs';
import {ShellString,ShellArray} from 'shelljs';

@RpsModule("shelljs")
export default class RpsShelljs {

  // cat "filename" --options="-rf"

  @rpsAction({verbName:'cat'})
  async cat (ctx:RpsContext,opts:Object, ...filenames:string[]) : Promise<ShellString> {
    let result = opts['options'] ? shell.cat(filenames) : shell.cat(opts['options'],filenames);
    return result;
  }

  @rpsAction({verbName:'cd'})
  async cd (ctx:RpsContext,opts:{}, dir:string) : Promise<void> {
    let result = opts['options'];
    return shell.cd(dir);
  }

  @rpsAction({verbName:'chmod'})
  async chmod (ctx:RpsContext,opts:{}, mode:string, file:string) : Promise<void> {
    let result = opts['options'];
    
    if(result) return shell.chmod(result, mode, file);
    else return shell.chmod(mode,file);
  }

  @rpsAction({verbName:'cp'})
  async cp (ctx:RpsContext,opts:{}, ...location:string[]) : Promise<void> {
    let options = opts['options'];
    let dest = location.pop();

    if(options) return shell.cp(options,location,dest);
    else return shell.cp(location,dest);
  }


  @rpsAction({verbName:'echo'})
  async echo (ctx:RpsContext,opts:{}, item:any) : Promise<any> {
    let options = opts['options'];
    if(options) shell.echo(options,item);
    else shell.echo(item);

    return item;
  }

  // @rpsAction({verbName:'exec'})
  // exec (ctx:RpsContext,opts:{}, functor:any[], fn:Function) : Promise<ExecOutputReturnValue> {
  //   shell.exec();
  // }

  @rpsAction({verbName:'find'})
  async find (ctx:RpsContext,opts:{}, ...paths:string[]) : Promise<ShellArray> {
    return shell.find(paths);
  }

  @rpsAction({verbName:'grep'})
  async grep (ctx:RpsContext,opts:{}, regexFilter:string, ...files:string[]) : Promise<ShellString> {
    let options = opts['options'];
    if(options) return shell.grep(options,regexFilter,files);
    else return shell.grep(regexFilter,files);
  }

  @rpsAction({verbName:'head'})
  async head (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let num = opts['options'];

    if(num) return shell.head({'-n':num},file);
    else return shell.head(file);
  }

  @rpsAction({verbName:'ln'})
  async ln (ctx:RpsContext,opts:{}, source:string, dest:string) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.ln(options,source,dest);
    else return shell.ln(source,dest);
  }

  @rpsAction({verbName:'ls'})
  async ls (ctx:RpsContext,opts:{}, ...path:string[]) : Promise<ShellArray> {
    let options = opts['options'];

    if(options) return shell.ls(options,path);
    else return shell.ls(path);
  }

  @rpsAction({verbName:'mkdir'})
  async mkdir (ctx:RpsContext,opts:{}, ...dir:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.mkdir(options,dir);
    else return shell.mkdir(dir);
  }

  @rpsAction({verbName:'mv'})
  async mv (ctx:RpsContext,opts:{}, ...location:string[]) : Promise<void> {
    let options = opts['options'];
    let dest = location.pop();

    if(options) return shell.mv(options,location,dest);
    else return shell.mv(location,dest);
    
  }

  @rpsAction({verbName:'pwd'})
  async pwd (ctx:RpsContext,opts:{}) : Promise<ShellString> {
    return shell.pwd();
  }

  @rpsAction({verbName:'rm'})
  async rm (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.rm(options,file);
    else return shell.rm(file);
  }

  @rpsAction({verbName:'sed'})
  async sed (ctx:RpsContext,opts:{}, searchRegex:string, replacement:string, file:string) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.sed(options,searchRegex,replacement,file);
    else return shell.sed(searchRegex,replacement,file);
  }

  @rpsAction({verbName:'set'})
  async set (ctx:RpsContext,opts:{}, options:string) : Promise<void> {
    return shell.set(options);
  }

  @rpsAction({verbName:'sort'})
  async sort (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.sort(options,file);
    else return shell.sort(file);
  }

  @rpsAction({verbName:'tail'})
  async tail (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<ShellString> {
    let num = opts['options'];

    if(num) return shell.tail({'-n':num},file);
    else return shell.tail(file);
  }

  @rpsAction({verbName:'tempdir'})
  async tempdir (ctx:RpsContext,opts:{}) : Promise<ShellString> {
    return shell.tempdir();
  }


  @rpsAction({verbName:'touch'})
  async touch (ctx:RpsContext,opts:{}, ...file:string[]) : Promise<void> {
    let options = opts['options'];

    if(options) return shell.touch(options,file);
    else return shell.touch(file);
  }

  @rpsAction({verbName:'uniq'})
  async uniq (ctx:RpsContext,opts:{}, input:string, output?:string) : Promise<ShellString> {
    let options = opts['options'];

    if(options) return shell.uniq(options,input,output);
    else return shell.uniq(input,output);
  }

  @rpsAction({verbName:'which'})
  async which (ctx:RpsContext,opts:{}, command:string) : Promise<ShellString> {
    return shell.which(command);
  }

}


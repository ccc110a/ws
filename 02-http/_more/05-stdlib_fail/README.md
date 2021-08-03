# 

```
PS D:\ccc\course\deno\02-typedScript\05-stdlib> deno run --allow-read --allow-write main.ts
Compile file:///D:/ccc/course/deno/02-typedScript/05-stdlib/main.ts
Download https://deno.land/std@0.50.0/fs/copy.ts
Download https://deno.land/std@0.50.0/path/mod.ts
Download https://deno.land/std@0.50.0/fs/ensure_dir.ts  
Download https://deno.land/std@0.50.0/fs/_util.ts       
Download https://deno.land/std@0.50.0/testing/asserts.ts
Download https://deno.land/std@0.50.0/path/win32.ts    
Download https://deno.land/std@0.50.0/path/posix.ts    
Download https://deno.land/std@0.50.0/path/common.ts   
Download https://deno.land/std@0.50.0/path/separator.ts
Download https://deno.land/std@0.50.0/path/interface.ts
Download https://deno.land/std@0.50.0/path/glob.ts     
Download https://deno.land/std@0.50.0/path/_constants.ts
Download https://deno.land/std@0.50.0/path/_util.ts     
Download https://deno.land/std@0.50.0/fmt/colors.ts
Download https://deno.land/std@0.50.0/testing/diff.ts
Download https://deno.land/std@0.50.0/path/_globrex.ts
error: TS2322 [ERROR]: Type 'string' is not assignable to type 'boolean'.
  return srcArray.reduce(
  
    at https://deno.land/std@0.50.0/fs/_util.ts:20:3

TS2339 [ERROR]: Property 'utime' does not exist on type 'typeof Deno'.
    await Deno.utime(dest, statInfo.atime, statInfo.mtime);
               ~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:90:16

TS2339 [ERROR]: Property 'utimeSync' does not exist on type 'typeof Deno'.
    Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
         ~~~~~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:101:10

TS2339 [ERROR]: Property 'symlink' does not exist on type 'typeof Deno'.
  await Deno.symlink(originSrcFilePath, dest, type);
             ~~~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:114:14

TS2339 [ERROR]: Property 'utime' does not exist on type 'typeof Deno'.
    await Deno.utime(dest, statInfo.atime, statInfo.mtime);
               ~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:119:16
TS2339 [ERROR]: Property 'symlinkSync' does not exist on type 'typeof Deno'.
  Deno.symlinkSync(originSrcFilePath, dest, type);
       ~~~~~~~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:132:8

TS2339 [ERROR]: Property 'utimeSync' does not exist on type 'typeof Deno'.
    Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
         ~~~~~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:137:10

TS2339 [ERROR]: Property 'utime' does not exist on type 'typeof Deno'.
    await Deno.utime(dest, srcStatInfo.atime, srcStatInfo.mtime);
               ~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:157:16

TS2339 [ERROR]: Property 'utimeSync' does not exist on type 'typeof Deno'.
    Deno.utimeSync(dest, srcStatInfo.atime, srcStatInfo.mtime);
         ~~~~~~~~~
    at https://deno.land/std@0.50.0/fs/copy.ts:185:10

Found 9 errors.
PS D:\ccc\course\deno\02-typedScript\05-stdlib> deno run --allow-read --allow-write --unstable main.ts
Compile file:///D:/ccc/course/deno/02-typedScript/05-stdlib/main.ts
error: TS2322 [ERROR]: Type 'string' is not assignable to type 'boolean'.
  return srcArray.reduce(
  
    at https://deno.land/std@0.50.0/fs/_util.ts:20:3
```
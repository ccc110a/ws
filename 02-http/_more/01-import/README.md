# Life Cycle

* https://deno.land/manual/runtime/program_lifecycle

```
$ deno run main.js
log from imported script
log from main script
got load event in onload function (main)
got load event in event handler (imported)
got load event in event handler (main)
got unload event in onunload function (main)
got unload event in event handler (imported)
got unload event in event handler (main)
```

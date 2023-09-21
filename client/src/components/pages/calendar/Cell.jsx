import React from 'react';
import clsx from 'clsx';
 
 const Cell=({ className, children })=> {
   return (
     <div className={clsx("h-30 flex items-center justify-center", className)}>
        {children}
     </div>
   )
 }
 
 export default Cell
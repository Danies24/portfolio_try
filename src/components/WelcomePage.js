import React, { useEffect, useState } from 'react'
import "../styles/WelcomePageStyles.css"

export default function WelcomePage({visibleBottom}) {
  return (
    <div className='mainContainer'>
    <div className='leftDiv'>
    <h1 className='danies'>DANIES</h1>
    {
      !visibleBottom && <h2 className='exp'>EXP</h2>
    }
    </div>
    <div className='rightDiv'>
    <h1 className='mohamed'>MOHAMED</h1>
{
      !visibleBottom && <h2 className='ore'>LORE</h2>
    }
    </div>


    </div>
  )
}

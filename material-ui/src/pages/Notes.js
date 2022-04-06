import React, { useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'

import { DeleteOutlined } from '@mui/icons-material'


export default function Notes() {

  const [notes,setNotes] =useEffect([])
  useEffect(()=>{
    fetch('https://localhost:8000/notes',{method:'GET'}).then(res=>res.json).then(data=>setNotes(data))
    
  },[])
  return (
    <div>
      {notes.map(note=>(
          <p key={note.id}> 
          {note.title}
          </p>
        ))}
    </div>
  )
}

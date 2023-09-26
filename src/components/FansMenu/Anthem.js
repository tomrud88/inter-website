import { Container,Typography,makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    mainContainer:{
      marginTop:'20px',
      width:'800px',
      [theme.breakpoints.down('sm')]:{
        maxWidth:'100%',
        marginTop:'10px'
    },
},
   mainTitle:{
     display:'flex',
     justifyContent:'center',
     marginTop:'100px'
},
   firstImg:{
       maxHeight:'500px',
       maxWidth:'800px',
       margin:'20px 0',
       [theme.breakpoints.down('sm')]:{
        maxWidth:'100%'
      },
    pazza:{
        justifyContent:'left'
    }
   }
}))

function Anthem() {
    const classes = useStyles()
    return (
      <div>
        <div className={classes.mainTitle}>
          <h1>ANTHEM</h1>
        </div>
        <Container className={classes.mainContainer} fixed>
          <h4>
            Inter Milan has 2 anthems. One of them is{" "}
            <span style={{ fontWeight: "bold" }}>"C'e Solo Inter"</span> and
            second{" "}
            <span style={{ fontWeight: "bold" }}>"Pazza Inter Amala"</span>
          </h4>
          <p>
            For a long time "Pazza Inter Amala" was played before the home games
            because the song displayed the DNA of madness and pure adrenaline of
            the old team.
          </p>
          <img
            className={classes.firstImg}
            src="/inter-fans.small.webp"
            srcSet="/inter-fans.webp 500w"
            alt="inter fans"
          />
          <p>
            Two years ago the club decided to change the old song and replace it
            by the "C'e Solo L'Inter" which is a historical anthem written by
            Elio.
          </p>
          <p>
            The lyrics are a tribute to Peppino Prisco, the unforgettable Inter
            Vice-President. It describes the fact that Inter have never been in
            the Serie B and that the Serie A is in Inter's DNA.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            className={classes.pazza}
          >
            <h4 style={{ marginTop: "50px" }}>Pazza Inter Amala - text</h4>
            <p>Lo sai, per un gol</p>
            <p>Io darei la vita, la mia vita</p>
            <p>Che in fondo lo so</p>
            <p>Sara' una partita infinita</p>
            <br></br>
            <p>E' un sogno che ho</p>
            <p>E' un coro che sale a sognare</p>
            <p>Su e giu' dalla Nord</p>
            <p>Novanta minuti per segnare</p>
            <p>Nerazzurri</p>
            <p>Noi saremo qui</p>
            <p>Nerazzurri</p>
            <p>Pazzi come te</p>
            <p>Nerazzurri</p>
            <p>Non fateci soffrire</p>
            <p>Ma va bene, vinceremo insieme!</p>
            <br></br>
            <p>Amala!</p>
            <p>Pazza Inter amala!</p>
            <p>E' una gioia infinita</p>
            <p>Che dura una vita</p>
            <p>Pazza Inter amala!</p>
            <p>Vivila!</p>
            <p>Questa storia vivila</p>
            <p>Puo durare una vita</p>
            <p>O una sola partita</p>
            <p>Pazza Inter amala!</p>
            <br></br>
            <p>E continuero'</p>
            <p>Nel sole e nel vento la mia festa</p>
            <p>Per sempre vivro'</p>
            <p>Con questi colori nella testa</p>
            <p>Nerazzurri</p>
            <p>Io vi seguiro'</p>
            <p>Nerazzurri</p>
            <p>Sempre li vivro'</p>
            <p>Nerazzurri</p>
            <p>Questa mia speranza</p>
            <p>E l'assenza</p>
            <p>Io non vivo senza!!!</p>
            <br></br>
            <p>Amala!</p>
            <p>Pazza Inter amala!</p>
            <p>E' una gioia infinita</p>
            <p>Che dura una vita</p>
            <p>Pazza Inter amala!</p>
            <p>Vivila!</p>
            <p>Questa storia vivila</p>
            <p>Puo durare una vita</p>
            <p>O una sola partita</p>
            <p>Pazza Inter amala!</p>
            <br></br>
            <p>La' in mezzo al campo</p>
            <p>C'e' un nuovo campione</p>
            <p>Un tiro che parte da questa canzone</p>
            <p>Forza non mollare mai!!!</p>
            <p>AMALA!</p>
            <p>Amala!</p>
            <p>Pazza Inter amala!</p>
            <p>Una gioia infinita</p>
            <p>Che dura una vita</p>
            <p>Pazza Inter amala!!!</p>
            <p>Pazza Inter amala!!!</p>
            <br></br>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <h4>C'e Solo Inter - text</h4>
            <p>
              E' vero, ci sono cose piu' importanti di calciatori e di cantanti
            </p>
            <p>Ma dimmi cosa c'e di meglio</p>
            <p>Di una continua sofferenza per arrivare alla vittoria</p>
            <p>Ma poi non rompermi i coglioni</p>
            <p>Per me c'e solo l'Inter.</p>
            <p>A me che sono innamorato</p>
            <p>Non venite a raccontare quello che l'Inter deve fare</p>
            <p>Perche per noi niente e mai normale</p>
            <p>N e sconfitta ne vittoria</p>
            <p>Che tanto e sempre la stessa storia</p>
            <p>Un'ora e mezza senza fiato</p>
            <p>Perche c'e solo l'Inter.</p>
            <p>C'e solo l'Inter, per me, solo l'Inter</p>
            <p>C'e solo l'Inter, per me...</p>
            <p>No, non puoi cambiare la bandiera</p>
            <p>Ela maglia nerazzurra dei campioni del passato</p>
            <p>Che poi e la stessa di quelli del presente</p>
            <p>Io da loro voglio orgoglio per la squadra di Milano</p>
            <p>Perche c'e solo l'Inter.</p>
            <p>...E mi torna ancora in mente l'avvocato Prisco</p>
            <p>Lui diceva che la serie A e nel nostro dna</p>
            <p>Io non rubo il campionato ed in serie B non son mai stato...</p>
            <p>C'e solo l'Inter, per me, solo l'Inter</p>
            <p>C'e solo l'Inter, per me, per me...</p>
            <p>
              C'e solo l'Inter, c'e solo l'Inter, c'e solo l'Inter, per me...
            </p>
            <p>C'e solo l'Inter per me.</p>
          </div>
        </Container>
      </div>
    );
}

export default Anthem

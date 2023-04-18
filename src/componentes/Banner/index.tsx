import React from 'react'

interface BannerProps{
    endereco: string;
    textoAlternativo?: string;
}

export default function Banner({endereco, textoAlternativo} : BannerProps) {
  return (
    <header className="banner">
        <img src={endereco} alt={textoAlternativo}/>
    </header>
  )
}

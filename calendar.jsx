const isPast = function(d,m,y) {
  return (Date.now() - new Date(y,m-1,d).getTime()) > 0
}

const comingsoon = <div className="cube" data-inactive data-bg-color="#6161616" data-title="Bientôt bebs!"></div>
const calendar = <div className="calendar-wrap">
  <div className="calendar">
    { isPast(1,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le plus beau des bebs"></div> : comingsoon }
    { isPast(2,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le plus doux des bebs"></div> : comingsoon }
    { isPast(3,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus gentil"></div> : comingsoon }
    { isPast(4,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus mince"></div> : comingsoon }
    { isPast(5,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus sportif"></div> : comingsoon }
    { isPast(6,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus persévérant"></div> : comingsoon }
    { isPast(7,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus rigolo"></div> : comingsoon }
    { isPast(8,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs qui aime le plus le sucre"></div> : comingsoon }
    { isPast(9,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus casse burnes"></div> : comingsoon }
    { isPast(10,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus mignon"></div> : comingsoon }
    { isPast(11,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus patient"></div> : comingsoon }
    { isPast(12,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs qui suce le mieux"></div> : comingsoon }
    { isPast(13,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus authentique"></div> : comingsoon }
    { isPast(14,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus aventureux"></div> : comingsoon }
    { isPast(15,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus branché"></div> : comingsoon }
    { isPast(16,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus sexy"></div> : comingsoon }
    { isPast(17,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus délicat"></div> : comingsoon }
    { isPast(18,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus exubérant"></div> : comingsoon }
    { isPast(19,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus énervé"></div> : comingsoon }
    { isPast(20,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs avec les plus belles fesses"></div> : comingsoon }
    { isPast(21,12,2016) ? <div className="cube" data-bg-color="#1c2d3f" data-title="Le bebs le plus luxueux"></div> : comingsoon }
    { isPast(22,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus organisé"></div> : comingsoon }
    { isPast(23,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus romantique"></div> : comingsoon }
    { isPast(24,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Le bebs le plus amoureux"></div> : comingsoon }
    { isPast(25,12,2016) ? <div className="cube" data-bg-color="#cc0019" data-title="Mon bebs à moi"></div> : comingsoon }
  </div>
  <div className="content">
    <div className="content__block">
      <h3 className="content__title">Le plus beau des bebs</h3>
      <p className="content__description">Parce que quand je te regarde tu me fais fondre :)</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le plus doux des bebs</h3>
      <p className="content__description">Parce quand tu te calines contre moi dans le lit, je voudrais plus jamais en sortir!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus gentil</h3>
      <p className="content__description">Parce qu'il est toujours prêt à faire des choses gentilles pour son bebs :)</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus mince</h3>
      <p className="content__description">Parce que plus mince tu peux pas faire de toute façon!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus sportif</h3>
      <p className="content__description">Parce ça fait du surf et du tennis et de la baise non-stop!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus persévérant</h3>
      <p className="content__description">Parce que quand ça veut lancer son groupe de vêtements, personne l'arrête!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus rigolo</h3>
      <p className="content__description">Parce qu'il fait plein de déconnades tout le temps!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs qui aime le plus le sucre</h3>
      <p className="content__description">Parce que la glace t'aime bien la manger au soleil :)</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus casse burnes</h3>
      <p className="content__description">Parce que quand ta décidé de faire ton bebs chier c'est infiniiiii!!!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus mignon</h3>
      <p className="content__description">Parce qu'il a des yeux de biches dans lesquels on veut se perdre :)</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus patient</h3>
      <p className="content__description">Parce que quand il a un bebs relou, il arrive à pas s'énerver (parfois)</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs qui suce le mieux</h3>
      <p className="content__description">Enfin...</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus authentique</h3>
      <p className="content__description">Parce que tu es la plus vraie des vraie bebs qu'on peut rencontrer!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus aventureux</h3>
      <p className="content__description">Parce que les marches des Cinque Terre sous la canicule ça te fait pas peur!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus branché</h3>
      <p className="content__description">Parce que le bebs ne s'habille qu'avec le plus moderne et branché...</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus sexy</h3>
      <p className="content__description">Parce qu'elle sait faire une démarche féline... ou pas</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus délicat</h3>
      <p className="content__description">Parce qu'il est tout petit et il aime pas qu'on le secoue!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus exubérant</h3>
      <p className="content__description">Parce que des fois tu fais trop la fofolle!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus énervé</h3>
      <p className="content__description">Parce que tu éclaterais si tu t'énervais plus!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs avec les plus belles fesses</h3>
      <p className="content__description">Le fessier lvl Ariana Grande!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus luxueux</h3>
      <p className="content__description">Parce qu'on dirait qu'elle coûte 10k juste en fringues!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus organisé</h3>
      <p className="content__description">Ouai non. Ya encore plein de vêtements partout!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus romantique</h3>
      <p className="content__description">Parce qu'il demande toujours plus de romance mais en a moins que prévu!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Le bebs le plus amoureux</h3>
      <p className="content__description">...C'est moi!</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__block">
      <h3 className="content__title">Mon bebs à moi</h3>
      <p className="content__description">C'est pas pour rien que t'es mon bebs :) Ze t'aime.</p>
      <p className="content__meta">Ton bebs</p>
    </div>
    <div className="content__number">0</div>
    <button className="btn-back" aria-label="Back to the grid view">&crarr;</button>
  </div>
</div>

ReactDOM.render(
  calendar,
  document.getElementById('main')
);

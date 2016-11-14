const isPast = function (d, m, y) {
  return Date.now() - new Date(y, m - 1, d).getTime() > 0;
};

const comingsoon = React.createElement("div", { className: "cube", "data-inactive": true, "data-bg-color": "#6161616", "data-title": "Bient\xF4t bebs!" });
const calendar = React.createElement(
  "div",
  { className: "calendar-wrap" },
  React.createElement(
    "div",
    { className: "calendar" },
    isPast(1, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le plus beau des bebs" }) : comingsoon,
    isPast(2, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le plus doux des bebs" }) : comingsoon,
    isPast(3, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus gentil" }) : comingsoon,
    isPast(4, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus mince" }) : comingsoon,
    isPast(5, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus sportif" }) : comingsoon,
    isPast(6, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus pers\xE9v\xE9rant" }) : comingsoon,
    isPast(7, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus rigolo" }) : comingsoon,
    isPast(8, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs qui aime le plus le sucre" }) : comingsoon,
    isPast(9, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus casse burnes" }) : comingsoon,
    isPast(10, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus mignon" }) : comingsoon,
    isPast(11, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus patient" }) : comingsoon,
    isPast(12, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs qui suce le mieux" }) : comingsoon,
    isPast(13, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus authentique" }) : comingsoon,
    isPast(14, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus aventureux" }) : comingsoon,
    isPast(15, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus branch\xE9" }) : comingsoon,
    isPast(16, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus sexy" }) : comingsoon,
    isPast(17, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus d\xE9licat" }) : comingsoon,
    isPast(18, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus exub\xE9rant" }) : comingsoon,
    isPast(19, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus \xE9nerv\xE9" }) : comingsoon,
    isPast(20, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs avec les plus belles fesses" }) : comingsoon,
    isPast(21, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#1c2d3f", "data-title": "Le bebs le plus luxueux" }) : comingsoon,
    isPast(22, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus organis\xE9" }) : comingsoon,
    isPast(23, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus romantique" }) : comingsoon,
    isPast(24, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Le bebs le plus amoureux" }) : comingsoon,
    isPast(25, 12, 2016) ? React.createElement("div", { className: "cube", "data-bg-color": "#cc0019", "data-title": "Mon bebs \xE0 moi" }) : comingsoon
  ),
  React.createElement(
    "div",
    { className: "content" },
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le plus beau des bebs"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que quand je te regarde tu me fais fondre :)"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le plus doux des bebs"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce quand tu te calines contre moi dans le lit, je voudrais plus jamais en sortir!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus gentil"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'il est toujours pr\xEAt \xE0 faire des choses gentilles pour son bebs :)"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus mince"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que plus mince tu peux pas faire de toute fa\xE7on!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus sportif"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce \xE7a fait du surf et du tennis et de la baise non-stop!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus pers\xE9v\xE9rant"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que quand \xE7a veut lancer son groupe de v\xEAtements, personne l'arr\xEAte!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus rigolo"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'il fait plein de d\xE9connades tout le temps!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs qui aime le plus le sucre"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que la glace t'aime bien la manger au soleil :)"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus casse burnes"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que quand ta d\xE9cid\xE9 de faire ton bebs chier c'est infiniiiii!!!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus mignon"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'il a des yeux de biches dans lesquels on veut se perdre :)"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus patient"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que quand il a un bebs relou, il arrive \xE0 pas s'\xE9nerver (parfois)"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs qui suce le mieux"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Enfin..."
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus authentique"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que tu es la plus vraie des vraie bebs qu'on peut rencontrer!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus aventureux"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que les marches des Cinque Terre sous la canicule \xE7a te fait pas peur!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus branch\xE9"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que le bebs ne s'habille qu'avec le plus moderne et branch\xE9..."
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus sexy"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'elle sait faire une d\xE9marche f\xE9line... ou pas"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus d\xE9licat"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'il est tout petit et il aime pas qu'on le secoue!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus exub\xE9rant"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que des fois tu fais trop la fofolle!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus \xE9nerv\xE9"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce que tu \xE9claterais si tu t'\xE9nervais plus!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs avec les plus belles fesses"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Le fessier lvl Ariana Grande!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus luxueux"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'on dirait qu'elle co\xFBte 10k juste en fringues!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus organis\xE9"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Ouai non. Ya encore plein de v\xEAtements partout!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus romantique"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "Parce qu'il demande toujours plus de romance mais en a moins que pr\xE9vu!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Le bebs le plus amoureux"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "...C'est moi!"
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__block" },
      React.createElement(
        "h3",
        { className: "content__title" },
        "Mon bebs \xE0 moi"
      ),
      React.createElement(
        "p",
        { className: "content__description" },
        "C'est pas pour rien que t'es mon bebs :) Ze t'aime."
      ),
      React.createElement(
        "p",
        { className: "content__meta" },
        "Ton bebs"
      )
    ),
    React.createElement(
      "div",
      { className: "content__number" },
      "0"
    ),
    React.createElement(
      "button",
      { className: "btn-back", "aria-label": "Back to the grid view" },
      "\u21B5"
    )
  )
);

ReactDOM.render(calendar, document.getElementById('main'));


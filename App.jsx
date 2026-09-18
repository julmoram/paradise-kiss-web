import { useState } from "react";
import "./App.css";

const cast = [
  {
    name: "Yukari Hayasaka",
    role: "Protagonista",
    color: "var(--ink)",
    text: "Una estudiante disciplinada y algo insegura de su propio criterio, arrastrada al mundo de Paradise Kiss casi contra su voluntad. Su recorrido es el de aprender a confiar en lo que quiere, no solo en lo que se espera de ella.",
  },
  {
    name: "George Koizumi",
    role: "Diseñador y líder del grupo",
    color: "var(--raspberry)",
    text: "Talentoso, seguro de sí mismo y difícil de descifrar. Tiene una visión muy clara de su futuro como diseñador, lo que choca con la relación cada vez más intensa que construye con Yukari.",
  },
  {
    name: "Miwako Sakurada",
    role: "Costurera del grupo",
    color: "var(--ink)",
    text: "Alegre y de un estilo muy personal, es la amiga que le abre a Yukari las puertas del taller. Su relación con Arashi funciona como un espejo más ligero de la de Yukari y George.",
  },
  {
    name: "Arashi Nagase",
    role: "Baterista y novio de Miwako",
    color: "var(--ink)",
    text: "Aparenta rudeza pero es profundamente leal a Miwako. Representa una forma de compromiso más directa y menos ambigua que la que domina el resto del grupo.",
  },
  {
    name: "Isabella Yoshimine",
    role: "Modista principal",
    color: "var(--ink)",
    text: "La integrante de más edad y experiencia del grupo, con una historia personal que aporta al taller una perspectiva distinta sobre identidad y reinvención.",
  },
  {
    name: "Hiroyuki Tokumori",
    role: "Compañero de clase de Yukari",
    color: "var(--ink)",
    text: "Encarna la vida ordenada que Yukari deja atrás: un afecto sincero, pero también la comodidad de un camino sin sobresaltos.",
  },
];

const themes = [
  {
    title: "Elegir sin garantías",
    text: "La serie no premia a Yukari con un camino claramente correcto. Cada decisión — quedarse en el taller, seguir con George, sostener sus estudios — tiene un costo real, y esa incertidumbre es el motor emocional de toda la trama.",
  },
  {
    title: "La moda como oficio, no como fantasía",
    text: "A diferencia de otras historias ambientadas en el mundo de la moda, aquí el proceso creativo se muestra con sus horas de trabajo, sus fracasos y la tensión entre hacer algo propio y venderlo.",
  },
  {
    title: "Amor sin idealizar",
    text: "La relación entre Yukari y George es intensa pero desigual, y la serie no la suaviza para hacerla más cómoda. Es, sobre todo, un retrato honesto de lo que cuesta amar a alguien que no siempre es honesto.",
  },
];

const facts = [
  { label: "Origen", value: "Manga de Ai Yazawa, 1999–2003" },
  { label: "Adaptación", value: "Serie de TV, 2005" },
  { label: "Duración", value: "12 episodios" },
  { label: "Conexión", value: "Precuela de Nana" },
];

const navLinks = [
  { href: "#sinopsis", label: "Sinopsis" },
  { href: "#reparto", label: "Reparto" },
  { href: "#temas", label: "Temas" },
  { href: "#ficha", label: "Ficha técnica" },
];

function CastGlyph({ color = "var(--ink)" }) {
  return (
    <svg className="cast-glyph" viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="22" r="14" fill="none" stroke={color} strokeWidth="1.4" />
      <path
        d="M10 58 C10 40 20 34 32 34 C44 34 54 40 54 58"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="mark">
          Paradise <em>Kiss</em>
        </div>
        <button
          type="button"
          className={`nav-label${menuOpen ? " is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`topnav${menuOpen ? " is-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <header className="hero">
        <div>
          <p className="hero-eyebrow">Un anime sobre moda, incertidumbre y crecer</p>
          <h1 className="title">
            Paradise
            <br />
            Kiss
          </h1>
          <p className="lede">
            La historia de una estudiante que abandona el camino trazado por sus notas
            para entrar al taller de un grupo de diseñadores de moda — y descubre que
            elegir un futuro propio cuesta más de lo que parece.
          </p>
          <div className="hero-meta">
            <div>
              <strong>2005</strong>Serie de TV, 12 episodios
            </div>
            <div>
              <strong>Ai Yazawa</strong>Manga original
            </div>
            <div>
              <strong>Madhouse</strong>Estudio de animación
            </div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="420" height="480" fill="none" />
            <g fill="none" stroke="var(--ink)" strokeWidth="1.4">
              <path d="M210 40 C170 40 150 80 150 120 C150 170 180 190 180 230 L170 420 L250 420 L240 230 C240 190 270 170 270 120 C270 80 250 40 210 40 Z" />
              <path d="M180 230 C160 250 130 260 110 300" strokeDasharray="4 5" />
              <path d="M240 230 C260 250 290 260 310 300" strokeDasharray="4 5" />
              <circle cx="210" cy="140" r="6" fill="var(--raspberry)" stroke="none" />
              <path d="M170 190 Q210 205 250 190" />
            </g>
            <g stroke="var(--thread-gold)" strokeWidth="1" fill="none" opacity="0.8">
              <path d="M150 120 Q90 130 60 90" />
              <path d="M270 120 Q330 130 360 90" />
              <circle cx="60" cy="90" r="3" fill="var(--thread-gold)" stroke="none" />
              <circle cx="360" cy="90" r="3" fill="var(--thread-gold)" stroke="none" />
            </g>
            <text
              x="30"
              y="450"
              fontFamily="Fraunces, serif"
              fontStyle="italic"
              fontSize="15"
              fill="var(--plum)"
            >
              boceto de atelier, temporada final
            </text>
          </svg>
        </div>
      </header>

      <section id="sinopsis">
        <div className="section-inner">
          <p className="kicker">De qué trata</p>
          <h2>Un uniforme cambiado por un taller de costura</h2>
          <div className="synopsis-grid">
            <div>
              <p>
                Yukari Hayasaka es una alumna de instituto enfocada en aprobar el examen
                que la llevará a una buena universidad. Su rutina se interrumpe el día
                que un desconocido de pelo largo la persigue por la calle para pedirle
                que sea modelo de un desfile.
              </p>
              <p>
                Ese desconocido, George, forma parte de un pequeño grupo de estudiantes
                de una escuela de moda que diseñan y cosen sus propias colecciones bajo
                el nombre de marca "Paradise Kiss". Yukari acepta, casi por curiosidad, y
                termina pasando cada vez más tiempo en su taller improvisado — un espacio
                caótico lleno de telas, maniquíes y prototipos a medio terminar.
              </p>
            </div>
            <div>
              <p>
                Lo que empieza como un favor puntual se convierte en una pregunta
                incómoda: ¿seguir el camino seguro que se espera de ella, o quedarse en
                un mundo que la hace sentir viva pero que no le ofrece ninguna garantía?
                La serie sigue esa tensión a través de una relación con George tan
                magnética como inestable, y de un grupo de personajes que están, cada uno
                a su manera, decidiendo quiénes quieren ser antes de dejar de ser
                adolescentes.
              </p>
              <p className="pull">
                No es una historia sobre moda. Es una historia sobre decidir, con la moda
                como el lugar donde esa decisión se vuelve visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reparto">
        <div className="section-inner">
          <p className="kicker">Quién habita el taller</p>
          <h2>El reparto de Paradise Kiss</h2>
        </div>
        <div className="cast">
          {cast.map((member) => (
            <div className="cast-item" key={member.name}>
              <CastGlyph color={member.color} />
              <div>
                <h3>{member.name}</h3>
                <span className="cast-role">{member.role}</span>
                <p>{member.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="temas">
        <div className="section-inner">
          <p className="kicker">Por qué sigue resonando</p>
          <h2>Tres capas debajo del vestuario</h2>
        </div>
        <div className="themes">
          {themes.map((theme) => (
            <div className="theme-item" key={theme.title}>
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="facts" id="ficha">
        <div className="section-inner">
          <p className="kicker">Ficha técnica</p>
          <h2>Los datos, en breve</h2>
          <dl className="fact-grid">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="brand">
        <div className="section-inner brand">
          <div className="brand-mark">"Paradise Kiss"</div>
          <p>
            Así se llama, dentro de la propia historia, la marca de ropa que el grupo de
            amigos cose y presenta con recursos mínimos. El nombre le da título a la
            serie porque resume su idea central: crear algo propio, aunque sea
            imperfecto, vale el riesgo de intentarlo.
          </p>
        </div>
      </section>

      <footer>
        <span>
          Página informativa creada por un aficionado — no oficial ni afiliada a Ai
          Yazawa, Madhouse o los distribuidores de la serie.
        </span>
        <span>Todos los personajes y la obra son propiedad de sus respectivos autores.</span>
      </footer>
    </>
  );
}

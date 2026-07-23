/* ==========================================================================
   i18n.js — Bilingual (EN/ES) system + language picker + loading screen
   ========================================================================== */
(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // TRANSLATIONS
  // --------------------------------------------------------------------------
  const TRANSLATIONS = {
    en: {
      common: {
        nav: {
          home: 'Home',
          work: 'Work',
          about: 'About',
          contact: 'Contact',
          cv: 'CV',
          linkedin: 'Linkedin',
          instagram: 'Instagram'
        },
        nextProject: 'Next Project >',
        seeWholeDeal: '< See the whole deal >',
        getInTouch: "Let's get in touch ;)"
      },
      home: {
        title: 'Dolores Riccardo — Art Director & Creative',
        hero: {
          intro: 'I develop visual identities and art-directed campaigns for brands. Specialized in branding systems, narrative direction, and strategic use of AI.',
          title: "Hello :) I'm&nbsp;Loli,<br>Buenos Aires-based Art Director &amp; Creative, developing strategic&nbsp;visual<br>identities and campaigns for brands&nbsp;seeking<br>to break through&nbsp;noise.",
          colLabel: 'Art Direction<br>&amp; Creativity',
          colText: 'Senior graphic designer &amp; creative, 8+ years in the field. Strategy leads — design follows.'
        },
        works: {
          selected: 'Selected Works',
          year: 'Year',
          bplayClient: 'Guillermo Francella x Bplay',
          bplayAnnot: 'Sponsor Oficial<br>del Corazón Argento',
          bplayCats: 'ART DIRECTION | KEY VISUAL | OFF & ONLINE MEDIA',
          absolutClient: 'Absolut Tabasco x Volaris',
          absolutAnnot: 'Intensidad a bordo<br>de Volaris',
          absolutCats: 'ART DIRECTION | KEY VISUAL | OFF & ONLINE MEDIA | AI GENERATION',
          truenoClient: 'Trueno x EA Sports',
          truenoAnnot: 'Soy de donde nací,<br>mi tierra zanta',
          truenoCats: 'ART DIRECTION | KEY VISUAL | APPAREL DESIGN',
          byoClient: 'Byo. Superfood Lab',
          byoAnnot: 'Tu mejor versión<br>todos los días.',
          byoCats: 'BRANDING | CONCEPTS | OFF & ONLINE MEDIA | AI GENERATION',
          dhlClient: 'Juan Martín del Potro x DHL',
          dhlAnnot: 'Juan Martín<br>del Potro',
          dhlCats: 'ART DIRECTION | CAMPAIGN | SPATIAL DESIGN'
        },
        allWork: 'All Work'
      },
      about: {
        title: 'About — Dolores Riccardo',
        hello: 'Hello there,',
        name: "I'm Loli,",
        aka: '(Lo, Loló, Lolita — take your pick.)',
        bio1: "I came from a branding background at Universidad de Palermo, but creative campaigns are where I really belong. Leading visual concepts, executing them end to end; that's where the work hits different for me.",
        bio2: "Eight years building visual identities — 360 campaigns, key visuals, brand systems, spots. Enough time to know that pretty doesn't cut it if there's nothing to say.",
        bio3: 'I started freelancing, worked at agencies that pushed me hard, and now split my time between Pernod Ricard and independent projects.',
        bio4: 'I work best with brands and people who push me and places where I can shape ideas and stay hands-on with every detail from start to finish.',
        belief: '<span class="belief-word">Design</span> <span class="belief-word">that</span> <span class="belief-word">only</span> <span class="belief-word">looks</span> <span class="belief-word">good</span> <span class="belief-word belief-emph">doesn&rsquo;t</span> <span class="belief-word belief-emph">talk</span> <span class="belief-word">to</span> <span class="belief-word belief-emph">anyone.</span>',
        skills: {
          branding: 'Branding', ai: 'AI Content', social: 'Social Media', ooh: 'OOH',
          packaging: 'Packaging', campaigns: '360 Campaigns', identity: 'Visual Identity & Strategy',
          creativity: 'Creativity', media: 'Online & Offline Media', artdir: 'Art Direction',
          events: 'Event Organization', entrepreneur: 'Entrepreneur', mindracing: 'Mind Always Racing'
        },
        beyond: "I'm a designer by trade, but honestly I'm just someone who's always making stuff. Music, leather goods, interior spaces—whatever I'm into that week. Love animals, play guitar when I can. It's not really something I turn off, it's just how I work.",
        cta: {
          l1: 'If you think', l2: 'we could do', l3: 'something great', l4: 'together, you', l5: 'know where', l6: 'to find me'
        },
        ctaCv: 'Curriculum Vitae →'
      },
      contact: {
        title: 'Contact — Dolores Riccardo',
        flipFront1: 'Buenos Aires',
        flipFront2: '& Worldwide.',
        flipBack1: "Let's talk about",
        flipBack2: 'your next project',
        instagram: 'Instagram',
        linkedin: 'Linkedin',
        quote: {
          typewriter: "Let's talk about\nyour next project?",
          name: 'Name*',
          namePh: 'Camila Vázquez',
          email: 'Email*',
          emailPh: 'camila@gmail.com',
          phone: 'Phone*',
          phonePh: '+54…',
          country: 'Country*',
          countryPh: 'Argentina',
          how: 'How did you find me?*',
          choose: 'Choose an option',
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
          referral: 'Referral',
          google: 'Google search',
          other: 'Other',
          budget: 'Budget*',
          budget1: 'Less than USD 1,500',
          budget2: 'USD 2,000 – 3,500',
          budget3: "I don't know",
          project: 'What is your project about?*',
          projectPh: 'Tell me what your project is about…',
          tagline: "Let's make your project grow.",
          submit: 'Send',
          subject: 'New inquiry from the portfolio'
        }
      },
      cv: {
        title: 'Curriculum Vitae — Dolores Riccardo',
        typewriter: 'Curriculum Vitae',
        subname: 'Dolores Riccardo · BsAs, Argentina.',
        done: "What I've done",
        learned: 'Where I learned',
        tools: 'Tools I rock at',
        currently: 'Currently',
        roles: {
          oliver: 'Oliver Agency',
          oliverRole: 'Sr. Graphic Designer',
          oliverDesc: 'Design and develop end-to-end creative pieces for campaigns and brands, ensuring quality and visual consistency. Provide strategic input, manage multiple projects, and focus on innovation and AI tools.',
          freelance: 'Designer',
          freelanceRole: 'Freelance',
          freelanceDesc: 'Create visual identities and design strategies to strengthen brands, also collaborating with agencies on design and art direction.',
          lumos: 'Lumos / Grupo Taquion',
          lumosRole: 'Head of Design — Sr. Graphic Designer',
          lumosDesc: 'As Design Lead, I create and execute branding, social media assets, digital ads, political campaign materials, and corporate reports, ensuring impactful and consistent visual communication.',
          laugh: 'We Are Laugh',
          laughRole: 'Art Direction',
          laughDesc: 'Led art direction for interactive campaigns, websites, and social media, ensuring cohesive visuals and impactful messaging. Managed high-stakes projects and oversaw strategic content distribution.',
          corp: 'Corporate Image Design',
          corpRole: 'Universidad de Palermo',
          corpDesc: 'Degree · Corporate Image Design.',
          gd: 'Graphic Design',
          gdRole: 'Universidad de Palermo',
          gdDesc: 'Degree.',
          school: 'Bilingual Diploma',
          schoolRole: 'Colegio Santa María de Pilar',
          schoolDesc: 'Degree focused on Humanistic Sciences.'
        },
        toolNames: {
          ps: 'Photoshop', ai: 'Illustrator', pr: 'Premiere', ae: 'After Effects',
          id: 'InDesign', fg: 'Figma', sm: 'Social Media', aiTool: 'Artificial Intelligence',
          aiNote: '(image and video generation)'
        }
      },
      work: {
        title: 'All Work — Dolores Riccardo',
        pageTitle: 'All Work',
        grid: 'Grid View',
        list: 'List View',
        year: 'Year'
      },
      project: {
        client: 'Client',
        agency: 'Agency',
        year: 'Year',
        campaign: 'Campaign',
        artist: 'Artist',
        deliverables: 'Deliverables',
        context: 'Context',
        execution: 'Execution',
        executionCreative: 'Creative Execution',
        results: 'Results',
        bplay: {
          title: 'Guillermo Francella x Bplay — Dolores Riccardo',
          campaign: 'Sponsor Oficial del Corazón Argento',
          ctx1: "In 2022, Bplay faced a straightforward challenge: compete during the World Cup in a market where the main rival was already the official national team sponsor.",
          ctx2: "The real question wasn't how to reach more people. It was how to actually connect with Argentine fans — at an emotional level, not a transactional one. And that connection lived in something deeper than football itself: superstitions, rituals, the obsessive way Argentines experience the sport.",
          ctx3: "Bplay couldn't outbid a national sponsorship. So they went for the heart instead.",
          pull: "Bplay couldn't outbid a national sponsorship. So they went for the heart instead.",
          ex1: 'I built the visual identity for the entire campaign: the key visual "Official Sponsor of Argentina\'s Heart," and all the graphic strategy across digital, OOH, social, and media planning.',
          ex2: "The choice was intentional: light blue and white as a direct visual code to national identity. Every asset — every post, every billboard, every feed — became an extension of one idea: fans don't just watch the World Cup. They play in it.",
          ex3: "That's where Guillermo Francella came in. Not as a celebrity attachment, but as the perfect embodiment of the message. Pepe Argento believes in superstitions. Pepe plays consciously. So can you. His complicity was the campaign's complicity.",
          ex4: "Bplay wasn't a sponsor. It was a co-conspirator.",
          res1: '"Corazón Argento" won three medals at the Festival Internacional de Agencias Independientes (FEPI): Silver for Best Integrated Production, Silver for Best Commercial (Sports & Gaming), and Bronze for Best Film.',
          res2: "But the real proof was simpler: it worked. While Argentina lifted the World Cup, Bplay had already built something that stuck — a brand that felt like it was rooting with you, not just selling to you. That was the campaign."
        },
        byo: {
          title: 'Byo. Superfood Lab — Dolores Riccardo',
          deliverables: 'Full Branding & Art Direction',
          ctx1: "Byo launched as a superfood bowl spot in Pilar — bowls, hot bowls, protein shakes, juices, shots. The market for \"healthy food\" is crowded. The real challenge was building an identity that could communicate functionality, authenticity, and energy without looking like every other wellness brand.",
          ctx2: "The brief gave us a clear anchor: five specific superfoods — cacao, matcha, spirulina, beetroot, açaí. That was the starting point.",
          pull: "Five superfoods. One visual system. AI as creative direction.",
          ex1: "I designed the full visual identity and art-directed every touchpoint: logo, color palette, signage, uniforms, menus, packaging, and social media. The central creative decision was making the five superfoods the absolute axis of the brand — not just in communication, but in everything. The palette came from them. The illustration system came from them. Each color is a superfood; each illustration, a visual superhero.",
          ex2: "I developed a complete iconography system where every superfood translates into a unique, functional, and recognizable visual. The brand isn't a logo applied to things — it's a living system where the ingredients are the language.",
          ex3: "The full materialization of the identity — product photography, store video, space renders, social content — was executed using AI as a creative direction tool. Every visual was art-directed: each iteration answered to specific aesthetic and strategic decisions. AI didn't replace the creativity. It expanded the capacity to execute it.",
          ex4: '',
          res1: "Byo opened in 2026. The identity communicates functionality before anyone walks in — every color tells you what to expect, every illustration reinforces the promise of real, conscious nutrition.",
          res2: "Byo doesn't sell \"healthy food.\" It sells power, choice, ingredients that work. And that reads across every single touchpoint."
        },
        dhl: {
          title: 'Juan Martín del Potro x DHL — Dolores Riccardo',
          campaign: 'Open for Us',
          ctx1: 'DHL Express launched "Open for Us" in Argentina alongside Juan Martín del Potro — a campaign built around resilience and the belief that limits are only as real as you let them be.',
          ctx2: "The challenge had two sides: communicate Del Potro's story authentically, and do it inside DHL's notoriously strict brand guidelines. The brief wasn't just creative — it was a tightrope.",
          pull: "The brief wasn't just creative — it was a tightrope.",
          ex1: 'I developed the full visual identity for the campaign — the "Open for Us" logo and the #NeverGiveUp graphic system — across every touchpoint: OOH, social media, digital banners, print, merch, and event materials.',
          ex2: 'The art direction extended to the physical space: I directed the set design for the launch event at MALBA.',
          ex3: "The real creative decision was restraint — letting Del Potro's story carry the emotion while the design stayed precise, modern, and disciplined.",
          res1: 'The campaign ran in June 2023 — flagship event at MALBA, digital activations, regional print distribution.',
          res2: "The visual system held across every format without losing DHL's corporate identity or Del Potro's personal story. That was the brief. That's what it delivered."
        },
        trueno: {
          title: 'Trueno x EA Sports FIFA 22 — Dolores Riccardo',
          campaign: 'Vanity Kit "Tierra Zanta"',
          ctx1: 'For FIFA 22, I was commissioned to design a vanity kit based on "Tierra Zanta" — a track from Trueno\'s 2022 album "Bien o Mal."',
          ctx2: "The challenge was translating a deeply personal concept — roots, resistance, Latin American pride — into a functional visual kit for a video game. This wasn't just a uniform. It was a statement of identity built inside the technical constraints of a game engine.",
          pull: 'Soy de donde nací, donde voy a morir. Mi tierra zanta.',
          ex1: 'I worked directly with Trueno through a series of sessions to understand what "Tierra Zanta" meant beyond the music — his visual signature, personal symbols, references from his territory. From that, I designed the full kit: shirt, shorts, accessories.',
          ex2: 'The central creative decision was the palette: gold and black. These colors live in Trueno\'s visual DNA and throughout "Bien o Mal." Every element answered directly to what he told me about his identity, his place, and his story.',
          res1: 'The kit dropped with FIFA 22 and the response was immediate — fans asking for it as an official shirt, comments flooding in, the content spreading on its own.',
          res2: "Players weren't just wearing a uniform; they were carrying Trueno's full identity into the game. It worked because it was real."
        },
        absolut: {
          title: 'Absolut Tabasco x Volaris — Dolores Riccardo',
          campaign: 'Intensidad a Bordo',
          ctx1: "Absolut launched a mini Tabasco format on Volaris' domestic flights. The brief wasn't about promoting a product — it was about talking heat, fire, and intensity inside one of the most sensitive settings there is: a plane.",
          ctx2: "The paradox was obvious. How do you sell \"fire\" 30,000 feet up? On top of that, Absolut runs on tight, well-established brand guidelines. The real question: how do we bend that structure without breaking the brand — with Tabasco as the wedge?",
          pull: 'Intensity. The word Absolut needed to fly.',
          ex1: "The strategic move was swapping \"spicy\" and \"fire\" for \"intensity\" — a word that carries the product and the flight at the same time. Everything else followed: \"How's the heat at 30,000 feet?\", \"How far can intensity take you?\", \"Intensity on board.\"",
          ex2: "Visually, the red chili took the lead. I built a system where the chili floats, flies, and lives inside the Volaris cabin. The astronaut — already part of Absolut's visual DNA — folded into the story without forcing anything. AI ran as a creative direction tool: every image was concept first, execution second, always art-directed. The result: a campaign that talks to Absolut without asking permission, holds its own visually, and speaks Volaris' language without trying too hard.",
          res1: "Communicating in a sensitive setting takes precise language. A plane isn't a place for \"fire\" — but it is for \"intensity.\"",
          res2: "Absolut signed off on a strategic expansion of its visual identity without touching its guidelines. For a brand that rigid, that's the sign an idea worked on both fronts — strategic and visual."
        },
        glenlivet: {
          title: 'The Glenlivet x Carnaval de Barranquilla — Dolores Riccardo',
          campaign: 'Carnaval de Barranquilla',
          ctx1: 'The Glenlivet launched at Carnaval de Barranquilla 2026 with a campaign that speaks the language of the festival without giving up its identity as a brand.',
          ctx2: "The challenge: capture the energy, color, and rhythm of one of the world's most intense cultural celebrations — while staying inside tight brand guidelines. The question was how to make a Scottish whisky feel at home in Barranquilla. The answer was finding what they share — character, distinction, and the belief that ordinary isn't enough.",
          pull: 'Made to be as one-of-a-kind as the carnival itself.',
          ex1: 'I led the full art direction of the campaign — key visual and every application. We chose Direction 01, the most expressive route, built on illustration, color, and visual rhythm that interprets the carnival without tipping into excess.',
          ex2: "The core visual elements were stylized birds in vibrant tones, used as a visual code for the festival, paired with the Glenlivet bottle as a quiet but present protagonist. Every application — outdoor, social, print — held its visual consistency while adapting to the local context.",
          ex3: "The real challenge was keeping The Glenlivet's strict brand identity intact while giving the campaign enough personality to hold its own against the visual intensity of the carnaval.",
          res1: 'The campaign launched during Carnaval 2026 across outdoor, social media, and print.',
          res2: "The brand connected with a local audience without giving up its identity — which was the brief. A Scottish whisky at the most Colombian carnival in the world, and it felt like it belonged."
        },
        ojodetigre: {
          title: 'Ojo de Tigre Reposado — Dolores Riccardo',
          campaign: 'Mismo Carácter, Más Temple',
          ctx1: "Pernod launched Ojo de Tigre Reposado in Colombia. The brief wasn't about introducing another product — it was about landing an aged version without pulling the rug out from the original.",
          ctx2: "Ojo de Tigre Joven is the flagship. The Reposado couldn't go head-to-head with it — it had to sit alongside. The real question: how do we position a second experience of the same mezcal without eating into what already works? A balance most brands get wrong.",
          pull: "It's not a new mezcal. It's the same one as always, with more temper.",
          ex1: "The concept came down to the claim: \"Same character, more temper.\" A line that protects the Joven while opening a new door. Not \"better.\" Not \"the evolution.\" Just another way into the same mezcal. Another moment. Another drinker. Another sensory palette.",
          ex2: "I led the full visual strategy — from graphic identity to every touchpoint of the Medellín launch. The timing worked in our favor: the city was already primed to talk about maturation (Colombia Moda + Feria de las Flores), and I hooked the visual concept into that conversation. Invitations, menus, cocktails, event signage — everything runs on the same logic. Palette, typography, composition. Every piece reinforces that it's the same mezcal, just with more time in barrel. Elegance without giving anything up.",
          res1: "The launch played out in Medellín. The concept did exactly what it was meant to — protect while accompanying. The Reposado walked in without asking the Joven to leave."
        },
        genstone: {
          title: 'Genstone — Dolores Riccardo',
          clientValue: 'Genstone Generators',
          deliverables: 'Branding & Digital Strategy',
          ctx1: 'The premium domestic generator market is highly competitive and consolidated. Established brands maintain market dominance through pricing power.',
          ctx2: 'The strategic challenge was to differentiate through a clear value proposition: deliver generators with technical specifications and performance equivalent to premium competitors, but with significantly lower price positioning. Build trust and credibility while maintaining affordability.',
          pull: 'What you need keeps running.',
          ex1: 'I developed the complete brand strategy: naming, visual identity system, brand concept, web platform, technical specifications, collateral materials, and social media management.',
          ex2: "The core creative concept centers on continuity: Genstone doesn't promise a generator — it promises your life keeps running uninterrupted. Your routine, your pace, your comfort remain intact. The proposition is straightforward but powerful: what you need stays on. This differentiates Genstone from competitors not through technical specifications alone, but through what it actually solves — it keeps your life active and protects your time. Reliability, efficiency, and continuity anchor the messaging.",
          ex3: 'The generator units had not yet arrived in Argentina. I leveraged AI image generation to produce precise product visuals, solving content-production timing constraints. Every application — web, technical documentation, social channels — maintains visual coherence and consistently communicates the same value: premium specifications, competitive pricing, operational reliability.',
          res1: 'Project executed and launched. Brand active in market.',
          productsEyebrow: 'Our Products',
          visitLabel: 'Visit the site'
        },
        ramazzotti: {
          title: 'Ramazzotti Spritz Brasil — Dolores Riccardo',
          campaign: 'Ramazzotti Spritz Brasil',
          ctx1: "Pernod launched Ramazzotti Spritz in Brazil, up against Aperol and Cynar. The brief wasn't just about competing — it was about selling a non-bitter product in a market ruled by bitters.",
          ctx2: "The real question was how to stand out visually without going defensive. Not by saying \"we're not bitter\" — but by proving Ramazzotti is simple, easy, and made for any moment.",
          pull: 'The recipe is the concept. Simple, easy, made for any moment.',
          ex1: "The strategy was to lead with the recipe. Not as a technical checklist — as an experience. Every post ran the same thread: there's a way to make this, there's a moment to try it, it's easy, and it works. Portuguese copy said it straight.",
          ex2: "I directed the full visual strategy: every image built from scratch with AI, holding a consistent palette, light, and context. Each visual makes a different angle of the same case — Ramazzotti isn't complicated, isn't bitter, is for right now. Headlines closed each frame with precision. This wasn't about making pretty pictures; it was about each image proving a point.",
          res1: "The campaign goes live in Brazil in two days. Approved by Pernod. The concept did what it needed to — communicate non-bitterness without going defensive, just by showing ease and enjoyment."
        }
      }
    },

    es: {
      common: {
        nav: {
          home: 'Inicio',
          work: 'Trabajos',
          about: 'Sobre mí',
          contact: 'Contacto',
          cv: 'CV',
          linkedin: 'Linkedin',
          instagram: 'Instagram'
        },
        nextProject: 'Próximo Proyecto >',
        seeWholeDeal: '< Mirá el proyecto completo >',
        getInTouch: 'Hablemos de tu próximo proyecto ;)'
      },
      home: {
        title: 'Dolores Riccardo — Directora de Arte & Creativa',
        hero: {
          intro: 'Trabajo de forma freelance y en colaboración con agencias creativas, siempre buscando transformar ideas en identidades visuales que comuniquen, solucionen y dejen huella.',
          title: 'Soy Dolores, aunque<br>todo&nbsp;el&nbsp;mundo&nbsp;me&nbsp;dice&nbsp;Loli&nbsp;:)<br>Tengo 27 años y vivo en Buenos&nbsp;Aires.<br>Soy Diseñadora Gráfica y&nbsp;Lic.<br>en&nbsp;Diseño&nbsp;de&nbsp;Imagen&nbsp;Empresarial.',
          colLabel: 'Art Direction<br>&amp; Creativity',
          colText: 'Diseñadora gráfica senior y creativa, con más de 8 años de experiencia.'
        },
        works: {
          selected: 'Trabajos Destacados',
          year: 'Año',
          bplayClient: 'Guillermo Francella x Bplay',
          bplayAnnot: 'Sponsor Oficial<br>del Corazón Argento',
          bplayCats: 'ART DIRECTION | KEY VISUAL | OFF & ONLINE MEDIA',
          absolutClient: 'Absolut Tabasco x Volaris',
          absolutAnnot: 'Intensidad a bordo<br>de Volaris',
          absolutCats: 'ART DIRECTION | KEY VISUAL | OFF & ONLINE MEDIA | AI GENERATION',
          truenoClient: 'Trueno x EA Sports',
          truenoAnnot: 'Soy de donde nací,<br>mi tierra zanta',
          truenoCats: 'ART DIRECTION | KEY VISUAL | APPAREL DESIGN',
          byoClient: 'Byo. Superfood Lab',
          byoAnnot: 'Tu mejor versión<br>todos los días.',
          byoCats: 'BRANDING | CONCEPTS | OFF & ONLINE MEDIA | AI GENERATION',
          dhlClient: 'Juan Martín del Potro x DHL',
          dhlAnnot: 'Juan Martín<br>del Potro',
          dhlCats: 'ART DIRECTION | CAMPAIGN | SPATIAL DESIGN'
        },
        allWork: '+ Proyectos'
      },
      about: {
        title: 'Sobre mí — Dolores Riccardo',
        hello: 'Hola, qué tal,',
        name: 'Soy Loli,',
        aka: '(o Lo, Loló, Lolita.)',
        bio1: 'Me especialicé en branding en la Universidad de Palermo. Empecé trabajando en identidades visuales, pero descubrí que lo mío era la creatividad y las campañas publicitarias: ese espacio donde puedo dirigir y ejecutar, donde la estrategia se convierte en visual. Hoy branding es parte de mi ADN, pero campañas creativas es donde me enciendo.',
        bio2: 'Hace más de 8 años que construyo identidades visuales — campañas 360, key visuals, spots, marcas desde cero. Aprendí que el diseño gráfico es narrativa y coherencia, no solo algo que se ve bien.',
        bio3: 'Empecé freelance, pasé por agencias que me formaron mucho, y hoy combino mi trabajo en Pernod Ricard con proyectos propios.',
        bio4: 'Quiero colaborar con personas y marcas que me desafíen. Proyectos donde pueda proponer, decidir y estar detrás de cada detalle.',
        belief: '<span class="belief-word">El</span> <span class="belief-word">diseño</span> <span class="belief-word">que</span> <span class="belief-word">solo</span> <span class="belief-word">se</span> <span class="belief-word">ve</span> <span class="belief-word">bien</span> <span class="belief-word">no</span> <span class="belief-word">le</span> <span class="belief-word belief-emph">habla</span> <span class="belief-word">a</span> <span class="belief-word belief-emph">nadie.</span>',
        skills: {
          branding: 'Branding', ai: 'Contenido IA', social: 'Social Media', ooh: 'OOH',
          packaging: 'Packaging', campaigns: 'Campañas 360', identity: 'Identidad Visual & Estrategia',
          creativity: 'Creatividad', media: 'Medios Online & Offline', artdir: 'Dirección de Arte',
          events: 'Organización de Eventos', entrepreneur: 'Emprendedora', mindracing: 'La cabeza siempre a mil'
        },
        beyond: 'Más allá del diseño —que además de ser mi trabajo es mi verdadera pasión—: me apasionan los animales, la música. Canto, toco guitarra, diseño ropa y tengo un emprendimiento de accesorios de cuero. Decoro espacios. Organizo eventos sociales y corporativos. Siempre hay algo en construcción. La creatividad no se apaga cuando cierro la computadora; eso es lo que soy.',
        cta: {
          l1: 'Si pensás', l2: 'que podemos', l3: 'hacer cosas', l4: 'copadas juntos,', l5: 'sabés&nbsp;dónde', l6: 'encontrarme'
        },
        ctaCv: 'Curriculum Vitae →'
      },
      contact: {
        title: 'Contacto — Dolores Riccardo',
        flipFront1: 'Buenos Aires',
        flipFront2: '& Worldwide.',
        flipBack1: 'Hablemos de',
        flipBack2: 'tu próximo proyecto',
        instagram: 'Instagram',
        linkedin: 'Linkedin',
        quote: {
          typewriter: '¿Hablamos\nde tu idea?',
          name: 'Nombre*',
          namePh: 'Camila Vázquez',
          email: 'Correo*',
          emailPh: 'camila@gmail.com',
          phone: 'Teléfono*',
          phonePh: '+54…',
          country: 'País*',
          countryPh: 'Argentina',
          how: '¿Cómo me conociste?*',
          choose: 'Elegí una opción',
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
          referral: 'Referencia',
          google: 'Búsqueda en Google',
          other: 'Otro',
          budget: 'Presupuesto*',
          budget1: 'Menos de USD 1.500',
          budget2: 'USD 2.000 – 3.500',
          budget3: 'No lo sé',
          project: '¿De qué va tu proyecto?*',
          projectPh: 'Contame de qué va tu proyecto…',
          tagline: 'Hagamos que tu proyecto crezca.',
          submit: 'Enviar',
          subject: 'Nueva consulta desde el portfolio'
        }
      },
      cv: {
        title: 'Curriculum Vitae — Dolores Riccardo',
        typewriter: 'Curriculum Vitae',
        subname: 'Dolores Riccardo · BsAs, Argentina.',
        done: 'Experiencia',
        learned: 'Formación',
        tools: 'Lo que domino',
        currently: 'Actualmente',
        roles: {
          oliver: 'Oliver Agency',
          oliverRole: 'Sr. Graphic Designer',
          oliverDesc: 'Diseño y desarrollo de piezas creativas end-to-end para campañas y marcas, asegurando calidad y coherencia visual. Aporte estratégico, gestión de múltiples proyectos con enfoque en innovación y herramientas de IA.',
          freelance: 'Designer',
          freelanceRole: 'Freelance',
          freelanceDesc: 'Diseño y estrategia para fortalecer marcas, colaborando también con agencias en diseño en múltiples proyectos.',
          lumos: 'Lumos / Grupo Taquion',
          lumosRole: 'Head of Design | Sr. Graphic Designer',
          lumosDesc: 'Responsable de la dirección creativa y la ejecución de estrategias de diseño. Branding, comunicación digital, campañas políticas y reportes e informes corporativos.',
          laugh: 'We Are Laugh / Creative Agency',
          laughRole: 'Art Direction',
          laughDesc: 'Lideré la identidad visual de campañas digitales y redes sociales, asegurando una comunicación efectiva y alineada con la estrategia de cada marca. Coordiné proyectos de alto impacto, gestionando la producción y distribución de contenido en diversos formatos y plataformas.',
          corp: 'Licenciatura en Imagen Empresarial',
          corpRole: 'Universidad de Palermo',
          corpDesc: 'Carrera de Grado.',
          gd: 'Diseño Gráfico',
          gdRole: 'Universidad de Palermo',
          gdDesc: 'Carrera de Grado.',
          school: 'Diploma Bilingüe',
          schoolRole: 'Colegio Santa María de Pilar',
          schoolDesc: 'Carrera enfocada en Humanidades.'
        },
        toolNames: {
          ps: 'Photoshop', ai: 'Illustrator', pr: 'Premiere', ae: 'After Effects',
          id: 'InDesign', fg: 'Figma', sm: 'Redes Sociales', aiTool: 'Inteligencia Artificial',
          aiNote: '(generación de imagen y video)'
        }
      },
      work: {
        title: 'Todos los Trabajos — Dolores Riccardo',
        pageTitle: 'Todos los Trabajos',
        grid: 'Vista Grilla',
        list: 'Vista Lista',
        year: 'Año'
      },
      project: {
        client: 'Cliente',
        agency: 'Agencia',
        year: 'Año',
        campaign: 'Campaña',
        artist: 'Artista',
        deliverables: 'Entregables',
        context: 'Contexto',
        execution: 'Ejecución',
        executionCreative: 'Ejecución Creativa',
        results: 'Resultados',
        bplay: {
          title: 'Guillermo Francella x Bplay — Dolores Riccardo',
          campaign: 'Sponsor Oficial del Corazón Argento',
          ctx1: 'En 2022, Bplay enfrentaba un desafío claro: competir durante el Mundial en un mercado donde un competidor directo ya era el patrocinador oficial de la Selección.',
          ctx2: 'La pregunta no era cómo llegar a más gente, sino cómo conectar emocionalmente con los hinchas argentinos. La respuesta estaba en algo más profundo que un equipo: las cábalas, los rituales, la superstición que define cómo los argentinos viven el fútbol.',
          ctx3: 'Bplay no competía contra un patrocinio oficial; competía por el corazón.',
          pull: 'Bplay no competía contra un patrocinio oficial; competía por el corazón.',
          ex1: 'Creé la identidad visual completa de la campaña: diseñé el key visual "Sponsor Oficial del Corazón Argento" y desarrollé toda la estrategia gráfica para digital, OOH, redes sociales y pauta.',
          ex2: 'La decisión fue deliberada: celeste y blanco como código visual directo a la identidad nacional. Cada pieza se convirtió en una extensión del concepto central — que los hinchas no solo miran el Mundial, sino que participan activamente en él.',
          ex3: 'Para eso, trabajé con Guillermo Francella (Pepe Argento). No como figura decorativa, sino como el vehículo perfecto para ese mensaje: si Pepe cree en las cábalas, si Pepe juega conscientemente, entonces el hincha también puede. Su complicidad era nuestra complicidad.',
          ex4: 'Bplay no era patrocinador; era cómplice.',
          res1: '"Corazón Argento" ganó tres medallas en el Festival Internacional de Agencias Independientes (FEPI): Plata en Mejor Producción Integral, Plata en Mejor Comercial (Deportes & Gaming) y Bronce en Mejor Film.',
          res2: 'Pero la métrica real fue otra: la campaña funcionó. Mientras los argentinos celebraban cada victoria, el país se llevaba el Mundial. Eso que Bplay construyó — ser el cómplice del hincha, validar sus rituales, hacerlo sentir parte del equipo — seguía ahí, vivo.'
        },
        byo: {
          title: 'Byo. Superfood Lab — Dolores Riccardo',
          deliverables: 'Branding Integral & Dirección de Arte',
          ctx1: 'Byo nace como un local de superfood bowls, hot bowls, protein shakes, jugos y shots en Pilar. El desafío no era simplemente crear una marca de alimentos saludables —el mercado está saturado. El desafío era construir una identidad que comunicara funcionalidad, autenticidad y vitalidad, con un concepto lo suficientemente fuerte como para diferenciarse en un contexto local.',
          ctx2: 'El brief era claro: la marca debía orbitar alrededor de cinco superalimentos específicos (cacao, matcha, espirulina, remolacha, acaí) como núcleo estratégico. Eso fue el punto de partida.',
          pull: 'Cinco superalimentos. Un sistema visual. IA como dirección creativa.',
          ex1: 'Diseñé la identidad visual completa y dirigí el arte de todos los touchpoints: logo, paleta cromática, cartelería, uniformes, menús, envases y presencia en redes. La decisión creativa central fue hacer de los cinco superalimentos el eje absoluto de la marca. No solo de la comunicación — de todo. La paleta nació de ellos. El sistema de ilustraciones también. Cada color representa un superfood; cada ilustración, un superhéroe visual.',
          ex2: 'Desarrollé un sistema completo de iconografía donde cada superfood se traduce en una representación visual única, funcional y reconocible. La marca no es un logo aplicado; es un sistema vivo donde los superalimentos son el lenguaje.',
          ex3: 'La materialización integral de la identidad — fotografía de productos, video de local, renders del espacio, contenido para redes — se ejecutó con IA como herramienta de dirección creativa. Cada visual fue dirigido bajo criterio de art direction; cada iteración respondía a decisiones estéticas y estratégicas específicas. La IA no reemplazó la creatividad; amplió la capacidad de ejecutarla.',
          ex4: '',
          res1: 'El local abrió en 2026. La identidad comunica funcionalidad antes de que alguien entre: cada color anticipa lo que vas a encontrar, cada ilustración refuerza la promesa de nutrición consciente y real.',
          res2: 'Byo no vende "comida saludable" — vende poder, elección, ingredientes que funcionan. Y eso se ve en cada touchpoint.'
        },
        dhl: {
          title: 'Juan Martín del Potro x DHL — Dolores Riccardo',
          campaign: 'Open for Us',
          ctx1: 'DHL Express lanzó "Open for Us" en Argentina junto a Juan Martín del Potro, con el mensaje #NuncaTeRindas.',
          ctx2: 'El desafío tenía dos caras: comunicar la narrativa personal de Del Potro con autenticidad, y hacerlo dentro de los guidelines corporativos más estrictos del mercado. El brief no era solo creativo — era un equilibrio.',
          pull: 'El brief no era solo creativo — era un equilibrio.',
          ex1: 'Desarrollé la identidad visual completa de la campaña: el logo "Open for Us" y el sistema gráfico de #NuncaTeRindas en todos los touchpoints — OOH, redes, banners digitales, impresión, merchandising y materiales de evento.',
          ex2: 'La dirección de arte se extendió al espacio físico: dirigí la escenografía del evento de lanzamiento en el MALBA.',
          ex3: 'La decisión creativa central fue la restricción — dejar que la historia de Del Potro cargara la emoción mientras el diseño se mantenía preciso, moderno y disciplinado.',
          res1: 'La campaña se ejecutó en junio de 2023 con presencia en el MALBA, activaciones digitales y distribución regional de material impreso.',
          res2: 'El sistema visual sostuvo todos los formatos sin perder la identidad corporativa ni la historia detrás de la campaña — que es exactamente lo que el brief pedía.'
        },
        trueno: {
          title: 'Trueno x EA Sports FIFA 22 — Dolores Riccardo',
          campaign: 'Vanity Kit "Tierra Zanta"',
          ctx1: 'Para FIFA 22, se encarga el diseño de un vanity kit basado en "Tierra Zanta", canción del álbum "Bien o Mal" de Trueno (2022).',
          ctx2: 'El desafío era traducir un concepto profundamente identitario —raíces, resistencia, orgullo latinoamericano— en un kit visual funcional para un videojuego. No era simplemente un uniforme: era materializar una declaración de identidad dentro de las limitaciones técnicas de un videojuego.',
          pull: 'Soy de donde nací, donde voy a morir. Mi tierra zanta.',
          ex1: 'Trabajé directamente con Trueno en sesiones de trabajo para entender la profundidad de "Tierra Zanta". A partir de sus elementos visuales —firma, símbolos personales, referencias de su territorio— diseñé el kit completo: camiseta, pantalones, accesorios.',
          ex2: 'La decisión creativa fue la paleta: dorado y negro. Estos colores viven en el ADN visual de Trueno y del álbum "Bien o Mal". Cada elemento respondía directamente a lo que Trueno explicaba sobre su identidad, su territorio y su historia.',
          res1: 'El kit lanzó en FIFA 22 y la respuesta fue inmediata: fans pidiendo que se vendiera como camiseta oficial, comentarios masivos en redes, el contenido circuló solo.',
          res2: 'Los jugadores no solo usaban el uniforme — llevaban la identidad completa de Trueno. El diseño funcionó porque era auténtico.'
        },
        absolut: {
          title: 'Absolut Tabasco x Volaris — Dolores Riccardo',
          campaign: 'Intensidad a Bordo',
          ctx1: 'Absolut lanza la mini Tabasco en vuelos nacionales de Volaris. El desafío no era simplemente promocionar un producto: era comunicar picante, fuego, intensidad en un contexto ultra sensible como un vuelo.',
          ctx2: 'La paradoja estaba clara. ¿Cómo hablás de "fuego" cuando estás en el aire? Absolut, además, es marca con guidelines visuales consolidados y restrictivos. La pregunta era cómo romper esa estructura sin perder identidad, usando Tabasco como punto de quiebre.',
          pull: 'Intensidad. La palabra que Absolut necesitaba para volar.',
          ex1: 'La decisión estratégica fue reemplazar "picante" y "fuego" por "Intensidad". Una palabra que funciona tanto para el producto como para la experiencia de volar. Después, todo se construyó alrededor de distintas frases de intensidad: "¿Qué tal el picante a 30.000 pies?", "¿Hasta dónde te puede llevar la intensidad?", "Intensidad a bordo".',
          ex2: 'Visualmente, el ají rojo se convirtió en protagonista absoluto. Generé un sistema de imágenes donde el ají flota, vuela, convive en la cabina de Volaris. El astronauta —que ya es parte del ADN visual de Absolut— se integró naturalmente a la narrativa. Usé IA como herramienta de dirección creativa: cada imagen fue concepto + ejecución visual bajo criterio art direction. El resultado es una campaña que conversa con Absolut sin pedirle permiso, que es coherente visualmente, y que habla el idioma de Volaris sin sonar forzada.',
          res1: 'Comunicar en un contexto sensible requiere lenguaje preciso. Un vuelo no es lugar para "fuego" pero sí para "intensidad".',
          res2: 'Absolut aprobó una expansión estratégica de su identidad visual sin comprometer sus guidelines. Para una marca con esa rigidez, eso significa que la idea funcionó en dos planos: estratégico y visual.'
        },
        glenlivet: {
          title: 'The Glenlivet x Carnaval de Barranquilla — Dolores Riccardo',
          campaign: 'Carnaval de Barranquilla',
          ctx1: 'The Glenlivet lanza en Carnaval de Barranquilla 2026 una campaña que dialoga con el espíritu del festival sin perder su carácter de marca.',
          ctx2: 'El desafío era crear una identidad visual que capturara la energía, el color y el ritmo del carnaval mientras respetaba los guidelines estrictos de The Glenlivet. La pregunta era cómo hacer que una marca escocesa hablara el idioma de Barranquilla. La respuesta: encontrar lo que comparten — carácter, distinción, la convicción de que lo ordinario no alcanza.',
          pull: 'Hecho para ser único como el carnaval.',
          ex1: 'Desarrollé la dirección de arte completa de la campaña: key visual y todas las aplicaciones. Elegimos el Camino 01 —el más expresivo—, basado en ilustraciones, color y ritmo visual que interpretan el carnaval sin caer en el exceso.',
          ex2: 'Los elementos visuales clave fueron pájaros estilizados en tonos vibrantes, que funcionan como código visual del festival, combinados con la botella de Glenlivet como protagonista discreta pero presente. Cada aplicación — desde vía pública hasta redes sociales — mantiene coherencia visual mientras adapta el mensaje al contexto local.',
          ex3: 'El mayor desafío fue respetar los guidelines rigurosos de The Glenlivet sin que la marca perdiera personalidad frente a la intensidad visual del carnaval.',
          res1: 'La campaña lanzó durante Carnaval 2026 en múltiples touchpoints: vía pública, redes sociales, material impreso.',
          res2: 'La marca dialogó con la audiencia local sin perder su identidad — que era exactamente el desafío. Una marca escocesa en el carnaval más colombiano del mundo, y se sentía natural.'
        },
        ojodetigre: {
          title: 'Ojo de Tigre Reposado — Dolores Riccardo',
          campaign: 'Mismo Carácter, Más Temple',
          ctx1: 'Pernod lanza Ojo de Tigre Reposado en Colombia. El desafío no era simplemente introducir un nuevo producto: era lanzar una versión envejecida sin demonizar la original.',
          ctx2: 'Ojo de Tigre Joven es el producto estrella. El Reposado no podía competir contra él; tenía que acompañarlo. La pregunta era cómo posicionar otra experiencia del mismo mezcal sin canibalizar lo que ya funciona. Es un equilibrio que muchas marcas rompen.',
          pull: 'No es un mezcal nuevo. Es el mismo de siempre, con más temple.',
          ex1: 'La decisión conceptual fue el claim: "Mismo carácter, más temple". Una frase que protege al Joven mientras abre puerta nueva. No es "mejor" ni "evolución" — es simplemente otra forma de disfrutar el mismo mezcal. Otro momento. Otra persona. Otra paleta sensorial.',
          ex2: 'Dirigí la estrategia visual completa: desde la identidad gráfica hasta cada touchpoint del lanzamiento en Medellín. El timing fue inteligente —la ciudad estaba predispuesta a hablar de maduración (Colombia Moda + Feria de las Flores)— pero conecté el concepto visual con ese relato. Invitaciones, menús, cocktails, cartelería del evento: todo responde a la misma lógica. La paleta, la tipografía, la composición. Cada pieza refuerza que es el mismo mezcal, solo con más tiempo en barrica. Elegancia sin restar.',
          res1: 'El evento se ejecutó en Medellín. El concepto funcionó en la lógica de proteger mientras acompañás: el Reposado entra sin pedir que el Joven salga.'
        },
        genstone: {
          title: 'Genstone — Dolores Riccardo',
          clientValue: 'Generadores Genstone',
          deliverables: 'Branding & Estrategia Digital',
          ctx1: 'El mercado de generadores domésticos premium es altamente competitivo y consolidado. Marcas establecidas dominan el posicionamiento con márgenes elevados.',
          ctx2: 'El desafío estratégico fue diferenciarse mediante una propuesta clara: ofrecer generadores con especificaciones técnicas y rendimiento equivalentes a competidores premium, pero con una estructura de precios significativamente más competitiva. Lograr posicionamiento de confiabilidad sin comprometer accesibilidad.',
          pull: 'Lo que necesitás, sigue en marcha.',
          ex1: 'Desarrollé la estrategia integral de marca: naming, identidad visual, concepto estratégico, sistema de branding, desarrollo web, fichas técnicas, material colateral y gestión de redes sociales.',
          ex2: 'El concepto creativo central comunica continuidad: Genstone no promete un generador, promete que tu vida siga sin cortes. Que tu rutina, tu ritmo, tu comodidad no se detengan. La propuesta es simple pero potente: lo que necesitás, sigue en marcha. Esto diferencia a Genstone de la competencia no por especificaciones técnicas sino por qué resuelve: mantiene activa tu vida, protege tu tiempo. Solidez, eficiencia y continuidad como ejes del mensaje.',
          ex3: 'Los generadores aún no habían llegado a Argentina. Utilicé generación de imágenes con IA para producir visuales precisas del producto final, resolviendo timing de producción de contenido. Cada aplicación —web, material técnico, redes sociales— mantiene coherencia visual y comunica consistentemente: especificaciones premium, precio competitivo, confiabilidad operativa.',
          res1: 'Proyecto ejecutado y lanzado. Marca operativa en mercado.',
          productsEyebrow: 'Nuestros Productos',
          visitLabel: 'Visitá la web'
        },
        ramazzotti: {
          title: 'Ramazzotti Spritz Brasil — Dolores Riccardo',
          campaign: 'Ramazzotti Spritz Brasil',
          ctx1: 'Pernod lanza Ramazzotti Spritz en Brasil contra Aperol y Cynar. El desafío no era simplemente competir: era comunicar un producto sin amargura en un mercado dominado por amargos.',
          ctx2: 'La pregunta era cómo diferenciarse visualmente sin defensiva, sin decir "no somos amargos" sino demostrando que Ramazzotti es simple, accesible, y para cualquier momento.',
          pull: 'La receta es el concepto. Simple, accesible, para cualquier momento.',
          ex1: 'La estrategia fue mostrar la receta. No como lista técnica: como experiencia. Cada post tenía el mismo hilo: hay un modo de hacer esto, hay un momento para probarlo, es fácil, y funciona. Los copys en portugués comunicaban eso directo.',
          ex2: 'Dirigí la dirección visual completa: generé todas las imágenes desde cero con IA, mantuve coherencia en paleta, luz y contexto. Cada visual cuenta una versión diferente del mismo mensaje: Ramazzotti no es complicado, no es amargo, es para ahora. Los headlines cerraban cada propuesta con precisión. No fue sobre generar imágenes bonitas; fue sobre que cada imagen probara algo.',
          res1: 'La campaña sale en Brasil en dos días. Está aprobada por Pernod. El concepto funcionó: comunicar NO amargura sin defensiva, solo mostrando facilidad y disfrute.'
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, k) {
      return (acc && acc[k] != null) ? acc[k] : null;
    }, obj);
  }

  function setContent(el, value) {
    if (value == null) return;
    if (typeof value !== 'string') value = String(value);
    if (value.indexOf('<') !== -1 || value.indexOf('&') !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Text content via [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = getByPath(dict, key);
      if (val != null) setContent(el, val);
    });

    // Attribute translation patterns
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const v = getByPath(dict, el.getAttribute('data-i18n-placeholder'));
      if (v != null) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(function (el) {
      const v = getByPath(dict, el.getAttribute('data-i18n-value'));
      if (v != null) el.setAttribute('value', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const v = getByPath(dict, el.getAttribute('data-i18n-alt'));
      if (v != null) el.setAttribute('alt', v);
    });
    document.querySelectorAll('[data-i18n-typewriter]').forEach(function (el) {
      const v = getByPath(dict, el.getAttribute('data-i18n-typewriter'));
      if (v != null) el.setAttribute('data-typewriter', v);
    });

    // <title>
    const titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) {
      const v = getByPath(dict, titleEl.getAttribute('data-i18n-title'));
      if (v != null) {
        document.title = v;
        titleEl.textContent = v;
      }
    }

    // <html lang>
    document.documentElement.setAttribute('lang', lang);
  }

  function updateHeaderSwitchActive(lang) {
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    try { localStorage.setItem('preferredLanguage', lang); } catch (e) {}
    document.documentElement.setAttribute('lang', lang);
    applyTranslations(lang);
    updateHeaderSwitchActive(lang);
  }

  function bindHeaderSwitch() {
    document.querySelectorAll('.lang-switch-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }
  window.setLanguage = setLanguage;
  window.TRANSLATIONS = TRANSLATIONS;

  // --------------------------------------------------------------------------
  // Loader + picker
  // --------------------------------------------------------------------------
  function lockScroll() { document.body.classList.add('lang-locked'); }
  function unlockScroll() { document.body.classList.remove('lang-locked'); }

  function runLoader(done) {
    const loader = document.getElementById('loader-overlay');
    const counter = loader ? loader.querySelector('.loader-counter') : null;
    if (!loader || !counter) { if (done) done(); return; }

    loader.hidden = false;
    // Force reflow so the transition picks up
    void loader.offsetWidth;
    loader.classList.add('is-visible');

    const DURATION = 2000;
    const START = performance.now();
    let progress = 0;

    function tick(now) {
      const elapsed = now - START;
      progress = Math.min(1, elapsed / DURATION);
      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 2);
      counter.textContent = Math.floor(eased * 100) + '%';
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = '100%';
        setTimeout(function () {
          loader.classList.add('is-hidden');
          setTimeout(function () {
            loader.hidden = true;
            loader.classList.remove('is-visible', 'is-hidden');
            unlockScroll();
            if (done) done();
          }, 500);
        }, 200);
      }
    }
    requestAnimationFrame(tick);
  }

  function showPicker(onPick, preselect) {
    const overlay = document.getElementById('lang-overlay');
    if (!overlay) { onPick && onPick('en'); return; }
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add('is-visible');
    lockScroll();

    let selected = (preselect === 'es' || preselect === 'en') ? preselect : 'en';
    const options = overlay.querySelectorAll('.lang-option');
    options.forEach(function (btn) {
      // Reflect any previously chosen language as the default selection.
      if (btn.getAttribute('data-lang') === selected) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        selected = btn.getAttribute('data-lang');
        options.forEach(function (o) { o.classList.remove('is-active'); });
        btn.classList.add('is-active');
      });
    });

    const goLink = overlay.querySelector('.lang-go');
    if (goLink) {
      goLink.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.add('is-hidden');
        setTimeout(function () {
          overlay.hidden = true;
          overlay.classList.remove('is-visible', 'is-hidden');
          onPick && onPick(selected);
        }, 450);
      });
    }
  }

  // --------------------------------------------------------------------------
  // Bootstrap
  // --------------------------------------------------------------------------
  function isHomePage() {
    const p = (location.pathname || '').replace(/\/+$/, '').toLowerCase();
    return p === '' || p.endsWith('/index.html') || p === '/index.html' || p === '/index';
  }

  function homeLoaderAlreadyShown() {
    try { return sessionStorage.getItem('homeLoaderShown') === '1'; } catch (e) { return false; }
  }
  function markHomeLoaderShown() {
    try { sessionStorage.setItem('homeLoaderShown', '1'); } catch (e) {}
  }

  // The language picker shows once per browser session (a fresh tab/visit),
  // even if a language was already chosen in a previous session. Navigating
  // between pages within the same session skips it.
  function pickerAlreadyShownThisSession() {
    try { return sessionStorage.getItem('langPickerShown') === '1'; } catch (e) { return false; }
  }
  function markPickerShown() {
    try { sessionStorage.setItem('langPickerShown', '1'); } catch (e) {}
  }

  function init() {
    let stored = null;
    try { stored = localStorage.getItem('preferredLanguage'); } catch (e) {}

    bindHeaderSwitch();

    const home = isHomePage();
    const shouldRunLoader = home && !homeLoaderAlreadyShown();

    function finishLoader() {
      document.documentElement.classList.remove('is-preloading');
      if (home) markHomeLoaderShown();
    }

    if (!pickerAlreadyShownThisSession()) {
      // Picker first (once per session); loader only on home first visit.
      lockScroll();
      showPicker(function (lang) {
        markPickerShown();
        setLanguage(lang);
        if (shouldRunLoader) {
          runLoader(finishLoader);
        } else {
          document.documentElement.classList.remove('is-preloading');
          unlockScroll();
        }
      }, stored);
    } else {
      setLanguage(stored || 'en');
      if (shouldRunLoader) {
        lockScroll();
        runLoader(finishLoader);
      } else {
        document.documentElement.classList.remove('is-preloading');
        unlockScroll();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

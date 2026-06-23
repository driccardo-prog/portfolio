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
        seeWholeDeal: '< See the whole deal >'
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
          bplayAnnot: 'Official Sponsor<br>of the Argentine Heart',
          bplayCats: 'ART DIRECTION | KEY VISUAL | OFF & ONLINE MEDIA',
          byoClient: 'Byo. Superfood Lab',
          byoAnnot: 'Your best self<br>every single day.',
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
        aka: '(or Lo, Loló, Lolita.)',
        bio1: 'Senior graphic designer specialized in branding, art direction and creative campaigns. I studied at Universidad de Palermo and have been working in the industry since 2017.',
        bio2: "For over 8 years I've been translating complex identities into coherent visual systems. My career was built on 360 campaigns, key visuals, spots and countless brands. Always learning that graphic design is narrative and coherence, not just something pretty.",
        bio3: 'I started as a freelancer, worked at agencies that shaped my practice intensely, and now I balance my role at Pernod Ricard with independent projects.',
        bio4: 'I want to collaborate with people and brands that demand the best from me. Projects that challenge, where I can propose ideas and be behind every detail.',
        belief: {
          w1: 'Good', w2: 'design', w3: 'is', w4: 'rooted', w5: 'in', w6: 'a', w7: 'balanced', w8: 'blend', w9: 'of',
          w10: 'Strategy', w11: '&', w12: 'Coherence.', w13: 'In', w14: 'that', w15: 'I', w16: 'believe.'
        },
        skills: {
          branding: 'Branding', ai: 'AI Content', social: 'Social Media', ooh: 'OOH',
          packaging: 'Packaging', campaigns: '360 Campaigns', identity: 'Visual Identity & Strategy',
          creativity: 'Creativity', media: 'Online & Offline Media', artdir: 'Art Direction'
        },
        beyond: "Beyond design: I'm passionate about animals, music —singing and playing guitar— and the constant act of creating. Creativity doesn't stop when I leave the computer.",
        cta: {
          l1: 'If you think', l2: 'we could do', l3: 'cool stuff', l4: 'together, you', l5: 'know where', l6: 'to find me'
        },
        ctaCv: 'Curriculum Vitae →'
      },
      contact: {
        title: 'Contact — Dolores Riccardo',
        flipFront1: 'BsAs',
        flipFront2: '& Worldwide.',
        flipBack1: "Let's talk about",
        flipBack2: 'your next project',
        instagram: 'Instagram',
        linkedin: 'Linkedin',
        quote: {
          typewriter: 'Shall we talk\nabout your idea?',
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
          id: 'InDesign', fg: 'Figma', sm: 'Social Media', aiTool: 'Artificial Intelligence'
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
          campaign: 'Official Sponsor of the Argentine Heart',
          ctx1: "The challenge wasn't visibility — Bplay already had reach. During the 2022 World Cup, the real question was emotional: how do you win fans over when your direct competitor owns the official sponsorship?",
          ctx2: "The answer wasn't about the team. It was about something more Argentine than football itself: the rituals, the cábalas, the superstitions that turn watching a game into a collective religion.",
          ctx3: "Bplay wasn't chasing a sponsorship title. It was chasing something harder to buy.",
          pull: "Bplay wasn't chasing a sponsorship title. It was chasing something harder to buy.",
          ex1: 'I built the full visual identity for the campaign — from the key visual "Sponsor Oficial del Corazón Argento" to the complete graphic system across digital, OOH, social media and paid media. The direction was clear: celeste and white as an unambiguous visual shorthand for Argentine identity, and type that felt local without leaning on the obvious.',
          ex2: "Every piece extended the same idea: fans don't just watch the World Cup — they live it.",
          ex3: "Bplay wasn't a sponsor. It was a co-conspirator.",
          res1: '"Corazón Argento" took three silver medals — Film, Sports & Gaming, and Audiovisual Production.'
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
        glenlivet: {
          title: 'The Glenlivet x Carnaval de Barranquilla — Dolores Riccardo',
          campaign: 'Carnaval de Barranquilla',
          ctx1: 'The Glenlivet launched at Carnaval de Barranquilla 2026 with a campaign that speaks the language of the festival without losing its identity as a brand.',
          ctx2: "The challenge: capture the energy, color, and rhythm of one of the world's most intense cultural celebrations — while staying inside tight brand guidelines. The question was how to make a Scottish whisky brand feel at home in Barranquilla. The answer was finding what they share — character, distinction, and the belief that ordinary isn't enough.",
          pull: 'Made to be as one-of-a-kind as the carnival itself.',
          ex1: 'I developed the full art direction for the campaign: key visual and all applications. We chose Direction 01 — the most expressive route — built on illustration, color, and visual rhythm that interprets the carnival without tipping into excess.',
          ex2: 'The core visual elements were stylized birds in vibrant tones, used as a visual code for the festival, paired with the Glenlivet bottle as a quiet but present protagonist. Every application — outdoor, social, print — held visual consistency while adapting to the local context.',
          ex3: "The real challenge was keeping The Glenlivet's strict brand identity intact while giving the campaign enough personality to hold its own against the visual intensity of carnaval.",
          res1: 'The campaign launched during Carnaval 2026 across outdoor, social media, and print.',
          res2: "The brand connected with a local audience without compromising its identity — which was the brief. A Scottish whisky at the most Colombian carnival in the world, and it felt like it belonged."
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
        seeWholeDeal: '< Mirá el proyecto completo >'
      },
      home: {
        title: 'Dolores Riccardo — Directora de Arte & Creativa',
        hero: {
          intro: 'Con más de ocho años de experiencia, trabajo de forma freelance y en colaboración con agencias creativas, transformando ideas en identidades visuales que comunican y dejan huella.',
          title: 'Soy Dolores, aunque<br>todo&nbsp;el&nbsp;mundo&nbsp;me&nbsp;dice&nbsp;Loli&nbsp;:)<br>Tengo 27 años y vivo en Buenos&nbsp;Aires.<br>Soy Diseñadora Gráfica y&nbsp;Lic.<br>en&nbsp;Diseño&nbsp;de&nbsp;Imagen&nbsp;Empresarial.',
          colLabel: 'Art Direction<br>&amp; Creativity',
          colText: 'Diseñadora gráfica senior y creativa, con más de 8 años de experiencia.'
        },
        works: {
          selected: 'Trabajos Destacados',
          year: 'Año',
          bplayClient: 'Guillermo Francella x Bplay',
          bplayAnnot: 'Sponsor Oficial<br>del Corazón Argento',
          bplayCats: 'DIRECCIÓN DE ARTE | VISUAL CLAVE | MEDIOS OFF & ONLINE',
          byoClient: 'Byo. Superfood Lab',
          byoAnnot: 'Tu mejor versión<br>todos los días.',
          byoCats: 'BRANDING | CONCEPTOS | MEDIOS OFF & ONLINE | GENERACIÓN IA',
          dhlClient: 'Juan Martín del Potro x DHL',
          dhlAnnot: 'Juan Martín<br>del Potro',
          dhlCats: 'DIRECCIÓN DE ARTE | CAMPAÑA | DISEÑO ESPACIAL'
        },
        allWork: '+ Proyectos'
      },
      about: {
        title: 'Sobre mí — Dolores Riccardo',
        hello: 'Hola, qué tal,',
        name: 'Soy Loli,',
        aka: '(o Lo, Loló, Lolita.)',
        bio1: 'Diseñadora gráfica senior especializada en branding, dirección de arte y campañas creativas. Estudié en la Universidad de Palermo y trabajo en la industria desde 2017.',
        bio2: 'Hace más de 8 años que traduzco identidades complejas en sistemas visuales coherentes. Mi carrera se construyó con campañas 360, key visuals, spots y un montón de marcas. Siempre aprendiendo que el diseño gráfico es narrativa y coherencia, no solo algo lindo.',
        bio3: 'Empecé como freelance, trabajé en agencias que moldearon mi práctica de manera intensa, y ahora balanceo mi rol en Pernod Ricard con proyectos independientes.',
        bio4: 'Quiero colaborar con personas y marcas que me exijan lo mejor. Proyectos que desafíen, donde pueda proponer ideas y estar atrás de cada detalle.',
        belief: {
          w1: 'Un', w2: 'buen', w3: 'diseño', w4: 'está', w5: 'enraizado', w6: 'en', w7: 'un', w8: 'balance', w9: 'entre',
          w10: 'Estrategia', w11: '&', w12: 'Coherencia.', w13: 'En', w14: 'eso', w15: '', w16: 'creo.'
        },
        skills: {
          branding: 'Branding', ai: 'Contenido IA', social: 'Social Media', ooh: 'OOH',
          packaging: 'Packaging', campaigns: 'Campañas 360', identity: 'Identidad Visual & Estrategia',
          creativity: 'Creatividad', media: 'Medios Online & Offline', artdir: 'Dirección de Arte'
        },
        beyond: 'Más allá del diseño: me apasionan los animales, la música —cantar y tocar guitarra— y el acto constante de crear. La creatividad no para cuando cierro la compu.',
        cta: {
          l1: 'Si pensás', l2: 'que podemos', l3: 'hacer cosas', l4: 'copadas juntxs,', l5: 'sabés', l6: 'dónde encontrarme'
        },
        ctaCv: 'Curriculum Vitae →'
      },
      contact: {
        title: 'Contacto — Dolores Riccardo',
        flipFront1: 'BsAs',
        flipFront2: '& Mundo.',
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
          id: 'InDesign', fg: 'Figma', sm: 'Redes Sociales', aiTool: 'Inteligencia Artificial'
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
          ex1: 'Creé la identidad visual completa de la campaña: diseñé el key visual "Sponsor Oficial del Corazón Argento", desarrollé toda la estrategia gráfica para digital, OOH, redes sociales y pauta. La decisión fue clara: celeste y blanco como código visual directo a la identidad nacional, y una tipografía que evocara la argentinidad sin caer en lo obvio.',
          ex2: 'Cada pieza gráfica se convirtió en una extensión del concepto: los hinchas no solo miran el Mundial, participan en él.',
          ex3: 'Bplay no era patrocinador; era cómplice.',
          res1: '"Corazón Argento" obtuvo tres medallas de plata en las categorías Film, Deportes & Gaming y Producción Audiovisual.'
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

  function showPicker(onPick) {
    const overlay = document.getElementById('lang-overlay');
    if (!overlay) { onPick && onPick('en'); return; }
    overlay.hidden = false;
    void overlay.offsetWidth;
    overlay.classList.add('is-visible');
    lockScroll();

    let selected = 'en';
    const options = overlay.querySelectorAll('.lang-option');
    options.forEach(function (btn) {
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

    if (!stored) {
      // Picker first; loader only on home first visit
      lockScroll();
      showPicker(function (lang) {
        setLanguage(lang);
        if (shouldRunLoader) {
          runLoader(finishLoader);
        } else {
          document.documentElement.classList.remove('is-preloading');
          unlockScroll();
        }
      });
    } else {
      setLanguage(stored);
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

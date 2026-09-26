export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  category: 'Residential' | 'Architecture' | 'Construction' | 'Interiors' | 'Landscape' | 'Renovation';
  year: string;
  area: string;
  status: 'Completed' | 'In Progress';
  featured: boolean;
  coverImage: string;
  heroImage: string;
  accentColor: string;
  scope: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  overview: string;
  designStory: {
    heading: string;
    paragraphs: string[];
    quote?: string;
  };
  spatialLayers: {
    background: string;
    foregroundDetail: string;
    architecturalTrait: string;
    materialNote: string;
  };
  imageSequence: {
    url: string;
    caption: string;
    aspect: 'portrait' | 'landscape' | 'square';
    tag: string;
  }[];
  constructionImages: {
    url: string;
    title: string;
    description: string;
    phase: string;
  }[];
  finalImages: {
    url: string;
    title: string;
    description: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'brick-house',
    slug: 'the-brick-house',
    title: 'THE BRICK RESIDENCE',
    subtitle: 'Column-Free Load Bearing Terracotta Villa',
    tagline: 'Thermal Mass, Pure Craftsmanship & Zero Concrete Columns',
    location: 'Pattukkottai, Tamil Nadu',
    category: 'Architecture',
    year: '2024',
    area: '2,850 sq.ft',
    status: 'Completed',
    featured: true,
    coverImage: '/images/809386357_18099514082139857_4228897007025567517_n.jpg',
    heroImage: '/images/809386357_18099514082139857_4228897007025567517_n.jpg',
    accentColor: '#c25332',
    scope: ['Architectural Design', 'Structural Engineering', 'Passive Solar Cooling', 'Turnkey Construction'],
    metrics: [
      { label: 'Structural Type', value: '100% Load-Bearing Wire-Cut Brick' },
      { label: 'Thermal Delta', value: '-4.5°C Natural Microclimate' },
      { label: 'Columns Used', value: '0 Structural Concrete Columns' },
      { label: 'Floor Level', value: 'G+1 Two-Storey Habitation' },
    ],
    overview: 'Can exposed red bricks support a complete two-storey G+1 residence without reinforced concrete columns? Conceived by Ar. Sanjana and engineered by Er. Vikash Quaid, this residential milestone in Pattukkottai proves that sustainable masonry is both technically superior and aesthetically profound.',
    designStory: {
      heading: 'The Architecture of Authentic Gravity',
      paragraphs: [
        'In a construction landscape dominated by generic RCC frames encased in synthetic plaster, The Brick Residence stands as a manifesto of material honesty. Every wire-cut terracotta brick is placed to bear load, regulate thermal influx, and define the sculptural language of the home.',
        'Using modified rat-trap bonds and corbelled projection patterns, the facade creates dynamic shadow rhythms that mutate across the day while creating a natural cavity insulation layer that keeps interior ambient temperatures up to 5°C cooler than the coastal Tamil Nadu climate.',
        'Interiors blend exposed masonry with polished yellow oxide (IPS) flooring, creating a sensory dialogue between tactile warmth, natural cross-ventilation, and artisanal permanence.'
      ],
      quote: 'Architecture is not about draping skin onto concrete cages; it is about honoring gravity and material integrity in every single joint.'
    },
    spatialLayers: {
      background: 'Lush tropical coconut palm canopy under coastal blue sky',
      foregroundDetail: 'Hand-laid corbelled brick relief & steel framed shaded carport',
      architecturalTrait: 'Rat-trap insulating cavity bond with stepped parapet rooflines',
      materialNote: 'Locally fired wire-cut terracotta bricks, natural oxidised stone, mild steel'
    },
    imageSequence: [
      {
        url: '/images/809386357_18099514082139857_4228897007025567517_n.jpg',
        caption: 'South-West Elevation: Sloping roofline and parametric brick corbeling',
        aspect: 'portrait',
        tag: 'Primary Facade'
      },
      {
        url: '/images/793720693_1592988565800406_3286513128788046976_n.jpg',
        caption: 'Master Suite: Dual-tone exposed brick with traditional yellow oxide floor',
        aspect: 'portrait',
        tag: 'Spatial Interior'
      },
      {
        url: '/images/753247423_1037954315317285_1778395845906434194_n.jpg',
        caption: 'Main Portal: 3D faceted diamond teakwood door handcrafted on site',
        aspect: 'portrait',
        tag: 'Artisan Joinery'
      },
      {
        url: '/images/774282118_18328014520272222_3521361176383016745_n.jpg',
        caption: 'Studio & Threshold: Exposed brick frame with bespoke wood carved plaque',
        aspect: 'portrait',
        tag: 'Entrance Detail'
      }
    ],
    constructionImages: [
      {
        url: '/images/785265742_1742454233470282_5752468738804299290_n.jpg',
        title: 'Foundation Excavation & Rebar Mesh',
        description: 'Trench excavation and reinforced raft bed designed specifically for load-bearing masonry loads.',
        phase: 'Phase 01 — Substructure'
      },
      {
        url: '/images/790847735_1778504769847443_6192951094150445920_n.jpg',
        title: 'First Floor Masonry & Water Curing',
        description: 'Direct site execution of first-floor brick corbeling under strict water ponding and jute sack curing.',
        phase: 'Phase 02 — Superstructure'
      }
    ],
    finalImages: [
      {
        url: '/images/808265712_18101525573139857_8850092846756586345_n.jpg',
        title: 'The Built Monolith',
        description: 'Completed residence standing proudly amidst tropical foliage without external plaster or synthetic paints.'
      },
      {
        url: '/images/752022543_1646119359819050_8217503506229837993_n.jpg',
        title: 'Bespoke Faceted Timber Portal',
        description: 'Faceted geometric woodwork catching natural dawn light at the entrance foyer.'
      }
    ]
  },
  {
    id: 'villa-ecotiva',
    slug: 'villa-ecotiva',
    title: 'VILLA ECOTIVA',
    subtitle: 'Sustainable Tropical Modernist Pavilion',
    tagline: 'Deep Colonnades, Perforated Jali & Passive Coastal Breezeway',
    location: 'Pondicherry',
    category: 'Residential',
    year: '2023',
    area: '3,400 sq.ft',
    status: 'Completed',
    featured: true,
    coverImage: '/images/760013808_989590457462565_4619479585526285520_n.jpg',
    heroImage: '/images/760013808_989590457462565_4619479585526285520_n.jpg',
    accentColor: '#d97736',
    scope: ['Architecture', 'Landscape Integration', 'Climatic Ventilation Study', 'Interior Millwork'],
    metrics: [
      { label: 'Location', value: 'Pondicherry Coastal Belt' },
      { label: 'Ventilation', value: '100% Cross-Air Breezeway' },
      { label: 'Shading', value: 'Perforated Terracotta Jali' },
      { label: 'Core Structure', value: 'Exposed Concrete & Brick' }
    ],
    overview: 'Commissioned as a sustainable coastal residence in Pondicherry, Villa Ecotiva is structured as a two-wing pavilion linked by an open breezeway. The facade integrates deep overhangs and ornate terracotta screens that filter the intense tropical glare into dancing light patterns.',
    designStory: {
      heading: 'Bridging Coastal Breezes & Earth Architecture',
      paragraphs: [
        'Pondicherry’s maritime humidity requires architectural gestures that breathe. Villa Ecotiva avoids continuous glazed thermal boxes in favor of porous facades, recessed glazing, and shaded veranda corridors.',
        'The central circulation axis draws air upwards through an open-to-sky courtyard, naturally purging hot air while connecting the living spaces to seasonal greenery.',
        'Materials were sourced within a 60-kilometer radius: terracotta clay blocks, rough-chiseled granite, and sustainably harvested plantation teak.'
      ],
      quote: 'True luxury in the tropics is not artificial air conditioning; it is the gentle whisper of a sea breeze moving freely through shaded stone corridors.'
    },
    spatialLayers: {
      background: 'Coastal sky and palm canopy over Pondicherry red earth',
      foregroundDetail: 'Cantilevered entrance portal and central breezeway gate',
      architecturalTrait: 'Upper-level perforated terracotta jali screen & concrete frame',
      materialNote: 'Terracotta brick, exposed board-marked concrete, natural timber gates'
    },
    imageSequence: [
      {
        url: '/images/760013808_989590457462565_4619479585526285520_n.jpg',
        caption: 'Glazed Double-Height Stairwell looking into internal atrium courtyard',
        aspect: 'portrait',
        tag: 'Light & Spatial Flow'
      },
      {
        url: '/images/762864628_2345722736024840_9131535424838167262_n.jpg',
        caption: 'Central Floating Spine Staircase: Laser-cut steel and black granite treads',
        aspect: 'portrait',
        tag: 'Structural Interior'
      },
      {
        url: '/images/753247423_1037954315317285_1778395845906434194_n.jpg',
        caption: 'Artisan Teak Portal: 3D faceted door craftsmanship',
        aspect: 'portrait',
        tag: 'Bespoke Joinery'
      }
    ],
    constructionImages: [
      {
        url: '/images/785265742_1742454233470282_5752468738804299290_n.jpg',
        title: 'Deep Pile Reinforcement & Grid Layout',
        description: 'Tying rebar cages to strict tolerance for coastal salinity resilience.',
        phase: 'Phase 01 — Structural Foundation'
      }
    ],
    finalImages: [
      {
        url: '/images/760013808_989590457462565_4619479585526285520_n.jpg',
        title: 'Villa Ecotiva Breezeway Lightwell',
        description: 'Double-height volume flooding interior corridors with soft indirect natural light.'
      }
    ]
  },
  {
    id: 'replica-atelier',
    slug: 'replica-atelier-headquarters',
    title: 'REPLICA ATELIER & STUDIO',
    subtitle: 'Architectural Headquarter & Design Experience Centre',
    tagline: 'The Physical Showcase of Replica’s Craft & Philosophy',
    location: 'Manikund Junction, Pattukkottai',
    category: 'Architecture',
    year: '2024',
    area: '2,200 sq.ft',
    status: 'Completed',
    featured: true,
    coverImage: '/images/774282118_18328014520272222_3521361176383016745_n.jpg',
    heroImage: '/images/774282118_18328014520272222_3521361176383016745_n.jpg',
    accentColor: '#c89658',
    scope: ['Commercial Architecture', 'Interior Architecture', 'Material Experience Lab', 'Custom Joinery'],
    metrics: [
      { label: 'Function', value: 'Design Studio & Experience Lab' },
      { label: 'Location', value: 'Manikund Junction, Pattukkottai' },
      { label: 'Materiality', value: 'Exposed Clay, Steel & Timber' },
      { label: 'Client Flow', value: 'Interactive Material Tactility' }
    ],
    overview: 'The creative sanctum of Replica Architects & Builders. Built with exposed terracotta brick coursing, industrial steel-framed mullioned glass doors, and natural timber fittings, the studio functions as an active laboratory where clients touch real bricks, inspect joint details, and visualize their future spaces.',
    designStory: {
      heading: 'A Studio Built Upon What We Preach',
      paragraphs: [
        'When creating our studio at Manikund Junction in Pattukkottai, we refused to rent a generic commercial office and wallpaper over it. We built a tactile architectural statement.',
        'Visitors are greeted by load-bearing clay brick masonry with horizontal textured grooves, a classic black steel framed French door, and a brass bell signaling the transition from bustling street to thoughtful contemplation.',
        'Within, the studio hosts full-scale mockups of brick bonds, steel structural joinery, and custom lighting installations that demystify architectural decisions for clients.'
      ],
      quote: 'We want every homeowner to understand the difference between decoration and true architectural structure before pouring a single bucket of cement.'
    },
    spatialLayers: {
      background: 'Studio interior showcasing design awards, books and drawings',
      foregroundDetail: 'Cast bronze bell and dark steel framed entrance door',
      architecturalTrait: 'Exposed groove-textured terracotta masonry and timber flooring',
      materialNote: 'High-density terracotta blocks, matte black steel, solid rosewood plaque'
    },
    imageSequence: [
      {
        url: '/images/774282118_18328014520272222_3521361176383016745_n.jpg',
        caption: 'Entrance to Replica Studio: Textured terracotta brick with bespoke brand plate',
        aspect: 'portrait',
        tag: 'Studio Entrance'
      },
      {
        url: '/images/793862673_18074681474711397_8289400113992483833_n.jpg',
        caption: 'Architectural Dialogue: Ar. Sanjana presenting the studio design philosophy',
        aspect: 'portrait',
        tag: 'Leadership'
      },
      {
        url: '/images/37283725_2136629263285630_7915865949071212544_n.jpg',
        caption: 'Replica Architects & Builders Identity: Isometric brick cantilever mark',
        aspect: 'square',
        tag: 'Identity'
      }
    ],
    constructionImages: [
      {
        url: '/images/790847735_1778504769847443_6192951094150445920_n.jpg',
        title: 'Precision Brick Laying Demonstration',
        description: 'Craftsmen testing mortar consistency and corbel tolerances in the studio annex.',
        phase: 'Phase 01 — Masonry Lab'
      }
    ],
    finalImages: [
      {
        url: '/images/774282118_18328014520272222_3521361176383016745_n.jpg',
        title: 'Studio Portal',
        description: 'Warm lighting welcoming clients at Manikund Junction, Pattukkottai.'
      }
    ]
  },
  {
    id: 'grand-sanctuary',
    slug: 'the-grand-sanctuary',
    title: 'THE GRAND SANCTUARY',
    subtitle: 'Luxury Modern Residence & Bespoke Interiors',
    tagline: 'Volumetric Drama, Fluted Accents & Artisanal Millwork',
    location: 'Pattukkottai, Tamil Nadu',
    category: 'Interiors',
    year: '2024',
    area: '4,200 sq.ft',
    status: 'Completed',
    featured: true,
    coverImage: '/images/788260000_1635585901264693_6976987192195054177_n.jpg',
    heroImage: '/images/788260000_1635585901264693_6976987192195054177_n.jpg',
    accentColor: '#dfa86a',
    scope: ['Full Interior Architecture', 'Double-Height Lighting', 'Custom Pooja Mandir', 'Modular Kitchen & Millwork'],
    metrics: [
      { label: 'Ceiling Height', value: '22-Foot Double-Height Atrium' },
      { label: 'Chandelier', value: 'Multi-Tier Kinetic Crystal Rods' },
      { label: 'Joinery', value: '100% On-Site Custom Millwork' },
      { label: 'Finishes', value: 'Fluted Teak, Brass & Satin Marble' }
    ],
    overview: 'A complete interior architectural overhaul of a palatial residence in Pattukkottai. Anchored by a 22-foot double-height foyer with a custom crystal rod chandelier and laser-patterned feature acoustic wall, this project demonstrates Replica’s mastery of bespoke residential luxury.',
    designStory: {
      heading: 'Sculpting Light & Domestic Reverence',
      paragraphs: [
        'Modern luxury in Indian residential architecture requires balancing grand communal entertaining spaces with sacred, intimate family corners.',
        'At the core of the residence, a dedicated Pooja Mandir was custom-crafted from polished warm teakwood with a backlit laser-cut sacred mandala, CNC floral jaali shutters, and concealed cove LEDs that create a transcendent spiritual atmosphere.',
        'The kitchen pairs high-gloss midnight navy with warm champagne cabinetry and matte black granite countertops, creating a seamless culinary cockpit designed for rigorous everyday use.'
      ],
      quote: 'Every millimeter of interior millwork should feel purposeful, solid, and quietly luxurious to the touch.'
    },
    spatialLayers: {
      background: '22ft high soaring white ceiling with recessed linear light profiles',
      foregroundDetail: 'Cascading multi-tier crystal cylindrical rods catching warm light',
      architecturalTrait: 'Precision geometric laser-etched acoustic wall paneling',
      materialNote: 'Polished teakwood, Italian marble inlays, brass trims, crystal glass'
    },
    imageSequence: [
      {
        url: '/images/788260000_1635585901264693_6976987192195054177_n.jpg',
        caption: 'Double-Height Living Foyer: Cascading crystal rod chandelier & geometric relief',
        aspect: 'portrait',
        tag: 'Grand Atrium'
      },
      {
        url: '/images/757212185_18325524979272222_7133081820529703434_n.jpg',
        caption: 'Sacred Sanctum: Handcrafted teakwood Pooja Mandir with backlit mandala',
        aspect: 'portrait',
        tag: 'Artisan Shrine'
      },
      {
        url: '/images/767363539_18327277147272222_1249504991442273640_n.jpg',
        caption: 'Vanity Suite: Fluted oak wall paneling with backlit capsule pill mirror',
        aspect: 'portrait',
        tag: 'Detail Joinery'
      },
      {
        url: '/images/757880804_18325950925272222_8063008206562742345_n.jpg',
        caption: 'Culinary Suite: Midnight navy and champagne lacquer modular kitchen',
        aspect: 'portrait',
        tag: 'Modular Kitchen'
      },
      {
        url: '/images/765573427_18327131875272222_3147152774715059015_n.jpg',
        caption: 'Bedroom Joinery: Integrated floor-to-ceiling wardrobes with bay window seat',
        aspect: 'portrait',
        tag: 'Master Bedroom'
      },
      {
        url: '/images/755807185_1072199362003395_3911633959283461362_n.jpg',
        caption: 'Media Console: Fluted teak, marble slab backer and brass inlay accents',
        aspect: 'portrait',
        tag: 'Living Suite'
      }
    ],
    constructionImages: [
      {
        url: '/images/785265742_1742454233470282_5752468738804299290_n.jpg',
        title: 'Deep Column Footings & Structural Anchors',
        description: 'Engineered footings carrying the double-height cantilever slab loads.',
        phase: 'Phase 01 — Structural Foundation'
      }
    ],
    finalImages: [
      {
        url: '/images/788260000_1635585901264693_6976987192195054177_n.jpg',
        title: 'Grand Living Atrium',
        description: 'Soaring 22-foot double height living volume illuminated by crystal light installation.'
      }
    ]
  },
  {
    id: 'modern-cantilever-villa',
    slug: 'modern-cantilever-villa',
    title: 'THE CANTILEVER VILLA',
    subtitle: 'Contemporary Tropical Residence',
    tagline: 'Clean Horizontal Planes, Floating Stairs & Natural Stone Cladding',
    location: 'Pattukkottai, Tamil Nadu',
    category: 'Construction',
    year: '2023',
    area: '3,100 sq.ft',
    status: 'Completed',
    featured: false,
    coverImage: '/images/762864628_2345722736024840_9131535424838167262_n.jpg',
    heroImage: '/images/762864628_2345722736024840_9131535424838167262_n.jpg',
    accentColor: '#434955',
    scope: ['Civil Construction', 'Structural Engineering', 'Exterior Finishes', 'Boundary & Gate Architecture'],
    metrics: [
      { label: 'Typology', value: '2-Storey Modern Villa' },
      { label: 'Facade', value: 'Natural Stone Cladding & Louvers' },
      { label: 'Staircase', value: 'Cantilever Steel Center-Spine' },
      { label: 'Completion', value: 'Turnkey Delivery 2023' }
    ],
    overview: 'A striking contemporary home characterized by bold geometric volumes, stone cladding, and an upper cantilevered louvered balcony. Delivered as a complete turnkey project by Replica Architects & Builders in Pattukkottai.',
    designStory: {
      heading: 'Precision Concrete & Stone Craftsmanship',
      paragraphs: [
        'The Cantilever Villa was engineered to maximize interior natural light while maintaining privacy from the street front. A vertical stone-clad volume grounds the left facade while a light, cantilevered pergola crowns the upper balcony.',
        'Inside, the staircase is constructed as a floating steel spine, stripping away visual bulk to let daylight penetrate deep into the lower living room.'
      ]
    },
    spatialLayers: {
      background: 'Clear sky and coastal palm silhouettes',
      foregroundDetail: 'Compound wall with natural stone texture and modern black gate',
      architecturalTrait: 'Horizontal cantilever canopy and louvered balcony privacy screen',
      materialNote: 'Charcoal granite cladding, stark white render, mild steel pergola'
    },
    imageSequence: [
      {
        url: '/images/762864628_2345722736024840_9131535424838167262_n.jpg',
        caption: 'Floating Steel Spine Staircase: Flamed granite steps and minimalist balustrades',
        aspect: 'portrait',
        tag: 'Structural Stairs'
      },
      {
        url: '/images/760013808_989590457462565_4619479585526285520_n.jpg',
        caption: 'Double-Height Lightwell: Illuminating the structural core of the villa',
        aspect: 'portrait',
        tag: 'Spatial Volume'
      }
    ],
    constructionImages: [
      {
        url: '/images/785265742_1742454233470282_5752468738804299290_n.jpg',
        title: 'Reinforced Column Foundation',
        description: 'Excavation and casting of isolated footings for the cantilevered overhangs.',
        phase: 'Phase 01 — Substructure'
      }
    ],
    finalImages: [
      {
        url: '/images/762864628_2345722736024840_9131535424838167262_n.jpg',
        title: 'Cantilever Structural Detail',
        description: 'Bespoke floating steel spine stair anchoring the modern interior.'
      }
    ]
  },
  {
    id: 'country-farmhouse',
    slug: 'the-country-farmhouse',
    title: 'THE COUNTRY FARMHOUSE',
    subtitle: 'Vernacular Sloped Roof Estate',
    tagline: 'Deep Shaded Verandas, Clay Roof Tiles & Agrarian Harmony',
    location: 'Thanjavur District / Pattukkottai',
    category: 'Landscape',
    year: '2023',
    area: '3,800 sq.ft',
    status: 'Completed',
    featured: false,
    coverImage: '/images/806473580_18098747981139857_8608575887677638433_n.jpg',
    heroImage: '/images/806473580_18098747981139857_8608575887677638433_n.jpg',
    accentColor: '#a34026',
    scope: ['Landscape Architecture', 'Vernacular Design', 'Sloped Roof Engineering', 'Colonnaded Verandas'],
    metrics: [
      { label: 'Setting', value: 'Surrounded by Agricultural Groves' },
      { label: 'Veranda', value: '360° Wraparound Deep Shading' },
      { label: 'Roofing', value: 'Mangalore Clay Sloped Roof' },
      { label: 'Rainwater', value: '100% Roof Surface Harvesting' }
    ],
    overview: 'Nestled amidst rural greenery, this country farmhouse draws inspiration from traditional Tamil Nadu thinnai architecture. Deep covered verandas shield exterior walls from monsoon rain and afternoon heat, inviting the agricultural breeze inside.',
    designStory: {
      heading: 'Reinterpreting the Vernacular Colonnade',
      paragraphs: [
        'Designing in the fertile Cauvery delta region calls for buildings that embrace the earth rather than conquer it. The farmhouse features a low, grounded profile with broad stepped plinths and dark steel veranda columns.',
        'The clay tile pitched roof channels rainwater down decorative chain spouts into recharge percolation pits, turning monsoon downpours into an auditory celebration.'
      ]
    },
    spatialLayers: {
      background: 'Open agricultural fields and coconut grove backdrop',
      foregroundDetail: 'Granite steps leading up to raised plinth veranda',
      architecturalTrait: 'Low-pitched Mangalore clay tile roofs and steel column colonnade',
      materialNote: 'Terracotta masonry, weathered clay roof tiles, basalt stone steps'
    },
    imageSequence: [
      {
        url: '/images/806473580_18098747981139857_8608575887677638433_n.jpg',
        caption: 'Landscape Forecourt: Handcrafted floral arch and brick masonry backdrop',
        aspect: 'portrait',
        tag: 'Landscape Forecourt'
      },
      {
        url: '/images/753247423_1037954315317285_1778395845906434194_n.jpg',
        caption: 'Artisanal Teakwood Entry: Diamond faceted entrance door',
        aspect: 'portrait',
        tag: 'Artisan Joinery'
      }
    ],
    constructionImages: [
      {
        url: '/images/785265742_1742454233470282_5752468738804299290_n.jpg',
        title: 'Stone Plinth Foundation',
        description: 'Building up the raised plinth to protect against seasonal water run-off.',
        phase: 'Phase 01 — Foundation'
      }
    ],
    finalImages: [
      {
        url: '/images/806473580_18098747981139857_8608575887677638433_n.jpg',
        title: 'Vernacular Haven',
        description: 'A contemporary farmhouse rooted in regional soil.'
      }
    ]
  },
  {
    id: 'go-chaat-bistro',
    slug: 'go-chaat-artisan-bistro',
    title: 'GO CHAAT ARTISAN BISTRO',
    subtitle: 'Bespoke Hospitality & Commercial Interior',
    tagline: 'Warm Terracotta Hues, Upcycled Bicycle Wheels & Cultural Murals',
    location: 'Pattukkottai, Tamil Nadu',
    category: 'Renovation',
    year: '2023',
    area: '1,450 sq.ft',
    status: 'Completed',
    featured: false,
    coverImage: '/images/757880804_18325950925272222_8063008206562742345_n.jpg',
    heroImage: '/images/757880804_18325950925272222_8063008206562742345_n.jpg',
    accentColor: '#c89658',
    scope: ['Commercial Interiors', 'Lighting Installation', 'Wall Art & Murals', 'Turnkey Fitout'],
    metrics: [
      { label: 'Typology', value: 'Artisan Food Bistro' },
      { label: 'Lighting', value: 'Suspended Bicycle Rim Fixture' },
      { label: 'Palette', value: 'Deep Sienna & Warm Amber' },
      { label: 'Seating', value: 'Custom Banquette Joinery' }
    ],
    overview: 'A distinctive culinary interior in Pattukkottai featuring upcycled bicycle rim chandeliers, custom wall art, and cozy low-slung banquette seating designed to turn dining into an atmospheric urban escape.',
    designStory: {
      heading: 'Crafting Urban Hospitality',
      paragraphs: [
        'Commercial interiors need a memorable tactile signature. For Go Chaat, we repurposed circular bicycle wheels into glowing ceiling rings that cast intricate spokes of light onto warm terracotta walls.',
        'Custom line-art illustrations animate the side walls, celebrating culinary joy while acoustic wall paneling ensures comfortable conversational warmth.'
      ]
    },
    spatialLayers: {
      background: 'Hand-painted culinary mural on deep terracotta wall',
      foregroundDetail: 'Linear low banquette bench seating in dark timber',
      architecturalTrait: 'Overhead cluster of suspended brass and steel bicycle wheel lamps',
      materialNote: 'Reclaimed steel rims, filament Edison bulbs, textured plaster'
    },
    imageSequence: [
      {
        url: '/images/757880804_18325950925272222_8063008206562742345_n.jpg',
        caption: 'Bespoke Joinery Suite: Precision fabricated millwork and modular cockpits',
        aspect: 'portrait',
        tag: 'Modular Millwork'
      },
      {
        url: '/images/767363539_18327277147272222_1249504991442273640_n.jpg',
        caption: 'Artisan Wood Paneling: Fluted oak texture with custom ambient backlighting',
        aspect: 'portrait',
        tag: 'Bespoke Texture'
      }
    ],
    constructionImages: [],
    finalImages: [
      {
        url: '/images/757880804_18325950925272222_8063008206562742345_n.jpg',
        title: 'Atmospheric Dining',
        description: 'Intimate ambiance created through bespoke lighting craftsmanship.'
      }
    ]
  }
];

export const STUDIO_INFO = {
  name: 'REPLICA ARCHITECTS & BUILDERS',
  shortName: 'REPLICA',
  tagline: 'SPACES THAT DEFINE THE WAY WE LIVE.',
  description: 'Architecture, construction and interiors shaped around people, place and purpose.',
  location: 'Pattukkottai, Tamil Nadu, India',
  address: 'Manikund Junction, Pattukkottai, Tamil Nadu 614601, India',
  phone: '+91 99943 99933',
  phoneDisplay: '+91 99943 99933',
  whatsapp: '919994399933',
  email: 'planbyreplica@gmail.com',
  established: '2014',
  founders: [
    {
      name: 'Er. Vikash Quaid',
      title: 'Founder & Managing Director',
      credentials: 'B.E. Civil Engineering • Structural Construction Specialist',
      bio: 'With over a decade of hands-on construction leadership in Tamil Nadu, Er. Vikash Quaid champions uncompromising structural integrity, rigorous on-site quality control, and zero-compromise turnkey project delivery. His vision anchors Replica as a studio where architectural poetry meets precision civil engineering.',
      image: '/images/808450719_18630347656034393_7430457252501023653_n.jpg',
      role: 'Construction & Engineering Leadership'
    },
    {
      name: 'Ar. Sanjana',
      title: 'Principal Architect',
      credentials: 'B.Arch • Registered Architect (Council of Architecture)',
      bio: 'Leading the spatial and conceptual atelier, Ar. Sanjana pioneers climate-responsive, load-bearing exposed brick architecture that celebrates raw materials, natural cross-ventilation, and human comfort. Her work reframes modern living around authentic regional materiality rather than superficial decorative trends.',
      image: '/images/793862673_18074681474711397_8289400113992483833_n.jpg',
      role: 'Architectural Design & Material Research'
    }
  ],
  services: [
    {
      id: 'architecture',
      number: '01',
      title: 'Architecture',
      subtitle: 'Spatial Philosophy & Climatic Design',
      description: 'Climate-responsive residential and commercial planning, passive solar design, natural ventilation studies, load-bearing brick innovation, and contextual spatial masterplanning.',
      deliverables: ['Schematic 2D Floor Plans', '3D Volumetric Massing', 'Climatic Sun-Path & Wind Analysis', 'Sanction & Municipal Drawings', 'Architectural Working Details'],
      image: '/images/809386357_18099514082139857_4228897007025567517_n.jpg'
    },
    {
      id: 'construction',
      number: '02',
      title: 'Construction',
      subtitle: 'Turnkey Civil Engineering & Execution',
      description: 'Uncompromising on-site execution led by Er. Vikash Quaid. From deep foundation excavation and precision rebar cage fabrication to monolithic masonry curing and roof casting.',
      deliverables: ['Full Turnkey Contract', 'Structural Design & Vetting', 'Material Quality Testing (Cubes & Sieve)', 'Daily Site Supervision & Milestone Logs', 'Zero Cost Overrun Guarantee'],
      image: '/images/790847735_1778504769847443_6192951094150445920_n.jpg'
    },
    {
      id: 'interiors',
      number: '03',
      title: 'Interior Design',
      subtitle: 'Bespoke Millwork & Volumetric Spatial Flow',
      description: 'Custom interior architecture tailored to your daily rituals. Double-height volume illumination, fluted woodwork, artisan pooja mandirs, and precision modular culinary cockpits.',
      deliverables: ['Custom Joinery & Millwork Drawings', 'Lighting & False Ceiling Topology', 'Electrical & Plumbing Layouts', 'Material Sourcing (Teak, Marble, Brass)', 'Artisan On-Site Fabrication'],
      image: '/images/788260000_1635585901264693_6976987192195054177_n.jpg'
    },
    {
      id: 'landscape',
      number: '04',
      title: 'Landscape Design',
      subtitle: 'Ecology, Courtyards & Microclimates',
      description: 'Blurring the boundary between indoors and outdoors. Rain gardens, central open-to-sky courtyards, native drought-tolerant flora, and permeable stone walkways that replenish groundwater.',
      deliverables: ['Courtyard & Patio Layouts', 'Native Plant & Tree Selection', 'Rainwater Harvesting Basins', 'Outdoor Lighting & Hardscaping', 'Terrace Gardens & Pergolas'],
      image: '/images/806473580_18098747981139857_8608575887677638433_n.jpg'
    },
    {
      id: 'renovation',
      number: '05',
      title: 'Renovation',
      subtitle: 'Adaptive Reuse & Structural Restoration',
      description: 'Breathing contemporary life into aging structures. Structural retrofitting, removing non-load-bearing partitions to open sightlines, waterproofing, and facade modernization.',
      deliverables: ['Structural Integrity Audit', 'Demolition & Spatial Re-zoning', 'Bituminous Damp-Proofing & Injections', 'Services Modernization (Plumbing/Wiring)', 'Architectural Facade Overhaul'],
      image: '/images/762864628_2345722736024840_9131535424838167262_n.jpg'
    },
    {
      id: 'consultation',
      number: '06',
      title: 'Project Consultation',
      subtitle: 'Feasibility, BOQ & Site Due Diligence',
      description: 'Expert pre-construction guidance before acquiring land or commencing design. Soil suitability, local bylaws, material feasibility, and precise Bill of Quantities (BOQ).',
      deliverables: ['Site Topography & Soil Review', 'Bylaw & FSI Feasibility', 'Itemized Item-Rate BOQ Estimation', 'Phased Construction Roadmap', 'Sustainable Material Advisory'],
      image: '/images/774282118_18328014520272222_3521361176383016745_n.jpg'
    }
  ],
  process: [
    {
      step: '01',
      name: 'DISCOVER',
      subtitle: 'Dialogue, Site Context & Human Rituals',
      detail: 'We immerse ourselves in your lifestyle, family rhythms, and the unique orientation of your site. We assess sun angles, predominant wind currents, soil condition, and municipal parameters.',
      duration: 'Week 1 — 2',
      deliverable: 'Design Brief & Climatic Site Matrix'
    },
    {
      step: '02',
      name: 'CONCEPT',
      subtitle: 'Volumetric Massing & Spatial Philosophy',
      detail: 'Ar. Sanjana develops primary architectural sketches and spatial zoning. We explore how light enters, how breeze circulates, and how mass relates to void.',
      duration: 'Week 3 — 4',
      deliverable: 'Conceptual Floor Plans & Volumetric 3D Views'
    },
    {
      step: '03',
      name: 'DESIGN',
      subtitle: 'Materiality, Structure & Detailed Drawings',
      detail: 'Every single junction is resolved. Er. Vikash Quaid engineers the load-bearing masonry or structural framework. Electrical, plumbing, and interior millwork are drawn to millimeter precision.',
      duration: 'Week 5 — 7',
      deliverable: 'Comprehensive Working Drawing Set & BOQ'
    },
    {
      step: '04',
      name: 'DEVELOP',
      subtitle: 'Sourcing, Artisans & Mockup Verification',
      detail: 'At our Replica Atelier experience centre, we review physical materials with you: fired terracotta bricks, fluted woodwork samples, stone slabs, and window profiles before breaking ground.',
      duration: 'Week 8 — 9',
      deliverable: 'Material Specification Palette & Timeline'
    },
    {
      step: '05',
      name: 'BUILD',
      subtitle: 'Uncompromising On-Site Civil Execution',
      detail: 'Er. Vikash Quaid’s dedicated construction crew takes over. Continuous curing, structural quality checks at every level, daily photo logs, and zero compromise on safety or materials.',
      duration: 'Months 3 — 10',
      deliverable: 'Turnkey Construction & Weekly Digital Logs'
    },
    {
      step: '06',
      name: 'DELIVER',
      subtitle: 'Snag-Free Handover & Lifetime Relationship',
      detail: 'A rigorous 120-point quality audit precedes key handover. We test every water fitting, electrical circuit, door latch, and finish to ensure absolute perfection.',
      duration: 'Final Month',
      deliverable: 'Handover Dossier & As-Built Drawings'
    }
  ]
};

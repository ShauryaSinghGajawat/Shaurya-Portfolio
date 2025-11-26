// ================= PROJECT DATA =================

const PROJECTS = [
  {
    slug: "hammer",
    title: "Hammer",
    subtitle:
      "Real-time corridor built for third-person gameplay in Unreal Engine.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter · Designer",
    year: "2025",
    tags: ["Sci-Fi", "Modular", "Lighting"],
    media: [
      {
        type: "image",
        src: "media/images/Hammer Best/shaurya-singh-gajawat-learning-environment-artist-hammer-render-01.jpg",
        alt: "Main view of modular sci-fi corridor"
      },
      {
        type: "image",
        src: "media/images/Hammer Best/shaurya-singh-gajawat-learning-environment-artist-hammer-render-02.jpg",
        alt: "Detail shot of corridor trims and materials"
      },
      {
        type: "image",
        src: "media/images/Hammer Best/shaurya-singh-gajawat-learning-environment-artist-hammer-render-03.jpg",
        alt: "Gameplay camera view down the corridor"
      }
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable."
      ]
    }
  },
  {
    slug: "sea",
    title: "Sea",
    subtitle: "Overgrown ruins with strong mood, depth and foliage layering.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · SpeedTree · Substance 3D Painter",
    year: "2025",
    tags: ["Nature", "Atmosphere", "Storytelling"],
    media: [
      {
        type: "image",
        src: "media/images/Ocean Best/shaurya-singh-gajawat-learning-environment-artist-fine-thumnails.jpg",
        alt: "Wide shot of ruined temple in the forest"
      }
    ],
    description: [
      "An environment focused on atmosphere and depth, exploring how foliage density and fog shape the mood.",
      "The ruins are designed around a clear composition with a strong focal point and leading lines for the player."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked in terrain and major shapes to lock composition early.",
        "Layered foliage from large to small to avoid noisy reads.",
        "Used height fog and light shafts to separate foreground, midground and background.",
        "Added storytelling props like broken statues and offerings to suggest a forgotten history."
      ]
    }
  },
  {
    slug: "hippo",
    title: "Pink Hippo",
    subtitle: "Stylized cyberpunk alley with decals, props and mood lighting.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2025",
    tags: ["Stylized", "Urban", "VFX"],
    media: [
      {
        type: "image",
        src: "media/images/08 Teddy/Teddy.jpg",
        alt: "Wide shot of neon alley environment"
      }
    ],
    description: [
      "Stylized alleyway environment exploring value contrast, emissive materials and storytelling through props.",
      "Built with gameplay readability in mind so the player can quickly understand paths and interactable elements."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Defined a limited value palette with strong light/dark contrast.",
        "Used decals for grime, graffiti and leaks to add storytelling without extra geometry.",
        "Balanced emissive values to keep important areas readable without overexposing.",
        "Added animated VFX like steam and flickering lights to keep the scene alive."
      ]
    }
  },
  {
    slug: "clifftop-shrine",
    title: "Clifftop Shrine",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "media/images/Concept - Light Shrine/2Final.jpg",
        alt: "Wide shot of clifftop shrine"
      },
      {
        type: "image",
        src: "media/images/Concept - Light Shrine/Perpsective.jpg",
        alt: "Close-up of hand-painted shrine details"
      }
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail."
      ]
    }
  },
  {
    slug: "arcane-cube",
    title: "Arcane Cube",
    subtitle: "Hard-surface sci-fi lab with clean materials and variety.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2024",
    tags: ["Sci-Fi", "Hard Surface", "Materials"],
    media: [
      {
        type: "image",
        src: "media/images/Cube Arcaned Best/shaurya-singh-gajawat-learning-environment-artist-thumbnail.jpg",
        alt: "Thumbnail view of sci-fi lab"
      },
      {
        type: "image",
        src: "media/images/Cube Arcaned Best/shaurya-singh-gajawat-learning-environment-artist-02-02.jpg",
        alt: "Overview of sci-fi research lab interior"
      },
      {
        type: "image",
        src: "media/images/Cube Arcaned Best/shaurya-singh-gajawat-learning-environment-artist-03-03.jpg",
        alt: "Close-up of consoles and lab props"
      },
      {
        type: "image",
        src: "media/images/Cube Arcaned Best/shaurya-singh-gajawat-learning-environment-artist-shaded-0606.jpg",
        alt: "Lighting setup in the lab interior"
      }
    ],
    description: [
      "A clean sci-fi lab interior with a focus on hard-surface modeling and material variation.",
      "The layout is arranged around key gameplay spaces like consoles and interactive lab equipment."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Modeled modular wall and floor pieces to quickly build the lab layout.",
        "Created multiple material variants for metals, plastics and glass.",
        "Used lighting and emissives to highlight important gameplay areas.",
        "Added small props and decals to break repetition and add scale."
      ]
    }
  },
  {
    slug: "mountain-village",
    title: "Mountain Village",
    subtitle: "Cozy village on a cliffside with storytelling props.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Nature", "Storytelling", "Props"],
    media: [
      {
        type: "image",
        src: "media/images/Hut Stylized bEST/shaurya-singh-gajawat-learning-environment-artist-thumbnail-02.jpg",
        alt: "Overview of mountain village"
      },
      {
        type: "image",
        src: "media/images/Hut Stylized bEST/shaurya-singh-gajawat-learning-environment-artist-05.jpg",
        alt: "Close shot of village props and houses"
      },
      {
        type: "image",
        src: "media/images/Hut Stylized bEST/shaurya-singh-gajawat-learning-environment-artist-back.jpg",
        alt: "Village seen from the back"
      },
      {
        type: "image",
        src: "media/images/Hut Stylized bEST/shaurya-singh-gajawat-learning-environment-artist-front-render.jpg",
        alt: "Front view of the main house cluster"
      },
      {
        type: "image",
        src: "media/images/Hut Stylized bEST/shaurya-singh-gajawat-learning-environment-artist-right-render.jpg",
        alt: "Side angle showing village depth"
      }
    ],
    description: [
      "A small village environment focusing on storytelling with props and wear.",
      "Each house has props that hint at the inhabitants, making the world feel lived-in."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Planned the village layout around a main path leading to the highest point.",
        "Added storytelling clusters like workbenches, laundry and crates.",
        "Used different levels of wear on props to hint at history and use.",
        "Tweaked lighting and sky values to support a warm, inviting mood."
      ]
    }
  },
  {
    slug: "skull",
    title: "Cheetah Skull",
    subtitle: "Hard-surface and organic detailing on a cheetah skull prop.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Anatomy", "Detailing"],
    media: [
      {
        type: "image",
        src: "media/images/Citha Skull Best/shaurya-singh-gajawat-learning-environment-artist-rgfgfdgf.jpg",
        alt: "Hero view of cheetah skull"
      },
      {
        type: "image",
        src: "media/images/Citha Skull Best/shaurya-singh-gajawat-learning-environment-artist-fdfdsfdsf.jpg",
        alt: "Close-up of skull detailing"
      },
      {
        type: "image",
        src: "media/images/Citha Skull Best/shaurya-singh-gajawat-learning-environment-artist-rfghfghg.jpg",
        alt: "Side view of cheetah skull"
      },
      {
        type: "image",
        src: "media/images/Citha Skull Best/shaurya-singh-gajawat-learning-environment-artist-fdasadasf.jpg",
        alt: "Three-quarter view of skull on stand"
      },
      {
        type: "image",
        src: "media/images/Citha Skull Best/shaurya-singh-gajawat-learning-environment-artist-uyuyu.jpg",
        alt: "Back view and occlusion of cheetah skull"
      }
    ],
    description: [
      "A hero prop study of a cheetah skull, focusing on anatomy and material breakup.",
      "Used roughness variation and subtle color changes to suggest age and wear."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started from a low-poly sculpt to lock proportions quickly.",
        "Refined details with sculpting passes focusing on cracks and cavities.",
        "Textured with layered dirt and discoloration maps.",
        "Rendered with simple lighting to clearly show form."
      ]
    }
  },
  {
    slug: "crate",
    title: "Sci-fi Crate",
    subtitle: "A modular sci-fi crate prop with clean reads.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Sci-Fi", "Hard Surface"],
    media: [
      {
        type: "image",
        src: "media/images/Crate Best 0/shaurya-singh-gajawat-learning-environment-artist-001-1.jpg",
        alt: "Hero render of sci-fi crate"
      },
      {
        type: "image",
        src: "media/images/Crate Best 0/shaurya-singh-gajawat-learning-environment-artist-untitled-2-3.jpg",
        alt: "Alternative angle of sci-fi crate"
      }
    ],
    description: [
      "A game-ready sci-fi crate designed to work as a modular prop in multiple environments.",
      "Emphasis on clear silhouettes and believable surface wear."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Built a low-poly and high-poly pair for clean bakes.",
        "Used anchor points in Painter for layered edge wear.",
        "Kept color accents minimal to maintain readability.",
        "Rendered at multiple focal lengths to test in engine."
      ]
    }
  },
  {
    slug: "knife",
    title: "Knife",
    subtitle: "A rugged knife prop with story-driven wear.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Storytelling", "Hard Surface"],
    media: [
      {
        type: "image",
        src: "media/images/Knive Best 03/shaurya-singh-gajawat-environment-props-inkedrender-006.jpg",
        alt: "Hero render of knife prop"
      },
      {
        type: "image",
        src: "media/images/Knive Best 03/shaurya-singh-gajawat-environment-props-inkedrender-004.jpg",
        alt: "Close-up on knife handle and grip"
      },
      {
        type: "image",
        src: "media/images/Knive Best 03/shaurya-singh-gajawat-environment-props-desktop-screenshot-2024-04-26-13-31-36-39.jpg",
        alt: "Knife seen in-engine with lighting"
      }
    ],
    description: [
      "A knife designed as a character prop with heavy use and surface story.",
      "The materials focus on contrast between metal, rubber and leather."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Gathered reference from outdoor survival knives.",
        "Sculpted subtle dents and bends instead of perfect shapes.",
        "Textured with layered edge damage and fingerprints.",
        "Tested in a simple lighting scenario to balance roughness."
      ]
    }
  },
  {
    slug: "medieval-home",
    title: "Medieval Home",
    subtitle: "A medieval house blockout taken toward a finished prop.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Architecture", "Storytelling", "Props"],
    media: [
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-28.jpg",
        alt: "Front view of medieval home"
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-29 (2).jpg",
        alt: "Angle view of medieval home structure"
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-29.jpg",
        alt: "Detail view of windows and beams"
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-30.jpg",
        alt: "Side view of medieval house layout"
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-31.jpg",
        alt: "Roof and chimney details"
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-26_14-33-17 (2).jpg",
        alt: "Alternate angle of medieval home exterior"
      }
    ],
    description: [
      "Blockout of a medieval house taken through several detail passes.",
      "Focus on modular pieces that can be reused for a full village."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Established proportions and silhouette with a quick blockout.",
        "Defined modular wall and roof pieces.",
        "Added beams, trims and windows to break up surfaces.",
        "Planned further passes for materials and storytelling props."
      ]
    }
  },
  {
    slug: "locket",
    title: "Silver Locket",
    subtitle: "A small hero prop with reflective materials.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Metal", "Detailing"],
    media: [
      {
        type: "image",
        src: "media/images/Silver Locket/Render_001.png",
        alt: "Hero render of silver locket"
      },
      {
        type: "image",
        src: "media/images/Silver Locket/Render_002.png",
        alt: "Locket open showing inner detail"
      },
      {
        type: "image",
        src: "media/images/Silver Locket/Render_003.png",
        alt: "Multiple angles of locket prop"
      }
    ],
    description: [
      "A silver locket prop that explores reflections and subtle surface imperfections.",
      "Designed as a potential narrative item for a character."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Modeled simple but clean geometry for smooth reflections.",
        "Textured with micro-scratches and smudges.",
        "Balanced metalness and roughness for believable silver.",
        "Rendered with simple HDRI lighting to show material response."
      ]
    }
  },
  {
    slug: "telephone",
    title: "Telephone",
    subtitle: "Vintage telephone prop with layered materials.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Vintage", "Storytelling"],
    media: [
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-thumbnail.jpg",
        alt: "Hero render of vintage telephone"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-render-top-top-05.jpg",
        alt: "Top view of the vintage telephone"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-render-side-back-04.jpg",
        alt: "Side and back view of the telephone"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-render-front-front-06.jpg",
        alt: "Front close-up of dial and details"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-render-back-02.jpg",
        alt: "Back view of the telephone prop"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-render-07-side-close.jpg",
        alt: "Side close-up of handset and base"
      },
      {
        type: "image",
        src: "media/images/Telephone Best/shaurya-singh-gajawat-learning-environment-artist-rende4r-top-front.jpg",
        alt: "Angled view showing top and front"
      }
    ],
    description: [
      "A vintage telephone prop with emphasis on layered surfaces and storytelling wear.",
      "Designed to sit as a focal prop in an interior scene."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Gathered references from antique telephones.",
        "Balanced gloss and roughness between metal and plastic parts.",
        "Added dust and edge wear to suggest age.",
        "Rendered from multiple angles to show all details."
      ]
    }
  },
  {
    slug: "tiles",
    title: "Tiles",
    subtitle: "Procedural and hand-authored tile materials study.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Substance 3D Designer · Painter",
    year: "2023",
    tags: ["Materials", "Procedural", "Surfaces"],
    media: [
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-old-yellow-wholsome (1).jpg",
        alt: "Old yellow tiles with water damage"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-grey-wolseome (1).jpg",
        alt: "Grey tile material variation"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-dirted-old-brown-tie-wholse (1).jpg",
        alt: "Brown tiles with heavy dirt and wear"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-old-dirted-extremely-water-color-tiles-main-camera.jpg",
        alt: "Extreme water-damaged tile material"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-old-rough-grey-water-color-tiles-main-camera.jpg",
        alt: "Rough grey tiles with water staining"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-qqqfootpath-skin-tile-water.jpg",
        alt: "Footpath-style tile variation"
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-qqqold-dirted-extreme-water-color-tiles-main-camera.jpg",
        alt: "Another extreme water-damaged tile variant"
      }
    ],
    description: [
      "A series of tile materials focusing on water damage, roughness variation and color shifts.",
      "Built to work both as hero surfaces and background materials."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started from a base tile height and pattern in Designer.",
        "Layered multiple grunge and leak masks.",
        "Pushed roughness variation for better light response.",
        "Exported to Painter and Unreal for final lookdev."
      ]
    }
  },
  {
    slug: "carriage",
    title: "Wooden Carriage",
    subtitle: "A wooden carriage hero prop with storytelling details.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter",
    year: "2023",
    tags: ["Props", "Wood", "Storytelling"],
    media: [
      {
        type: "image",
        src: "media/images/Wooden Carriage Best/shaurya-singh-gajawat-learning-environment-artist-render-0003.jpg",
        alt: "Hero render of wooden carriage"
      },
      {
        type: "image",
        src: "media/images/Wooden Carriage Best/shaurya-singh-gajawat-learning-environment-artist-render-0002.jpg",
        alt: "Three-quarter view of carriage"
      },
      {
        type: "image",
        src: "media/images/Wooden Carriage Best/shaurya-singh-gajawat-learning-environment-artist-render-0001.jpg",
        alt: "Front view highlighting structure"
      },
      {
        type: "image",
        src: "media/images/Wooden Carriage Best/shaurya-singh-gajawat-learning-environment-artist-inkedrender-004.jpg",
        alt: "Detail view of wheel and suspension"
      },
      {
        type: "image",
        src: "media/images/Wooden Carriage Best/shaurya-singh-gajawat-learning-environment-artist-inkedrender-003.jpg",
        alt: "Close shot of carriage materials and wear"
      }
    ],
    description: [
      "A wooden carriage prop focusing on structural believability and surface storytelling.",
      "Designed to be reused in multiple medieval or fantasy scenes."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Built a clean low-poly cage for the carriage.",
        "Added supporting beams and joints for believability.",
        "Textured with layered dirt, mud and chipped paint.",
        "Rendered from multiple angles to show construction."
      ]
    }
  },
  {
    slug: "braininjar",
    title: "Craddle of Thoughts",
    subtitle:
      "Real-time corridor built for third-person gameplay in Unreal Engine.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter · Designer",
    year: "2025",
    tags: ["Sci-Fi", "Modular", "Lighting"],
    media: [
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/787/478/4k/shaurya-singh-gajawat-learning-environment-artist-002-no-rays-render.jpg?1751960892",
        alt: "Hero shot of brain-in-jar environment"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/834/530/4k/shaurya-singh-gajawat-learning-environment-artist-484823524-17849365239426418-6424053854920204834-n.jpg?1752075839",
        alt: "Alternate angle of brain jar scene"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/834/630/4k/shaurya-singh-gajawat-learning-environment-artist-482714530-17846578269426418-7002585884920958835-n.jpg?1752075995",
        alt: "Close-up of jar and supporting props"
      }
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable."
      ]
    }
  },
  {
    slug: "bag",
    title: "Just a Bag!",
    subtitle:
      "Real-time corridor built for third-person gameplay in Unreal Engine.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter · Designer",
    year: "2025",
    tags: ["Props", "Hard Surface", "Backpack"],
    media: [
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/092/4k/shaurya-singh-gajawat-learning-environment-artist-color.jpg?1750515281",
        alt: "Hero render of backpack prop"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/379/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-005.jpg?1750515413",
        alt: "Back view of backpack with straps"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/383/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-004.jpg?1750515418",
        alt: "Angle shot emphasizing form and silhouette"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/398/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-003.jpg?1750515443",
        alt: "Side view of backpack with pockets"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/491/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-47-50.jpg?1750515621",
        alt: "Backpack in-engine lighting test 1"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/486/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-41-49.jpg?1750515611",
        alt: "Backpack in-engine lighting test 2"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/490/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-46-56.jpg?1750515617",
        alt: "Backpack in-engine lighting test 3"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/447/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-56-46.jpg?1750515547",
        alt: "Backpack resting on ground, angled view"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/495/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-49-01.jpg?1750515628",
        alt: "Backpack close-up of decals and labels"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/533/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-decals-closeups-001.jpg?1750515717",
        alt: "Detail close-up of decals and surface details"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/416/4k/shaurya-singh-gajawat-learning-environment-artist-02.jpg?1750515475",
        alt: "Backpack presentation render 1"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/421/4k/shaurya-singh-gajawat-learning-environment-artist-01.jpg?1750515484",
        alt: "Backpack presentation render 2"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/507/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-21-51.jpg?1750515650",
        alt: "Backpack lighting exploration shot 1"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/510/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-22-51.jpg?1750515654",
        alt: "Backpack lighting exploration shot 2"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/514/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-23-45.jpg?1750515659",
        alt: "Backpack lighting exploration shot 3"
      }
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable."
      ]
    }
  },
  {
    slug: "grass",
    title: "Grass Landscape",
    subtitle:
      "Real-time corridor built for third-person gameplay in Unreal Engine.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Substance 3D Painter · Designer",
    year: "2025",
    tags: ["Nature", "Environment", "Lighting"],
    media: [
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/076/670/797/4k/shaurya-singh-gajawat-learning-environment-artist-edite-prerender-003.jpg?1717515004",
        alt: "Hero render of grass landscape"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/076/670/765/4k/shaurya-singh-gajawat-learning-environment-artist-disc-scale.jpg?1717514963",
        alt: "Alternate angle of grass environment"
      }
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life."
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable."
      ]
    }
  }
];

// ================= SIDEBAR PROJECT ORDER =================

const SIDEBAR_PROJECT_ORDER = [
  "hammer",
  "knife",
  "crate",
  "clifftop-shrine",
  "arcane-cube",
  "mountain-village",
  "skull",
  "hippo",
  "sea"
];

// ================= HERO SLIDER (HOME) =================

const slides = document.querySelectorAll(".hero-slide");
const dotsContainer = document.querySelector(".hero-dots");
const heroTitle = document.querySelector(".hero-title");
const heroCaption = document.querySelector(".hero-caption");
const prevBtn = document.querySelector(".hero-control.prev");
const nextBtn = document.querySelector(".hero-control.next");

let currentIndex = 0;
let autoplayInterval;
const AUTOPLAY_DELAY = 2000;

if (slides.length && dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("hero-dot");
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.dataset.index = String(index);
    dotsContainer.appendChild(dot);
  });
}

const dots = document.querySelectorAll(".hero-dot");

function updateHeroText(index) {
  const slide = slides[index];
  if (!slide || !heroTitle || !heroCaption) return;

  heroTitle.textContent = slide.dataset.title || "";
  heroCaption.textContent = slide.dataset.caption || "";
}

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  updateHeroText(index);
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlideFn() {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function startAutoplay() {
  if (!slides.length) return;
  stopAutoplay();
  autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}

if (slides.length) {
  showSlide(0);
  startAutoplay();
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    prevSlideFn();
    startAutoplay();
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.index) || 0;
    showSlide(index);
    startAutoplay();
  });
});

const heroSliderElement = document.querySelector(".hero-slider");
if (heroSliderElement) {
  heroSliderElement.addEventListener("mouseenter", stopAutoplay);
  heroSliderElement.addEventListener("mouseleave", startAutoplay);
}

// ================= GALLERY FILTERING (HOME) =================

const filterButtons = document.querySelectorAll(".filter-btn");
// IMPORTANT: only old gallery cards participate in filtering
const galleryCards = document.querySelectorAll("#gallery .gallery-grid .card");

function filterGallery(filter) {
  galleryCards.forEach((card) => {
    const tags = (card.dataset.tags || "").toLowerCase();
    const show = filter === "all" || tags.includes(filter.toLowerCase());
    const wrapper = card.closest(".card-link") || card;
    wrapper.style.display = show ? "" : "none";
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter || "all";
    filterGallery(filter);
  });
});

if (galleryCards.length) {
  filterGallery("all");
}

// ================= DIM EVERYTHING EXCEPT HOVERED CARD =================

const pageBody = document.body;

// Now dimming applies to ALL tiles (new + old) because all use .card-link
const cardWrappers = document.querySelectorAll(".card-link");

cardWrappers.forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", () => {
    pageBody.classList.add("dim-mode");
    wrapper.classList.add("dim-focus");
  });

  wrapper.addEventListener("mouseleave", () => {
    pageBody.classList.remove("dim-mode");
    wrapper.classList.remove("dim-focus");
  });
});

// ================= PROJECT PAGE RENDERING (ARTSTATION STYLE) =================

function renderSidebarMoreProjects(currentSlug) {
  const container = document.getElementById("project-more-projects");
  if (!container) return;

  container.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "More Projects";
  container.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "project-more-grid";

  const orderedProjects = SIDEBAR_PROJECT_ORDER
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p) => p && p.slug !== currentSlug)
    .slice(0, 6);

  orderedProjects.forEach((project) => {
    const firstMedia = (project.media || [])[0];
    if (!firstMedia || !firstMedia.src) return;

    const link = document.createElement("a");
    link.href = `project.html?project=${encodeURIComponent(project.slug)}`;
    link.className = "project-more-item";
    link.setAttribute("aria-label", project.title);

    const img = document.createElement("img");
    img.src = firstMedia.src;
    img.alt = firstMedia.alt || project.title;

    link.appendChild(img);
    grid.appendChild(link);
  });

  container.appendChild(grid);
}

function renderProjectPage() {
  const projectRoot = document.getElementById("project-root");
  if (!projectRoot) return; // not on project page

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = PROJECTS.find((p) => p.slug === slug);

  const titleEl = document.getElementById("project-title");
  const subtitleEl = document.getElementById("project-subtitle");
  const roleEl = document.getElementById("project-role");
  const engineEl = document.getElementById("project-engine");
  const softwareEl = document.getElementById("project-software");
  const yearEl = document.getElementById("project-year");
  const tagsEl = document.getElementById("project-tags");
  const descEl = document.getElementById("project-description");
  const breakdownEl = document.getElementById("project-breakdown");
  const mediaStackEl = document.getElementById("project-media-stack");

  if (!project) {
    if (titleEl) titleEl.textContent = "Project Not Found";
    if (subtitleEl) {
      subtitleEl.textContent =
        "The project you're looking for doesn't exist or the link is incorrect.";
    }
    if (mediaStackEl) {
      mediaStackEl.innerHTML =
        '<p style="padding:1rem;font-size:0.9rem;color:#ccc;">Please go back to the gallery and try another project.</p>';
    }
    return;
  }

  document.title = `${project.title} — Aditya Singh`;

  if (titleEl) titleEl.textContent = project.title;
  if (subtitleEl) subtitleEl.textContent = project.subtitle || "";
  if (roleEl) roleEl.textContent = project.role || "";
  if (engineEl) engineEl.textContent = project.engine || "";
  if (softwareEl) softwareEl.textContent = project.software || "";
  if (yearEl) yearEl.textContent = project.year || "";

  if (tagsEl) {
    tagsEl.innerHTML = "";
    (project.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagsEl.appendChild(span);
    });
  }

  if (descEl) {
    descEl.innerHTML = "";
    (project.description || []).forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      descEl.appendChild(p);
    });
  }

  if (breakdownEl) {
    breakdownEl.innerHTML = "";
    if (project.breakdown && project.breakdown.title) {
      const h3 = document.createElement("h3");
      h3.textContent = project.breakdown.title;
      breakdownEl.appendChild(h3);
    }
    if (project.breakdown && project.breakdown.items) {
      const ul = document.createElement("ul");
      project.breakdown.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      breakdownEl.appendChild(ul);
    }
  }

  // ====== MEDIA STACK WITH CAPTIONS ======
  if (mediaStackEl) {
    mediaStackEl.innerHTML = "";
    (project.media || []).forEach((mediaItem, index) => {
      const article = document.createElement("article");
      article.className = "project-media-item";

      const frame = document.createElement("button");
      frame.type = "button";
      frame.className = "project-media-frame";
      frame.dataset.type = mediaItem.type;
      frame.dataset.src = mediaItem.src;

      const captionText =
        mediaItem.caption ||
        mediaItem.alt ||
        `${project.title} — view ${index + 1}`;

      frame.dataset.alt = captionText;
      frame.setAttribute("aria-label", `View ${captionText} larger`);

      let mediaEl;
      if (mediaItem.type === "video") {
        mediaEl = document.createElement("video");
        mediaEl.src = mediaItem.src;
        mediaEl.controls = true;
        mediaEl.playsInline = true;
      } else {
        mediaEl = document.createElement("img");
        mediaEl.src = mediaItem.src;
        mediaEl.alt = captionText;
      }

      frame.appendChild(mediaEl);
      article.appendChild(frame);

      // Caption under each image/video
      if (captionText) {
        const captionEl = document.createElement("p");
        captionEl.className = "project-media-caption";
        captionEl.textContent = captionText;
        article.appendChild(captionEl);
      }

      mediaStackEl.appendChild(article);
    });
  }

  renderSidebarMoreProjects(project.slug);
  setupLightbox();
}

// ================= LIGHTBOX LOGIC =================

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".lightbox-close");

  if (!lightbox || !lightboxImg || !lightboxVideo || !closeBtn) return;

  function openLightbox(type, src, altText) {
    if (!src) return;

    if (type === "video") {
      lightboxImg.style.display = "none";
      lightboxVideo.style.display = "block";
      lightboxVideo.src = src;
      lightboxVideo.play().catch(() => {});
    } else {
      lightboxVideo.pause();
      lightboxVideo.style.display = "none";
      lightboxImg.style.display = "block";
      lightboxImg.src = src;
      lightboxImg.alt = altText || "";
    }

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxVideo.pause();
    lightboxVideo.src = "";
  }

  const frames = document.querySelectorAll(".project-media-frame");
  frames.forEach((frame) => {
    frame.addEventListener("click", () => {
      const type = frame.dataset.type || "image";
      const src = frame.dataset.src || "";
      const altText = frame.dataset.alt || "";
      openLightbox(type, src, altText);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
}

renderProjectPage();

// ================= SKILLS TAB LOGIC =================

const skillTabs = document.querySelectorAll(".skill-tab");
const skillContents = document.querySelectorAll(".skill-content");

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.skillTab;
    if (!target) return;

    skillTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    skillContents.forEach((content) => {
      content.classList.toggle(
        "active",
        content.dataset.skillContent === target
      );
    });
  });
});

// ================= FOOTER YEAR =================

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const subject = encodeURIComponent(
      "Portfolio contact from " + (name || "visitor")
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:shauryasinghgajawat@gmail.com?subject=${subject}&body=${body}`;
  });
}

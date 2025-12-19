// ================= PROJECT DATA =================

const PROJECTS = [
  {
    slug: "factory",
    title: "Factory",
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
        src: "https://cdnb.artstation.com/p/assets/images/images/094/699/559/4k/shaurya-singh-gajawat-learning-environment-art-highresscreenshot00017.webp?1766145927",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/991/198/work-is-in-progress.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/672/4k/shaurya-singh-gajawat-learning-environment-art-week-08.webp?1766146204",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/698/4k/shaurya-singh-gajawat-learning-environment-art-week-07.webp?1766146232",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/660/4k/shaurya-singh-gajawat-learning-environment-art-week-03.webp?1766146184",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/654/4k/shaurya-singh-gajawat-learning-environment-art-week-02-1.webp?1766146179",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/699/685/4k/shaurya-singh-gajawat-learning-environment-art-week-06-1.webp?1766146215",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/664/4k/shaurya-singh-gajawat-learning-environment-art-week-04.webp?1766146197",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/699/568/4k/shaurya-singh-gajawat-learning-environment-art-week-05.webp?1766145939",
        alt: "Main view of modular sci-fi corridor",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "spaceship",
    title: "Spaceship",
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
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/898/4k/shaurya-singh-gajawat-learning-environment-art-shauryagajawat-nowhere-remains.jpg?1766151781",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/877/4k/shaurya-singh-gajawat-learning-environment-art-shauryagajawat-final100-l06-compare.webp?1766151704",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/885/4k/shaurya-singh-gajawat-learning-environment-art-shauryagajawat-final100-l06-textured.webp?1766151730",
        alt: "Main view of modular sci-fi corridor",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "classroom",
    title: "Japanese Classroom",
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
        src: "https://cdna.artstation.com/p/assets/images/images/094/704/366/4k/shaurya-singh-gajawat-learning-environment-art-inkedclassroom-render-2.webp?1766156082",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/704/359/4k/shaurya-singh-gajawat-learning-environment-art-classroom-render-3.webp?1766156291",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/704/364/4k/shaurya-singh-gajawat-learning-environment-art-classroomk-1-1.webp?1766156080",
        alt: "Main view of modular sci-fi corridor",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "headset",
    title: "Headset",
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
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/598/4k/shaurya-singh-gajawat-learning-environment-art-06-render.webp?1766148875",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/049/4k/shaurya-singh-gajawat-learning-environment-art-07-render.webp?1766150053",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/582/4k/shaurya-singh-gajawat-learning-environment-art-04-render.webp?1766148843",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/700/193/4k/shaurya-singh-gajawat-learning-environment-art-004-11zon.jpg?1766147713",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/186/4k/shaurya-singh-gajawat-learning-environment-art-003-11zon.webp?1766147671",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/218/4k/shaurya-singh-gajawat-learning-environment-art-005-11zon.webp?1766147747",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/216/4k/shaurya-singh-gajawat-learning-environment-art-006-11zon.webp?1766147740",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/380/4k/shaurya-singh-gajawat-learning-environment-art-002-simple-viewport-7-11zon.webp?1766148265",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/700/383/4k/shaurya-singh-gajawat-learning-environment-art-001-simple-8-11zon.webp?1766148271",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/388/4k/shaurya-singh-gajawat-learning-environment-art-007-1-11zon.webp?1766148284",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/392/4k/shaurya-singh-gajawat-learning-environment-art-008-2-11zon.webp?1766148291",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/400/4k/shaurya-singh-gajawat-learning-environment-art-0010-6-11zon.webp?1766148304",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/700/396/4k/shaurya-singh-gajawat-learning-environment-art-009-5-11zon.webp?1766148297",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/702/470/4k/shaurya-singh-gajawat-learning-environment-art-0012-11zon.webp?1766152892",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/702/474/4k/shaurya-singh-gajawat-learning-environment-art-0013-11zon.webp?1766152899",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/372/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-48-30.webp?1766150677",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/375/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-48-53-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150681",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/378/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-49-34-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150685",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/383/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-53-50.webp?1766150692",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/530/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-55-50-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150943",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/534/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-57-40-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150949",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/094/701/532/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-56-46-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150946",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/094/701/535/4k/shaurya-singh-gajawat-learning-environment-art-2025-12-19-18-57-59-adobe-substance-3d-painter-headsets-aaa-heroprop-final-textures-safe-autosave.webp?1766150952",
        alt: "Detail shot of corridor trims and materials",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
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
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/100/4k/shaurya-singh-gajawat-learning-environment-artist-thumbnail-hammer-render-03.jpg?1724141428",
        alt: "Main view of modular sci-fi corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/106/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-01.jpg?1724141419",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/112/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-03.jpg?1724141426",
        alt: "Detail shot of corridor trims and materials",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/108/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-02.jpg?1724141422",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/156/115/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-04.jpg?1724141430",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/118/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-06.jpg?1724141438",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/122/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-08.jpg?1724141448",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/156/119/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-07.jpg?1724141442",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/156/117/4k/shaurya-singh-gajawat-learning-environment-artist-hammer-render-05.jpg?1724141434",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/225/662/hammer-360-face-oreintation.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/225/663/hammer-greyscale-360-degree.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/126/4k/shaurya-singh-gajawat-learning-environment-artist-evee.jpg?1724141457",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/130/4k/shaurya-singh-gajawat-learning-environment-artist-evee-02.jpg?1724141460",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/132/4k/shaurya-singh-gajawat-learning-environment-artist-evee-03.jpg?1724141462",
        alt: "Gameplay camera view down the corridor",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/156/134/4k/shaurya-singh-gajawat-learning-environment-artist-evee-04.jpg?1724141465",
        alt: "Gameplay camera view down the corridor",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
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
        src: "https://cdnb.artstation.com/p/assets/images/images/079/166/233/medium/shaurya-singh-gajawat-learning-environment-artist-fine-thumnails.jpg?1724163946",
        alt: "Wide shot of ruined temple in the forest",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/136/550/final-ocean-animation.mp4",
        caption: "Bag Video"
      },

    ],
    description: [
      "An environment focused on atmosphere and depth, exploring how foliage density and fog shape the mood.",
      "The ruins are designed around a clear composition with a strong focal point and leading lines for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked in terrain and major shapes to lock composition early.",
        "Layered foliage from large to small to avoid noisy reads.",
        "Used height fog and light shafts to separate foreground, midground and background.",
        "Added storytelling props like broken statues and offerings to suggest a forgotten history.",
      ],
    },
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
        alt: "Wide shot of clifftop shrine",
      },
      {
        type: "image",
        src: "media/images/Concept - Light Shrine/Perpsective.jpg",
        alt: "Close-up of hand-painted shrine details",
      },
      {
        type: "video",
        src: "media/images/Concept - Light Shrine/latten fasted.mp4",
        alt: "Close-up of hand-painted shrine details",
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
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
        src: "https://cdna.artstation.com/p/assets/images/images/082/156/716/4k/shaurya-singh-gajawat-learning-environment-artist-thumbnail.jpg?1732204476",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/082/156/677/4k/shaurya-singh-gajawat-learning-environment-artist-shaded-0606.jpg?1732204456",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/082/156/674/4k/shaurya-singh-gajawat-learning-environment-artist-03-03.jpg?1732204440",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/082/156/665/4k/shaurya-singh-gajawat-learning-environment-artist-02-02.jpg?1732204425",
        alt: "Hero render of backpack prop",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/291/636/final.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/082/157/387/4k/shaurya-singh-gajawat-learning-environment-artist-sdsdssa.jpg?1732205614",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/082/157/386/4k/shaurya-singh-gajawat-learning-environment-artist-capture.jpg?1732205610",
        alt: "Hero render of backpack prop",
      },

    ],
    description: [
      "A clean sci-fi lab interior with a focus on hard-surface modeling and material variation.",
      "The layout is arranged around key gameplay spaces like consoles and interactive lab equipment.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Modeled modular wall and floor pieces to quickly build the lab layout.",
        "Created multiple material variants for metals, plastics and glass.",
        "Used lighting and emissives to highlight important gameplay areas.",
        "Added small props and decals to break repetition and add scale.",
      ],
    },
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
        src: "https://cdna.artstation.com/p/assets/images/images/081/889/462/4k/shaurya-singh-gajawat-learning-environment-artist-thumbnail-02.jpg?1731501947",
        alt: "Overview of mountain village",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/081/889/355/4k/shaurya-singh-gajawat-learning-environment-artist-05.jpg?1731501772",
        alt: "Close shot of village props and houses",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/081/889/361/4k/shaurya-singh-gajawat-learning-environment-artist-front-render.jpg?1731501788",
        alt: "Village seen from the back",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/081/889/364/4k/shaurya-singh-gajawat-learning-environment-artist-right-render.jpg?1731501795",
        alt: "Front view of the main house cluster",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/081/889/357/4k/shaurya-singh-gajawat-learning-environment-artist-back.jpg?1731501782",
        alt: "Side angle showing village depth",
      },
      {
        type: "embed",
        src: "https://sketchfab.com/models/eabe446a3b024a14a1521e1a0cb75050/embed?ui_infos=0",
        caption: "Stylized hut — real-time 3D model (Sketchfab)"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/277/023/turnround.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/976/hut-stylized-3d-model-to-uplox-01.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/974/02.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/985/my-video4444444444444.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/989/0000000uplox-evee-wirefram-front-up-video.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/981/my-video00000011.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/276/993/my-video22222222222222222222.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/081/890/080/4k/shaurya-singh-gajawat-learning-environment-artist-completed-textured-hut-uv-map-color.jpg?1731502906",
        alt: "Side angle showing village depth",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/081/889/507/4k/shaurya-singh-gajawat-learning-environment-artist-uv-01-test.jpg?1731502038",
        alt: "Side angle showing village depth",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/081/917/341/4k/shaurya-singh-gajawat-learning-environment-artist-desktop-screenshot-2024-09-02-16-41-18-92.jpg?1731567945",
        alt: "Side angle showing village depth",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/081/889/506/4k/shaurya-singh-gajawat-learning-environment-artist-three-in-one-01.jpg?1731502035",
        alt: "Side angle showing village depth",
      },
    ],
    description: [
      "A small village environment focusing on storytelling with props and wear.",
      "Each house has props that hint at the inhabitants, making the world feel lived-in.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Planned the village layout around a main path leading to the highest point.",
        "Added storytelling clusters like workbenches, laundry and crates.",
        "Used different levels of wear on props to hint at history and use.",
        "Tweaked lighting and sky values to support a warm, inviting mood.",
      ],
    },
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
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/268/4k/shaurya-singh-gajawat-learning-environment-artist-rgfgfdgf.jpg?1718365837",
        alt: "Hero view of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/250/4k/shaurya-singh-gajawat-learning-environment-artist-fdfdsfdsf.jpg?1718365812",
        alt: "Close-up of skull detailing",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/266/4k/shaurya-singh-gajawat-learning-environment-artist-rfghfghg.jpg?1718365832",
        alt: "Side view of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/281/4k/shaurya-singh-gajawat-learning-environment-artist-uyuyu.jpg?1718365849",
        alt: "Three-quarter view of skull on stand",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/277/4k/shaurya-singh-gajawat-learning-environment-artist-sdasdasdas.jpg?1718365843",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/249/4k/shaurya-singh-gajawat-learning-environment-artist-fdasadasf.jpg?1718365809",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/279/4k/shaurya-singh-gajawat-learning-environment-artist-ttrterertyr.jpg?1718365847",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/240/4k/shaurya-singh-gajawat-learning-environment-artist-bdfgxdgsddg.jpg?1718365798",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/247/4k/shaurya-singh-gajawat-learning-environment-artist-dfdfd.jpg?1718365806",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/260/4k/shaurya-singh-gajawat-learning-environment-artist-gfgfgfgfdss.jpg?1718365826",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/253/4k/shaurya-singh-gajawat-learning-environment-artist-fgdgfgfdg.jpg?1718365815",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/272/4k/shaurya-singh-gajawat-learning-environment-artist-safasfasf.jpg?1718365840",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/022/282/4k/shaurya-singh-gajawat-learning-environment-artist-zbrush-documen-1t.jpg?1718365852",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/263/4k/shaurya-singh-gajawat-learning-environment-artist-ngj.jpg?1718365830",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/022/259/4k/shaurya-singh-gajawat-learning-environment-artist-gfgfgfgf.jpg?1718365823",
        alt: "Back view and occlusion of cheetah skull",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/028/334/ererere.mp4",
        caption: "Bag Video"
      },
    ],
    description: [
      "A hero prop study of a cheetah skull, focusing on anatomy and material breakup.",
      "Used roughness variation and subtle color changes to suggest age and wear.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started from a low-poly sculpt to lock proportions quickly.",
        "Refined details with sculpting passes focusing on cracks and cavities.",
        "Textured with layered dirt and discoloration maps.",
        "Rendered with simple lighting to clearly show form.",
      ],
    },
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
        src: "https://cdnb.artstation.com/p/assets/images/images/079/286/787/4k/shaurya-singh-gajawat-learning-environment-artist-001-1.jpg?1724487659",
        alt: "Hero render of sci-fi crate",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/286/763/4k/shaurya-singh-gajawat-learning-environment-artist-untitled-2-3.jpg?1724487630",
        alt: "Alternative angle of sci-fi crate",
      },
    ],
    description: [
      "A game-ready sci-fi crate designed to work as a modular prop in multiple environments.",
      "Emphasis on clear silhouettes and believable surface wear.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Built a low-poly and high-poly pair for clean bakes.",
        "Used anchor points in Painter for layered edge wear.",
        "Kept color accents minimal to maintain readability.",
        "Rendered at multiple focal lengths to test in engine.",
      ],
    },
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
        src: "https://cdna.artstation.com/p/assets/images/images/075/263/058/4k/shaurya-singh-gajawat-environment-props-inkedrender-006.jpg?1714117726",
        alt: "Hero render of knife prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/075/263/057/4k/shaurya-singh-gajawat-environment-props-inkedrender-004.jpg?1714117721",
        alt: "Close-up on knife handle and grip",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/075/263/056/4k/shaurya-singh-gajawat-environment-props-inkedrender-003.jpg?1714117718",
        alt: "Knife seen in-engine with lighting",
      },
      {
        type: "embed",
        src: "https://sketchfab.com/models/64271b9d55ce43258cbf41a20ba4e02e/embed?ui_infos=0",
        caption: "Knife — real-time 3D environment asset (Sketchfab)"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/075/263/314/4k/shaurya-singh-gajawat-environment-props-desktop-screenshot-2024-04-26-13-31-36-39.jpg?1714118601",
        alt: "Knife seen in-engine with lighting",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/075/263/319/4k/shaurya-singh-gajawat-environment-props-desktop-screenshot-2024-04-26-13-32-18-00.jpg?1714118610",
        alt: "Knife seen in-engine with lighting",
      },


    ],
    description: [
      "A knife designed as a character prop with heavy use and surface story.",
      "The materials focus on contrast between metal, rubber and leather.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Gathered reference from outdoor survival knives.",
        "Sculpted subtle dents and bends instead of perfect shapes.",
        "Textured with layered edge damage and fingerprints.",
        "Tested in a simple lighting scenario to balance roughness.",
      ],
    },
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
        alt: "Front view of medieval home",
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-29 (2).jpg",
        alt: "Angle view of medieval home structure",
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-29.jpg",
        alt: "Detail view of windows and beams",
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-30.jpg",
        alt: "Side view of medieval house layout",
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-25_16-30-31.jpg",
        alt: "Roof and chimney details",
      },
      {
        type: "image",
        src: "media/images/Medieval Incomplete House/photo_2023-03-26_14-33-17 (2).jpg",
        alt: "Alternate angle of medieval home exterior",
      },
    ],
    description: [
      "Blockout of a medieval house taken through several detail passes.",
      "Focus on modular pieces that can be reused for a full village.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Established proportions and silhouette with a quick blockout.",
        "Defined modular wall and roof pieces.",
        "Added beams, trims and windows to break up surfaces.",
        "Planned further passes for materials and storytelling props.",
      ],
    },
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
        src: "https://cdnb.artstation.com/p/assets/images/images/079/508/635/4k/shaurya-singh-gajawat-learning-environment-artist-rende4r-top-front.jpg?1725096669",
        alt: "Hero render of vintage telephone",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/508/642/4k/shaurya-singh-gajawat-learning-environment-artist-render-back-02.jpg?1725096680",
        alt: "Top view of the vintage telephone",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/508/659/4k/shaurya-singh-gajawat-learning-environment-artist-thumbnail.jpg?1725096697",
        alt: "Side and back view of the telephone",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/508/650/4k/shaurya-singh-gajawat-learning-environment-artist-render-side-back-04.jpg?1725096689",
        alt: "Front close-up of dial and details",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/508/639/4k/shaurya-singh-gajawat-learning-environment-artist-render-07-side-close.jpg?1725096676",
        alt: "Back view of the telephone prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/508/652/4k/shaurya-singh-gajawat-learning-environment-artist-render-top-top-05.jpg?1725096693",
        alt: "Side close-up of handset and base",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/508/645/4k/shaurya-singh-gajawat-learning-environment-artist-render-front-front-06.jpg?1725096685",
        alt: "Angled view showing top and front",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/225/667/telephone-360-face-orientation.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/225/672/telephone-360-greyscale.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/508/671/4k/shaurya-singh-gajawat-learning-environment-artist-grouped.jpg?1725096709",
        alt: "Angled view showing top and front",
      },
    ],
    description: [
      "A vintage telephone prop with emphasis on layered surfaces and storytelling wear.",
      "Designed to sit as a focal prop in an interior scene.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Gathered references from antique telephones.",
        "Balanced gloss and roughness between metal and plastic parts.",
        "Added dust and edge wear to suggest age.",
        "Rendered from multiple angles to show all details.",
      ],
    },
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
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/565/4k/shaurya-singh-gajawat-learning-environment-artist-grey-wolseome.jpg?1719392343",
        alt: "Old yellow tiles with water damage",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/568/4k/shaurya-singh-gajawat-learning-environment-artist-old-yellow-wholsome.jpg?1719392349",
        alt: "Grey tile material variation",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/563/4k/shaurya-singh-gajawat-learning-environment-artist-dirted-old-brown-tie-wholse.jpg?1719392337",
        alt: "Brown tiles with heavy dirt and wear",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/571/4k/shaurya-singh-gajawat-learning-environment-artist-skiun-creacked-tuiles-wholesome.jpg?1719392354",
        alt: "Extreme water-damaged tile material",
      },
      {
        type: "image",
        src: "media/images/Tiles Textures/shaurya-singh-gajawat-learning-environment-artist-old-rough-grey-water-color-tiles-main-camera.jpg",
        alt: "Rough grey tiles with water staining",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/296/4k/shaurya-singh-gajawat-learning-environment-artist-old-dirted-rough-color-tiles-main-camera.jpg?1719391917",
        alt: "Footpath-style tile variation",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/306/4k/shaurya-singh-gajawat-learning-environment-artist-old-dirted-water-color-tiles-main-camera.jpg?1719391942",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/303/4k/shaurya-singh-gajawat-learning-environment-artist-old-dirted-extremely-water-color-tiles-main-camera.jpg?1719391932",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/314/4k/shaurya-singh-gajawat-learning-environment-artist-old-drough-greycolor-tiles-main-camera.jpg?1719391954",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/322/4k/shaurya-singh-gajawat-learning-environment-artist-old-rough-grey-extreme-water-color-tiles-main-camera.jpg?1719391976",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/320/4k/shaurya-singh-gajawat-learning-environment-artist-old-rough-grey-water-color-tiles-main-camera.jpg?1719391966",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/326/4k/shaurya-singh-gajawat-learning-environment-artist-qqqfootpath-skin-tile-srough.jpg?1719391985",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/291/4k/shaurya-singh-gajawat-learning-environment-artist-footpath-tile-skin-extremely-water.jpg?1719391907",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/329/4k/shaurya-singh-gajawat-learning-environment-artist-qqqfootpath-skin-tile-water.jpg?1719391997",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/336/4k/shaurya-singh-gajawat-learning-environment-artist-qqqold-dirted-color-tiles-main-camera.jpg?1719392007",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/347/4k/shaurya-singh-gajawat-learning-environment-artist-qqqqqold-dirted-water-color-tiles-main-camera.jpg?1719392027",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/077/412/342/4k/shaurya-singh-gajawat-learning-environment-artist-qqqold-dirted-extreme-water-color-tiles-main-camera.jpg?1719392018",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/385/4k/shaurya-singh-gajawat-learning-environment-artist-maps-all.jpg?1719392089",
        alt: "Another extreme water-damaged tile variant",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/077/412/719/4k/shaurya-singh-gajawat-learning-environment-artist-sunbstacne-designer-viewport.jpg?1719392717",
      },
    ],
    description: [
      "A series of tile materials focusing on water damage, roughness variation and color shifts.",
      "Built to work both as hero surfaces and background materials.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started from a base tile height and pattern in Designer.",
        "Layered multiple grunge and leak masks.",
        "Pushed roughness variation for better light response.",
        "Exported to Painter and Unreal for final lookdev.",
      ],
    },
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
        src: "https://cdna.artstation.com/p/assets/images/images/083/292/696/4k/shaurya-singh-gajawat-learning-environment-artist-render-0001.jpg?1735475184",
        alt: "Hero render of wooden carriage",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/083/292/707/4k/shaurya-singh-gajawat-learning-environment-artist-render-0003.jpg?1735475204",
        alt: "Three-quarter view of carriage",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/083/292/700/4k/shaurya-singh-gajawat-learning-environment-artist-render-0002.jpg?1735475193",
        alt: "Front view highlighting structure",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/083/292/693/4k/shaurya-singh-gajawat-learning-environment-artist-inkedrender-003.jpg?1735475169",
        alt: "Detail view of wheel and suspension",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/083/292/695/4k/shaurya-singh-gajawat-learning-environment-artist-inkedrender-004.jpg?1735475176",
        alt: "Close shot of carriage materials and wear",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/083/292/712/4k/shaurya-singh-gajawat-learning-environment-artist-render-005.jpg?1735475215",
        alt: "Close shot of carriage materials and wear",
      },
    ],
    description: [
      "A wooden carriage prop focusing on structural believability and surface storytelling.",
      "Designed to be reused in multiple medieval or fantasy scenes.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Built a clean low-poly cage for the carriage.",
        "Added supporting beams and joints for believability.",
        "Textured with layered dirt, mud and chipped paint.",
        "Rendered from multiple angles to show construction.",
      ],
    },
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
        alt: "Hero shot of brain-in-jar environment",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/834/530/4k/shaurya-singh-gajawat-learning-environment-artist-484823524-17849365239426418-6424053854920204834-n.jpg?1752075839",
        alt: "Alternate angle of brain jar scene",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/834/630/4k/shaurya-singh-gajawat-learning-environment-artist-482714530-17846578269426418-7002585884920958835-n.jpg?1752075995",
        alt: "Close-up of jar and supporting props",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "bag1",
    title: "Just a Bag - 1",
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
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/379/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-005.jpg?1750515413",
        alt: "Back view of backpack with straps",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/383/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-004.jpg?1750515418",
        alt: "Angle shot emphasizing form and silhouette",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/398/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-shaded-003.jpg?1750515443",
        alt: "Side view of backpack with pockets",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/491/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-47-50.jpg?1750515621",
        alt: "Backpack in-engine lighting test 1",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/486/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-41-49.jpg?1750515611",
        alt: "Backpack in-engine lighting test 2",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/490/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-46-56.jpg?1750515617",
        alt: "Backpack in-engine lighting test 3",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/447/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-56-46.jpg?1750515547",
        alt: "Backpack resting on ground, angled view",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/495/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-49-01.jpg?1750515628",
        alt: "Backpack close-up of decals and labels",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/533/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-decals-closeups-001.jpg?1750515717",
        alt: "Detail close-up of decals and surface details",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/416/4k/shaurya-singh-gajawat-learning-environment-artist-02.jpg?1750515475",
        alt: "Backpack presentation render 1",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/421/4k/shaurya-singh-gajawat-learning-environment-artist-01.jpg?1750515484",
        alt: "Backpack presentation render 2",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/273/507/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-21-51.jpg?1750515650",
        alt: "Backpack lighting exploration shot 1",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/510/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-22-51.jpg?1750515654",
        alt: "Backpack lighting exploration shot 2",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/273/514/4k/shaurya-singh-gajawat-learning-environment-artist-apr-27-2025-16-23-45.jpg?1750515659",
        alt: "Backpack lighting exploration shot 3",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "bag2",
    title: "Just a Bag - 2",
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
        src: "https://cdnb.artstation.com/p/assets/images/images/089/189/297/4k/shaurya-singh-gajawat-learning-environment-artist-shd-001.jpg?1750268935",
        alt: "Hero render of backpack prop",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/685/752/00002.mp4?autoplay=1&mute=1&loop=1",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/335/4k/shaurya-singh-gajawat-learning-environment-artist-004.jpg?1750270847",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/460/4k/shaurya-singh-gajawat-learning-environment-artist-untitled-1.jpg?1750271020",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/455/4k/shaurya-singh-gajawat-learning-environment-artist-003.jpg?1750271009",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/312/4k/shaurya-singh-gajawat-learning-environment-artist-002.jpg?1750270823",
        alt: "Hero render of backpack prop",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/685/798/2.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/497/4k/shaurya-singh-gajawat-learning-environment-artist-7.jpg?1750271070",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/485/4k/shaurya-singh-gajawat-learning-environment-artist-6.jpg?1750271058",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/503/4k/shaurya-singh-gajawat-learning-environment-artist-5.jpg?1750271085",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/518/4k/shaurya-singh-gajawat-learning-environment-artist-3.jpg?1750271104",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/509/4k/shaurya-singh-gajawat-learning-environment-artist-4.jpg?1750271094",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/528/4k/shaurya-singh-gajawat-learning-environment-artist-2.jpg?1750271116",
        alt: "Hero render of backpack prop",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/685/801/3.mp4",
        caption: "Bag Video"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/562/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-spec-001.jpg?1750271185",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/089/190/564/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-stitches-bump-002.jpg?1750271190",
        alt: "Hero render of backpack prop",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/089/190/567/4k/shaurya-singh-gajawat-learning-environment-artist-shauryagajawat-tex100-l10-backpack-polish-displacement-001.jpg?1750271193",
        alt: "Hero render of backpack prop",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
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
        alt: "Hero render of grass landscape",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/076/670/765/4k/shaurya-singh-gajawat-learning-environment-artist-disc-scale.jpg?1717514963",
        alt: "Alternate angle of grass environment",
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/076/670/807/4k/shaurya-singh-gajawat-learning-environment-artist-realize.jpg?1717515018",
        alt: "Alternate angle of grass environment",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/076/670/822/4k/shaurya-singh-gajawat-learning-environment-artist-variation-001.jpg?1717515032",
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/076/670/814/4k/shaurya-singh-gajawat-learning-environment-artist-uv-roughness-and-normal.jpg?1717515025",
      },
    ],
    description: [
      "Modular corridor environment designed for a third-person action game. Built using a trim-sheet workflow to keep the asset count low while still offering visual variety.",
      "Lighting focuses on readability and contrast between safe and dangerous areas, with subtle VFX to bring the scene to life.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Blocked out the entire corridor using simple primitives to define proportions and player navigation space.",
        "Created a single trim sheet and a small set of tiling materials to handle most surfaces.",
        "Set up baked plus dynamic lighting to balance performance and mood for gameplay.",
        "Iterated on fog, volumetrics and decals to keep the focal points strong and the space readable.",
      ],
    },
  },
  {
    slug: "donut",
    title: "Donut",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/083/773/766/4k/shaurya-singh-gajawat-learning-environment-artist-desktop-screenshot-2024-03-26-07-21-07-91.jpg?1736774234",
        alt: "Wide shot of clifftop shrine",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/377/173/20240326-111058.mp4",
        caption: "Bag Video"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "perspective1",
    title: "VOLCANOLAND PERSPECTIVE",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/076/696/517/4k/shaurya-singh-gajawat-learning-environment-artist-final-uplox-without-filtre.jpg?1717579338",
        alt: "Wide shot of clifftop shrine",
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/009/754/part1-split-video.mp4",
        caption: "Bag Video"
      },
      {
        type: "video",
        src: "https://cdn.artstation.com/p/video_sources/002/009/752/part2-split-video.mp4",
        caption: "Bag Video"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "remote",
    title: "A.C. Remote",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "embed",
        src: "https://sketchfab.com/models/1dfde889f2664a8a86b8634b908625fe/embed?ui_infos=0",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/model3ds/images/094/704/178/smaller_square/shaurya-singh-gajawat-learning-environment-art-d53daeab76e24c14ac80473b3f47f4de.jpg?1766155730",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      }
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "bloodborne",
    title: "Bloodborne",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "embed",
        src: "https://sketchfab.com/models/7f3290fb51a94d738a82e94c6bbe0293/embed?ui_infos=0",
        caption: "PS4 Bloodborne Cover — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "https://cdna.artstation.com/p/assets/images/images/079/285/916/4k/shaurya-singh-gajawat-learning-environment-artist-final-02.jpg?1724484652",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "https://cdnb.artstation.com/p/assets/images/images/079/285/985/4k/shaurya-singh-gajawat-learning-environment-artist-bb-uv-exported-min.jpg?1724484875",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "apple",
    title: "Apple",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "media/images/Apple Bited 04/4.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Apple Bited 04/3.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },

      {
        type: "image",
        src: "media/images/Apple Bited 04/5.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Apple Bited 04/Capture.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "jamie",
    title: "Jamie",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "media/images/Jamie/Inkedfinal 2.jpg",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Jamie/final 5.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },

      {
        type: "image",
        src: "media/images/Jamie/final 6.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Jamie/final 4.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Jamie/final 3.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/Jamie/final 7.png",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
  {
    slug: "got",
    title: "Game of Thrones Book",
    subtitle: "Hand-painted stylized shrine overlooking a dramatic sky.",
    role: "Environment Artist",
    engine: "Unreal Engine 5",
    software: "Blender · Hand-Painted Texturing",
    year: "2024",
    tags: ["Stylized", "Hand-Painted", "Composition"],
    media: [
      {
        type: "image",
        src: "media/images/GOT - Book/Viewport Cycle.jpg",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/GOT - Book/Evee_01.jpg",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },

      {
        type: "image",
        src: "media/images/GOT - Book/cYCLE_VIEWPORT_4.jpg",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
      {
        type: "image",
        src: "media/images/GOT - Book/cYCLE IEWPORT_03.jpg",
        caption: "Hitachi AC Remote — real-time 3D asset (Sketchfab)"
      },
    ],
    description: [
      "A stylized piece focused on clear shapes, strong silhouette and hand-painted materials.",
      "The shrine sits on a cliff edge, framed against the sky to create a clear focal point for the player.",
    ],
    breakdown: {
      title: "Breakdown",
      items: [
        "Started with strong blockout shapes to ensure a readable silhouette.",
        "Painted diffuse-only textures with baked lighting details for a painterly look.",
        "Used variation in ground values to guide the player toward the shrine.",
        "Kept geometry simple and let the texture work carry most of the detail.",
      ],
    },
  },
];

// ================= TOOL ICON MAP FOR PROJECT SIDEBAR =================
// NOTE: Replace these icon paths with your actual icon files.
const TOOL_ICON_MAP = {
  "Blender": {
    label: "Blender",
    src: "media/icons/blender.png",
  },
  "Substance 3D Painter": {
    label: "Substance 3D Painter",
    src: "media/icons/substance-painter.png",
  },
  "Substance 3D Designer": {
    label: "Substance 3D Designer",
    src: "media/icons/substance-designer.png",
  },
  "Designer": {
    label: "Substance 3D Designer",
    src: "media/icons/substance-designer.png",
  },
  "SpeedTree": {
    label: "SpeedTree",
    src: "media/icons/speedtree.png",
  },
  "Unreal Engine 5": {
    label: "Unreal Engine 5",
    src: "media/icons/unreal.png",
  },
  "Hand-Painted Texturing": {
    label: "Hand-Painted",
    src: "media/icons/handpainted.png",
  },
  Painter: {
    label: "Substance 3D Painter",
    src: "media/icons/substance-painter.png",
  },
};

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
  "sea",
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
const AUTOPLAY_DELAY = 4000;

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
    const show =
      filter === "all" || tags.includes(filter.toLowerCase());
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

// ================= SIDEBAR: MORE PROJECTS =================
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

// ================= SIDEBAR: SOFTWARE & TOOLS ICONS =================
function renderProjectTools(project) {
  const toolsContainer = document.getElementById("project-tools");
  if (!toolsContainer) return;

  toolsContainer.innerHTML = "";

  const rawSoftware = project.software || "";
  const softwareList = rawSoftware
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!softwareList.length) {
    toolsContainer.style.display = "none";
    return;
  }

  toolsContainer.style.display = "block";

  const heading = document.createElement("h3");
  heading.textContent = "Software & Tools";
  toolsContainer.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "tool-icon-grid";

  softwareList.forEach((name) => {
    const meta = TOOL_ICON_MAP[name] || {
      label: name,
      src: "media/icons/tool-placeholder.png",
    };

    const cell = document.createElement("div");
    cell.className = "project-tool-item";

    const iconWrapper = document.createElement("div");
    iconWrapper.className = "tool-icon-large";
    iconWrapper.setAttribute("title", meta.label || name);

    const img = document.createElement("img");
    img.src = meta.src;
    img.alt = meta.label || name;

    iconWrapper.appendChild(img);

    const labelSpan = document.createElement("span");
    labelSpan.className = "tool-icon-label";
    labelSpan.textContent = meta.label || name;

    cell.appendChild(iconWrapper);
    cell.appendChild(labelSpan);

    grid.appendChild(cell);
  });

  toolsContainer.appendChild(grid);
}

// ================= PROJECT PAGE RENDERING (ARTSTATION STYLE) =================
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

  document.title = `${project.title} — Shaurya Singh Gajawat`;

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

        mediaEl.autoplay = true;   // ✅ ADD
        mediaEl.muted = true;      // ✅ ADD (REQUIRED for autoplay)
        mediaEl.loop = true;       // ✅ ADD (optional but recommended)

        mediaEl.controls = true;
        mediaEl.playsInline = true;
        mediaEl.preload = "metadata";

      } else if (mediaItem.type === "embed") {
        mediaEl = document.createElement("iframe");
        mediaEl.src = mediaItem.src;
        mediaEl.loading = "lazy";
        mediaEl.allowFullscreen = true;
        mediaEl.referrerPolicy = "no-referrer";
        mediaEl.style.width = "100%";
        mediaEl.style.aspectRatio = "16 / 9";
        mediaEl.style.border = "0";

        // IMPORTANT: embeds should NOT open lightbox
        frame.disabled = true;
        frame.style.cursor = "default";

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

  // render side boxes
  renderProjectTools(project);
  renderSidebarMoreProjects(project.slug);

  setupLightbox();
}

// ================= LIGHTBOX + ZOOM LOGIC =================
function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".lightbox-close");
  const zoomButtons = document.querySelectorAll(".lightbox-zoom-btn");

  if (!lightbox || !lightboxImg || !lightboxVideo || !closeBtn) return;

  let currentZoom = 1;
  let currentMediaType = "image";
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.25;

  function applyZoom() {
    if (currentMediaType !== "image") return;

    const target = lightboxImg;
    if (!target) return;

    target.style.transform = `scale(${currentZoom})`;
  }

  function resetZoom() {
    currentZoom = 1;
    if (lightboxImg) {
      lightboxImg.style.transform = "scale(1)";
    }
  }

  function openLightbox(type, src, altText) {
    if (!src) return;

    currentMediaType = type || "image";
    resetZoom();

    if (currentMediaType === "video") {
      lightbox.classList.add("lightbox-video-mode");
      lightboxImg.style.display = "none";
      lightboxImg.src = "";
      lightboxImg.alt = "";

      lightboxVideo.style.display = "block";
      lightboxVideo.src = src;
      lightboxVideo
        .play()
        .catch(() => {
          /* ignore */
        });
    } else {
      lightbox.classList.remove("lightbox-video-mode");
      lightboxVideo.pause();
      lightboxVideo.style.display = "none";
      lightboxVideo.src = "";

      lightboxImg.style.display = "block";
      lightboxImg.src = src;
      lightboxImg.alt = altText || "";
      applyZoom();
    }

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxVideo.pause();
    lightboxVideo.src = "";
    lightboxImg.src = "";
    resetZoom();
  }

  // Zoom button interactions
  zoomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (currentMediaType !== "image") return;

      const action = btn.dataset.zoom;
      if (action === "in") {
        currentZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);
      } else if (action === "out") {
        currentZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);
      } else if (action === "reset") {
        currentZoom = 1;
      }
      applyZoom();
    });
  });

  // Double-click on image to toggle zoom 1x <-> 2x
  lightboxImg.addEventListener("dblclick", () => {
    if (currentMediaType !== "image") return;
    currentZoom = currentZoom === 1 ? 2 : 1;
    applyZoom();
  });

  const frames = document.querySelectorAll(".project-media-frame");
  frames.forEach((frame) => {
    frame.addEventListener("click", () => {
      const type = frame.dataset.type || "image";

      // ❌ Do nothing for embeds
      if (type === "embed") return;

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
        content.dataset.skillContent === target,
      );
    });
  });
});

// ================= FOOTER YEAR =================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ================= CONTACT FORM (EMAILJS) =================
const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");
const contactSubmit = document.getElementById("contact-submit");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!window.emailjs) {
      if (contactStatus) {
        contactStatus.textContent =
          "Contact service is unavailable right now. Please try again later.";
      }
      console.warn(
        "EmailJS SDK not loaded – check the script tag in index.html.",
      );
      return;
    }

    if (contactStatus) {
      contactStatus.textContent = "Sending your message...";
    }
    if (contactSubmit) {
      contactSubmit.disabled = true;
    }

    emailjs
      .sendForm(
        "service_58hij15", // your SERVICE ID
        "template_3k60zer", // your TEMPLATE ID
        contactForm,
      )
      .then(() => {
        if (contactStatus) {
          contactStatus.textContent =
            "Message sent! I'll get back to you soon.";
        }
        contactForm.reset();
        if (contactSubmit) {
          contactSubmit.disabled = false;
        }
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        if (contactStatus) {
          contactStatus.textContent =
            "Something went wrong while sending. Please try again in a moment.";
        }
        if (contactSubmit) {
          contactSubmit.disabled = false;
        }
      });
  });
}

// ================= GLOBAL BACKGROUND MUSIC =================
window.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bg-music");
  const TIME_KEY = "bgm-time";
  if (!bgMusic) return;

  const MUSIC_KEY = "bgm-enabled";
  const TARGET_VOLUME = 0.25;
  bgMusic.volume = TARGET_VOLUME;

  // ▶️ Restore saved playback time (if any)
  const savedTime = sessionStorage.getItem(TIME_KEY);
  if (savedTime) {
    bgMusic.currentTime = parseFloat(savedTime);
  }

  // Always start muted (browser-safe)
  bgMusic.muted = true;

  const tryPlay = () => {
    bgMusic.play().catch(() => {
      setTimeout(() => {
        bgMusic.play().catch(() => { });
      }, 500);
    });
  };

  // 🔹 Attempt autoplay on fresh load
  setTimeout(tryPlay, 800);

  // 🔓 Unlock sound on first user interaction
  const unlock = () => {
    bgMusic.muted = false;
    localStorage.setItem(MUSIC_KEY, "true");
    bgMusic.play().catch(() => { });
    document.removeEventListener("pointerdown", unlock);
  };
  document.addEventListener("pointerdown", unlock);

  // 🔁 Resume if previously enabled
  if (localStorage.getItem(MUSIC_KEY) === "true") {
    bgMusic.muted = false;
    setTimeout(tryPlay, 300);
  }

  // 💾 Continuously save playback position
  setInterval(() => {
    if (!bgMusic.paused) {
      sessionStorage.setItem(TIME_KEY, bgMusic.currentTime);
    }
  }, 500);

  // ================= FADE HELPERS =================
  const FADE_DURATION = 600;
  let fadeInterval = null;

  const fadeOutMusic = () => {
    clearInterval(fadeInterval);
    const step = bgMusic.volume / (FADE_DURATION / 50);

    fadeInterval = setInterval(() => {
      if (bgMusic.volume > step) {
        bgMusic.volume -= step;
      } else {
        bgMusic.volume = 0;
        bgMusic.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  };

  const fadeInMusic = () => {
    clearInterval(fadeInterval);
    bgMusic.volume = 0;
    bgMusic.play().catch(() => { });

    const step = TARGET_VOLUME / (FADE_DURATION / 50);

    fadeInterval = setInterval(() => {
      if (bgMusic.volume < TARGET_VOLUME - step) {
        bgMusic.volume += step;
      } else {
        bgMusic.volume = TARGET_VOLUME;
        clearInterval(fadeInterval);
      }
    }, 50);
  };

  // ================= VIDEO AWARENESS =================
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("play", () => {
      if (!bgMusic.paused) fadeOutMusic();
    });

    video.addEventListener("pause", () => {
      if (localStorage.getItem(MUSIC_KEY) === "true") {
        fadeInMusic();
      }
    });

    video.addEventListener("ended", () => {
      if (localStorage.getItem(MUSIC_KEY) === "true") {
        fadeInMusic();
      }
    });
  });
});

// ================= BACK / FORWARD CACHE FIX =================
window.addEventListener("pageshow", () => {
  const bgMusic = document.getElementById("bg-music");
  const TIME_KEY = "bgm-time";
  if (!bgMusic) return;

  const savedTime = sessionStorage.getItem(TIME_KEY);
  if (savedTime) {
    bgMusic.currentTime = parseFloat(savedTime);
  }

  if (localStorage.getItem("bgm-enabled") === "true") {
    bgMusic.muted = false;
    bgMusic.play().catch(() => { });
  }
});
